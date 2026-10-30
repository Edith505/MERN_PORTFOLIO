import { useParams } from 'react-router'
import { getProjectBySlug } from '../services/projectService'
import { projectPlaceholders } from '../data/projects'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined
  const preparation = projectPlaceholders.find((item) => item.id === slug)

  if (!project && preparation) {
    return (
      <article className={styles.page}>
        <a href="/#projects">Back to projects</a>
        <header className={styles.header}>
          <p>{preparation.category} · In preparation</p>
          <h1>{preparation.title}</h1>
          <p>{preparation.summary}</p>
          <img src={preparation.image.src} alt={preparation.image.alt} width={960} height={600} />
        </header>
        <section className={styles.section}>
          <h2>Documentation in preparation</h2>
          <p>This is a preview of a planned project. The image is illustrative. Architecture, implementation and results will be published once documented.</p>
          <h2>Planned technologies</h2>
          <ul>{preparation.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </section>
      </article>
    )
  }

  if (!project) {
    return (
      <section className={styles.page}>
        <h1>Project not found</h1>
        <p>This project is not available.</p>
        <a href="/#projects">Back to projects</a>
      </section>
    )
  }

  const textSections = [
    { title: 'Architecture', content: project.architecture },
    { title: 'Implementation', content: project.implementation },
    { title: 'Security', content: project.security },
    { title: 'Testing', content: project.testing },
  ]

  const listSections = [
    { title: 'Objectives', items: project.objectives },
    { title: 'Challenges', items: project.challenges },
    { title: 'Troubleshooting', items: project.troubleshooting },
    { title: 'Results', items: project.results },
    { title: 'Lessons Learned', items: project.lessonsLearned },
  ]

  return (
    <article className={styles.page}>
      <a href="/#projects">Back to projects</a>

      <header className={styles.header}>
        <p>{project.category} · {project.status}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>

      <section className={styles.section}>
        <h2>Overview</h2>
        <p>{project.description}</p>
      </section>

      <section className={styles.section}>
        <h2>Technologies</h2>
        <ul>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>

      {textSections.map(({ title, content }) =>
        content ? (
          <section key={title} className={styles.section}>
            <h2>{title}</h2>
            <p>{content}</p>
          </section>
        ) : null,
      )}

      {listSections.map(({ title, items }) =>
        items?.length ? (
          <section key={title} className={styles.section}>
            <h2>{title}</h2>
            <ul>
              {items.map((item, index) => (
                <li key={`${title}-${index}`}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null,
      )}
    </article>
  )
}

export default ProjectDetail
