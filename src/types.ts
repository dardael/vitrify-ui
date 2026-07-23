export type FooterLink   = { label: string; href: string }
export type FooterColumn = { heading: string; links: FooterLink[] }
export type SocialIcon   = 'github' | 'instagram' | 'facebook' | 'linkedin' | 'twitter' | 'youtube'
export type SocialLink   = { label: string; href: string; icon: SocialIcon }

export type Testimonial = {
  quote:      string
  author:     string
  role?:      string
  company?:   string
  rating?:    1 | 2 | 3 | 4 | 5
  avatar?:    string
  avatarAlt?: string
}
