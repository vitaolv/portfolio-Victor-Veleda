'use client'

import { HeroSection } from "@/app/sections/HeroSection";
import { ProjectsSection } from "@/app/sections/ProjectsSection"

import { MenuBurgerIsClose } from "../store/Actions/MenuActions";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store";


export default function HomePage() {
    const isBurgerOpen = useSelector((state: RootState) => state.menuBurger.menuIsOpen);
    const dispatch = useDispatch();

    const handleCloseOnAnyClick = () => {
        if (isBurgerOpen) {
            dispatch(MenuBurgerIsClose());
        }
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="row-span-6 grid min-h-screen">
                <HeroSection />
                <ProjectsSection />
            </div>
            {isBurgerOpen && <div className="escurecer fixed inset-0" onClick={handleCloseOnAnyClick} />}
        </div>
    );

}