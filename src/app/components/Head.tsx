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
        <div className="flex flex-wrap gap-8 justify-center mb-10">
            <Image src="../assets/logo.svg" alt="logo" width={270} height={80}></Image>
            <div>
                {sections.map((section) => 
                    <button className="ml-4"key={section} onClick={() => handleSectionClick(section)}> 
                        {section}
                    </button>
                )}
            </div>
        </div>
    )
}