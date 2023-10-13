"use client"

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ButtonBurguer } from "./ButtonBurguer";
import { HeaderNavigation } from "./HeaderNavigation";

type HeadProps = {
    sections: string[];
};

export function Head({ sections }: HeadProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollCount, setScrollCount] = useState(0);
    const [headerClass, setHeaderClass] = useState("bg-transparent")

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
                    setHeaderClass('bg-gray-900 bg-opacity-50 transition-all')
                }
            } else {
                setScrollCount(0);
                setHeaderClass('bg-transparent');
            }


        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [scrollCount])

    return (
        <div className={`fixed top-0 left-0 right-0 p-6 flex justify-between 
        items-center z-50 ${headerClass}`} >
            <Logo />
            <ButtonBurguer isOpen={isOpen} setIsOpen={setIsOpen} />
            <HeaderNavigation isOpen={isOpen} sections={sections} />
        </div >
    );
}
