import { motion, type Variants, easeOut } from 'framer-motion'

import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import PrimaryButton from '@/components/PrimaryButton'
import {
  teachers,
  literaryActivities,
  coCurricularActivities,
  academicHighlights,
} from '@/data/siteContent'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: easeOut },
  }),
}

const AcademicsPage = () => {
  return (
    <div className="space-y-24">
      <PageHeader
        eyebrow="Academics"
        title="Academic distinction rooted in curiosity and care"
        description="A synergistic academic framework nurtures critical thinking, creativity, collaboration, and character. Our educators guide every learner with personalised feedback and transformational experiences."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop"
      />

      <section>
        <Container>
          <SectionHeading
            eyebrow="Faculty Excellence"
            title="Meet the mentors shaping bright futures"
            description="Our teachers are facilitators, researchers, and passionate storytellers who cultivate joyful rigour across every grade."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher, index) => (
              <motion.article
                key={teacher.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="overflow-hidden rounded-3xl border border-brand-gold/15 bg-white shadow-glow"
              >
                <div className="h-60 overflow-hidden">
                  <img src={teacher.image} alt={teacher.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="font-display text-xl text-brand-brown">{teacher.name}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">{teacher.subject}</p>
                  <p className="text-sm text-brand-brown/70">
                    Certified facilitator guiding students through experiential projects, interdisciplinary dialogues, and purposeful assessments.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Beyond textbooks"
            title="Literary brilliance"
            description="We elevate language confidence through immersive platforms that celebrate voice, perspective, and storytelling."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {literaryActivities.map((activity, index) => (
              <motion.div
                key={activity}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="rounded-3xl border border-brand-gold/20 bg-brand-cream/40 p-8 shadow-glow"
              >
                <p className="text-base text-brand-brown/75">{activity}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Co-curricular pathways"
            title="Balanced horizons"
            description="Hands-on studios, athletic pursuits, and maker spaces cultivate leadership, empathy, and grit."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coCurricularActivities.map((activity, index) => (
              <motion.div
                key={activity}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="rounded-3xl border border-brand-gold/15 bg-white/95 p-8 shadow-[0_28px_70px_-32px_rgba(92,66,49,0.45)]"
              >
                <h3 className="font-display text-xl text-brand-brown">Signature Programme</h3>
                <p className="mt-4 text-sm text-brand-brown/75">{activity}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Academic Excellence"
            title="Celebrating student achievements"
            description="From board results to global collaborations, our scholars excel in academics, innovation, and service."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {academicHighlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="rounded-3xl border border-brand-gold/20 bg-white p-8 shadow-lg shadow-brand-brown/10"
              >
                <p className="text-base text-brand-brown/75">{highlight}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <PrimaryButton to="/contact">Meet the Academic Team</PrimaryButton>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AcademicsPage
