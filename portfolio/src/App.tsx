import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import styles from './App.module.css'
import About from './sections/About'
import Skills from './sections/Skills'

function App() {
  return (
    <>
      <Navbar />

      <main id="main" className={styles.page} tabIndex={-1}>
        <Hero />
        <About />
        <Skills />

        <section
          id="projects"
          className={styles.notice}
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title" className={styles.label}>
            Projects
          </h2>
          <p>
            Technical projects are currently being documented.
            More technical work will be published soon.
          </p>
        </section>
      </main>
    </>
  )
}

export default App