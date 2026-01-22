import { motion, type Variants, easeInOut } from 'framer-motion'

const shimmerVariants: Variants = {
  animate: {
    opacity: [0.18, 0.35, 0.18],
    scale: [0.95, 1.05, 0.95],
    rotate: [0, 12, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
}

const BackgroundAura = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      variants={shimmerVariants}
      animate="animate"
      className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-gold/20 blur-[120px]"
    />
    <motion.div
      variants={shimmerVariants}
      animate="animate"
      className="absolute right-[-120px] top-[30%] h-96 w-96 rounded-full bg-brand-forest/15 blur-[140px]"
      transition={{ delay: 3 }}
    />
    <motion.div
      variants={shimmerVariants}
      animate="animate"
      className="absolute bottom-[-160px] left-[20%] h-96 w-96 rounded-full bg-brand-gold/15 blur-[140px]"
      transition={{ delay: 6 }}
    />
  </div>
)

export default BackgroundAura
