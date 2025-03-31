'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
      const router = useRouter()
      const [count, SetCount] = useState(0);
    return(

        <div className="flex flex-row items-center justify-center h-screen w-screen bg-[url(https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0a/53/f7/0a53f75f-a267-81a7-82ad-fe020b7aeacb/AppIcon-1x_U007emarketing-0-6-0-85-220.png/1200x630wa.png)] bg-slate-500 flex-col space-x-5 text-center">
            <button className="h-20 w-36 bg-blue-600 text-2xl" onClick={() => router.push("h3")}>Click count</button>
            <button className="h-20 w-36 bg-blue-600 text-2xl" onClick={()=> router.push("h1")}>Color change</button>
            <button className="h-20 w-36 bg-blue-600 text-2xl" onClick={()=>router.push("h2")}>Name</button>
            <button className="h-20 w-36 bg-blue-600 text-2xl" onClick={()=> router.push("h4")}>Json data</button>
        </div>
    );
}