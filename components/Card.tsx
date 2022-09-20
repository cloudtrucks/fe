import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return <div className={`bg-white rounded-lg p-8 mt-8 ${className}`}>{children}</div>
}
