import { ButtonCV } from "./ButtonCV";

import { sections } from "../utils/sections/sections";

export function MenuNavigation() {


    const handleClick = (sectionTitle: string) => {
        console.log("Clicked section:", sectionTitle);

        const element = document.getElementById(sectionTitle);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("Element not found for ID:", sectionTitle);
        }
    };

    return (
        <div
            className="flex flex-col screen-menu-min:flex-row"
        >
            {sections.map((section) => (
                <button
                    type="button"
                    onClick={() => handleClick(section.value)}
                    className="mb-3 mr-0 mt-3 md:mr-6 md:mt-2"
                    key={section.key}
                >
                    <span className="group relative inline-block w-auto font-alt font-extrabold">
                        {section.key}
                        <div
                            className="opacity-transition inset-x-0 bottom-0 mt-1 h-1 origin-left animate-none rounded-md 
                bg-gradient-to-r from-green-700 via-green-100 to-blue-200 opacity-0 
                shadow-md-left-right-bottom group-hover:animate-underline group-hover:opacity-90 transition-all duration-500"
                        />
                    </span>
                </button>
            ))
            }
            <ButtonCV />
        </div >
    )
}