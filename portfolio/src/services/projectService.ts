import { projects } from '../data/projects'
import type { Project } from '../types/project'

export function getProjects(): readonly Project[] {
  return projects
}

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find((project) => project.slug === slug)
}