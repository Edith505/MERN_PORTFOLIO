import { describe, expect, it } from 'vitest'
import {
  getProjectBySlug,
  getProjects,
} from './projectService'

describe('Project service', () => {
  it('returns undefined for an empty slug', () => {
    expect(getProjectBySlug('')).toBeUndefined()
  })

  it('returns undefined for an unknown slug', () => {
    const existingSlugs = new Set(
      getProjects().map((project) => project.slug),
    )

    let unknownSlug = 'unknown-project'

    while (existingSlugs.has(unknownSlug)) {
      unknownSlug += '-missing'
    }

    expect(getProjectBySlug(unknownSlug)).toBeUndefined()
  })

  it('requires unique and non-empty project IDs', () => {
    const ids = getProjects().map((project) => project.id)

    for (const id of ids) {
      expect(id.trim()).not.toBe('')
    }

    expect(new Set(ids).size).toBe(ids.length)
  })

  it('requires unique URL-friendly slugs', () => {
    const slugs = getProjects().map((project) => project.slug)

    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    }

    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('finds every published project by its slug', () => {
    for (const project of getProjects()) {
      expect(getProjectBySlug(project.slug)).toEqual(project)
    }
  })
})