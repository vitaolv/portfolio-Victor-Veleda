import Image from "next/image";
import { aboutMeParagraph } from "../utils/texts/aboutMeText";

export function AboutMeTextComponent() {
    return (
        <>
            <div className="mx-auto left-0 items-center text-center w-fit border-turquoise-100-100 border-2 border-double 
                        shadow-gradient-green-blue shadow-blue-200 rounded-full p-1">
                <Image
                    className="´p-0 m-0 rounded-full border-turquoise-100 border-2 border-double
                        shadow-gradient-green-blue shadow-blue-200"
                    src="/portfolio-Victor-Veleda/assets/foto-victor.png"
                    data-testid="imageInAboutMe"
                    width={180}
                    height={80}
                    alt="Vitão"
                    data-noindex="true"
                />
            </div>

            <h3 className="m-1 font-alt text-3xl font-bold text-turquoise-100 text-center">
                Sobre mim
            </h3>

            {aboutMeParagraph.map((paragraph) => (
                <p key={paragraph.id} data-testid={paragraph.id} className="m-1 font-sans text-gray-50 text-justify">
                    {paragraph.text}
                </p>
            ))}

        </>
    )
}