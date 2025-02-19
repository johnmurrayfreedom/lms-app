'use client'
import React from 'react'
import { Metadata } from 'next'
import ContentLayout from '../components/layouts/ContentLayout'
import MainLayout from '../components/layouts/MainLayout'
import RecordingsList from '../components/recordings/RecordingsList'

export const metadata: Metadata = {
  title: 'Recordings | Jamworks',
  description: 'View and manage your recorded sessions and lectures',
}

export default function RecordingsPage() {
  return (
    <MainLayout>
      <ContentLayout>
        <RecordingsList />
      </ContentLayout>
    </MainLayout>
  )
} 