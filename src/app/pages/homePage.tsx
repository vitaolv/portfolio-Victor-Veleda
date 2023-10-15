'use client'

import { HeroSection } from "@/app/sections/HeroSection";
import { ProjectsSection } from "@/app/sections/ProjectsSection"

import { useSelector } from 'react-redux';
import { RootState } from "../store";


export default function HomePage() {

    const isBurgerOpen = useSelector((state: RootState) => state.menuBurger.menuIsOpen);

    return (
        <div className="flex flex-col gap-10">
            <div className="row-span-6 grid min-h-screen overflow-hidden">
                <HeroSection />
                <ProjectsSection />
            </div>
            {isBurgerOpen && <div className="escurecer" />}
        </div>
    );

}