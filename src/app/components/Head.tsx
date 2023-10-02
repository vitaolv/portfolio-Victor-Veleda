import Image from "next/image"

type HeadProps = {
    sections: string[],
    setActiveSection: (section: string) => void;
}

export function Head({sections, setActiveSection}: HeadProps) {

    const handleSectionClick = (section: string) => {
        setActiveSection(section)   
    }

    return (
        <div className="flex">
            <Image src="../assets/logo.svg" alt="logo" width={270} height={80}></Image>
            <div className="grid-rows">
                {sections.map((section) => 
                    <button key={section} onClick={() => handleSectionClick(section)}> 
                        {section}
                    </button>
                )}
            </div>
        </div>
    )
}