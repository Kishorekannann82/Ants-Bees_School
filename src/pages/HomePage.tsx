import { motion, type Variants, easeOut } from 'framer-motion'
import { FaSeedling, FaHandsHelping, FaPuzzlePiece, FaShieldAlt } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import PrimaryButton from '@/components/PrimaryButton'
import BackgroundAura from '@/components/BackgroundAura'
import {
  heroContent,
  whyChooseUs,
  classesOffered,
  facilities,
  testimonials,
} from '@/data/siteContent'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: easeOut },
  }),
}

const iconPalette = [
  <FaSeedling key="seed" className="h-8 w-8 text-brand-gold" />,
  <FaHandsHelping key="hands" className="h-8 w-8 text-brand-gold" />,
  <FaPuzzlePiece key="puzzle" className="h-8 w-8 text-brand-gold" />,
  <FaShieldAlt key="shield" className="h-8 w-8 text-brand-gold" />,
]

const HomePage = () => {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden bg-white">
        <BackgroundAura />
        <Container className="relative z-10 grid items-center gap-16 pt-16 pb-24 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
              {heroContent.eyebrow}
            </span>
            <h1 className="font-display text-4xl leading-tight text-brand-brown sm:text-5xl lg:text-6xl">
              {heroContent.title}
            </h1>
            <p className="max-w-2xl text-lg text-brand-brown/80 sm:text-xl">{heroContent.tagline}</p>
            <p className="max-w-2xl text-base text-brand-brown/75">{heroContent.description}</p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <PrimaryButton to={heroContent.primaryCta.to}>{heroContent.primaryCta.label}</PrimaryButton>
              <PrimaryButton variant="ghost" to={heroContent.secondaryCta.to}>
                {heroContent.secondaryCta.label}
              </PrimaryButton>
            </div>
            <div className="grid gap-6 pt-10 sm:grid-cols-2">
              {heroContent.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-3xl border border-brand-gold/20 bg-white/80 p-6 shadow-glow"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <p className="font-display text-3xl text-brand-gold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-brand-brown/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[420px] w-full max-w-[420px] rounded-[3rem] bg-gradient-to-br from-brand-gold/10 via-white to-brand-cream p-6 shadow-[0_32px_80px_-32px_rgba(92,66,49,0.45)]">
              <div className="absolute inset-4 rounded-[2.5rem] border border-brand-gold/20" />
              <div className="relative h-full overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop"
                  alt="Students exploring in a discovery lab"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 p-5 shadow-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">Holistic learning</p>
                  <p className="mt-2 text-sm text-brand-brown/85">
                    Inquiry-led classrooms, curated experiences, and a compassionate culture that celebrates every child.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Why families trust us"
            title="Rooted in values, designed for tomorrow"
            description="Every element—from faculty excellence to innovation labs—is choreographed to spark curiosity, nurture empathy, and elevate achievement."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group rounded-3xl border border-brand-gold/15 bg-white/90 p-8 shadow-glow transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/10">
                  {iconPalette[index % iconPalette.length]}
                </div>
                <h3 className="font-display text-2xl text-brand-brown">{item.title}</h3>
                <p className="mt-4 text-base text-brand-brown/75">{item.description}</p>
                <div className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
                  Learn more
                  <FiArrowUpRight className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-24">
          <SectionHeading
            eyebrow="Our programmes"
            title="Curated pathways for every age"
            description="From sensorial starters to future-ready middle school, each programme blends academic depth with joyful discovery."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {classesOffered.map((cls, index) => (
              <motion.article
                key={cls.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex h-full flex-col rounded-3xl border border-brand-gold/15 bg-brand-cream/40 p-6 shadow-[0_20px_60px_-40px_rgba(92,66,49,0.6)] transition-transform hover:-translate-y-2"
              >
                <h3 className="font-display text-xl text-brand-brown">{cls.name}</h3>
                <p className="mt-4 flex-1 text-sm text-brand-brown/75">{cls.summary}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.3em] text-brand-gold">Dynamic Curriculum</div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Campus highlights"
            title="Spaces that inspire wonder"
            description="Our boutique campus combines nature, technology, and design thinking. Every corner is an invitation to explore."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              {facilities.slice(0, 2).map((facility, index) => (
                <motion.div
                  key={facility.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-3xl border border-brand-gold/15 bg-white/90 p-8 shadow-glow"
                >
                  <h3 className="font-display text-2xl text-brand-brown">{facility.title}</h3>
                  <p className="mt-4 text-base text-brand-brown/75">{facility.detail}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {facilities.slice(2).map((facility, index) => (
                <motion.div
                  key={facility.title}
                  custom={index + 2}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-3xl border border-brand-gold/15 bg-brand-gold/5 p-8 shadow-glow"
                >
                  <h3 className="font-display text-2xl text-brand-brown">{facility.title}</h3>
                  <p className="mt-4 text-base text-brand-brown/75">{facility.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream">
        <Container className="py-24">
          <SectionHeading
            eyebrow="Parent voices"
            title="Stories choreographed with joy"
            description="Our community trusts us to deliver rigorous academics, heartfelt care, and experiences that shape confident learners."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex h-full flex-col rounded-3xl border border-brand-gold/15 bg-white p-8 shadow-xl shadow-brand-brown/10"
              >
                <p className="text-lg text-brand-brown/80">“{testimonial.quote}”</p>
                <div className="mt-6 border-t border-brand-gold/20 pt-4 text-sm font-semibold text-brand-brown">
                  {testimonial.name}
                </div>
                <span className="text-xs uppercase tracking-[0.28em] text-brand-brown/60">{testimonial.relation}</span>
              </motion.blockquote>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <PrimaryButton to="/contact">Schedule a visit</PrimaryButton>
          </div>
        </Container>
      </section>

      <section>
        <Container className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-brand-forest/95 to-brand-brown text-brand-cream shadow-[0_32px_80px_-24px_rgba(39,95,78,0.6)]">
          <div className="grid gap-10 px-8 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-16">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em]">
                Admissions 2026 – 27
              </span>
              <h2 className="font-display text-3xl lg:text-4xl">Begin a remarkable learning journey</h2>
              <p className="text-sm text-brand-cream/80">
                We offer guided campus tours, personalised programme guidance, and a concierge onboarding experience for
                every family.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <PrimaryButton to="/admission" variant="solid">
                  Apply for Admission
                </PrimaryButton>
                <PrimaryButton to="/contact" variant="ghost" className="border-white/40 text-brand-cream">
                  Speak with counsellor
                </PrimaryButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/10" />
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
                alt="Students celebrating success"
                className="relative rounded-[2.5rem] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default HomePage
