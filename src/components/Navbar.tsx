import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

import { navLinks } from '@/data/siteContent'
import type { NavLinkItem } from '@/data/siteContent'
import PrimaryButton from './PrimaryButton'

const mobileVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `relative text-sm font-semibold uppercase tracking-[0.26em] transition-colors duration-300 ${
    isActive ? 'text-brand-teal' : 'text-brand-taupe hover:text-brand-teal'
  }`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClasses = `sticky top-0 z-50 border-b transition-all duration-300 ${
    isScrolled
      ? 'border-brand-divider/70 bg-white/85 shadow-[0_16px_40px_-24px_rgba(74,55,40,0.35)] backdrop-blur-xl'
      : 'border-transparent bg-white/70 backdrop-blur-lg'
  }`

  return (
    <motion.header
      className={headerClasses}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4 lg:gap-12 lg:px-12">
        <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/20 shadow-[0_18px_36px_-24px_rgba(201,162,77,0.6)]">
            <span className="font-display text-2xl text-brand-brown">A&B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-semibold text-brand-brown">Ants N Bees</span>
            <span className="font-display text-xl font-semibold text-brand-brown">School</span>
            <span className="text-xs font-medium uppercase tracking-[0.36em] text-brand-muted">Nurturing Brilliance</span>
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-10 lg:flex">
          {navLinks.map((item: NavLinkItem) => (
            <NavLink key={item.path} to={item.path} className={navLinkClasses}>
              <span className="relative px-1 py-1">
                {item.label}
                {location.pathname === item.path ? (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-brand-teal"
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                  />
                ) : null}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <PrimaryButton to="/admission">Enroll Now</PrimaryButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-divider/70 text-brand-brown transition-all duration-300 hover:border-brand-teal hover:text-brand-teal lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle site navigation"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            key="mobile-nav"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileVariants}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="border-t border-brand-divider/70 bg-white/95 px-6 pb-8 pt-4 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((item: NavLinkItem) => (
                <li key={item.path}>
                  <NavLink to={item.path} className={navLinkClasses} onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <PrimaryButton to="/admission" className="w-full justify-center">
                Enroll Now
              </PrimaryButton>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
