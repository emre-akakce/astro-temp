// src/viewmodel/language/LanguageContext.tsx
import React, { createContext, useReducer,type ReactNode } from 'react';
import { languageReducer } from './languageReducer';
import type { LanguageState } from './languageReducer';

interface LanguageContextProps {
  state: LanguageState;
  dispatch: React.Dispatch<any>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode; initialState?: LanguageState }> = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState || { language: 'en' });

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};
