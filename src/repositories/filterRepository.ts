// src/repositories/filterRepository.ts
import { translations } from 'src/data/localization';
import type { Filter } from '../model/filter';

export const allFilters = (lang = 'en'): Filter[] => {
  return [
    { id: 'all', name: translations[lang].all, value: translations[lang].all },
    { id: 'electronics', name: translations[lang].electronics, value: translations[lang].electronics },
    { id: 'furniture', name: translations[lang].furniture, value: translations[lang].furniture },
  ];
}

export const getFilters = async (lang = 'en'): Promise<Filter[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allFilters(lang));
    }, 500); // Simulate API delay
  });
};

