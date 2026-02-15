import { useTranslation } from 'react-i18next';
import type { NamespaceKey } from '@/i18n/types/namespace';

type RawT = (key: string, options?: Record<string, string | number>) => string;

export const useLocale = () => {
  const { t, ...rest } = useTranslation();

  return {
    ...rest,
    t: (key: NamespaceKey, options?: Record<string, string | number>): string =>
      (t as unknown as RawT)(key, options),
  };
};
