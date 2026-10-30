import styles from './About.module.css'

function About() {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-title"
    >
      <div>
        <p className={styles.eyebrow}>About me</p>

        <h2 id="about-title" className={styles.title}>
          Software foundations.
          <br />
          <span>Infrastructure focus.</span>
        </h2>
      </div>

      <div className={styles.text}>
        <p>
          I’m Eddy, a network management student at Cégep Limoilou
          with a university background in software engineering.
        </p>

        <p>
          My experience spans web development, computer maintenance
          and troubleshooting. I’m building on these foundations
          to develop my skills in networks, systems, cloud and automation.
        </p>
      </div>
    </section>
  )
}

export default About