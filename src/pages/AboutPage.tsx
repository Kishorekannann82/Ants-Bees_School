import { motion, type Variants, easeOut } from 'framer-motion'

import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import { leaders, schoolProfile, schoolValues } from '@/data/siteContent'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: easeOut },
  }),
}

const AboutPage = () => {
  return (
    <div className="space-y-24">
      <PageHeader
        eyebrow="About Ants N Bees"
        title="An inspired community of curious, compassionate learners"
        description="Founded with a deep belief in child-centred education, Ants N Bees School blends academic rigour with soulful experiences, preparing students to thrive in a rapidly evolving world."
        image="https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1400&auto=format&fit=crop"
      />

      <section>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="A boutique campus with a bold mission"
              description={schoolProfile.intro}
            />
            <div className="grid gap-4 text-brand-brown/75">
              <p>
                Our faculty, counsellors, and programme designers co-create enriched learning journeys that balance
                scholastic excellence with wellbeing. The campus is a living lab where purposeful technology, nature,
                and artistry meet.
              </p>
              <p>
                Parents choose Ants N Bees for its inclusive ethos, dynamic classrooms, and carefully curated
                extracurricular pathways that honour every child’s unique rhythm.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[3rem] bg-gradient-to-br from-brand-gold/10 via-white to-brand-cream p-8 shadow-[0_28px_70px_-28px_rgba(92,66,49,0.45)]"
          >
            <h3 className="font-display text-2xl text-brand-brown">What sets us apart</h3>
            <ul className="mt-6 space-y-4 text-sm text-brand-brown/80">
              {schoolProfile.differentiators.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-12 py-20 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-3xl border border-brand-gold/20 bg-brand-cream/40 p-8 shadow-glow"
          >
            <h3 className="font-display text-2xl text-brand-brown">Our Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-brown/75">{schoolProfile.vision}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="rounded-3xl border border-brand-gold/20 bg-white p-8 shadow-glow"
          >
            <h3 className="font-display text-2xl text-brand-brown">Our Mission</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-brown/75">{schoolProfile.mission}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="rounded-3xl border border-brand-gold/20 bg-brand-gold/10 p-8 shadow-glow"
          >
            <h3 className="font-display text-2xl text-brand-brown">Holistic Promise</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-brown/75">
              We champion intellectual agility, socio-emotional wellbeing, environmental stewardship, and future-ready
              skills in balance.
            </p>
          </motion.div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Guided by passionate educators and strategists"
            description="A core leadership team with decades of experience supports our faculty, mentors families, and shapes an evolving curriculum."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {leaders.map((leader, index) => (
              <motion.article
                key={leader.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="overflow-hidden rounded-3xl border border-brand-gold/15 bg-white shadow-xl shadow-brand-brown/10"
              >
                <div className="h-64 overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="font-display text-2xl text-brand-brown">{leader.name}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">{leader.role}</p>
                  <p className="text-sm text-brand-brown/75">{leader.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Values"
            title="The heartbeat of Ants N Bees"
            description="Our values inform every decision—from classroom rituals to community celebrations—and keep us aligned with our founding purpose."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {schoolValues.map((value, index) => (
              <motion.div
                key={value.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="group rounded-3xl border border-brand-gold/20 bg-white/90 p-8 shadow-glow transition-transform hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-xl text-brand-brown">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-brown/75">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutPage
