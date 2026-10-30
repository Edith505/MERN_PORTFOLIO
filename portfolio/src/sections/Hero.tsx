import portrait from '../assets/portrait.jpeg'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section
      id="home"
      className={styles.hero}
      aria-labelledby="home-title"
    >
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          Network, Systems &amp; Cloud Infrastructure
        </p>

        <h1 id="home-title" className={styles.title}>
          Eddy Manoa Randrianarison
        </h1>

        <p className={styles.description}>
          Software engineering background. Currently studying network
          management in Québec, with a focus on systems, cloud and automation.
        </p>

        <a className={styles.primaryButton} href="#projects">
          View Projects
        </a>
      </div>

      <div className={styles.portraitFrame}>
        <img
          className={styles.portrait}
          src={portrait}
          alt="Portrait of Eddy Manoa Randrianarison"
          width={2546}
          height={3220}
          fetchPriority="high"
        />
      </div>
    </section>
  )
}

export default Hero