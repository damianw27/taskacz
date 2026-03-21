import Neu from '@neutralinojs/lib';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app';
import { initI18n } from '@/i18n/setup-i18n';
import { neutralinoAppSettingsService } from '@/platforms/desktop/services/app-settings-service';
import { neutralinoProjectService } from '@/platforms/desktop/services/project-service';
import { neutralinoTaskService } from '@/platforms/desktop/services/task-service';
import { setApi } from '@/states/api';

Neu.init();

setApi({
  taskService: neutralinoTaskService,
  projectService: neutralinoProjectService,
  appSettingsService: neutralinoAppSettingsService,
});

const bootstrap = async (): Promise<void> => {
  try {
    await initI18n();
  } catch (error: unknown) {
    console.error('i18n initialization failed:', error);
  }

  createRoot(document.body).render(
    <StrictMode>
      <App isDesktop={true} />
    </StrictMode>,
  );
};

void bootstrap();
