import { create } from 'zustand';
import type { Project } from '@/types/project';

interface ProjectsState {
  readonly projects: Project[];
  readonly isLoaded: boolean;
}

interface ProjectsStore extends ProjectsState {
  readonly setProjects: (projects: Project[]) => void;
  readonly addProject: (project: Project) => void;
  readonly removeProject: (id: number) => void;
  readonly updateProject: (project: Project) => void;
}

export const useProjects = create<ProjectsStore>(set => ({
  projects: [],
  isLoaded: false,
  setProjects: (projects: Project[]) => set(() => ({ projects, isLoaded: true })),
  addProject: (project: Project) => set(state => ({ projects: [...state.projects, project] })),
  removeProject: (id: number) =>
    set(state => ({ projects: state.projects.filter(p => p.id !== id) })),
  updateProject: (project: Project) =>
    set(state => ({
      projects: state.projects.map(p => (p.id === project.id ? project : p)),
    })),
}));
