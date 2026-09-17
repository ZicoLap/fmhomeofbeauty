type IconProps = { className?: string }

export function ArrowIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" /></svg>
}
export function MenuIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
}
export function CloseIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
}
export function LocationIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5" /></svg>
}
export function PhoneIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-5-1-1.2 2c-3.8-1.6-7-4.8-8.6-8.6l2-1.2L7 3Z" /></svg>
}
export function ClockIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" /></svg>
}
export function MailIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6" /></svg>
}
export function InstagramIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" /></svg>
}
export function TikTokIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.2a3.8 3.8 0 1 1-3.2-3.75V13a1.7 1.7 0 1 0 1.7 1.7V4h1.5c.4 2.3 1.9 3.8 4 4.2V10c-1.5-.2-2.8-.9-4-2Z" /></svg>
}
export function FacebookIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1Z" /></svg>
}
export function ScissorsIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8.2 7.6 20 18M8.2 16.4 20 6" /></svg>
}
export function SparkleIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.4 5.2L18 9.6l-4.6 1.4L12 16l-1.4-5L6 9.6l4.6-1.4L12 3Z"/><path d="M18.5 14.5 19 16.4l1.9.5-1.9.5-.5 1.9-.5-1.9-1.9-.5 1.9-.5.5-1.9Z" /></svg>
}
export function MakeupIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8M10 21V11c0-2 1.2-3.5 2-4.5.8 1 2 2.5 2 4.5v10"/><path d="M9 11h6"/><path d="M11 4.5c.4-.8 1-.5 1-.5s.6-.3 1 .5" /></svg>
}
export function LashIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14c3-4 6-6 8-6s5 2 8 6"/><path d="M6 12.5 5 9M9 10.2 8.2 7M12 9.5V6M15 10.2 15.8 7M18 12.5 19 9" /></svg>
}
export function BottleIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3h4v3h-4z"/><path d="M9 6h6l1 3v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V9l1-3Z" /></svg>
}
export function HouseIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1Z" /></svg>
}
export function DropIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z" /></svg>
}
export function FanIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="2"/><path d="M12 10c2-4 6-5 8-3-1 3-5 5-8 3ZM14 13c4 2 5 6 3 8-3-1-5-5-3-8ZM10 14c-2 4-6 5-8 3 1-3 5-5 8-3ZM10 11C6 9 5 5 7 3c3 1 5 5 3 8Z" /></svg>
}

const icons = {
  cut: ScissorsIcon,
  blowdry: FanIcon,
  colour: DropIcon,
  sparkle: SparkleIcon,
  repair: DropIcon,
  bridal: SparkleIcon,
  makeup: MakeupIcon,
  lash: LashIcon,
  bottle: BottleIcon,
}

export function ServiceGlyph({ name, className }: { name: keyof typeof icons; className?: string }) {
  const Icon = icons[name]
  return <Icon className={className} />
}
