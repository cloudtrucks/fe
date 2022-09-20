import React from 'react'

interface HeaderProps {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <div className="bg-gray-500 text-white">
      <div className="container mx-auto p-4">{children}</div>
    </div>
  )
}
