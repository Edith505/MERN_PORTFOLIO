import styles from './About.module.css'

function About() {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-title"
    >
      <h2 id="about-title" className={styles.title}>
        Software foundations. Infrastructure focus.
      </h2>

      <div className={styles.text}>
        <p>
          I hold a degree in software engineering and am currently
          studying network management in Québec.
        </p>

        <p>
          My focus is on networks, systems administration and cloud
          infrastructure, with an interest in security and automation.
          My software engineering background complements this work
          through scripting, application development and structured
          problem-solving.
        </p>
      </div>
    </section>
  )
}

export default About