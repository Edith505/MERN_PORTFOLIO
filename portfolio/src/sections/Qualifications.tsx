import {
  certifications,
  education,
} from '../data/qualifications'
import styles from './Qualifications.module.css'

function Qualifications() {
  return (
    <>
      <section
        id="certifications"
        className={styles.section}
        aria-labelledby="certifications-title"
      >
        <h2 id="certifications-title" className={styles.title}>
          Certifications
        </h2>

        {certifications.length === 0 ? (
          <p className={styles.empty}>
            Certification details will be added once confirmed.
          </p>
        ) : (
          <ul className={styles.list}>
            {certifications.map((certification) => (
              <li key={certification.id} className={styles.entry}>
                <div>
                  <h3>{certification.title}</h3>
                  <p>{certification.issuer}</p>

                  {certification.date && (
                    <p>{certification.date}</p>
                  )}
                </div>

                <span className={styles.status}>
                  {certification.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section
        id="education"
        className={styles.section}
        aria-labelledby="education-title"
      >
        <h2 id="education-title" className={styles.title}>
          Education
        </h2>

        <ul className={styles.list}>
          {education.map((qualification) => (
            <li key={qualification.id} className={styles.entry}>
              <div>
                <h3>{qualification.title}</h3>

                {qualification.institution && (
                  <p>{qualification.institution}</p>
                )}

                {qualification.location && (
                  <p>{qualification.location}</p>
                )}
              </div>

              <span className={styles.status}>
                {qualification.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Qualifications