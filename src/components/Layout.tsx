import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
}

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-quart',
      once: true,
      offset: 80,
    })
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="relative flex min-h-screen flex-col bg-brand-cream text-brand-brown">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 pt-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default Layout
