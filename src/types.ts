export type HeadingLevel = 'h2' | 'h3' | 'h4'

export type FAQItem = {
  question: string
  answer:   string  // supports inline HTML: <a>, <strong>, <code>…
}

export type FooterLink   = { label: string; href: string }
export type FooterColumn = { heading: string; links: FooterLink[] }
export type SocialIcon   = 'github' | 'instagram' | 'facebook' | 'linkedin' | 'twitter' | 'youtube'
export type SocialLink   = { label: string; href: string; icon: SocialIcon }

export type GalleryItem = {
  src: string
  alt: string
  title?: string
  category?: string
  href?: string
  featured?: boolean
}

export type Testimonial = {
  quote:      string
  author:     string
  role?:      string
  company?:   string
  rating?:    1 | 2 | 3 | 4 | 5
  avatar?:    string
  avatarAlt?: string
}

export type TeamSocial = {
  linkedin?:  string
  twitter?:   string
  instagram?: string
  github?:    string
  website?:   string
}

export type TeamMember = {
  name:      string
  role:      string
  bio?:      string
  photo?:    string
  photoAlt?: string
  social?:   TeamSocial
}
