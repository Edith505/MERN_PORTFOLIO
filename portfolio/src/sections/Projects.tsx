import { Link } from 'react-router'
import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projectPlaceholders } from '../data/projects'
import { getProjects } from '../services/projectService'
import styles from './Projects.module.css'

function Projects() {
  const projects = getProjects()
  const hasProjects = projects.length > 0
  const track = useRef<HTMLDivElement>(null)
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const source = hasProjects ? projects : projectPlaceholders
  const categories = ['All', ...new Set(source.map((item) => item.category))]
  const matches = (item: { category: string; title: string; summary: string; technologies: string[] }) =>
    (category === 'All' || item.category === category) &&
    [item.title, item.summary, ...item.technologies].join(' ').toLowerCase().includes(query.trim().toLowerCase())
  const resultCount = source.filter(matches).length

  function resetPosition() {
    track.current?.scrollTo({ left: 0, behavior: 'instant' })
  }

  function clearFilters() {
    setCategory('All')
    setQuery('')
    resetPosition()
  }

  function scrollProjects(direction: number) {
    const list = track.current
    if (!list) return
    list.scrollBy({
      left: direction * list.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  return (
    <section
      id="projects"
      className={styles.section}
      aria-labelledby="projects-title"
    >
      <p className={styles.eyebrow}>Selected projects</p>

      <h2 id="projects-title" className={styles.title}>
        My Latest Works<span>.</span>
      </h2>

      <p className={styles.introduction}>
        {hasProjects
          ? 'A selection of networking, systems, cloud and software projects.'
          : 'Projects in preparation. Technical documentation will be published progressively.'}
      </p>

      <div className={styles.toolbar}>
        <div className={styles.filters} role="group" aria-label="Filter projects by category">
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item}
              onClick={() => { setCategory(item); resetPosition() }}>
              {item}
            </button>
          ))}
        </div>
        <label className={styles.search}>
          <span>Search projects</span>
          <input type="search" value={query} placeholder="Title or technology…"
            onChange={(event) => { setQuery(event.target.value); resetPosition() }} />
        </label>
      </div>
      <p className={styles.help} role="status" aria-live="polite" aria-atomic="true">
        {resultCount} {resultCount === 1 ? 'project' : 'projects'} found
      </p>
      {(query || category !== 'All') && <button type="button" className={styles.clear} onClick={clearFilters}>Clear filters</button>}
      {resultCount === 0 && <p className={styles.empty}>No matching projects. Try another category or technology.</p>}

      <p id="projects-help" className={styles.help}>
        Scroll horizontally to explore. Keyboard users can focus
        the project list and use the arrow keys.
      </p>

      <div className={styles.controls} hidden={resultCount === 0}>
        <button type="button" aria-label="Previous projects" aria-controls="project-list" onClick={() => scrollProjects(-1)}><ArrowLeft size={20} aria-hidden="true" /></button>
        <button type="button" aria-label="Next projects" aria-controls="project-list" onClick={() => scrollProjects(1)}><ArrowRight size={20} aria-hidden="true" /></button>
      </div>

      <div
        ref={track}
        id="project-list"
        className={styles.track}
        role="region"
        aria-label="Project list"
        aria-describedby="projects-help"
        tabIndex={0}
      >
        {hasProjects
          ? projects.filter(matches).map((project) => (
              <article key={project.id} className={styles.card}>
                <div className={styles.visual}>
                  {project.image ? (
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className={styles.visualLabel}>
                      {project.category}
                    </span>
                  )}
                  <span className={styles.badge} data-category={project.category}>{project.category}</span>
                </div>

                <div className={styles.body}>
                  <p className={styles.category}>
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>

                  <p className={styles.summary}>
                    {project.summary}
                  </p>

                  <ul className={styles.technologies}>
                    {project.technologies.slice(0, 4).map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  <Link
                    className={styles.projectLink}
                    to={`/projects/${encodeURIComponent(project.slug)}`}
                    aria-label={`View project: ${project.title}`}
                  >
                    View Project <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))
          : projectPlaceholders.filter(matches).map((placeholder) => (
              <article
                key={placeholder.id}
                className={styles.card}
              >
                <div className={styles.visual}>
                  <img
                    src={placeholder.image.src}
                    alt={placeholder.image.alt}
                    width={960}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.badge} data-category={placeholder.category}>{placeholder.category}</span>
                </div>

                <div className={styles.body}>
                  <p className={styles.category}>In preparation</p>
                  <h3>{placeholder.title}</h3>
                  <p className={styles.summary}>
                    {placeholder.summary}
                  </p>
                  <ul className={styles.technologies} aria-label="Planned technologies">
                    {placeholder.technologies.slice(0, 4).map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <Link className={styles.projectLink} to={`/projects/${placeholder.id}`} aria-label={`View project: ${placeholder.title}`}>
                    View Project <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
      </div>
      {!hasProjects && <p className={styles.help}>Illustrative images — these projects are not presented as completed work.</p>}
    </section>
  )
}

export default Projects
