import { filesystem } from '@neutralinojs/lib';
import type { ProjectService } from '@/modules/api/types/project-service';
import type { Project } from '@/types/project';

const projectsFilePath = './projects.json';

export const neutralinoProjectService: ProjectService = {
  loadProjects: async (): Promise<Project[]> => {
    try {
      const fileContent = await filesystem.readFile(projectsFilePath);
      return JSON.parse(fileContent) as Project[];
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Unable to read file: ${errorMessage}`, error);
      await filesystem.writeFile(projectsFilePath, '[]');
      return [];
    }
  },

  saveProjects: async (projects: Project[]): Promise<void> => {
    try {
      await filesystem.writeFile(projectsFilePath, JSON.stringify(projects));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Unable to save '${projectsFilePath}': ${errorMessage}`, error);
    }
  },
};
