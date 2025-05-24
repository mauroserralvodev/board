"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export default function Home() {
  return (
    <main className="min-h-screen flex items-center bg-gradient-to-b  from-slate-50 to slate-100 overflow-hidden">
      <div className="container flex-1 mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 px-5">
            <div className="inline-block  px-4 py-1.5 rounded-full bg-transparent border border-orange-600/50 text-sm text-[#ff7b00] transition">
              <Sparkles className="w-4 h-4 inline-block mr-2 text-[#ff7b00]"/>
              <span>Canvas + AI Integration</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-medium sm:font-bold tracking-tight text-slate-900 ">
              Your ideas{" "} <br></br>
              deserve space.
              
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff7b00] to-red-500">
                connecting nodes
              </span> */}
            </h1>

            <p className="text-mdsm:text-xl text-neutral-600 max-w-xl">
              Sketch freely, add shapes, write notes, or brainstorm big ideas. No rules. Just flow.
            </p>

            <div className="flex flex-row gap-3 pt-4">
              <Link href="/learn" target="_blank">
                <Button size="lg" variant="outline" className="border-slate-300 cursor-pointer shadow-none">
                  Learn
                </Button>
              </Link>
              <Link href="/canva">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#ff7b00] to-red-500 hover:from-[#ff7b00] hover:to-[#ff7b00] transition-colors cursor-pointer text-white"
                >
                  Start Creating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="w-full relative" style={{ paddingBottom: '66.25%' }}> {/* 16:9 */}
              <Image
                src="/mockup.png"
                alt="Mockup"
                fill
                quality={100}
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#ff7b00] to-red-500 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-[#ff7b00] to-red-500 rounded-full blur-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
