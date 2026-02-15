import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app';
import { initI18n } from '@/i18n/setup-i18n';
import { capacitorAppSettingsService } from '@/platforms/mobile/services/app-settings-service';
import { capacitorTaskService } from '@/platforms/mobile/services/task-service';
import { setApi } from '@/states/api';

setApi({
  taskService: capacitorTaskService,
  appSettingsService: capacitorAppSettingsService,
});

const bootstrap = async (): Promise<void> => {
  try {
    await initI18n();
  } catch (error: unknown) {
    console.error('i18n initialization failed:', error);
  }

  createRoot(document.body).render(
    <StrictMode>
      <App isDesktop={false} />
    </StrictMode>,
  );
};

void bootstrap();
