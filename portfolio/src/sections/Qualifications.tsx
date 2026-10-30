import {
  certifications,
  continuousLearning,
  education,
  experiences,
} from '../data/qualifications'
import { Award, BookOpen, ExternalLink } from 'lucide-react'
import styles from './Qualifications.module.css'

function credentialUrl(value?: string): string | undefined {
  if (!value) return undefined
  try {
    const url = new URL(value)
    return url.protocol === 'https:' ? url.href : undefined
  } catch {
    return undefined
  }
}

function learningDate(value: string) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[Number(value.slice(5, 7)) - 1]} ${value.slice(0, 4)}`
}

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

        <div className={styles.professionalGroup}>
          <h3 className={styles.groupTitle}><Award size={24} aria-hidden="true" /> Professional Certifications</h3>
          {certifications.length === 0 ? (
            <div className={styles.professionalEmpty}>
              <Award size={32} aria-hidden="true" />
              <div>
                <h4>Credentials, clearly documented.</h4>
                <p>Professional certification details and verified progress will be added once confirmed.</p>
              </div>
            </div>
          ) : (
            <ul className={styles.certifications}>
              {certifications.map((item) => {
                const url = credentialUrl(item.verificationUrl)
                return (
                  <li key={item.id} className={styles.certification}>
                    <Award size={28} className={styles.awardIcon} aria-hidden="true" />
                    <h4>{item.title}</h4>
                    <p className={styles.description}>{item.issuer}</p>
                    {item.date && <p className={styles.description}>{item.date}</p>}
                    <span className={styles.status}>{item.status}</span>
                    {item.credentialId && <p className={styles.description}>Credential ID: {item.credentialId}</p>}
                    {url && <a className={styles.credentialLink} href={url} aria-label={`View credential: ${item.title}`}>View Credential <ExternalLink size={15} aria-hidden="true" /></a>}
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className={styles.learningGroup}>
          <h3 className={styles.groupTitle}><BookOpen size={20} aria-hidden="true" /> Continuous Learning</h3>
          <p className={styles.learningIntro}>Selected course completion certificates from LinkedIn Learning.</p>
          <ul className={styles.learningGrid}>
            {continuousLearning.map((item) => {
              const url = credentialUrl(item.verificationUrl)
              return (
                <li key={item.id} className={styles.learningCard}>
                  <p className={styles.learningIssuer}>{item.issuer}</p>
                  <h4>{item.title}</h4>
                  <time dateTime={item.date}>{learningDate(item.date)}</time>
                  {url && <a className={styles.credentialLink} href={url} aria-label={`View credential: ${item.title}`}>View Credential <ExternalLink size={15} aria-hidden="true" /></a>}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Qualifications
