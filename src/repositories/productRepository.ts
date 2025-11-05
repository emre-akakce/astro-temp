// src/repositories/productRepository.ts
import { translations } from 'src/data/localization';
import type { Product } from '../model/product';

export const allProducts = (lang = 'en'): Product[] => {  
  return [
    { id: '1', name: translations[lang].laptop, category: translations[lang].electronics },
    { id: '2', name: translations[lang].mouse, category: translations[lang].electronics },
    { id: '3', name: translations[lang].keyboard, category: translations[lang].electronics },
    { id: '4', name: translations[lang].desk, category: translations[lang].furniture },
    { id: '5', name: translations[lang].chair, category: translations[lang].furniture },
    { id: '6', name: translations[lang].monitor, category: translations[lang].electronics },
    { id: '7', name: translations[lang].lamp, category: translations[lang].furniture },
  ];
}

export const getProducts = async (filterValue: string, lang = 'en'): Promise<Product[]> => {    
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!filterValue || filterValue === 'all') {
        resolve(allProducts(lang));
      } else {
        const lowerCaseFilter = filterValue.toLowerCase();
        resolve(allProducts(lang).filter(product =>
          product.category.toLowerCase().includes(lowerCaseFilter)
        ));
      }
    }, 700); // Simulate API delay
  });
};

