// viewLoader.ts
import React, { lazy, type ComponentType, type LazyExoticComponent } from "react";

const LocalFallback: React.FC = () => null;

type Key = `${string}|${string}`;
const cache = new Map<Key, LazyExoticComponent<ComponentType<any>>>();

// Include up to three nested levels under ../view/
// Adjust if your depth differs.
const modules = import.meta.glob("../view/**/**/**/*.{tsx,jsx,ts,js}");

const exts = [".tsx", ".jsx", ".ts", ".js"];

function resolvePath(viewFolder: string, languagePrefix = ""): string | undefined {
  const lang = (languagePrefix || "").toLowerCase();

  // Candidates (highest → lowest priority)
  const candidates: string[] = [];

  if (lang) {
    // New structure: ../view/<viewFolder>/<lang>/<viewFolder>.tsx
    for (const ext of exts) {
      candidates.push(`../view/${viewFolder}/${lang}/${viewFolder}${ext}`);
    }
    // Allow index files too: ../view/<viewFolder>/<lang>/index.tsx
    for (const ext of exts) {
      candidates.push(`../view/${viewFolder}/${lang}/index${ext}`);
    }
  }

  // Generic language fallback (if you keep a generic/ folder)
  for (const ext of exts) {
    candidates.push(`../view/${viewFolder}/generic/${viewFolder}${ext}`);
  }
  for (const ext of exts) {
    candidates.push(`../view/${viewFolder}/generic/index${ext}`);
  }

  // Backward compatibility with old pattern: ../view/<viewFolder>/<viewFolder[LangCap]>.tsx
  // e.g., View + "Tr" → ViewTr.tsx
  if (lang) {
    const suffix = lang.charAt(0).toUpperCase() + lang.slice(1);
    for (const ext of exts) {
      candidates.push(`../view/${viewFolder}/${viewFolder}${suffix}${ext}`);
    }
  }

  // As a last resort, allow ../view/<viewFolder>/<viewFolder>.tsx or index.tsx
  for (const ext of exts) {
    candidates.push(`../view/${viewFolder}/${viewFolder}${ext}`);
  }
  for (const ext of exts) {
    candidates.push(`../view/${viewFolder}/index${ext}`);
  }

  // Pick the first candidate that exists in the build index.
  for (const c of candidates) {
    if (c in modules) return c;
  }
  return undefined;
}

/**
 * Returns a stable LazyExoticComponent for (viewFolder, languagePrefix).
 * Supports folder layout: ../view/<viewFolder>/<languagePrefix>/<viewFolder>.tsx
 */
export function viewMap(viewFolder: string, languagePrefix = "") {
  const lang = (languagePrefix || "").toLowerCase();
  const key: Key = `${viewFolder}|${lang}`;

  let Comp = cache.get(key);
  if (!Comp) {
    const path = resolvePath(viewFolder, lang);
    const loader = path ? (modules as Record<string, () => Promise<any>>)[path] : null;

    Comp = lazy(() =>
      (loader ? loader() : Promise.resolve({ default: LocalFallback })).then((m) => ({
        default: (m as any).default ?? LocalFallback,
      }))
    );

    cache.set(key, Comp);
  }
  return Comp;
}
