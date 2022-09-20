import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  onClick: () => void
}

function getVariantClasses(variant: ButtonProps['variant']) {
  if (variant === 'primary') {
    return 'border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
  }

  if (variant === 'secondary') {
    return 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500'
  }

  return ''
}

export function Button({ onClick, children, className = '', variant = 'primary' }: ButtonProps) {
  const baseClasses =
    'w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm'

  return (
    <button
      type="button"
      className={`${baseClasses} ${getVariantClasses(variant)} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
