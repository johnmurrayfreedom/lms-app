"use client"

import React from 'react'
import { Download, HelpCircle, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Educational Video Platform
        </h1>
      </div>
    </header>
  )
}

export default Header 