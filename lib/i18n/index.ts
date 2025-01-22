import { resources } from "@/locales";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const initI18n = async () => {
  let savedLanguage = (await AsyncStorage.getItem("language")) || undefined;

  if (!savedLanguage) {
    savedLanguage = Localization.getLocales()[0]?.languageTag;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    lng: savedLanguage,
    fallbackLng: "es-ES",
    interpolation: { escapeValue: false },
  });
};

initI18n();

export default i18n;
