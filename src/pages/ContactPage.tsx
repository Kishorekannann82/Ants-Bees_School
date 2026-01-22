import { useState } from 'react'
import { motion, easeOut } from 'framer-motion'
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import PrimaryButton from '@/components/PrimaryButton'
import { contactDetails } from '@/data/siteContent'

const initialFormState = {
  studentName: '',
  parentName: '',
  classApplying: '',
  phone: '',
  email: '',
  message: '',
}

type FormState = typeof initialFormState

type FormErrors = Partial<Record<keyof FormState, string>>

const ContactPage = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (data: FormState): FormErrors => {
    const newErrors: FormErrors = {}

    if (!data.studentName.trim()) newErrors.studentName = 'Please enter the student’s name.'
    if (!data.parentName.trim()) newErrors.parentName = 'Please share the parent/guardian name.'

    if (!data.classApplying.trim()) newErrors.classApplying = 'Select a class to help us tailor information.'

    if (!data.phone.trim()) {
      newErrors.phone = 'A contact number helps us reach you quickly.'
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(data.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.'
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required for sending follow-up details.'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!data.message.trim()) newErrors.message = 'Share a brief message so we can assist you better.'

    return newErrors
  }

  const handleChange = (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [key]: event.target.value }))
    }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validation = validate(formData)
    setErrors(validation)

    if (Object.keys(validation).length === 0) {
      setIsSubmitted(true)
      setTimeout(() => {
        setFormData(initialFormState)
        setIsSubmitted(false)
      }, 2500)
    }
  }

  return (
    <div className="space-y-24">
      <PageHeader
        eyebrow="Contact"
        title="Let’s co-create the ideal learning journey"
        description="Reach out to our admissions and parent engagement team for personalised consultations, campus tours, and programme insights."
        image="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop"
      />

      <section>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Visit & Connect"
              title="We’re here to guide you"
              description="Drop by our campus, schedule a guided tour, or speak with our counsellors to explore programmes and enrolment steps."
            />
            <div className="grid gap-6 rounded-3xl border border-brand-gold/20 bg-white/90 p-8 shadow-glow">
              <div className="flex gap-4">
                <FiMapPin size={24} className="mt-1 text-brand-gold" />
                <div>
                  <h3 className="font-display text-lg text-brand-brown">Campus Address</h3>
                  <p className="mt-1 text-sm text-brand-brown/75">{contactDetails.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiPhone size={22} className="mt-1 text-brand-gold" />
                <div>
                  <h3 className="font-display text-lg text-brand-brown">Phone</h3>
                  <p className="mt-1 text-sm text-brand-brown/75">{contactDetails.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiMail size={22} className="mt-1 text-brand-gold" />
                <div>
                  <h3 className="font-display text-lg text-brand-brown">Email</h3>
                  <p className="mt-1 text-sm text-brand-brown/75">{contactDetails.email}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-brown/60">
                    Admissions: {contactDetails.admissionsEmail}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-brand-brown">Office Hours</h3>
                <p className="mt-1 text-sm text-brand-brown/75">{contactDetails.officeHours}</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-brand-gold/20">
                <iframe
                  title="Google Map Ants N Bees School"
                  src={contactDetails.mapEmbedUrl}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div>
              <PrimaryButton to="/admission">Apply for Admission</PrimaryButton>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="space-y-6 rounded-[3rem] border border-brand-gold/20 bg-white p-8 shadow-[0_40px_120px_-60px_rgba(92,66,49,0.45)]"
          >
            <div className="space-y-4">
              <label className="block text-sm font-semibold uppercase tracking-[0.28em] text-brand-brown">
                Student Name
                <input
                  type="text"
                  value={formData.studentName}
                  onChange={handleChange('studentName')}
                  className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40 ${
                    errors.studentName ? 'border-red-400' : 'border-brand-gold/30'
                  }`}
                  placeholder="Enter student name"
                  aria-invalid={Boolean(errors.studentName)}
                  aria-describedby={errors.studentName ? 'error-student-name' : undefined}
                />
              </label>
              {errors.studentName ? (
                <p id="error-student-name" className="text-xs text-red-500">
                  {errors.studentName}
                </p>
              ) : null}
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-semibold uppercase tracking-[0.28em] text-brand-brown">
                Parent / Guardian Name
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={handleChange('parentName')}
                  className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40 ${
                    errors.parentName ? 'border-red-400' : 'border-brand-gold/30'
                  }`}
                  placeholder="Enter parent/guardian name"
                  aria-invalid={Boolean(errors.parentName)}
                  aria-describedby={errors.parentName ? 'error-parent-name' : undefined}
                />
              </label>
              {errors.parentName ? (
                <p id="error-parent-name" className="text-xs text-red-500">
                  {errors.parentName}
                </p>
              ) : null}
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-semibold uppercase tracking-[0.28em] text-brand-brown">
                Class Applying For
                <select
                  value={formData.classApplying}
                  onChange={handleChange('classApplying')}
                  className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40 ${
                    errors.classApplying ? 'border-red-400' : 'border-brand-gold/30'
                  }`}
                  aria-invalid={Boolean(errors.classApplying)}
                  aria-describedby={errors.classApplying ? 'error-class-applying' : undefined}
                >
                  <option value="">Select class</option>
                  <option value="Pre-KG">Pre-KG</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="Grade I">Grade I</option>
                  <option value="Grade II">Grade II</option>
                  <option value="Grade III">Grade III</option>
                  <option value="Grade IV">Grade IV</option>
                  <option value="Grade V">Grade V</option>
                  <option value="Grade VI">Grade VI</option>
                  <option value="Grade VII">Grade VII</option>
                  <option value="Grade VIII">Grade VIII</option>
                </select>
              </label>
              {errors.classApplying ? (
                <p id="error-class-applying" className="text-xs text-red-500">
                  {errors.classApplying}
                </p>
              ) : null}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <label className="block text-sm font-semibold uppercase tracking-[0.28em] text-brand-brown">
                  Phone
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40 ${
                      errors.phone ? 'border-red-400' : 'border-brand-gold/30'
                    }`}
                    placeholder="e.g. +91 90254 12345"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                  />
                </label>
                {errors.phone ? (
                  <p id="error-phone" className="text-xs text-red-500">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-semibold uppercase tracking-[0.28em] text-brand-brown">
                  Email
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40 ${
                      errors.email ? 'border-red-400' : 'border-brand-gold/30'
                    }`}
                    placeholder="name@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                  />
                </label>
                {errors.email ? (
                  <p id="error-email" className="text-xs text-red-500">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-semibold uppercase tracking-[0.28em] text-brand-brown">
                Message
                <textarea
                  value={formData.message}
                  onChange={handleChange('message')}
                  rows={4}
                  className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/40 ${
                    errors.message ? 'border-red-400' : 'border-brand-gold/30'
                  }`}
                  placeholder="Share your questions or specific requirements"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                />
              </label>
              {errors.message ? (
                <p id="error-message" className="text-xs text-red-500">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_28px_60px_-24px_rgba(197,154,59,0.6)] hover:bg-brand-brown"
            >
              Submit Enquiry
              <FiSend />
            </motion.button>
            {isSubmitted ? (
              <p className="text-center text-sm font-semibold text-brand-brown">
                Thank you! Our admissions team will reach out within one business day.
              </p>
            ) : null}
          </motion.form>
        </Container>
      </section>
    </div>
  )
}

export default ContactPage
