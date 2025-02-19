'use client'

import React from 'react'
import type { FC, ReactNode } from 'react'

interface UtilityLayoutProps {
  children: ReactNode
}

const UtilityLayout: FC<UtilityLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default UtilityLayout 