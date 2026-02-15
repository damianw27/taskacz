import '@/styles/fonts';
import { type FC, memo } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { GuideOverlay } from '@/components/guide-overlay';
import { LanguageModal } from '@/components/language-modal';
import { ThemeProvider } from '@/modules/theme/providers/theme-provider';
import { AppRoutes } from '@/routes';

interface Props {
  readonly isDesktop: boolean;
}

export const App: FC<Props> = memo(() => (
  <MemoryRouter>
    <ThemeProvider>
      <LanguageModal />
      <AppRoutes />
      <GuideOverlay />
    </ThemeProvider>
  </MemoryRouter>
));

App.displayName = 'App';
