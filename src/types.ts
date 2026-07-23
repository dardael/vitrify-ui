export type FooterLink   = { label: string; href: string }
export type FooterColumn = { heading: string; links: FooterLink[] }
export type SocialIcon   = 'github' | 'instagram' | 'facebook' | 'linkedin' | 'twitter' | 'youtube'
export type SocialLink   = { label: string; href: string; icon: SocialIcon }
