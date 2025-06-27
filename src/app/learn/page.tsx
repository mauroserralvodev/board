"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { HelveticaBold } from "@/lib/fonts"


function Learn() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      maxHeight: 500,
      transition: {
        duration: 0.3,
        ease: "linear",
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      maxHeight: 0,
      transition: {
        duration: 0.25,
        ease: "linear",
        when: "afterChildren",
      },
    },
  };

  const menuItemVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  return (
    <div>
        <header className="z-[9998] sticky top-0 inset-x-0 flex flex-wrap sm:justify-start  sm:flex-nowrap w-full bg-white/80 backdrop-blur-sm text-sm py-2 sm:py-4">
        <nav className="relative max-w-4xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img
                src="/board.png"
                loading="lazy"
                className="lg:w-28 md:w-26 sm:w-26 w-26 my-2"
                alt="Logo"
              />
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="size-9 flex justify-center items-center text-sm font-semibold text-neutral-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
              >
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} size-5 text-neutral-800`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} size-5`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <Link className="font-medium text-neutral-500 hover:text-blue-600" href="/">Home</Link>
              <a className="font-medium text-neutral-500 hover:text-blue-600" href="/canva">Canva</a>
              <a className="font-medium text-black hover:text-blue-600 underline" href="/learn">Learn</a>
              <a className="font-medium text-neutral-500 hover:text-blue-600" href="https://mauroserralvo.com/#contact">Contact</a>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="sm:hidden w-full">
            <AnimatePresence initial={false}>
              {isMenuOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={mobileMenuVariants}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="flex flex-col text-sm gap-y-4 mt-5 pb-4"
                    variants={{
                      open: { transition: { staggerChildren: 0.05 } },
                      closed: { transition: { staggerChildren: 0.05 } },
                    }}
                  >
                    {[
                      { href: "/", text: "Home" },
                      { href: "/canva", text: "Canva" },
                      { href: "/learn", text: "Learn" },
                      { href: "https://mauroserralvo.com/#contact", text: "Contact" },
                    ].map((item) => (
                      <motion.div key={item.text} variants={menuItemVariants}>
                        <Link
                          href={item.href}
                          className={`font-medium ${
                            item.href === "/learn" ? "text-black" : "text-gray-500"
                          } hover:text-neutral-700 block`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.text}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-8 text-neutral-800">
            <h1 className={`text-3xl font-medium sm:font-semibold uppercase ${HelveticaBold.className}`}>How to Use Board</h1>
            <p className="text-md text-neutral-600">Board is your creative canvas powered by AI. Here&apos;s a detailed guide to all the controls and how they work together to let you sketch, write, generate, and create — without limits.</p>

            {/* Select Tool */}
            <div className="space-y-4">
                <h3 className={`text-xl font-medium uppercase ${HelveticaBold.className}`}>Select Tool</h3>
                <p className='text-md'>The Select tool allows you to move, resize, or interact with any element on the canvas. Simply click on an element to select it, then drag to move or use the handles to resize.</p>
                <img src="/select.png" alt="Select tool example" className="py-12" />
            </div>

            {/* Text Tool */}
            <div className="space-y-4">
                <h3 className={`text-xl font-medium uppercase ${HelveticaBold.className}`}>Text Tool</h3>
                <p className='text-md'>Use the Text tool to place static text anywhere on the board. Perfect for notes, labels, or headlines to complement your visuals and inputs.</p>
                <img src="/text.png" alt="Text tool example" className="py-12" />
            </div>

            {/* Arrow Tool */}
            <div className="space-y-4">
                <h3 className={`text-xl font-medium uppercase ${HelveticaBold.className}`}>Arrow Tool</h3>
                <p className='text-md'>Arrows are more than connectors — they establish logic between elements. Link an Input block to an Image block to generate visual content. You can also connect Input blocks to each other to create multi-step prompts or logic flows.</p>
                <img src="/arrow.png" alt="Arrow tool example" className="py-12" />
            </div>

            {/* Shapes Tool */}
            <div className="space-y-4">
                <h3 className={`text-xl font-medium uppercase ${HelveticaBold.className}`}>Shapes Tool</h3>
                <p className='text-md'>Choose from basic forms like squares, triangles, circles, and more. Shapes help structure your ideas, illustrate concepts, or simply add visual balance to your board.</p>
                <img src="/shapes2.png" alt="Shapes tool example" className="py-12" />
            </div>

            {/* Pencil Tool */}
            <div className="space-y-4">
                <h3 className={`text-xl font-medium uppercase ${HelveticaBold.className}`}>Pencil Tool</h3>
                <p className='text-md'>The Pencil lets you draw freehand on the board. Use it for sketches, annotations, or any kind of creative expression that benefits from a personal touch.</p>
                <img src="/pencil.png" alt="Pencil tool example" className="py-12" />
            </div>

            {/* Eraser Tool */}
            <div className="space-y-4">
                <h3 className={`text-xl font-medium uppercase ${HelveticaBold.className}`}>Eraser Tool</h3>
                <p className='text-md'>Use the Eraser to remove any element from the canvas. Simply click on the element or stroke you want to delete and it&apos;s gone.</p>
                <img src="/eraser.png" alt="Eraser tool example" className="py-12" />
            </div>

            {/* Input Block */}
            <div className="space-y-4">
                <h3 className={`text-xl font-medium uppercase ${HelveticaBold.className}`}>Input Block</h3>
                <p className='text-md'>The Input block is where the magic happens. Type a command or prompt and press <strong>Run</strong> to get a response from the AI. For example, type &ldquo;Write a poem&ldquo; and BirdMind will generate a poem right inside the block.</p>
                <p className='text-md'>You can connect an Input block to an Image block using the Arrow tool — then type prompts like &ldquo;A futuristic city at night&ldquo; and Run. The result: an AI-generated image appears.</p>
                <p className='text-md'>Even better, you can link multiple Input blocks together to combine ideas, build sequences, or generate rich content in steps.</p>
                <img src="/input.png" alt="Input block example" className="py-12" />
            </div>

            <div className="pt-12">
                <p className="text-sm text-neutral-600">Ready to try it yourself? Head to <a href="/canva" className="underline text-blue-600">Board</a> and start creating — no rules, just flow.</p>
            </div>
        </div>
    </div>
  )
}

export default Learn
