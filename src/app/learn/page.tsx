import React from 'react'

function Learn() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-8 text-neutral-800">
      <h2 className="text-4xl font-medium sm:font-semibold">How to Use Board</h2>
      <p className="text-lg text-neutral-600">Board is your creative canvas powered by AI. Here's a detailed guide to all the controls and how they work together to let you sketch, write, generate, and create — without limits.</p>

      {/* Select Tool */}
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Select Tool</h3>
        <p>The Select tool allows you to move, resize, or interact with any element on the canvas. Simply click on an element to select it, then drag to move or use the handles to resize.</p>
        <img src="/select.png" alt="Select tool example" className="rounded-xl shadow-md" />
      </div>

      {/* Text Tool */}
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Text Tool</h3>
        <p>Use the Text tool to place static text anywhere on the board. Perfect for notes, labels, or headlines to complement your visuals and inputs.</p>
        <img src="/text.png" alt="Text tool example" className="rounded-xl shadow-md" />
      </div>

      {/* Arrow Tool */}
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Arrow Tool</h3>
        <p>Arrows are more than connectors — they establish logic between elements. Link an Input block to an Image block to generate visual content. You can also connect Input blocks to each other to create multi-step prompts or logic flows.</p>
        <img src="/arrow.png" alt="Arrow tool example" className="rounded-xl shadow-md" />
      </div>

      {/* Shapes Tool */}
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Shapes Tool</h3>
        <p>Choose from basic forms like squares, triangles, circles, and more. Shapes help structure your ideas, illustrate concepts, or simply add visual balance to your board.</p>
        <img src="/shapes2.png" alt="Shapes tool example" className="rounded-xl shadow-md" />
      </div>

      {/* Pencil Tool */}
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Pencil Tool</h3>
        <p>The Pencil lets you draw freehand on the board. Use it for sketches, annotations, or any kind of creative expression that benefits from a personal touch.</p>
        <img src="/pencil.png" alt="Pencil tool example" className="rounded-xl shadow-md" />
      </div>

      {/* Eraser Tool */}
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Eraser Tool</h3>
        <p>Use the Eraser to remove any element from the canvas. Simply click on the element or stroke you want to delete and it's gone.</p>
        <img src="/eraser.png" alt="Eraser tool example" className="rounded-xl shadow-md" />
      </div>

      {/* Input Block */}
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Input Block</h3>
        <p>The Input block is where the magic happens. Type a command or prompt and press <strong>Run</strong> to get a response from the AI. For example, type "Write a poem" and BirdMind will generate a poem right inside the block.</p>
        <p>You can connect an Input block to an Image block using the Arrow tool — then type prompts like "A futuristic city at night" and Run. The result: an AI-generated image appears.</p>
        <p>Even better, you can link multiple Input blocks together to combine ideas, build sequences, or generate rich content in steps.</p>
        <img src="/input.png" alt="Input block example" className="rounded-xl shadow-md" />
      </div>

      <div className="pt-12">
        <p className="text-lg text-neutral-600">Ready to try it yourself? Head to <a href="https://board.brinpage.com/learn" className="underline hover:text-black">Board</a> and start creating — no rules, just flow.</p>
      </div>
    </div>
  )
}

export default Learn
