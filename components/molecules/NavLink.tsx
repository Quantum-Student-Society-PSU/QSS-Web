'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative text-text-primary hover:text-accent transition-colors duration-300 font-medium",
        "after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5",
        "after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
        className
      )}
    >
      {children}
    </Link>
  )
}