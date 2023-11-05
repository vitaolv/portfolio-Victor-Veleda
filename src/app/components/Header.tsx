"use client"

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ButtonBurger } from "./ButtonBurger";

import { MenuNavigation } from "./MenuNavigation";

export function Header() {
    const [scrollCount, setScrollCount] = useState<number>(0);
    const [headerClass, setHeaderClass] = useState<string>('bg-gray-900 bg-opacity-60 transition-all duration-400 pt-6');
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;

            if (scrolled > 50) {
                setScrollCount(scrollCount + 1);
                if (scrollCount >= 2) {
                    setHeaderClass('bg-gray-900 bg-opacity-90 transition-all duration-400 pt-6');
                }
            } else {
                setScrollCount(0);
                setHeaderClass('bg-transparent transition-all duration-400 pt-6');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollCount]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);


    return (
        <div className={`fixed h-28 top-0 left-0 right-0 p-6 pl-1 pr-12 md:pl-2 w-auto
        items-center z-50 ${headerClass}`} >
            <div className="flex justify-between gap-1 ml-4">
                <Logo />
                {windowWidth <= 1044 ? <ButtonBurger /> : <MenuNavigation />}
            </div >
        </div>
    );
}
