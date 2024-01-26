import Image from "next/image";
import { aboutMeParagraph } from "../utils/texts/aboutMeText";

export function AboutMeTextComponent() {
    return (
        <div className="pb-6 relative">
            <div className="bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)] 
            w-full h-56 sm:h-32 border-2 top-12 sm:top-10 border-green-700 rounded-2xl
            bg-gray-800 bg-opacity-30 shadow-green-700 shadow-gradient-green-blue mb-1 absolute z-10"
            />
            <div className="flex flex-col mb-10 sm:mb-6  sm:flex-row items-center mt-5 relative z-20">
                <div className="ml=0 sm:ml-10 items-center text-center w-fit border-turquoise-100 border-2 border-double 
                        shadow-gradient-green-blue rounded-full p-1 shadow-turquoise-100"
                >
                    <Image
                        className="p-0 m-0 rounded-full shadow-turquoise-100 border-turquoise-100 border-2 border-double
                        shadow-gradient-green-blue"
                        src="/portfolio-Victor-Veleda/assets/foto-victor.png"
                        data-testid="imageInAboutMe"
                        width={160}
                        height={80}
                        alt="Vitão"
                        data-noindex="true"
                        loading="lazy"
                    />
                </div>

                <h3
                    className="m-1 font-alt text-2xl sm:text-3xl font-bold mx-auto mt-6 sm:mt-0 self-center 
                    text-green-700 text-center"
                >
                    Sobre mim
                </h3>
            </div>
            {aboutMeParagraph.map((paragraph) => (
                <p key={paragraph.id} data-testid={paragraph.id} className="m-1 p-4 font-sans text-gray-50 text-justify">
                    {paragraph.text}
                </p>
            ))}
        </div>
    );
}