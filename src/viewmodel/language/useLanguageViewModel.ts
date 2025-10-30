// src/viewmodel/language/useLanguageViewModel.ts
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { setLanguage } from './languageActions';
import { viewMap } from 'src/services/viewMap';

export const useLanguageViewModel = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageViewModel must be used within a LanguageProvider');
  }

  const { state, dispatch } = context;

  const getView = () => {
    const view = viewMap[state.language] || viewMap['generic'];
    return view;
  }

  return {
    language: state.language,
    getView,
    setLanguage: (language: string) => dispatch(setLanguage(language)),
  };
};
