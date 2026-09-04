import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Star } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Doctor', href: '/doctor' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'News & Awards', href: '/news-update' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  { label: 'Metal Braces', href: '/services/metal-braces' },
  { label: 'Invisalign', href: '/services/invisalign-clear-aligners' },
  { label: 'Dental Implants', href: '/services/dental-implants' },
  { label: 'Root Canal', href: '/services/root-canal-treatment' },
  { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
  { label: 'Smile Makeover', href: '/services/smile-makeover' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="text-lg font-bold tracking-widest text-white uppercase">World Class</p>
              <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Dental Clinic</p>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Premium orthodontic and dental care in Pune, led by Dr. Priyanka Saokar Navale (BDS, MDS Orthodontics).
            </p>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" aria-hidden="true" />
              ))}
              <span className="ml-2 text-sm text-neutral-400">5/5 Google Rating</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Treatments</h3>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-neutral-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919503008228"
                  className="flex items-start gap-3 text-sm text-neutral-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  aria-label="Call +91 9503008228"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>+91 9503008228<br />+91 7387040464</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:drpriyankasavkar@gmail.com"
                  className="flex items-start gap-3 text-sm text-neutral-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  drpriyankasavkar@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <address className="not-italic">
                  Shreeyash Hospital, 759/53, 1st Floor,<br />
                  Fergusson College Road, Deccan Gymkhana,<br />
                  Pune 411004
                </address>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <span>Mon – Sun: 9:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {year} World Class Dental Clinic, Pune. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/worldclassdentalclinicpune"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-neutral-500 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/worldclassdentalclinicpune"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="text-neutral-500 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="text-xs text-neutral-500 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
