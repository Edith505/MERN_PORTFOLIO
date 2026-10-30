import {
  certifications,
  education,
  experiences,
} from '../data/qualifications'
import styles from './Qualifications.module.css'

function Qualifications() {
  return (
    <>
      <section
        id="education"
        className={styles.section}
        aria-labelledby="journey-title"
      >
        <p className={styles.eyebrow}>Education & experience</p>

        <h2 id="journey-title" className={styles.title}>
          My Journey<span>.</span>
        </h2>

        <div className={styles.columns}>
          <div>
            <h3 className={styles.columnTitle}>Education</h3>

            <ol className={styles.timeline}>
              {education.map((item) => (
                <li key={item.id} className={styles.entry}>
                  <p className={styles.period}>{item.period}</p>
                  <h4>{item.title}</h4>

                  <p className={styles.institution}>
                    {item.institution}
                  </p>

                  <p className={styles.description}>
                    {item.location}
                  </p>

                  <span className={styles.status}>
                    {item.status}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className={styles.columnTitle}>
              Relevant experience
            </h3>

            <ol className={styles.timeline}>
              {experiences.map((item) => (
                <li key={item.id} className={styles.entry}>
                  <p className={styles.period}>{item.period}</p>
                  <h4>{item.title}</h4>

                  <p className={styles.description}>
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className={styles.section}
        aria-labelledby="certifications-title"
      >
        <p className={styles.eyebrow}>Professional development</p>

        <h2 id="certifications-title" className={styles.title}>
          Certifications<span>.</span>
        </h2>

        {certifications.length === 0 ? (
          <p className={styles.empty}>
            Certification details will be published once confirmed.
          </p>
        ) : (
          <ul className={styles.certifications}>
            {certifications.map((item) => (
              <li key={item.id} className={styles.certification}>
                <div>
                  <h3>{item.title}</h3>
                  <p className={styles.description}>{item.issuer}</p>

                  {item.date && (
                    <p className={styles.description}>{item.date}</p>
                  )}
                </div>

                <span className={styles.status}>
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Qualifications