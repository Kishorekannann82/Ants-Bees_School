import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { PropsWithChildren } from 'react'

interface PrimaryButtonProps {
  to: string
  variant?: 'solid' | 'ghost'
  className?: string
}

const buttonVariants = {
  rest: { y: 0, boxShadow: '0 18px 36px -22px rgba(201, 162, 77, 0.6)' },
  hover: { y: -4, boxShadow: '0 24px 48px -24px rgba(47, 107, 95, 0.45)' },
  tap: { scale: 0.97 },
}

const variantClasses: Record<NonNullable<PrimaryButtonProps['variant']>, string> = {
  solid:
    'bg-brand-gold text-white hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-teal focus-visible:ring-brand-teal/50',
  ghost:
    'border border-brand-gold text-brand-brown hover:border-brand-teal hover:text-brand-teal hover:bg-brand-gold/10 focus-visible:ring-brand-gold/40',
}

export const PrimaryButton = ({ to, variant = 'solid', className = '', children }: PropsWithChildren<PrimaryButtonProps>) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2'

  const resolvedVariant = variantClasses[variant] ?? variantClasses.solid

  return (
    <motion.div variants={buttonVariants} initial="rest" whileHover="hover" whileTap="tap" className={className}>
      <Link className={`${baseStyles} ${resolvedVariant}`} to={to}>
        {children}
      </Link>
    </motion.div>
  )
}

export default PrimaryButton
