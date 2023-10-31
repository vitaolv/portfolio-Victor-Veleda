
type HeaderNavigationProps = {
    isOpen: boolean,
    sections: { key: string, value: string }[],

}

export function HeaderNavigation({ isOpen, sections }: HeaderNavigationProps) {


    const handleClick = (sectionTitle: string) => {

        const element = document.getElementById(sectionTitle);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    };

    return (
        <div
            className={`${isOpen
                ? "pb-2 origin-top animate-topOriginMenu pt-2 left-0 right-0 top-24 w-full h-50 flex flex-col rounded-lg border-2 border-blue-50 bg-gray-900 absolute transition transform duration-500 ease-in-out"
                : "hidden origin-bottom animate-topOriginMenu transition transform duration-500 ease-in-out"
                } transition-transform duration-500 ease-in-out md:flex`}
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
                shadow-md-left-right-bottom group-hover:animate-underline group-hover:opacity-70 transition-all duration-500"
                        />
                    </span>
                </button>
            ))
            }
        </div >
    )
}