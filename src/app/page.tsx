"use client"

import { HelveticaBold } from "@/lib/fonts"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className={`text-7xl md:text-7xl font-medium tracking-tight text-black ${HelveticaBold.className}`}>
          [BOARD]
        </h1>

        <p className="text-sm text-neutral-700 pt-2 pb-20">
          by <a href="https://mauroserralvo.com" className="hover:underline">mauroserralvo</a>
        </p>

        <div className="flex justify-center gap-3">
          <Link
            href="/learn"
            className="py-3 px-3 inline-flex items-center  text-sm font-medium text-blue-600 transition"
          >
            Learn
          </Link>
          <Link
            href="/canva"
            className="py-3 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 transition"
          >
            Try Board
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
