import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface ContainerProps {
  className?: string
}

const Container = ({ children, className }: PropsWithChildren<ContainerProps>) => {
  return <div className={clsx('mx-auto w-full max-w-6xl px-6 lg:px-12', className)}>{children}</div>
}

export default Container
