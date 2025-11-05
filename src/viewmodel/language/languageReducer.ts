// src/viewmodel/language/languageReducer.ts
import { CHANGE_LANGUAGE, LANGUAGE_UPDATED } from './languageActions';

export interface LanguageState {
  language: string;
  languageUpdated: boolean;
}

export const languageReducer = (state: LanguageState, action: any) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case LANGUAGE_UPDATED:
      return {
        ...state,
        languageUpdated: action.payload,
      };
    default:
      return state;
  }
};
