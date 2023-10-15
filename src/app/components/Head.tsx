"use client"

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ButtonBurger } from "./ButtonBurger";
import { HeaderNavigation } from "./HeaderNavigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

import { MenuBurgerIsClose } from "../store/Actions/MenuActions";

export function Head() {
    const sections: string[] = ["Home", "Sobre mim", "Competências"];
    const isOpen = useSelector((state: RootState) => state.menuBurger.menuIsOpen)
    const [scrollCount, setScrollCount] = useState<number>(0);
    const [headerClass, setHeaderClass] = useState<string>("bg-transparent transition-all duration-400 pt-6")

    const dispatch = useDispatch();

    useEffect(() => {
        const handleEesize = () => {
            if (window.innerWidth > 767) {
                dispatch(MenuBurgerIsClose());
                document.body.classList.remove("blur-background"); // Remova a classe do corpo
            }
        };

        window.addEventListener("resize", handleEesize);

        return () => {
            window.removeEventListener("resize", handleEesize);
        };
    }, [dispatch]);

    useEffect(() => {

        const handleScroll = () => {
            const scrolled = window.scrollY;

            if (scrolled > 100) {
                setScrollCount(scrollCount + 1);
                if (scrollCount >= 2) {
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
        <div className={` fixed top-0 left-0 right-0 p-6 pl-1 pr-12 flex justify-between md:pl-12
        items-center z-50 ${headerClass}`} >
            <Logo />
            <ButtonBurger />
            <HeaderNavigation isOpen={isOpen} sections={sections} />
        </div >
    );
}
