import React from 'react'
import Sidebar from '../../../src/components/layout/Sidebar'
import { ActionHeader } from '../common/ActionHeader'

interface ContentLayoutProps {
  children: React.ReactNode
  showSidebar?: boolean
}

export default function ContentLayout({ children, showSidebar = true }: ContentLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {showSidebar && <Sidebar className="hidden md:block w-64 flex-shrink-0" />}
      <div className="flex-grow">
        <ActionHeader />
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
} 