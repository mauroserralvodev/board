"use client"
import Canvas from '@/components/canvas'
import { useEffect, useState } from 'react'
import { HelveticaBold } from "@/lib/fonts"

export default function Page() {
  const [showBetaWarning, setShowBetaWarning] = useState(false)

  useEffect(() => {
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
          <div className="bg-white/90 border border-black/15 p-12 max-w-2xl mx-4 w-full">
            <div className={HelveticaBold.className}>
              <h3 className="text-3xl mb-4 uppercase">AI Features Temporarily Disabled</h3>
            </div>
            <p className="text-neutral-600 text-sm mb-4">
              AI generation functions are disabled due to API costs. If you want to test it in depth you can clone the repository locally and run it with your key.
            </p>
            <button 
              onClick={() => setShowBetaWarning(false)}
              className="bg-transparent text-blue-600 hover:underline cursor-pointer pt-3  inline-flex items-center gap-x-2"
            >
              Continue
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <Canvas />
    </main>
  )
}