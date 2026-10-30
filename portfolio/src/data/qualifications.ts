export interface Certification {
  id: string
  title: string
  issuer: string
  status: 'Achieved' | 'In Progress' | 'Planned'
  date?: string
  credentialId?: string
  verificationUrl?: string
}

export interface Education {
  id: string
  title: string
  institution?: string
  location?: string
  status: 'In Progress' | 'Completed'
}

export const certifications: Certification[] = []

export const education: Education[] = [
  {
    id: 'network-management',
    title: 'DEC in Network Management',
    location: 'Québec, Canada',
    status: 'In Progress',
  },
  {
    id: 'software-engineering',
    title: 'Licence in Software Engineering',
    status: 'Completed',
  },
]