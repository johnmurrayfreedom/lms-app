import React from 'react'
import { Metadata } from 'next'
import MainLayout from '../components/layouts/MainLayout'
import UtilityLayout from '../components/layouts/UtilityLayout'
import DownloadSection from '../components/download/DownloadSection'

export const metadata: Metadata = {
  title: 'Download App | Jamworks',
  description: 'Download and install the Jamworks application',
}

export default function DownloadAppPage() {
  return (
    <MainLayout>
      <UtilityLayout>
        <DownloadSection />
      </UtilityLayout>
    </MainLayout>
  )
} 