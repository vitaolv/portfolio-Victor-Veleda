'use client'

import { HeroSection } from "@/app/sections/HeroSection";
import { AboutMeSection } from "@/app/sections/AboutMeSection";
import { ProjectsSection } from "@/app/sections/ProjectsSection"

import { MenuBurgerIsClose } from "../store/Actions/MenuActions";

import { useSelector, useDispatch } from 'react-redux';

import { RootState } from "../store";
import { CompetenciesSection } from "../sections/CompetenciesSection";
import { NotificationComponent } from "../components/Notification";


export default function HomePage() {
    const isBurgerOpen = useSelector((state: RootState) => state.menuBurger.menuIsOpen);
    const isNotification = useSelector((state: RootState) => state.notification);
    const dispatch = useDispatch();

    const handleCloseOnAnyClick = () => {
        if (isBurgerOpen) {
            dispatch(MenuBurgerIsClose());
        }
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="row-span-6 grid min-h-screen">
                {/* Sections */}
                <HeroSection />
                <ProjectsSection />
                <CompetenciesSection />
                <AboutMeSection />
            </div>
            {isNotification && <NotificationComponent />}
            {isBurgerOpen && <div className="escurecer fixed inset-0" onClick={handleCloseOnAnyClick} />}
        </div>
    );

}