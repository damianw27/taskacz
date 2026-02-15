import type { Task } from '@/types/task';

export interface TaskService {
  readonly loadTasks: () => Promise<Task[]>;
  readonly saveTasks: (tasks: Task[]) => Promise<void>;
}
