import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, SyntheticEvent } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowIcon, ClockIcon, CloseIcon, FacebookIcon, HouseIcon, InstagramIcon, LocationIcon, MailIcon, MenuIcon, PhoneIcon, ServiceGlyph, SparkleIcon, TikTokIcon } from './components/Icons'
import { copy, developerConfig, developerWhatsappHref, galleryItems, navigation, salonConfig, services, shopCollections, socialProfiles, whatsappHref, type Language, type ServiceIcon } from './content/salonConfig'
import './App.css'

const local = <T extends Record<Language, string>>(value: T, language: Language): string => value[language]
const LANGUAGE_KEY = 'fm-language'
const hairServices = services.filter(service => service.group === 'hair')
const cosmeticServices = services.filter(service => service.group === 'cosmetics')

function hideBrokenImage(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.style.display = 'none'
}

const socialIcons = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  facebook: FacebookIcon,
}

function SocialLink({ href, label, id }: { href: string; label: string; id: keyof typeof socialIcons }) {
  const Icon = socialIcons[id]
  if (!href) return <span className="social-link is-pending"><Icon />{label}</span>
  return <a className="social-link" href={href} target="_blank" rel="noreferrer"><Icon />{label}</a>
}

function SocialList({ language }: { language: Language }) {
  return (
    <div className="social-list">
      {socialProfiles.map(profile => <SocialLink key={profile.id} id={profile.id} href={profile.href} label={local(profile.label, language)} />)}
    </div>
  )
}

type HeaderProps = {
  language: Language
  onLanguage: () => void
  onMenuChange: (open: boolean) => void
  solid?: boolean
}

function Header({ language, onLanguage, onMenuChange, solid = false }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const location = useLocation()
  const t = copy[language]
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    onMenuChange(open)
    return () => {
      document.body.classList.remove('menu-open')
      onMenuChange(false)
    }
  }, [open, onMenuChange])

  useEffect(() => {
    if (!onHome) return
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-25% 0px -65% 0px' },
    )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [onHome])

  const close = () => setOpen(false)
  return (
    <header className={`site-header ${solid || scrolled || open ? 'is-solid' : ''}`}>
      <div className="header-inner shell">
        <Link className="wordmark" to="/" onClick={close} aria-label={local(salonConfig.name, language)}>
          {salonConfig.wordmark}<span>{local(salonConfig.tagline, language)}</span>
        </Link>
        <nav id="main-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'}>
          <div className="nav-links">
            {navigation.map(item => (
              <Link
                className={onHome && active === item.id ? 'is-active' : ''}
                aria-current={onHome && active === item.id ? 'location' : undefined}
                key={item.id}
                to={{ pathname: '/', hash: `#${item.id}` }}
                onClick={close}
              >
                {local(item.label, language)}
              </Link>
            ))}
            <Link className={location.pathname === '/shop' ? 'is-active' : ''} aria-current={location.pathname === '/shop' ? 'page' : undefined} to="/shop" onClick={close}>{t.shop.nav}</Link>
          </div>
          <Link className="button button-small mobile-book" to={{ pathname: '/', hash: '#booking' }} onClick={close}>{t.booking}</Link>
        </nav>
        <div className="header-actions">
          <button className="language-button" type="button" onClick={onLanguage}>{t.language}</button>
          <Link className="button button-small desktop-book" to={{ pathname: '/', hash: '#booking' }}>{t.booking}</Link>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? t.menuClose : t.menuOpen} onClick={() => setOpen(value => !value)}>{open ? <CloseIcon /> : <MenuIcon />}</button>
        </div>
      </div>
    </header>
  )
}

function Hero({ language }: { language: Language }) {
  const t = copy[language]
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-image"><img src="/images/hero.jpg" width="1200" height="1600" alt={language === 'ar' ? 'تصفيف شعر لامع بانسيابية طبيعية' : 'Glossy hair styled with natural movement'} fetchPriority="high" onError={hideBrokenImage} /></div>
      <div className="hero-shade" />
      <div className="hero-content shell">
        <p className="eyebrow hero-animate">{t.hero.eyebrow}</p>
        <h1 id="hero-title" className="hero-animate">{t.hero.title}</h1>
        <p className="hero-copy hero-animate">{t.hero.body}</p>
        <div className="hero-actions hero-animate"><a className="button button-light" href="#booking">{t.booking}<ArrowIcon /></a><a className="text-link light" href="#services">{t.hero.secondary}</a></div>
        <p className="hero-location hero-animate"><LocationIcon />{t.hero.location}</p>
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span><i /></div>
    </section>
  )
}

function Introduction({ language }: { language: Language }) {
  const t = copy[language].intro
  return (
    <section className="section intro" id="experience" aria-labelledby="intro-title">
      <div className="shell intro-grid reveal-group">
        <div className="reveal"><p className="eyebrow">{t.eyebrow}</p><h2 id="intro-title">{t.title}</h2><p className="large-copy">{t.body}</p></div>
        <ol className="principles reveal">
          {t.principles.map((principle, index) => (
            <li key={principle}>
              <span>0{index + 1}</span>
              <p>{principle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ServiceCard({ service, language, delay }: { service: typeof services[number]; language: Language; delay: number }) {
  const t = copy[language].services
  const message = `${copy[language].bookingSection.messageIntro}\n${local(service.name, language)}`
  return (
    <article className={`service-card reveal ${'featured' in service && service.featured ? 'featured' : ''}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
      <div className="service-icon"><ServiceGlyph name={service.icon as ServiceIcon} /></div>
      <h3>{local(service.name, language)}</h3>
      <p>{local(service.description, language)}</p>
      <div className="service-meta">
        <span><ClockIcon />{local(service.duration, language)}</span>
        <strong>{t.from} {service.price.toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US')} {local(salonConfig.currency, language)}</strong>
      </div>
      <a className="service-book" href={whatsappHref(message)} target="_blank" rel="noreferrer">{t.book}<ArrowIcon /></a>
    </article>
  )
}

function Services({ language }: { language: Language }) {
  const t = copy[language].services
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="shell">
        <div className="section-heading reveal"><div><p className="eyebrow">{t.eyebrow}</p><h2 id="services-title">{t.title}</h2></div><p>{t.body}</p></div>
        <h3 className="group-title reveal">{t.hair}</h3>
        <div className="service-grid reveal-group">
          {hairServices.map((service, index) => <ServiceCard key={service.id} service={service} language={language} delay={Math.min(index * 45, 180)} />)}
        </div>
        <div id="cosmetics">
          <h3 className="group-title reveal">{t.cosmetics}</h3>
          <div className="service-grid reveal-group">
            {cosmeticServices.map((service, index) => <ServiceCard key={service.id} service={service} language={language} delay={Math.min(index * 45, 180)} />)}
          </div>
        </div>
        <p className="price-note reveal">{t.note}</p>
      </div>
    </section>
  )
}

function HomeVisit({ language }: { language: Language }) {
  const t = copy[language].homeVisit
  return (
    <section className="section home-visit" id="home-visit" aria-labelledby="home-visit-title">
      <div className="shell home-visit-grid reveal-group">
        <div className="reveal">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="home-visit-title">{t.title}</h2>
          <p className="large-copy">{t.body}</p>
          <a className="button" href={whatsappHref(t.whatsappMessage)} target="_blank" rel="noreferrer">{t.cta}<ArrowIcon /></a>
        </div>
        <ol className="home-visit-steps reveal">
          {t.steps.map((step, index) => (
            <li key={step.title}>
              <span className="home-visit-icon">{index === 0 ? <PhoneIcon /> : index === 1 ? <HouseIcon /> : <SparkleIcon />}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Transformation({ language }: { language: Language }) {
  const t = copy[language].transformation
  return (
    <section className="transformation" aria-labelledby="transformation-title">
      <div className="transformation-image reveal"><img src="/images/colour.jpg" width="1200" height="1500" loading="lazy" alt={language === 'ar' ? 'تفاصيل لون دافئ ومكياج ناعم' : 'Warm colour detail with a soft makeup finish'} onError={hideBrokenImage} /></div>
      <div className="transformation-copy"><div className="reveal"><p className="eyebrow">{t.eyebrow}</p><h2 id="transformation-title">{t.title}</h2><p className="large-copy">{t.body}</p><a className="button" href={whatsappHref(copy[language].bookingSection.messageIntro)} target="_blank" rel="noreferrer">{t.cta}<ArrowIcon /></a></div></div>
    </section>
  )
}

function Gallery({ language }: { language: Language }) {
  const t = copy[language].gallery
  const [active, setActive] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const isOpen = active !== null

  const close = () => setActive(null)
  const move = (step: number) => setActive(value => value === null ? 0 : (value + step + galleryItems.length) % galleryItems.length)
  const open = (index: number, button: HTMLButtonElement) => {
    openerRef.current = button
    setActive(index)
  }

  useEffect(() => {
    if (!isOpen) return
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') move(language === 'ar' ? -1 : 1)
      if (event.key === 'ArrowLeft') move(language === 'ar' ? 1 : -1)
      if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button')
        if (!controls?.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.body.classList.add('modal-open')
    document.addEventListener('keydown', key)
    dialogRef.current?.querySelector<HTMLButtonElement>('.lightbox-close')?.focus()
    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', key)
      openerRef.current?.focus()
    }
  }, [isOpen, language])

  return (
    <section className="section gallery" id="work" aria-labelledby="gallery-title">
      <div className="shell">
        <div className="section-heading reveal"><div><p className="eyebrow">{t.eyebrow}</p><h2 id="gallery-title">{t.title}</h2></div><p>{t.body}</p></div>
        <div className="gallery-grid reveal-group">
          {galleryItems.map((item, index) => <button type="button" className={`gallery-item gallery-item-${index + 1} reveal`} key={item.src} onClick={event => open(index, event.currentTarget)} aria-label={`${t.open}: ${item.alt[language]}`}><img src={item.src} width={item.width} height={item.height} loading="lazy" alt={item.alt[language]} onError={hideBrokenImage} /><span>{item.category[language]} <ArrowIcon /></span></button>)}
        </div>
      </div>
      {active !== null && <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label={t.title} onMouseDown={event => { if (event.currentTarget === event.target) close() }}><button className="lightbox-close" onClick={close} aria-label={t.close}><CloseIcon /></button><button className="lightbox-nav previous" onClick={() => move(language === 'ar' ? 1 : -1)} aria-label={t.previous}><ArrowIcon /></button><figure><img src={galleryItems[active].src} alt={galleryItems[active].alt[language]} onError={hideBrokenImage} /><figcaption>{galleryItems[active].category[language]} · {active + 1}/{galleryItems.length}</figcaption></figure><button className="lightbox-nav next" onClick={() => move(language === 'ar' ? -1 : 1)} aria-label={t.next}><ArrowIcon /></button></div>}
    </section>
  )
}

function Booking({ language }: { language: Language }) {
  const t = copy[language].bookingSection
  return (
    <section className="section booking" id="booking" aria-labelledby="booking-title">
      <div className="shell booking-grid">
        <div className="booking-intro reveal">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="booking-title">{t.title}</h2>
          <p className="large-copy">{t.body}</p>
        </div>
        <div className="booking-card reveal">
          <a className="contact-line" href={whatsappHref(t.messageIntro)} target="_blank" rel="noreferrer">
            <PhoneIcon />
            <div>
              <h3>{t.whatsappLabel}</h3>
              <p dir="ltr">{salonConfig.whatsapp}</p>
            </div>
          </a>
          <a className="contact-line" href={salonConfig.emailHref}>
            <MailIcon />
            <div>
              <h3>{t.emailLabel}</h3>
              <p dir="ltr">{salonConfig.email}</p>
            </div>
          </a>
          <a className="button" href={whatsappHref(t.messageIntro)} target="_blank" rel="noreferrer">{t.submit}<ArrowIcon /></a>
          <SocialList language={language} />
        </div>
      </div>
    </section>
  )
}

function Contact({ language }: { language: Language }) {
  const t = copy[language].contact
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="shell"><div className="reveal"><p className="eyebrow">{t.eyebrow}</p><h2 id="contact-title">{t.title}</h2></div><div className="contact-grid reveal-group"><div className="contact-image reveal"><img src="/images/salon.jpg" width="1200" height="900" loading="lazy" alt={language === 'ar' ? 'مساحة صالون أنيقة للعناية بالشعر والتجميل' : 'An elegant salon interior prepared for hair and beauty care'} onError={hideBrokenImage} /><a href={salonConfig.mapsUrl} target="_blank" rel="noreferrer" className="map-button"><LocationIcon />{t.maps}<ArrowIcon /></a></div><div className="contact-details reveal"><article><LocationIcon /><div><h3>{t.locationLabel}</h3><p>{local(salonConfig.location, language)}<br />{local(salonConfig.landmark, language)}</p></div></article><article><ClockIcon /><div><h3>{t.hoursLabel}</h3><p>{local(salonConfig.hours.weekdays, language)}<br />{local(salonConfig.hours.friday, language)}</p></div></article><article><PhoneIcon /><div><h3>{t.contactLabel}</h3><a href={whatsappHref()} dir="ltr" target="_blank" rel="noreferrer">{salonConfig.whatsapp}</a><a href={salonConfig.emailHref} dir="ltr">{salonConfig.email}</a><SocialList language={language} /></div></article></div></div></div>
    </section>
  )
}

function Footer({ language, onLanguage }: { language: Language; onLanguage: () => void }) {
  const t = copy[language]
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link className="wordmark footer-mark" to="/">{salonConfig.wordmark}<span>{local(salonConfig.tagline, language)}</span></Link>
            <p>{t.footer.description}</p>
            <SocialList language={language} />
          </div>
          <div className="footer-nav">
            <h3>{language === 'ar' ? 'استكشفي' : 'Explore'}</h3>
            {navigation.map(item => <Link key={item.id} to={{ pathname: '/', hash: `#${item.id}` }}>{local(item.label, language)}</Link>)}
            <Link to="/shop">{t.shop.nav}</Link>
          </div>
          <div className="footer-contact">
            <h3>{t.contact.contactLabel}</h3>
            <a href={whatsappHref()} dir="ltr" target="_blank" rel="noreferrer">{salonConfig.whatsapp}</a>
            <a href={salonConfig.emailHref} dir="ltr">{salonConfig.email}</a>
            <p>{local(salonConfig.hours.weekdays, language)}<br />{local(salonConfig.hours.friday, language)}</p>
          </div>
          <a className="button button-light footer-book" href={whatsappHref(t.bookingSection.messageIntro)} target="_blank" rel="noreferrer">{t.booking}<ArrowIcon /></a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {salonConfig.wordmark}. {t.footer.rights}</p>
          <div>
            <Link className="footer-credit" to="/developer">{t.footer.credit} {developerConfig.name}</Link>
            <a href="#privacy">{t.footer.privacy}</a>
            <button type="button" onClick={onLanguage}>{t.language}</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

function DeveloperPage({ language, onLanguage }: { language: Language; onLanguage: () => void }) {
  const t = copy[language].developer
  const whatsappLink = developerWhatsappHref(t.whatsappMessage)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">{copy[language].skip}</a>
      <Header language={language} onLanguage={onLanguage} onMenuChange={() => undefined} solid />
      <main id="main" className="developer-page">
        <section className="developer-hero" aria-labelledby="developer-title">
          <div className="shell developer-hero-inner">
            <p className="eyebrow">{t.eyebrow}</p>
            <p className="developer-name">{developerConfig.name}</p>
            <h1 id="developer-title">{t.title}</h1>
            <p className="large-copy">{t.body}</p>
            <p className="developer-pitch">{t.pitch}</p>
            <div className="shop-actions">
              <a className="button" href={whatsappLink} target="_blank" rel="noreferrer">{t.cta}<ArrowIcon /></a>
              <a className="text-link light" href={developerConfig.githubUrl} target="_blank" rel="noreferrer">{t.secondaryCta}</a>
            </div>
            <p className="developer-phone" dir="ltr">{developerConfig.whatsapp}</p>
          </div>
        </section>

        <section className="developer-section" aria-labelledby="developer-offer">
          <div className="shell">
            <p className="eyebrow">{t.offerTitle}</p>
            <h2 id="developer-offer">{t.offerTitle}</h2>
            <div className="developer-offer-grid">
              {t.services.map(service => (
                <article className="developer-offer" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="developer-section developer-section-alt" aria-labelledby="developer-audience">
          <div className="shell developer-split">
            <div>
              <p className="eyebrow">{t.audienceTitle}</p>
              <h2 id="developer-audience">{t.audienceTitle}</h2>
              <ul className="developer-services">
                {t.audience.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <p className="eyebrow">{t.processTitle}</p>
              <h2 id="developer-process">{t.processTitle}</h2>
              <ol className="developer-process">
                {t.process.map((step, index) => (
                  <li key={step.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="developer-close" aria-labelledby="developer-close-title">
          <div className="shell developer-close-inner">
            <h2 id="developer-close-title">{t.closeTitle}</h2>
            <p className="large-copy">{t.closeBody}</p>
            <div className="shop-actions">
              <a className="button" href={whatsappLink} target="_blank" rel="noreferrer">{t.cta}<ArrowIcon /></a>
              <a className="text-link light" href={developerConfig.githubUrl} target="_blank" rel="noreferrer">{t.github}</a>
              <Link className="text-link light" to="/">{t.back}</Link>
            </div>
            <p className="developer-phone" dir="ltr">{developerConfig.whatsapp}</p>
          </div>
        </section>
      </main>
      <Footer language={language} onLanguage={onLanguage} />
    </>
  )
}

function ShopPage({ language, onLanguage }: { language: Language; onLanguage: () => void }) {
  const t = copy[language].shop
  const jumpLabels: Record<(typeof shopCollections)[number]['id'], string> = {
    care: t.jumpCare,
    shoes: t.jumpShoes,
    wigs: t.jumpWigs,
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">{copy[language].skip}</a>
      <Header language={language} onLanguage={onLanguage} onMenuChange={() => undefined} solid />
      <main id="main" className="shop-page">
        <section className="shop-hero" aria-labelledby="shop-title">
          <div className="shell shop-hero-inner">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="shop-title">{t.title}</h1>
            <p className="large-copy">{t.body}</p>
            <div className="shop-actions">
              <Link className="button" to="/">{t.cta}<ArrowIcon /></Link>
              <a className="text-link light" href={whatsappHref(copy[language].bookingSection.messageIntro)} target="_blank" rel="noreferrer">{copy[language].booking}</a>
            </div>
            <nav className="shop-jumps" aria-label={t.title}>
              {shopCollections.map(collection => (
                <a key={collection.id} href={`#shop-${collection.id}`}>{jumpLabels[collection.id]}</a>
              ))}
            </nav>
          </div>
        </section>
        <section className="shop-catalog" aria-label={t.title}>
          <div className="shell">
            {shopCollections.map(collection => (
              <div className="shop-collection" id={`shop-${collection.id}`} key={collection.id}>
                <h2 className="shop-collection-title">{local(collection.title, language)}</h2>
                <div className="shop-grid">
                  {collection.products.map(product => {
                    const name = local(product.name, language)
                    const message = `${t.whatsappMessage}\n${name}`
                    return (
                      <article className="shop-product" key={product.id}>
                        <div className="shop-product-media">
                          <img src={product.src} width="800" height="1000" loading="lazy" alt={local(product.alt, language)} onError={hideBrokenImage} />
                        </div>
                        <div className="shop-product-body">
                          <h3>{name}</h3>
                          <p>{t.priceNote}</p>
                          <a className="button button-small" href={whatsappHref(message)} target="_blank" rel="noreferrer">{t.askPrice}<ArrowIcon /></a>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer language={language} onLanguage={onLanguage} />
    </>
  )
}

function HomePage({ language, onLanguage }: { language: Language; onLanguage: () => void }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)
  const [bookingVisible, setBookingVisible] = useState(false)

  useEffect(() => {
    const id = location.hash.replace('#', '')
    if (!id) return
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [location.hash])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (reduced || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px' })
    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [language])

  useEffect(() => {
    const hero = document.getElementById('home')
    const booking = document.getElementById('booking')
    if (!hero || !booking) return
    const heroObserver = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), { threshold: 0.05 })
    const bookingObserver = new IntersectionObserver(([entry]) => setBookingVisible(entry.isIntersecting), { threshold: 0.08 })
    heroObserver.observe(hero)
    bookingObserver.observe(booking)
    return () => { heroObserver.disconnect(); bookingObserver.disconnect() }
  }, [])

  const showMobileBooking = !heroVisible && !bookingVisible && !menuOpen
  const whatsappRequest = whatsappHref(copy[language].bookingSection.messageIntro)

  return (
    <>
      <a className="skip-link" href="#main">{copy[language].skip}</a>
      <Header language={language} onLanguage={onLanguage} onMenuChange={setMenuOpen} />
      <main id="main">
        <Hero language={language} />
        <Introduction language={language} />
        <Services language={language} />
        <HomeVisit language={language} />
        <Transformation language={language} />
        <Gallery language={language} />
        <Booking language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} onLanguage={onLanguage} />
      <a className={`mobile-booking-bar ${showMobileBooking ? 'is-visible' : ''}`} aria-hidden={!showMobileBooking} tabIndex={showMobileBooking ? 0 : -1} href={whatsappRequest} target="_blank" rel="noreferrer">{copy[language].booking}<ArrowIcon /></a>
    </>
  )
}

function AppRoutes() {
  const location = useLocation()
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'ar')

  useEffect(() => {
    document.documentElement.classList.add('js-ready')
    return () => document.documentElement.classList.remove('js-ready')
  }, [])

  useEffect(() => {
    const metadata = location.pathname === '/shop'
      ? copy[language].shop.metadata
      : location.pathname === '/developer'
        ? copy[language].developer.metadata
        : copy[language].metadata
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.title = metadata.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'ar' ? 'ar_EG' : 'en_GB')
    const schema = document.getElementById('salon-schema')
    if (schema) schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BeautySalon', name: local(salonConfig.name, language), description: local(salonConfig.category, language), telephone: salonConfig.phone, email: salonConfig.email, address: { '@type': 'PostalAddress', streetAddress: local(salonConfig.landmark, language), addressLocality: local(salonConfig.location, language), addressCountry: 'EG' }, openingHours: ['Sa-Th 10:00-22:00', 'Fr 13:00-22:00'], sameAs: socialProfiles.map(profile => profile.href).filter(Boolean) })
    localStorage.setItem(LANGUAGE_KEY, language)
  }, [language, location.pathname])

  const toggleLanguage = () => setLanguage(value => value === 'ar' ? 'en' : 'ar')

  return (
    <Routes>
      <Route path="/" element={<HomePage language={language} onLanguage={toggleLanguage} />} />
      <Route path="/shop" element={<ShopPage language={language} onLanguage={toggleLanguage} />} />
      <Route path="/developer" element={<DeveloperPage language={language} onLanguage={toggleLanguage} />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Analytics />
    </BrowserRouter>
  )
}

export default App

