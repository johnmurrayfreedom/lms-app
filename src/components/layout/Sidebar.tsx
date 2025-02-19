"use client"

import React from "react"
import { Download, PlayCircle } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={`w-64 bg-gray-50 min-h-screen p-4 hidden md:block ${className || ''}`}>
      <nav className="space-y-4">
        <Link
          href="/download"
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <Download className="h-5 w-5" />
          <span>Download Jamworks</span>
        </Link>
        <Link
          href="/demo"
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <PlayCircle className="h-5 w-5" />
          <span>View Demo Video</span>
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar 