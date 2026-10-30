import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <nav className={styles.navigation} aria-label="Main navigation">
        <a className={styles.brand} href="#home" aria-label="Eddy Manoa — Home">
          Eddy Manoa<span className={styles.dot}>.</span>
        </a>

        <ul className={styles.links}>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
        </li>
        <li>
            <a href="/#skills">Skills</a>
        </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="/#certifications">Certifications</a>
            </li>
            <li>
                <a href="/#education">Education</a>
            </li>
            <li>
                <a href="/#contact">Contact</a>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar