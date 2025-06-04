"use client"

// import { ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
// import Link from "next/link"
import Image from "next/image"


export default function Home() {
  return (
    <main className="min-h-screen flex items-center bg-slate-50 to slate-100 overflow-hidden">
      <div className="container flex-1 mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 px-5">
            <div className="inline-block  px-4 py-1.5 rounded-full bg-transparent border border-orange-600/50 text-sm text-[#ff7b00] transition">
              <Sparkles className="w-4 h-4 inline-block mr-2 text-[#ff7b00]"/>
              <span>Canvas + AI Integration</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-medium tracking-tight text-slate-900 ">
              Your ideas{" "} <br></br>
              deserve space.
              
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff7b00] to-red-500">
                connecting nodes
              </span> */}
            </h1>

            <p className="text-md sm:text-xl text-neutral-600 max-w-xl">
              Sketch freely, add shapes, write notes, or brainstorm big ideas. No rules. Just flow.
            </p>

            <div className="flex flex-row gap-3 pt-4">
              {/* <Link href="/learn" target="_blank">
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
              </Link> */}
              <div className='"mb-24 gap-3 flex'>
                <a href="/learn" className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-neutral-900 bg-transparent text-neutral-900 hover:bg-transparent hover:text-neutral-900 hover:border hover:border-black transition disabled:opacity-50 disabled:pointer-events-none">
                  Learn
                </a>
                <a href="/canva" className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-neutral-900 bg-neutral-900 text-white hover:text-neutral-900 hover:border hover:border-neutral-900 hover:bg-transparent transition disabled:opacity-50 disabled:pointer-events-none">
                  Try Board
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="w-full relative" style={{ paddingBottom: '66.25%' }}> {/* 16:9 */}
              <Image
                src="/board2.png"
                alt="Mockup"
                fill
                quality={100}
                className="object-cover object-top"
                priority
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#ff7b00] to-red-500 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-[#ff7b00] to-red-500 rounded-full blur-2xl opacity-20"></div> */}
          </div>
        </div>
      </div>
    </main>
  )
}
