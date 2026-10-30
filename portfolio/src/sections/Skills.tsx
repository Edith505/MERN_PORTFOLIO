import { skillCategories } from '../data/skills'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <p className={styles.eyebrow}>Technical skills</p>

      <h2 id="skills-title" className={styles.title}>
        Infrastructure meets software.
      </h2>

      <p className={styles.introduction}>
        Technologies I use or study, grouped by area of focus.
      </p>

      <div className={styles.categories}>
        {skillCategories.map((category, index) => (
          <div key={category.title} className={styles.category}>
            <span className={styles.number} aria-hidden="true">
              0{index + 1}
            </span>

            <h3 className={styles.categoryTitle}>
              {category.title}
            </h3>

            <p className={styles.description}>
              {category.description}
            </p>

            <ul className={styles.list}>
              {category.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills