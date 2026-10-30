import styles from './ProjectDetail.module.css'

function NotFound() {
  return (
    <section className={styles.page}>
      <h1>Page not found</h1>
      <p>The page you requested could not be found.</p>
      <a href="/">Back to home</a>
    </section>
  )
}

export default NotFound