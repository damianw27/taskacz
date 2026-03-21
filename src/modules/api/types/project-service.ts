import type { Project } from '@/types/project';

export interface ProjectService {
  readonly loadProjects: () => Promise<Project[]>;
  readonly saveProjects: (projects: Project[]) => Promise<void>;
}
