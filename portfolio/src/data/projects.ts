import type { Project, ProjectCategory, ProjectImage } from '../types/project'
import networkingImage from '../assets/projects/networking.webp'
import azureImage from '../assets/projects/azure.webp'
import awsImage from '../assets/projects/aws.webp'
import devopsImage from '../assets/projects/devops.webp'
import developmentImage from '../assets/projects/development.webp'

export const projects: readonly Project[] = []

interface ProjectPlaceholder {
  id: string
  category: ProjectCategory
  title: string
  image: ProjectImage
  technologies: string[]
  summary: string
}

export const projectPlaceholders: readonly ProjectPlaceholder[] = [
  {
    id: 'networking-placeholder',
    category: 'Networking',
    title: 'Cisco Enterprise Network',
    image: { src: networkingImage, alt: 'Illustrative enterprise network switches with blue Ethernet cables' },
    technologies: ['Cisco', 'VLAN', 'Routing', 'ACL'],
    summary: 'Planned focus: network segmentation, routing and access-control policies.',
  },
  {
    id: 'azure-placeholder',
    category: 'Cloud',
    title: 'Azure Secure Network',
    image: { src: azureImage, alt: 'Illustrative blue cloud infrastructure in a modern data centre' },
    technologies: ['Azure', 'Virtual Network', 'NSG', 'Monitoring'],
    summary: 'Planned focus: secure virtual networks and cloud infrastructure on Azure.',
  },
  {
    id: 'devops-placeholder',
    category: 'DevOps',
    title: 'Kubernetes Infrastructure',
    image: { src: devopsImage, alt: 'Illustrative containers and orchestration infrastructure' },
    technologies: ['Kubernetes', 'Docker', 'CI/CD', 'Linux'],
    summary: 'Planned focus: container orchestration, deployment and automation.',
  },
  {
    id: 'aws-placeholder',
    category: 'Cloud',
    title: 'AWS Cloud Infrastructure',
    image: { src: awsImage, alt: 'Illustrative cloud infrastructure with amber-lit server racks' },
    technologies: ['AWS', 'VPC', 'IAM', 'CloudWatch'],
    summary: 'Planned focus: cloud networking, identity and monitoring on AWS.',
  },
  {
    id: 'development-placeholder',
    category: 'Development',
    title: 'Software Development',
    image: { src: developmentImage, alt: 'Illustrative software development workspace with a code editor' },
    technologies: ['JavaScript', 'Node.js', 'SQL', 'Git'],
    summary: 'Planned focus: web applications, APIs and maintainable software.',
  },
]
