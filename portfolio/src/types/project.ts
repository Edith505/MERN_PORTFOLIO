export type ProjectCategory =
  | 'Networking'
  | 'Systems'
  | 'Cloud'
  | 'DevOps'
  | 'Development'

export type ProjectStatus =
  | 'In Progress'
  | 'Completed'
  | 'Archived'

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  id: string
  slug: string
  title: string
  summary: string
  description: string
  category: ProjectCategory
  technologies: string[]
  date: string
  status: ProjectStatus
  featured: boolean

  image?: ProjectImage
  diagram?: ProjectImage
  screenshots?: ProjectImage[]

  githubUrl?: string
  demoUrl?: string
  videoUrl?: string

  objectives?: string[]
  architecture?: string
  implementation?: string
  security?: string
  testing?: string
  challenges?: string[]
  troubleshooting?: string[]
  results?: string[]
  lessonsLearned?: string[]
}