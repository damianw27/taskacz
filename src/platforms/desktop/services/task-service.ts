import { filesystem } from '@neutralinojs/lib';
import type { TaskService } from '@/modules/api/types/task-service';
import type { Task } from '@/types/task';

const tasksFilePath = './tasks.json';

export const neutralinoTaskService: TaskService = {
  loadTasks: async (): Promise<Task[]> => {
    try {
      const tasksFileContent = await filesystem.readFile(tasksFilePath);
      return JSON.parse(tasksFileContent) as Task[];
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Unable to read file: ${errorMessage}`, error);
      await filesystem.writeFile(tasksFilePath, '[]');
      return [];
    }
  },

  saveTasks: async (tasks: Task[]): Promise<void> => {
    try {
      const tasksJson = JSON.stringify(tasks);
      await filesystem.writeFile(tasksFilePath, tasksJson);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Unable to save '${tasksFilePath}': ${errorMessage}`, error);
    }
  },
};
