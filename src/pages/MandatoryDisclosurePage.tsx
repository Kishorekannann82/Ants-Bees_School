import { useState } from 'react'
import { motion, type Variants, easeOut } from 'framer-motion'

import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import PrimaryButton from '@/components/PrimaryButton'
import DisclosureAccordion from '@/components/DisclosureAccordion'
import { disclosureSections } from '@/data/siteContent'

const buttonVariants: Variants = {
  rest: { y: 0, boxShadow: '0 20px 40px -32px rgba(92, 66, 49, 0.45)' },
  hover: { y: -4, boxShadow: '0 30px 60px -32px rgba(92, 66, 49, 0.55)' },
  tap: { scale: 0.98 },
}

const MandatoryDisclosurePage = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSection = disclosureSections[activeIndex]

  return (
    <div className="space-y-24">
      <PageHeader
        eyebrow="Mandatory Disclosure"
        title="Transparency that nurtures trust"
        description="Our governance framework, infrastructure, and compliance records are shared with utmost clarity. Explore the certified documents that keep our community informed and assured."
        image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1600&auto=format&fit=crop"
      />

      <section>
        <Container>
          <SectionHeading
            eyebrow="Quick access"
            title="Certified documents at a glance"
            description="Tap a category to preview highlights before downloading the full disclosure dossier."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {disclosureSections.map((section, index) => {
              const isActive = index === activeIndex
              return (
                <motion.button
                  key={section.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  animate={isActive ? 'hover' : 'rest'}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className={`rounded-3xl border p-6 text-left transition-colors duration-300 ${
                    isActive
                      ? 'border-brand-gold bg-white text-brand-brown shadow-glow'
                      : 'border-brand-gold/20 bg-white/80 text-brand-brown/80 hover:border-brand-gold/40'
                  }`}
                >
                  <span className="text-xs uppercase tracking-[0.32em] text-brand-gold">Section</span>
                  <h3 className="mt-3 font-display text-xl text-brand-brown">{section.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm text-brand-brown/70">{section.details[0]}</p>
                </motion.button>
              )
            })}
          </div>

          <div className="mt-16 rounded-[3rem] border border-brand-gold/20 bg-white/95 p-10 shadow-[0_40px_120px_-60px_rgba(92,66,49,0.45)]">
            <h3 className="font-display text-2xl text-brand-brown">{activeSection.title}</h3>
            <ul className="mt-6 space-y-3 text-sm text-brand-brown/70">
              {activeSection.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold" />
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton to="/contact">Request Certified Copy</PrimaryButton>
              <PrimaryButton to="/admission" variant="ghost">
                Talk to Admissions
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Full disclosure"
            title="Downloadable compliance compendium"
            description="Detailed documents are refreshed annually and published for parent review and regulatory audits."
          />
          <div className="mt-12">
            <DisclosureAccordion items={disclosureSections} />
          </div>
        </Container>
      </section>
    </div>
  )
}

export default MandatoryDisclosurePage
