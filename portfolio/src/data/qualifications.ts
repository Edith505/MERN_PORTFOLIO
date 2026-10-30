export interface Certification {
  id: string
  title: string
  issuer: string
  status: 'Achieved' | 'In Progress' | 'Planned'
  date?: string
  credentialId?: string
  verificationUrl?: string
}

interface Education {
  id: string
  title: string
  institution: string
  location: string
  period: string
  status: 'In Progress' | 'Completed'
}

interface Experience {
  id: string
  title: string
  period: string
  description: string
}

export const certifications: Certification[] = []

interface LearningCertificate {
  id: string
  title: string
  issuer: string
  date: string
  verificationUrl?: string
}

// Course completion certificates, separate from professional certifications.
export const continuousLearning: LearningCertificate[] = [
  {
    id: 'introduction-ai',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'LinkedIn Learning',
    date: '2025-06',
  },
  {
    id: 'generative-ai-ethics',
    title: 'Ethics in the Age of Generative AI',
    issuer: 'LinkedIn Learning',
    date: '2025-05',
  },
  {
    id: 'microsoft-365-copilot',
    title: 'Learning Microsoft 365 Copilot for Work',
    issuer: 'LinkedIn Learning',
    date: '2025-05',
  },
  {
    id: 'streamlining-copilot',
    title: 'Streamlining Your Work with Microsoft Copilot',
    issuer: 'LinkedIn Learning',
    date: '2025-05',
  },
]

export const education: Education[] = [
  {
    id: 'network-management',
    title: 'Computer Science Technology — Network Management',
    institution: 'Cégep Limoilou',
    location: 'Québec, Canada',
    period: '2024 — Present',
    status: 'In Progress',
  },
  {
    id: 'software-engineering',
    title: 'Licence in Computer Science and Telecommunications — Software Engineering',
    institution: 'Université e-media',
    location: 'Madagascar',
    period: '2020 — 2022',
    status: 'Completed',
  },
]

export const experiences: Experience[] = [
  {
    id: 'website-administration',
    title: 'Website Creator & Administrator',
    period: '2021 — 2022',
    description:
      'Developed and maintained a website using HTML, CSS and JavaScript, managed content, and worked on performance and accessibility improvements.',
  },
  {
    id: 'internet-cafe',
    title: 'Internet Café Manager',
    period: '2020 — 2022',
    description:
      'Handled computer maintenance, hardware troubleshooting, network maintenance and day-to-day technical operations.',
  },
]
