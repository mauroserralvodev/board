"use client"

import { InputShapeUtil } from '@/editor/lib'
import { Tldraw, TldrawEditorProps, useEditorComponents } from 'tldraw'
import { Controls } from './controls'
import { ArrowLeftIcon } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import { GlobalHotkeys } from './hotkeys'
import { ImageShapeUtil } from '@/editor/lib/shapes/image/ImageShapeUtil'
import { ImageTool } from '@/editor/lib/shapes/image/ImageTool'
import { InputTool } from '@/editor/lib/shapes/input/InputTools'

const MyCustomShapes = [InputShapeUtil, ImageShapeUtil]
const MyCustomTools = [InputTool, ImageTool]

export default function Canvas() {

  const defaultProps: TldrawEditorProps = {
    initialState: "select",
    shapeUtils: MyCustomShapes,
    tools: MyCustomTools,
    onMount: (editor) => {
      editor.user.updateUserPreferences({
        isSnapMode: true,
      })
    }
  }

  return (
    <Tldraw
      hideUi
      persistenceKey='tldraw-canvas'
      {...defaultProps}
    >
      <TldrawContent />
    </Tldraw>
  )
}

function TldrawContent() {
  const { Canvas } = useEditorComponents();

  return (
    <>
      {Canvas ? <Canvas /> : null}
      <Controls />
      <GlobalHotkeys />
      <div className='absolute  top-0 left-0 right-0'>
        <Link href='/'>
          <Button variant="ghost" size="icon" className='bg-trasnparent cursor-pointer hover:bg-trasnparent'>
            <ArrowLeftIcon />
          </Button>
        </Link>
      </div>
    </>
  )
}