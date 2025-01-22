import enUS from "./en-US/translation.json" with { type: "json" };
import esES from "./es-ES/translation.json" with { type: "json" };

export const resources = {
  "es-ES": { translation: esES },
  "en-US": { translation: enUS },
};

export type TranslationKeys = keyof typeof enUS;
export type Translation = typeof enUS;
