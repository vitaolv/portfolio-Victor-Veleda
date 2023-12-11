import { projects } from "@/app/utils/dates/MyProjects";
import { StripesProjectSection } from "./Stripes";
import Image from "next/image";
import { ButtonToSeeCode } from "./ButtonToSeeCode";
import { ButtonToSeeDeploy } from "./ButtonToSeeDeploy";

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
                                    <div className="mb-0 flex flex-col md:flex-row gap-8 justify-between mt-8">
                                        <ButtonToSeeDeploy pageLink={project.liveDemogithubLink} />
                                        <ButtonToSeeCode pageLink={project.githubLink} />
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
