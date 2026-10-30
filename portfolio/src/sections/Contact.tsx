import { profile } from '../data/profile'
import { Mail, MapPin } from 'lucide-react'
import BrandIcon from '../components/BrandIcon'
import styles from './Contact.module.css'

function Contact() {
  const links = [
  { label: 'Email', url: profile.email ? `mailto:${profile.email}` : '', icon: <Mail size={18} aria-hidden="true" /> },
  { label: 'GitHub', url: profile.links.github, icon: <BrandIcon brand="github" /> },
  { label: 'LinkedIn', url: profile.links.linkedin, icon: <BrandIcon brand="linkedin" /> },
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
                {link.icon}{link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.pending}>
          Professional contact links will be available soon.
        </p>
      )}
      <p className={styles.location}><MapPin size={17} aria-hidden="true" /> Québec, Canada</p>
    </section>
  )
}

export default Contact
