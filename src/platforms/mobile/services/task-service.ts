import { Preferences } from '@capacitor/preferences';
import type { TaskService } from '@/modules/api/types/task-service';
import type { Task } from '@/types/task';

const TasksStorageKey = 'taskacz_tasks';

export const capacitorTaskService: TaskService = {
  loadTasks: async (): Promise<Task[]> => {
    try {
      const { value } = await Preferences.get({ key: TasksStorageKey });
      if (!value) {
        return [];
      }
      return JSON.parse(value) as Task[];
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Unable to load tasks: ${errorMessage}`, error);
      return [];
    }
  },

  saveTasks: async (tasks: Task[]): Promise<void> => {
    try {
      const tasksJson = JSON.stringify(tasks);
      await Preferences.set({ key: TasksStorageKey, value: tasksJson });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Unable to save tasks: ${errorMessage}`, error);
    }
  },
};
