// src/viewmodel/language/languageReducer.ts
import { SET_LANGUAGE } from './languageActions';

export interface LanguageState {
  language: string;
}

export const languageReducer = (state: LanguageState, action: any) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
