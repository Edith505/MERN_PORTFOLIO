import { skillCategories } from '../data/skills'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <h2 id="skills-title" className={styles.title}>
        Technical Expertise
      </h2>

      <p className={styles.introduction}>
        Technologies I use or study across infrastructure and software
        development.
      </p>

      <div className={styles.categories}>
        {skillCategories.map((category) => (
          <div key={category.title} className={styles.category}>
            <h3 className={styles.categoryTitle}>
              {category.title}
            </h3>

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