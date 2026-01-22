import { motion, easeOut } from 'framer-motion'
import type { PropsWithChildren } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const fadeVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  children,
}: PropsWithChildren<SectionHeadingProps>) => {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignment}`}
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">{eyebrow}</span>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-brand-brown md:text-4xl">{title}</h2>
      {description ? <p className="text-lg text-brand-brown/80">{description}</p> : null}
      {children}
    </motion.div>
  )
}

export default SectionHeading
