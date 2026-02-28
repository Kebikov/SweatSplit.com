export const LANGUAGE_APP = ['en', 'ru', 'pl'] as const;

export type TLanguage = typeof LANGUAGE_APP[number];