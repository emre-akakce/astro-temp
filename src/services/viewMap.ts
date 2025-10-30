import React, { lazy, type ComponentType, type LazyExoticComponent } from "react";

const LocalFallback: React.FC = () => null;

type Key = `${string}|${string}`;
const cache = new Map<Key, LazyExoticComponent<ComponentType<any>>>();

// Index every potential view file so it's included in the build output.
// Adjust the glob to match your actual folder/file naming.
const modules = import.meta.glob("../view/**/**/*.{tsx,jsx,ts,js}");

// Try common extensions in priority order
const exts = [".tsx", ".jsx", ".ts", ".js"];

function resolvePath(viewFolder: string, componentName: string) {
  for (const ext of exts) {
    const candidate = `../view/${viewFolder}/${componentName}${ext}`;
    if (candidate in modules) return candidate;
  }
  return undefined;
}

/**
 * Returns a stable LazyExoticComponent for (viewFolder, languagePrefix).
 * Uses Vite's module index so the chunks are discoverable at build time.
 */
export function viewMap(viewFolder: string, languagePrefix = "") {
  const suffix =
    languagePrefix ? languagePrefix[0].toUpperCase() + languagePrefix.slice(1) : "";
  const componentName = `${viewFolder}${suffix}`;
  const key: Key = `${viewFolder}|${languagePrefix}`;

  let Comp = cache.get(key);
  if (!Comp) {
    const path = resolvePath(viewFolder, componentName);
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
