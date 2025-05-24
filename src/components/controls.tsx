"use client"

import { Eraser, Image, MessageSquare, Pencil, Square, ArrowRight, MousePointer, Type } from "lucide-react"
import { track, useEditor } from "tldraw"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

type Tool = {
  name: string
  icon: React.ReactNode
  hotkey: string
  description: string
}

export const Controls = track(() => {
  const editor = useEditor()
  const currentToolId = editor.getCurrentToolId()

  const tools: Tool[] = [
    { name: "select", icon: <MousePointer className="h-4 w-4" />, hotkey: "s", description: "Select (S)" },
    { name: "text", icon: <Type className="h-4 w-4" />, hotkey: "t", description: "Text (T)" },
    { name: "arrow", icon: <ArrowRight className="h-4 w-4 -rotate-45" />, hotkey: "a", description: "Arrow (A)" },
    { name: "geo", icon: <Square className="h-4 w-4" />, hotkey: "g", description: "Geo (G)" },
    { name: "draw", icon: <Pencil className="h-4 w-4" />, hotkey: "d", description: "Draw (D)" },
    { name: "eraser", icon: <Eraser className="h-4 w-4" />, hotkey: "e", description: "Eraser (E)" },
    { name: "input", icon: <MessageSquare className="h-4 w-4" />, hotkey: "i", description: "Input (I)" },
    { name: "image", icon: <Image className="h-4 w-4" />, hotkey: "m", description: "Image (M)" },
  ]

  const handleTool = (toolName: string) => {
    editor.setCurrentTool(toolName)
  }

  return (
    <div className="pointer-events-none absolute right-0 top-0 h-full flex flex-col items-end z-[999] backdrop-blur-xs">
      {/* Logo */}
      <Link href="https://brinpage.com/" className="absolute right-0 top-0 w-[102px] p-2 pointer-events-auto z-[1000] flex justify-center items-center">
        <img 
          src="/favicon.ico" 
          alt="Brinpage Logo" 
          className="w-1/2 h-auto pt-5" 
        />
      </Link>

      {/* Contenedor de herramientas existente */}
      <div className="pointer-events-auto flex flex-col justify-center items-center flex-1 bg-white/90 w-[102px] p-2">
        {tools.map((tool) => (
          <Button
            key={tool.name}
            variant={currentToolId === tool.name ? "default" : "ghost"}
            size="icon"
            className={cn(
              "h-10 w-10 my-1 rounded-lg cursor-pointer",
              currentToolId === tool.name
                ? "bg-gradient-to-r from-[#ff7b00] to-red-500 text-white hover:from-[#ff7b00] hover:to-[#ff7b00] transition-colors"
                : "hover:bg-slate-100"
            )}
            onClick={() => handleTool(tool.name)}
            title={tool.description}
          >
            {tool.icon}
            <span className="sr-only">{tool.description}</span>
          </Button>
        ))}
      </div>

      {/* Botón inferior */}
      <div className="pointer-events-auto right-0 w-[102px] bg-white">
        <Button
          className="w-full h-10 rounded-none text-black bg-white m-2 hover:bg-white hover:text-black cursor-pointer shadow-none"
          onClick={() => window.location.assign('/learn')}
        >
           Learn
          <svg className="shrink-0 size-4 -ml-1 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Button>
      </div>
    </div>
  )
})
