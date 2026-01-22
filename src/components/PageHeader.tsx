import { motion, easeOut } from 'framer-motion'
import Container from './Container'
import BackgroundAura from './BackgroundAura'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description: string
  image?: string
}

const PageHeader = ({ eyebrow, title, description, image }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden bg-white">
      <BackgroundAura />
      <Container className="relative z-10 grid items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="space-y-6"
        >
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="font-display text-4xl text-brand-brown md:text-5xl">{title}</h1>
          <p className="text-lg text-brand-brown/75 md:text-xl">{description}</p>
        </motion.div>
        {image ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative"
          >
            <div className="absolute inset-4 rounded-[2.5rem] border border-brand-gold/20" />
            <img
              src={image}
              alt="Page visual"
              className="relative h-full w-full rounded-[2.5rem] object-cover shadow-[0_32px_70px_-24px_rgba(92,66,49,0.45)]"
              loading="lazy"
            />
          </motion.div>
        ) : null}
      </Container>
    </section>
  )
}

export default PageHeader
