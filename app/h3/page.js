'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
      const router = useRouter()
      const [count, SetCount] = useState(0);
    return(

        <div className="flex items-center justify-center h-screen w-screen bg-slate-500 flex-col space-x-5 text-center">
            <a href="/"><div className="bg-black text-white absolute top-2 left-2 p-4 rounded-lg">BACK</div></a>
                   <button className="h-10 w-40 bg-blue-500 rounded-2xl hover:cursor-pointer" onClick={() => SetCount(count+1)}>Click</button>
            <p className="mr-5">Click count: {count}</p>
        </div>
    );
}