import { Link } from 'react-router'
import { projectPlaceholders } from '../data/projects'
import { getProjects } from '../services/projectService'
import styles from './Projects.module.css'

function Projects() {
  const projects = getProjects()
  const hasProjects = projects.length > 0

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

      <p id="projects-help" className={styles.help}>
        Scroll horizontally to explore. Keyboard users can focus
        the project list and use the arrow keys.
      </p>

      <div
        className={styles.track}
        role="region"
        aria-label="Project list"
        aria-describedby="projects-help"
        tabIndex={0}
      >
        {hasProjects
          ? projects.map((project) => (
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
                    View Project <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))
          : projectPlaceholders.map((placeholder, index) => (
              <article
                key={placeholder.id}
                className={styles.card}
              >
                <div className={styles.visual}>
                  <span className={styles.placeholderNumber} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className={styles.visualLabel}>
                    {placeholder.category}
                  </span>
                </div>

                <div className={styles.body}>
                  <p className={styles.category}>In preparation</p>
                  <h3>{placeholder.title}</h3>
                  <p className={styles.summary}>
                    Placeholder — project details will be added
                    once documented.
                  </p>
                </div>
              </article>
            ))}
      </div>
    </section>
  )
}

export default Projects