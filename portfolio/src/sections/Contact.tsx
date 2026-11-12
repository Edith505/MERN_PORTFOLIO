import { useState } from 'react'
import type { FormEvent } from 'react'
import { profile } from '../data/profile'
import { Mail, MapPin } from 'lucide-react'
import BrandIcon from '../components/BrandIcon'
import styles from './Contact.module.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name.trim() || !message.trim()) {
      setError('Please enter your name and a message, not just spaces.')
      return
    }
    if (!profile.email) {
      setError('Email is currently unavailable. Please use the social links.')
      return
    }
    const subject = 'Portfolio enquiry from ' + name.trim()
    const body = 'Name: ' + name.trim() + '\nEmail: ' + email.trim() + '\n\n' + message.trim()
    setDraft('mailto:' + profile.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body))
    setError('')
  }

  function editDraft() {
    setDraft('')
    setError('')
  }

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
      <div className={styles.layout}>
      <div className={styles.info}>
        <p className={styles.eyebrow}>LET’S TALK</p>
        <h2 id="contact-title" className={styles.title}>Let’s connect<span>.</span></h2>
        <p className={styles.description}>Great ideas start with a conversation. Let’s talk about networks, cloud infrastructure or your next software project.</p>
        <div className={styles.contactItem}>
          <span className={styles.icon}><MapPin size={22} aria-hidden="true" /></span>
          <div><h3>Based in</h3><p>Québec, Canada</p></div>
        </div>
        <div className={styles.contactItem}>
          <span className={styles.icon}><Mail size={22} aria-hidden="true" /></span>
          <div><h3>Email me</h3><a href={'mailto:' + profile.email}>{profile.email}</a></div>
        </div>
        <p className={styles.socialLabel}>Find me online</p>
        <ul className={styles.links}>
          {links.filter((link) => link.label !== 'Email').map((link) => (
            <li key={link.label}><a href={link.url}>{link.icon}{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div className={styles.formWrap}>
        <span className={styles.decorCircle} aria-hidden="true" />
        <span className={styles.decorDots} aria-hidden="true" />
      <form className={styles.form} onSubmit={prepareEmail} aria-label="Contact Eddy" aria-describedby="contact-form-help">
        <p className={styles.formEyebrow}>YOUR NEXT IDEA STARTS HERE</p>
        <h3>Leave me a message</h3>
        <p id="contact-form-help" className={styles.note}>Fill in your details, then open your email app to send your message. Nothing is sent automatically.</p>
        <div className={styles.fields}>
          <label htmlFor="contact-name">Name <span>(required)</span></label>
          <input id="contact-name" name="name" placeholder="Your name" autoComplete="name" required maxLength={100}
            value={name} onChange={(event) => { setName(event.target.value); editDraft() }} />
          <label htmlFor="contact-email">Email <span>(required)</span></label>
          <input id="contact-email" name="email" placeholder="you@example.com" type="email" autoComplete="email" required maxLength={254}
            value={email} onChange={(event) => { setEmail(event.target.value); editDraft() }} />
          <label htmlFor="contact-message">Message <span>(required)</span></label>
          <textarea id="contact-message" name="message" placeholder="Tell me about your project or opportunity…" rows={5} required maxLength={1500} aria-describedby="message-count"
            value={message} onChange={(event) => { setMessage(event.target.value); editDraft() }} />
          <span id="message-count" className={styles.count}>{message.length} / 1500 characters</span>
        </div>
        {error && <p role="alert" className={styles.error}>{error}</p>}
        <button type="submit" className={styles.submit}><Mail size={18} aria-hidden="true" /> Prepare email</button>
        <div role="status" aria-live="polite">
          {draft && <div className={styles.draft}>
            <p>Your draft is ready. Open your email app, review it and send it from there.</p>
            <a href={draft} className={styles.openEmail}>Open email app →</a>
          </div>}
        </div>
        <p className={styles.note}>No email app configured? Contact me at <a href={'mailto:' + profile.email}>{profile.email}</a>.</p>
      </form>
      </div>
      </div>
    </section>
  )
}

export default Contact
