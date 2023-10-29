'use client'

import Image from "next/image"
import { useState, useEffect } from "react"

export function ButtonScrollToTop() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    return (
        <>
            {scrollY > 300 && (
                < div className="fixed bottom-9 right-6"
                    onClick={handleClick}>
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-turquoise-200 to-green-200 shadow-blue-200 shadow-gradient-green-blue animate-spinCircle">
                        <div className="w-full h-full bg-gradient-to-r from-turquoise-200 to-green-700 rounded-full shadow-blue-100 shadow-gradient-green-blue" />
                    </div>
                    <Image
                        className="mx-auto transform -translate-y-12"
                        src="/assets/icons/backToTop.svg"
                        width={48}
                        height={48}
                        alt="backToTop"
                    />
                </ div>
            )}
        </>
    );
}