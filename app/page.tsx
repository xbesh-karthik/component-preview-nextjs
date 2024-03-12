'use client'
import { useState } from "react";
import dynamic from "next/dynamic";
import PreviewComponent from "@/components/PreviewComponent";
const PlaygroundSandbox = dynamic(() => import('@/Playground/PlaygroundSandbox'), { ssr: false })
// import { PlaygroundSandbox } from '@/Playground/PlaygroundSandbox'


// import '@/app/Styles.module.css'
// import { PlaygroundSandbox } from '@/components/Playground'
export default function Home() {
  
  const handleFilesHash = (hash: string) => {
    window.location.hash = hash
  }
  const tsx={__html:`<header style:'color:black'>
  Code
</header>`}
  return (
    <main className='h-screen flex w-[100vw] overflow-hidden'>
      {/* <aside className='basis-[50%] border-r border-r-black px-2 py-2'>
        <header className='font-bold'>
          Code
        </header>
        <div>
          <textarea className="w-full h-full overflow-y-scroll"></textarea>
        </div>
      </aside> */}
      <aside className='flex-1 px-2 py-2'>
        {/* <header className='font-bold'>
          Preview
        </header> */}
        <div>
        <PlaygroundSandbox onFilesChange={handleFilesHash} />
        </div>
      </aside>
    </main>
  );
}


