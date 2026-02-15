import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  be, bg, bs, cs, da, de, en, es, et, fr,
  hi, hr, hu, it, ja, ko, lt, lv, mk, no,
  pl, ru, sk, sl, sr, sv, uk, zhCN, zhTW,
} from '@/i18n/locales';
import { getApi } from '@/states/api';

let isI18nInitialized = false;

export const initI18n = async (): Promise<void> => {
  if (isI18nInitialized) {
    return;
  }

  const { appSettingsService } = getApi();
  const savedLanguage = (await appSettingsService.getSettings()).language ?? 'en';

  await i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
      es: { translation: es },
      it: { translation: it },
      ru: { translation: ru },
      pl: { translation: pl },
      cs: { translation: cs },
      sk: { translation: sk },
      uk: { translation: uk },
      bg: { translation: bg },
      sr: { translation: sr },
      hr: { translation: hr },
      sl: { translation: sl },
      mk: { translation: mk },
      bs: { translation: bs },
      be: { translation: be },
      ko: { translation: ko },
      ja: { translation: ja },
      lt: { translation: lt },
      lv: { translation: lv },
      et: { translation: et },
      hu: { translation: hu },
      sv: { translation: sv },
      no: { translation: no },
      da: { translation: da },
      'zh-CN': { translation: zhCN },
      'zh-TW': { translation: zhTW },
      hi: { translation: hi },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  isI18nInitialized = true;
};
