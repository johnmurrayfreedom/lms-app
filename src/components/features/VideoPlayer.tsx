"use client"

import React, { useState } from "react"
import { Play, Pause, SkipForward, Volume2 } from "lucide-react"

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <img
          src="https://picsum.photos/800/450"
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:text-gray-200"
            >
              {isPlaying ? (
                <Pause className="h-8 w-8" />
              ) : (
                <Play className="h-8 w-8" />
              )}
            </button>
            <div className="flex-1 h-1 bg-gray-600 rounded">
              <div className="w-1/3 h-full bg-white rounded" />
            </div>
            <Volume2 className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer 