// src/viewmodel/language/useLanguageViewModel.ts
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { setLanguage } from './languageActions';

export const useLanguageViewModel = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageViewModel must be used within a LanguageProvider');
  }

  const { state, dispatch } = context;

  return {
    language: state.language,
    setLanguage: (language: string) => dispatch(setLanguage(language)),
  };
};
