"use client"

import {
  Eraser,
  Image,
  MessageSquare,
  Pencil,
  Square,
  ArrowRight,
  MousePointer,
  Type,
} from "lucide-react"
import { track, useEditor } from "tldraw"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

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
    <div className=" bg-white/90 pointer-events-none fixed z-[999] backdrop-blur-xs w-full bottom-0 h-[80px] flex flex-row justify-center items-center sm:flex-col sm:justify-between sm:items-end sm:right-0 sm:top-0 sm:h-full sm:w-[102px]">

      {/* Logo arriba */}
      {/* <Link
        href="https://brinpage.com/"
        className="hidden sm:flex w-full p-2 pointer-events-auto z-[1000] justify-center items-center"
      >
        <img
          src="/board.png"
          alt="Brinpage Logo"
          className="w-5/6 h-auto pt-5"
        />
      </Link> */}

      {/* Herramientas */}
      <div className="pointer-events-auto flex flex-row sm:flex-col justify-center items-center w-full sm:w-full sm:flex-1 sm:py-4 sm:px-0 px-2">
        {tools.map((tool) => (
          <Button
            key={tool.name}
            variant={currentToolId === tool.name ? "default" : "ghost"}
            size="icon"
            className={cn(
              "h-10 w-10 m-1 rounded-none cursor-pointer",
              currentToolId === tool.name
                ? "bg-black transition-colors"
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

      {/* Boton inferior */}
      <div className="hidden sm:block pointer-events-auto w-full bg-white">
        <Button
          className="w-full h-10 rounded-none text-black bg-white m-2 hover:bg-white hover:text-black cursor-pointer shadow-none"
          onClick={() => window.location.assign("/learn")}
        >
          Learn
          <svg
            className="shrink-0 size-4 -ml-1 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>
    </div>
  )
})
