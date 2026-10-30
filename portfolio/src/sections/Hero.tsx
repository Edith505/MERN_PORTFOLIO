import portrait from '../assets/eddy-portrait.webp'
import { profile } from '../data/profile'
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
          Infrastructure focus. Software foundations.
        </p>

        <h1 id="home-title" className={styles.title}>
          Hey, I’m <span>Eddy.</span>
        </h1>

        <p className={styles.positioning}>
          Network <span>·</span> Systems <span>·</span> Cloud
        </p>

        <p className={styles.description}>
          Software engineering background, hands-on IT experience
          and a growing focus on network and cloud infrastructure.
          Currently studying network management at Cégep Limoilou.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#projects">
            View My Work <span aria-hidden="true">→</span>
          </a>

          <a
            className={styles.secondaryButton}
            href={profile.links.github}
          >
            GitHub
          </a>

          <a
            className={styles.secondaryButton}
            href={profile.links.linkedin}
          >
            LinkedIn
          </a>
        </div>

        <p className={styles.signature}>
          Software mindset. Infrastructure direction.
        </p>
      </div>

      <div className={styles.visual}>
        <div className={styles.shape} aria-hidden="true" />
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.dots} aria-hidden="true" />

        <img
          className={styles.portrait}
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          fetchPriority="high"
        />

        <p className={styles.caption}>
          <span className={styles.captionLabel}>Focused on</span>
          Networks, systems
          <br />
          and cloud infrastructure
        </p>
      </div>
    </section>
  )
}

export default Hero