import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi'

import { navLinks, contactDetails } from '@/data/siteContent'

const socialIconMap: Record<string, JSX.Element> = {
  Facebook: <FiFacebook size={20} />,
  Instagram: <FiInstagram size={20} />,
  YouTube: <FiYoutube size={20} />,
  LinkedIn: <FiLinkedin size={20} />,
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-28 bg-gradient-to-br from-brand-brown via-brand-brown/95 to-brand-teal text-brand-cream">
      <div className="absolute inset-x-0 top-0 -translate-y-1/2">
        <div className="mx-auto h-24 w-24 rounded-full border-2 border-white/20 bg-brand-gold shadow-[0_30px_80px_-40px_rgba(201,162,77,0.65)]" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-18 pt-28 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/25 shadow-[0_20px_48px_-32px_rgba(0,0,0,0.35)]">
              <span className="font-display text-2xl text-brand-brown">A&B</span>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold">Ants N Bees School</p>
              <p className="text-xs uppercase tracking-[0.32em] text-brand-cream/70">Nurturing brilliance</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-brand-cream/80">
            Thiruvarur's premier CBSE school, where compassionate culture, future-ready academics, and joyful
            discovery weave every child’s success story.
          </p>
          <div className="flex items-center gap-4 text-brand-cream/70">
            {contactDetails.socialLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.08 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold"
              >
                {socialIconMap[item.label] ?? item.label}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold uppercase tracking-[0.32em]">Quick Links</h3>
          <ul className="space-y-3 text-sm text-brand-cream/75">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link className="transition-colors hover:text-brand-gold" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold uppercase tracking-[0.32em]">Contact</h3>
          <div className="space-y-3 text-sm text-brand-cream/80">
            <p>{contactDetails.address}</p>
            <p>
              <span className="font-semibold text-brand-cream">Phone:</span> {contactDetails.phone}
            </p>
            <p>
              <span className="font-semibold text-brand-cream">Email:</span> {contactDetails.email}
            </p>
            <p>{contactDetails.officeHours}</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold uppercase tracking-[0.32em]">Visit Us</h3>
          <div className="overflow-hidden rounded-3xl border border-white/15 shadow-[0_28px_70px_-32px_rgba(0,0,0,0.4)]">
            <iframe
              title="Ants N Bees School Location"
              src={contactDetails.mapEmbedUrl}
              className="h-48 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs uppercase tracking-[0.3em] text-brand-cream/70 lg:flex-row lg:px-12">
          <p>© {currentYear} Ants N Bees Educational Trust. All rights reserved.</p>
          <p>Crafted with care for thriving learners.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
