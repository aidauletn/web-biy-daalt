'use client'
import React from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url(https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0a/53/f7/0a53f75f-a267-81a7-82ad-fe020b7aeacb/AppIcon-1x_U007emarketing-0-6-0-85-220.png/1200x630wa.png)] bg-cover bg-center opacity-30"></div>
            <h1 className="text-5xl font-extrabold text-white mb-2 drop-shadow-lg">Welcome to My App</h1>
            <h2 className="text-3xl font-semibold text-white mb-8 drop-shadow-lg">Айдаулет</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
                {[
                    { label: "Click Count", route: "h3" },
                    { label: "Color Change", route: "h1" },
                    { label: "Name", route: "h2" },
                    { label: "JSON Data", route: "h4" }
                ].map((button, index) => (
                    <button 
                        key={index}
                        className="h-16 w-40 bg-blue-800 text-xl text-white rounded-lg shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                        onClick={() => router.push(button.route)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
            <footer className="absolute bottom-5 text-white text-sm">
                <p>© Hairtai shuu bagshaa.</p>
            </footer>
        </div>
    );
}
