'use client'

import { Head } from "@/app/components/Head";
import { Hero } from "@/app/components/Hero";

import {useState } from 'react'


export function SideLeft() {

    const sections: string[] = ["Home", "Sobre mim", "Minhas habilidades"];

    const [activeSection, setActiveSection] = useState<string>(sections[0])
    
    return (
        <div className="relative flex flex-col items-start justify-between \
            overflow-hidden border-r border-white/10 \
            bg-[url(../assets/bg-stars.svg)] bg-cover px-12 py-12">

                {/* Blur */}
                <div className="absolute right-0 top-1/2 h-[288px] w-[526px] \
                -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-900 \
                opacity-50 blur-full" />
                
                {/* Stripes */}
                <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
                <Head sections={sections} setActiveSection={setActiveSection}/>
                <Hero/>
                <>Olá</>
        </div>
    )
}