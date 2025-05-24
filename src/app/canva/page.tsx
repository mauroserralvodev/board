"use client"
import Canvas from '@/components/canvas'
import { useState, useEffect } from 'react'

export default function Page() {
  const [showBetaWarning, setShowBetaWarning] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya ha visto el aviso
    const hasSeenBetaWarning = localStorage.getItem('hasSeenBetaWarning')
    if (!hasSeenBetaWarning) {
      setShowBetaWarning(true)
      localStorage.setItem('hasSeenBetaWarning', 'true')
    }
  }, [])

  return (
    <main className='fixed inset-0 '>
      {showBetaWarning && (
        <div className="fixed inset-0 bg-neutral-500/40 z-[1000] flex items-center justify-center">
          <div className="bg-white/90 border border-black/15 p-12 rounded-lg max-w-lg mx-4">
            
            <h3 className="text-3xl mb-3">We&apos;re in Beta</h3>
            <p className="text-neutral-900 mb-4">
              Brinpage Board is currently in development. AI and file upload functions will be available soon.
            </p>
            <button 
              onClick={() => setShowBetaWarning(false)}
              className="bg-blue-600 text-white hover:text-white hover:bg-blue-600 px-4 py-2 mt-1 rounded-lg w-full transition-colors cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      <Canvas />
    </main>
  )
}