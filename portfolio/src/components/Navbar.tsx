import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { Mail, Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const navigationLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuButton = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') return
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      }
    }, { rootMargin: '-15% 0px -65% 0px' })
    for (const id of [...navigationLinks.map((link) => link.id), 'contact']) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [pathname])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header
      className={styles.header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          closeMenu()
          menuButton.current?.focus()
        }
      }}
    >
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <nav className={styles.navigation} aria-label="Main navigation">
        <a className={styles.brand} href="/#home" aria-label="Eddy Manoa — Home" onClick={closeMenu}>
          <svg className={styles.monogram} viewBox="0 0 32 36" aria-hidden="true" focusable="false">
            <path d="M7 3h23l-3 7H12l-2 5h15l-3 6H8l-2 5h19l-3 7H0L7 3Z" fill="currentColor" />
          </svg>
          <span>Eddy</span>
        </a>
        <button
          ref={menuButton}
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="navigation-panel"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          {isOpen ? 'Close menu' : 'Menu'}
        </button>
        <div id="navigation-panel" className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.links}>
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  aria-current={pathname === '/' && activeSection === link.id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className={styles.talk} href="/#contact" onClick={closeMenu}>
            <Mail size={18} aria-hidden="true" /> Let’s Talk
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
