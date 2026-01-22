import { useState } from 'react'
import { AnimatePresence, motion, type Variants, easeOut } from 'framer-motion'
import { FiX, FiAward, FiStar } from 'react-icons/fi'

import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import PrimaryButton from '@/components/PrimaryButton'
import {
  galleryImages,
  eventHighlights,
  achievementHighlights,
  awardsAccolades,
  eventTimeline,
} from '@/data/siteContent'

const gridVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: easeOut },
  }),
}

const timelineVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: easeOut },
  }),
}

const EventsPage = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const activeImage = typeof activeImageIndex === 'number' ? galleryImages[activeImageIndex] : null

  return (
    <div className="space-y-24">
      <PageHeader
        eyebrow="Events & Celebrations"
        title="Dynamic experiences that shape confident global citizens"
        description="Our calendar is choreographed with discovery labs, cultural pursuits, competitions, and service learning—each moment curated to inspire purpose and joy."
        image="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1100&fit=crop"
      />

      <section>
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="Immersive glimpses from campus life"
            description="Hover to explore highlights; tap any image for a closer look at the energy and artistry on campus."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                custom={index}
                variants={gridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                onClick={() => setActiveImageIndex(index)}
                className="group relative h-64 overflow-hidden rounded-3xl border border-brand-gold/20 bg-white shadow-glow"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-brown/70 via-brand-brown/10 to-transparent p-4 text-left">
                  <span className="text-sm font-semibold text-brand-cream">{image.caption}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-brown/80 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              className="absolute right-6 top-6 rounded-full border border-brand-gold/40 bg-white/90 p-2 text-brand-brown shadow-lg"
              aria-label="Close gallery preview"
            >
              <FiX size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className="max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-brand-gold/30 bg-white shadow-[0_60px_120px_-40px_rgba(0,0,0,0.4)]"
            >
              <img src={activeImage.src} alt={activeImage.caption} className="h-full w-full object-cover" loading="lazy" />
              <div className="p-6 text-center text-brand-brown">
                <p className="text-lg font-semibold">{activeImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Signature Events"
            title="Curated seasons of excellence"
            description="Each term unfolds with themed immersions—from innovation showcases to cultural soirées—that celebrate student voice and leadership."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {eventHighlights.map((event, index) => (
              <motion.div
                key={event.title}
                custom={index}
                variants={gridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="rounded-3xl border border-brand-gold/20 bg-brand-cream/40 p-8 shadow-glow"
              >
                <span className="text-xs uppercase tracking-[0.32em] text-brand-gold">{event.date}</span>
                <h3 className="mt-3 font-display text-xl text-brand-brown">{event.title}</h3>
                <p className="mt-4 text-sm text-brand-brown/75">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Achievements"
                title="Honours that reflect dedication"
                description="Our students consistently earn distinctions in academics, design thinking, athletics, and community leadership programmes."
              />
              <div className="mt-10 space-y-6">
                {achievementHighlights.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    custom={index}
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex gap-4 rounded-3xl border border-brand-gold/20 bg-white p-6 shadow-glow"
                  >
                    <div className="mt-1 text-brand-gold">
                      <FiStar size={26} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-brand-brown">{achievement.title}</h3>
                      <p className="mt-2 text-sm text-brand-brown/75">{achievement.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] border border-brand-gold/20 bg-brand-cream/50 p-8 shadow-[0_32px_80px_-40px_rgba(92,66,49,0.45)]">
              <h3 className="font-display text-2xl text-brand-brown">Awards & Accolades</h3>
              <div className="mt-8 space-y-5">
                {awardsAccolades.map((award) => (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    className="flex gap-4 rounded-2xl border border-brand-gold/20 bg-white/90 p-5"
                  >
                    <div className="mt-1 text-brand-gold">
                      <FiAward size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-brown">{award.title}</h4>
                      <p className="text-sm text-brand-brown/70">{award.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10">
                <PrimaryButton to="/contact" variant="solid">
                  Partner With Us
                </PrimaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Chronicles"
            title="Year-on-year milestones"
            description="Our timeline charts signature themes, partnerships, and transformational experiences."
          />
          <div className="relative mt-12 flex flex-col gap-8 border-l border-brand-gold/30 pl-8 sm:pl-12">
            {eventTimeline.map((entry, index) => (
              <motion.div
                key={entry.title}
                custom={index}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="relative"
              >
                <span className="absolute -left-[39px] flex h-7 w-7 items-center justify-center rounded-full border border-brand-gold/50 bg-white text-xs font-semibold text-brand-gold">
                  {entry.year}
                </span>
                <div className="rounded-3xl border border-brand-gold/20 bg-white p-6 shadow-glow">
                  <h3 className="font-display text-lg text-brand-brown">{entry.title}</h3>
                  <p className="mt-3 text-sm text-brand-brown/75">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default EventsPage
