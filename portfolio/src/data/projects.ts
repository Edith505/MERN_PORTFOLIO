import type { Project, ProjectCategory } from '../types/project'

export const projects: readonly Project[] = []

interface ProjectPlaceholder {
  id: string
  category: ProjectCategory
  title: string
}

export const projectPlaceholders: readonly ProjectPlaceholder[] = [
  {
    id: 'networking-placeholder',
    category: 'Networking',
    title: 'Network infrastructure',
  },
  {
    id: 'cloud-placeholder',
    category: 'Cloud',
    title: 'Cloud infrastructure',
  },
  {
    id: 'development-placeholder',
    category: 'Development',
    title: 'Software development',
  },
]