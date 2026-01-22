import { motion, type Variants, easeOut } from 'framer-motion'

import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import PrimaryButton from '@/components/PrimaryButton'
import { admissionProcess, admissionRules, classTimings } from '@/data/siteContent'

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: easeOut },
  }),
}

const AdmissionPage = () => {
  return (
    <div className="space-y-24">
      <PageHeader
        eyebrow="Admissions"
        title="A personalised onboarding experience for every family"
        description="Our admissions team partners with you through every step—from inquiry to first day—ensuring a transparent, warm, and timely process."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
      />

      <section>
        <Container>
          <SectionHeading
            eyebrow="Admission Journey"
            title="Four-step pathway to enrollment"
            description="We maintain small class sizes and curated cohorts. Follow the steps below to secure your child’s seat."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {admissionProcess.map((step, index) => (
              <motion.article
                key={step.title}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="rounded-3xl border border-brand-gold/20 bg-white/90 p-8 shadow-glow"
              >
                <span className="text-xs uppercase tracking-[0.36em] text-brand-gold">Step {index + 1}</span>
                <h3 className="mt-3 font-display text-xl text-brand-brown">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-brown/75">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Admission Guidelines"
            title="Important eligibility & documentation"
            description="We recommend reviewing the following guidelines before submitting your application form."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="space-y-4 rounded-3xl border border-brand-gold/20 bg-brand-cream/40 p-8 shadow-glow"
            >
              {admissionRules.map((rule) => (
                <li key={rule} className="flex gap-3 text-sm text-brand-brown/75">
                  <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold" />
                  {rule}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="rounded-3xl border border-brand-gold/20 bg-white/95 p-8 shadow-[0_40px_120px_-60px_rgba(92,66,49,0.45)]"
            >
              <h3 className="font-display text-2xl text-brand-brown">Class Timings</h3>
              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-gold/15">
                <table className="w-full table-auto divide-y divide-brand-gold/15 text-left text-sm text-brand-brown/80">
                  <thead className="bg-brand-gold/10 text-xs uppercase tracking-[0.28em] text-brand-brown/70">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Class</th>
                      <th className="px-4 py-3 font-semibold">Timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classTimings.map((item, index) => (
                      <tr key={item.className} className={index % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                        <td className="px-4 py-3 font-semibold text-brand-brown">{item.className}</td>
                        <td className="px-4 py-3">{item.timing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-brand-brown/60">
                Extended day programme available on request
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-brand-gold/90 via-brand-brown to-brand-forest text-brand-cream shadow-[0_40px_120px_-60px_rgba(197,154,59,0.65)]">
          <div className="grid gap-10 px-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="space-y-5"
            >
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.36em]">
                Concierge support
              </span>
              <h2 className="font-display text-3xl lg:text-4xl">Ready to begin your Ants N Bees journey?</h2>
              <p className="text-sm text-brand-cream/80">
                Book a discovery call with our admissions concierge for personalised programme recommendations, fee
                clarifications, and campus tour scheduling.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <PrimaryButton to="/contact" variant="ghost" className="border-white/50 text-brand-cream">
                  Book a Discovery Call
                </PrimaryButton>
                <PrimaryButton to="/admission">Apply for Admission</PrimaryButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-8"
            >
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop"
                alt="Admissions discussion"
                className="h-full w-full rounded-[1.8rem] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AdmissionPage
