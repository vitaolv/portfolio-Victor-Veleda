import { projects } from "@/app/utils/dates/MyProjects";
import { StripesProjectSection } from "./Stripes";
import Image from "next/image";

export function ProjetctsList() {
    return (
        <div className="relative mt-12 m-6">
            <ul className="grid grid-cols-1 md:grid-rows-2 gap-0">
                {projects.map((project, index) => (
                    <li
                        className={`mt-6 flex flex-col justify-center md:justify-evenly ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse '}`}
                        key={project.link}
                    >
                        <div className="flex flex-col items-center md:w-96 mx-auto md:mx-0">
                            <div className="">
                                <Image
                                    className=" shadow-gradient-green-blue rounded-2xl border-2 border-green-700 shadow-blue-50"
                                    src="/assets/videos/1projeto-ecommerce.gif"
                                    width={480}
                                    height={80}
                                    alt="E-commerce.gif"
                                />
                            </div>
                            <div className="flex flex-col text-justify">
                                <h2 className="pb-5 pt-8 text-center font-alt text-lg text-green-700">{project.name}</h2>
                                <h2 className="">{project.description}</h2>
                            </div>
                        </div>
                        <div
                            className="h-[80px] w-[400px] 
                                rounded-full bg-transparent bg-opacity-50 blur-[0px]"
                            z-index="-1"
                        />
                    </li>
                ))}
            </ul>
            <StripesProjectSection />
        </div >
    )
}