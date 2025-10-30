import React, { lazy, type ComponentType, type LazyExoticComponent } from "react";

const LocalFallback: React.FC = () => null;

type Key = `${string}|${string}`;
const cache = new Map<Key, LazyExoticComponent<ComponentType<any>>>();

/**
 * Returns a stable LazyExoticComponent for (viewFolder, languagePrefix).
 * The first call creates and caches it; subsequent calls reuse it.
 */
export function viewMap(viewFolder: string, languagePrefix = "") {
  const suffix =
    languagePrefix ? languagePrefix[0].toUpperCase() + languagePrefix.slice(1) : "";
  const componentName = `${viewFolder}${suffix}`;
  const key: Key = `${viewFolder}|${languagePrefix}`;

  let Comp = cache.get(key);
  if (!Comp) {
    Comp = lazy(async () => {
      try {
        // Note: @vite-ignore keeps Vite from trying to statically analyze the path.
        const mod = await import(
          /* @vite-ignore */ `../view/${viewFolder}/${componentName}`
        );
        return { default: (mod as any).default ?? LocalFallback };
      } catch {
        return { default: LocalFallback };
      }
    });
    cache.set(key, Comp);
  }
  return Comp;
}
