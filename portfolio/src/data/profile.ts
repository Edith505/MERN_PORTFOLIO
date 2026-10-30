interface ProfessionalLinks {
  github: string
  linkedin: string
}

interface Profile {
  name: string
  links: ProfessionalLinks
}

export const profile: Profile = {
  name: 'Eddy Manoa Randrianarison',
  links: {
    github: 'https://github.com/Edith505',
    linkedin: 'https://www.linkedin.com/in/eddy-manoa-randrianarison-a0911215b/',
  },
}