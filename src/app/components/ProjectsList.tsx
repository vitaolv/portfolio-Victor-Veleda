import { projects } from "@/app/utils/dates/MyProjects";
import { StripesProjectSection } from "./Stripes";
import Image from "next/image";
import Link from "next/link";

export function ProjetctsList() {

    return (
        <div className="relative mt-12 m-6">
            <div className="grid grid-cols-1 md:grid-rows-2 gap-0">
                {projects.map((project, index) => {

                    const projectDescription = project.description.split('\n').map((paragraph) =>
                        <p className="mb-4" key={paragraph}>{paragraph}</p>
                    );

                    return (
                        <ul key={project.id}>
                            <li
                                className={`js-show-on-scroll transition-opacity invisible mt-6 flex 
                            flex-col justify-center md:justify-evenly ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse '}`}
                            >
                                <div className="flex flex-col items-center md:w-96 mx-auto md:mx-0">
                                    <Image
                                        className=" shadow-gradient-green-blue rounded-2xl 
                                        border-1 border-blue-50 shadow-green-200"
                                        width={480}
                                        height={80}
                                        alt={project.name}
                                        src={project.gif}
                                    />
                                    <div className="flex flex-col text-justify">
                                        <h2 data-testid='text-title'
                                            className="pb-5 pt-8 text-center font-alt text-lg
                                        text-green-700">{project.name}</h2>
                                        <h2 data-testid={`text-description-${project.id}`}>{projectDescription}</h2>
                                    </div>

                                    <div className="mb-0 flex flex-row gap-8 justify-between mt-8 md:-mb-24">
                                        <Link className="outline-none" href={project.githubLink}>
                                            <div className="mx-auto outline-none font-alt flex flex-col 
                                        items-center cursor-pointer gap-2">
                                                <Image
                                                    className="rounded-full shadow-gradient-green-blue shadow-green-200"
                                                    src="/portfolio-Victor-Veleda/assets/icons/code.svg"
                                                    width={40} height={40} alt="Ver código" />
                                                <p className="font-alt text-md">Ver código</p>
                                            </div>
                                        </Link>
                                        <Link className="outline-none" href={project.liveDemogithubLink}>
                                            <div className="mx-auto outline-none flex flex-col items-center 
                                        cursor-pointer gap-2">
                                                <Image
                                                    className="rounded-full shadow-gradient-green-blue 
                                            shadow-green-200" src="/portfolio-Victor-Veleda/assets/icons/see.svg"
                                                    width={40} height={40} alt="Visualizar" />
                                                <p className="font-alt text-md">Visualizar</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className="h-[80px] w-[400px] 
                                    rounded-full bg-transparent bg-opacity-50 blur-[0px]"
                                    z-index="-1"
                                />
                            </li>
                        </ul>
                    );
                })}
            </div>
            <StripesProjectSection />
        </div>
    )
}
