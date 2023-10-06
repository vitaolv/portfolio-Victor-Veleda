import { XIcon } from "lucide-react";
import Image from "next/image"

import { useState, useEffect } from "react";


type HeadProps = {
    sections: string[],
    setActiveSection: (section: string) => void;
}

export function Head({sections, setActiveSection}: HeadProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSectionClick = (section: string) => {
        setActiveSection(section)   
    }

    useEffect(() => {
    
        const handleEesize = () => {
            if (window.innerWidth > 767) {
                setIsOpen(false);
            }
        }
    
        window.addEventListener("resize", handleEesize);

        return () => {
            window.removeEventListener("resize", handleEesize);
        }
    
    }, [])

    return (
        <div className="flex flex-wrap gap-6 justify-around items-center mb-10 w-full">


            <Image src="../assets/logo.svg" alt="logo" width={270} height={80}
            className="order-0 md:order-none self-center" />

            <button type="button" className="md:hidden border-2 border-blue-50 rounded-full p-2 transition-burguer"
            onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 
                    <XIcon className="w-8 h-8 bg-gray-900 bg-opacity-20 text-blue-50"/> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className="w-8 h-8 text-blue-50  bg-gray-900 bg-opacity-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                }
            </button>

            <div className={`${isOpen ? 'flex flex-col border-2  bg-gray-900 bg-opacity-20 border-blue-50 rounded-lg \
                top-20 left-0 w-11/12 h-38 pb-3' : 'hidden'} transition-burguer md:flex transition-opacity duration-300 ease-in-out 
                opacity-${isOpen ? '100' : '0'}`} >
                {sections.map((section) => 
                    <button type="button" className="mr-0 md:mr-4 mt-4"key={section} onClick={() => handleSectionClick(section) } > 
                        {section}
                    </button>
                )}
            </div>
        </div>
    )
}