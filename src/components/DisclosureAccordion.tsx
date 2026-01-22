import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

interface DisclosureAccordionProps {
  items: { title: string; details: string[] }[]
}

const DisclosureAccordion = ({ items }: DisclosureAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <motion.div
            key={item.title}
            layout
            className="overflow-hidden rounded-3xl border border-brand-gold/20 bg-white/90 shadow-glow"
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`disclosure-panel-${index}`}
            >
              <span className="text-lg font-semibold text-brand-brown">{item.title}</span>
              <span className="rounded-full border border-brand-gold/30 p-2 text-brand-gold">
                {isOpen ? <FiMinus /> : <FiPlus />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`disclosure-panel-${index}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="px-6 pb-6"
                >
                  <ul className="list-disc space-y-2 pl-5 text-sm text-brand-brown/75">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

export default DisclosureAccordion
