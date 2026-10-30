import { profile } from '../data/profile'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>

        <a href="/#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer