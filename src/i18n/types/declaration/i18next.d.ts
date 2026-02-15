import 'i18next';
import type { Namespace } from '@/i18n/types/namespace';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: Namespace;
    };
  }
}
