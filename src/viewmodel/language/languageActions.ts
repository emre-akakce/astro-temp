// src/viewmodel/language/languageActions.ts
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const setLanguage = (language: string) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});

export const LANGUAGE_UPDATED = 'LANGUAGE_UPDATED';

export const setLanguageUpdated = (updated: boolean) => ({
  type: LANGUAGE_UPDATED,
  payload: updated,
});
