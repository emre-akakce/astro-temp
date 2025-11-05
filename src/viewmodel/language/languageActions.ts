// src/viewmodel/language/languageActions.ts
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setLanguage = (language: string) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const LANGUAGE_UPDATED = 'LANGUAGE_UPDATED';

export const setLanguageUpdated = (updated: boolean) => ({
  type: LANGUAGE_UPDATED,
  payload: updated,
});
