import type { NuxtI18nOptions } from "@nuxtjs/i18n";
import en from "~/locales/en.json";
import kh from "~/locales/kh.json";

const i18n: NuxtI18nOptions<unknown> | undefined = {
  locales: [
    { text: "English", code: "en", iso: "en", file: "en.json" },
    { text: "ខ្មែរ", code: "kh", iso: "kh", file: "kh.json" },
  ],
  lazy: true,
  langDir: "locales",
  defaultLocale: "kh",
  strategy: "no_prefix",
  vueI18n: () => ({
    fallbackLocale: "kh",
    messages: {
      en,
      kh,
    },
  }),
};

export default i18n;
