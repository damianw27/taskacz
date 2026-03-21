import { Preferences } from '@capacitor/preferences';
import type { ProjectService } from '@/modules/api/types/project-service';
import type { Project } from '@/types/project';

const ProjectsStorageKey = 'taskacz_projects';

export const capacitorProjectService: ProjectService = {
  loadProjects: async (): Promise<Project[]> => {
    try {
      const { value } = await Preferences.get({ key: ProjectsStorageKey });
      if (!value) return [];
      return JSON.parse(value) as Project[];
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Unable to load projects: ${errorMessage}`, error);
      return [];
    }
  },

  saveProjects: async (projects: Project[]): Promise<void> => {
    try {
      await Preferences.set({ key: ProjectsStorageKey, value: JSON.stringify(projects) });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Unable to save projects: ${errorMessage}`, error);
    }
  },
};
