export interface SkillCategory {
  title: string
  description: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Networking & Systems',
    description:
      'Network configuration, systems administration and infrastructure troubleshooting.',
    items: [
      'Cisco',
      'IPv4 / IPv6',
      'VLAN',
      'Routing',
      'ACL',
      'DNS',
      'DHCP',
      'Windows Server',
      'Active Directory',
      'Linux',
      'Hyper-V',
    ],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud platforms, containers and version control.',
    items: [
      'Microsoft Azure',
      'AWS',
      'Docker',
      'Kubernetes',
      'Git / GitHub',
    ],
  },
  {
    title: 'Development',
    description:
      'Web development, programming and database technologies.',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'Java',
      'PHP',
      'Python',
      'Node.js',
      'Express',
      'SQL',
      'MySQL',
      'MongoDB',
    ],
  },
]