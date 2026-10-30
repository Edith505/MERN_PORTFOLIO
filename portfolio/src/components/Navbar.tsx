import { useRef, useState } from 'react'
import styles from './Navbar.module.css'

const navigationLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#education' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Contact', href: '/#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          closeMenu()
          menuButton.current?.focus()
        }
      }}
    >
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <nav className={styles.navigation} aria-label="Main navigation">
        <a
          className={styles.brand}
          href="/#home"
          aria-label="Eddy Manoa — Home"
          onClick={closeMenu}
        >
          Eddy<span className={styles.dot}>.</span>
        </a>

        <button
          ref={menuButton}
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="navigation-links"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          {isOpen ? 'Close menu' : 'Menu'}
        </button>

        <ul
          id="navigation-links"
          className={`${styles.links} ${isOpen ? styles.open : ''}`}
        >
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar