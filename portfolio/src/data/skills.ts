export interface SkillCategory {
  title: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Networking',
    items: ['Cisco', 'DNS', 'DHCP'],
  },
  {
    title: 'Systems',
    items: [
      'Windows Server',
      'Active Directory',
      'Linux',
      'Hyper-V',
      'PowerShell',
    ],
  },
  {
    title: 'Cloud',
    items: ['Microsoft Azure', 'AWS'],
  },
  {
    title: 'DevOps',
    items: ['Git', 'GitHub', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Development',
    items: [
      'JavaScript',
      'React',
      'Node.js',
      'PHP',
      'SQL / MySQL',
      'MongoDB',
    ],
  },
]