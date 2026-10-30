import { profile } from '../data/profile'
import styles from './Contact.module.css'

function Contact() {
  const links = [
  { label: 'Email', url: `mailto:${profile.email}` },
  { label: 'GitHub', url: profile.links.github },
  { label: 'LinkedIn', url: profile.links.linkedin },
].filter((link) => link.url !== '')

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className={styles.title}>
        Let’s connect
      </h2>

      <p className={styles.description}>
        For professional conversations about networks, systems,
        cloud infrastructure and software development.
      </p>

      {links.length > 0 ? (
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.url}>
                {link.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.pending}>
          Professional contact links will be available soon.
        </p>
      )}
    </section>
  )
}

export default Contact