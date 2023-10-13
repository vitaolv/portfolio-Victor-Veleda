"use client"

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ButtonBurger } from "./ButtonBurger";
import { HeaderNavigation } from "./HeaderNavigation";

type HeadProps = {
    sections: string[];
};

export function Head({ sections }: HeadProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollCount, setScrollCount] = useState(0);
    const [headerClass, setHeaderClass] = useState("bg-transparent transition-all duration-400 pt-6")

    useEffect(() => {
        const handleEesize = () => {
            if (window.innerWidth > 767) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleEesize);

        return () => {
            window.removeEventListener("resize", handleEesize);
        };
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            const scrolled = window.scrollY;

            if (scrolled > 100) {
                setScrollCount(scrollCount + 1);
                if (scrollCount => 2) {
                    setHeaderClass('bg-gray-900 bg-opacity-90 transition-all duration-400')
                }
            } else {
                setScrollCount(0);
                setHeaderClass('bg-transparent transition-all duration-400');
            }


        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [scrollCount])

    return (
        <div className={` fixed top-0 left-0 right-0 p-6 flex justify-around 
        items-center z-50 ${headerClass}`} >
            <Logo />
            <ButtonBurger isOpen={isOpen} setIsOpen={setIsOpen} />
            <HeaderNavigation isOpen={isOpen} sections={sections} />
        </div >
    );
}
