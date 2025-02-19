import React from 'react'
import Header from '../../../src/components/layout/Header'
import Footer from '../../../src/components/layout/Footer'
import { UserMenu } from '../../../src/components/layout/UserMenu'
import { Notifications } from '../../../src/components/common/Notifications'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <UserMenu />
      <Notifications />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
} 