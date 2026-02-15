import { create } from 'zustand';
import type { Task } from '@/types/task';

interface TasksState {
  readonly tasks: Task[];
}

interface TasksStore extends TasksState {
  readonly setTasks: (tasks: Task[]) => void;
  readonly addTask: (task: Task) => void;
  readonly removeTask: (id: number) => void;
  readonly updateTask: (task: Task) => void;
  readonly reorderTasks: (activeId: number, overId: number) => void;
}

export const useTasks = create<TasksStore>(set => ({
  tasks: [],
  setTasks: (tasks: Task[]) => set(() => ({ tasks })),
  addTask: (task: Task) => set(state => ({ tasks: [...state.tasks, task] })),
  removeTask: (id: number) => set(state => ({ tasks: state.tasks.filter(task => task.id !== id) })),
  updateTask: (task: Task) =>
    set(state => ({ tasks: state.tasks.map(oldTask => (oldTask.id === task.id ? task : oldTask)) })),
  reorderTasks: (activeId: number, overId: number) =>
    set(state => {
      const oldIndex = state.tasks.findIndex(t => t.id === activeId);
      const newIndex = state.tasks.findIndex(t => t.id === overId);
      if (oldIndex === -1 || newIndex === -1) return state;
      const newTasks = [...state.tasks];
      const removed = newTasks.splice(oldIndex, 1)[0];
      if (!removed) return state;
      newTasks.splice(newIndex, 0, removed);
      return { tasks: newTasks };
    }),
}));
