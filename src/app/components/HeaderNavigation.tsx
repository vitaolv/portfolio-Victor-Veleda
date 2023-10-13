
type HeaderNavigationProps = {
    isOpen: boolean,
    sections: string[],
}

export function HeaderNavigation({ isOpen, sections }: HeaderNavigationProps) {


    return (
        <div
            className={`${isOpen
                ? "h-38 left-0 top-20 flex w-11/12 flex-col rounded-lg border-2 border-blue-50 bg-gray-900 bg-opacity-20 pb-2"
                : "hidden"
                } transition-transform duration-300 ease-in-out md:flex`}
        >
            {sections.map((section) => (
                <button
                    type="button"
                    className="mb-3 mr-0 mt-3 md:mr-6 md:mt-2"
                    key={section}
                >
                    <span className="group relative inline-block w-auto font-alt font-extrabold">
                        {section}
                        <div
                            className="opacity-transition inset-x-0 bottom-0 mt-1 h-1 origin-left animate-none rounded-md 
                bg-gradient-to-r from-green-700 via-green-100 to-blue-200 opacity-0 
                shadow-md-left-right-bottom group-hover:animate-underline group-hover:opacity-70"
                        />
                    </span>
                </button>
            ))}
        </div>
    )
}