import type { AppSettingsService } from '@/modules/api/types/app-settings-service';
import type { ProjectService } from '@/modules/api/types/project-service';
import type { TaskService } from '@/modules/api/types/task-service';

export interface ApiValue {
  taskService: TaskService;
  projectService: ProjectService;
  appSettingsService: AppSettingsService;
}
