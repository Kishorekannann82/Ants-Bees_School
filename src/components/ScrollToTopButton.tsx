import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          key="scroll-to-top"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-brand-gold p-3 text-white shadow-xl shadow-brand-gold/40 transition-transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export default ScrollToTopButton
