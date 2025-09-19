# Board

**Board** is an experimental visual canvas for building and exploring ideas through connected nodes.  
Each node can represent text, shapes, or custom content. When nodes are linked, they share context, allowing the AI layer to process combined information and generate contextual responses.  

The project focuses on:  
- Context propagation between connected nodes.  
- Real-time AI response generation.  
- A minimal, responsive UI for visual thinking and diagramming.  

---

## Features

- **Interactive Canvas** – Built on top of [tldraw](https://tldraw.dev) for drawing and connecting shapes.  
- **Context-Aware AI** – Connected nodes share context to enrich AI responses.  
- **Rich Text Support** – Uses Tiptap editor for inline editing and formatting.  
- **Scalable Architecture** – Modular design with room for custom node types and additional integrations.  
- **Modern Frontend Stack** – Fast, responsive, and optimized for developer iteration.  

---

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/) – React framework  
- [TypeScript](https://www.typescriptlang.org/) – Type safety  
- [TailwindCSS](https://tailwindcss.com/) – Styling  
- [tldraw SDK](https://tldraw.dev) – Visual canvas  
- [Tiptap](https://tiptap.dev/) – Rich text editor  
- [OpenAI API](https://platform.openai.com/) – AI generation  
- [AI SDK](https://github.com/vercel/ai) – Streaming & LLM utilities  
