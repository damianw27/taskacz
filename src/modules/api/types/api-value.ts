import type { AppSettingsService } from '@/modules/api/types/app-settings-service';
import type { TaskService } from '@/modules/api/types/task-service';

export interface ApiValue {
  taskService: TaskService;
  appSettingsService: AppSettingsService;
}
