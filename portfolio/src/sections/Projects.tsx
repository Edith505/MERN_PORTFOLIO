import { getProjects } from '../services/projectService'
import styles from './Projects.module.css'
import { Link } from 'react-router'

function Projects() {
  const projects = getProjects()

  return (
    <section
      id="projects"
      className={styles.section}
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className={styles.title}>
        Projects
      </h2>

      <p className={styles.introduction}>
        Technical work across networks, systems, cloud and software.
      </p>

      {projects.length === 0 ? (
        <div className={styles.empty}>
          <h3>Documentation in progress</h3>
          <p>
            Projects are currently being documented.
            More technical work will be published soon.
          </p>
        </div>
      ) : (
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <p className={styles.metadata}>
                {project.category} · {project.status}
              </p>

              <h3>{project.title}</h3>

              <p className={styles.summary}>
                {project.summary}
              </p>

              <ul
                className={styles.technologies}
                aria-label="Technologies"
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <Link to={`/projects/${encodeURIComponent(project.slug)}`}>
                View project →
            </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects