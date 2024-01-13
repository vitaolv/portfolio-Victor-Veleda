import { projects } from "@/app/utils/dates/MyProjects";
import { StripesProjectSection } from "./Stripes";
import Image from "next/image";
import { ButtonToSeeCode } from "./ButtonToSeeCode";
import { ButtonToSeeDeploy } from "./ButtonToSeeDeploy";
import { BadgesComponent } from "./Badges";

export function ProjetctsList() {

    return (
        <div className="relative mt-8 m-6 max-w-6xl mx-auto p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-16">
                {projects.map((project) => {

                    const projectDescription = project.description.split('\n').map((paragraph) =>
                        <p className="mb-4" key={paragraph}>{paragraph}</p>
                    );

                    return (
                        <ul key={project.id}>
                            <li
                                className={`js-show-on-scroll transition-opacity invisible mt-6 flex 
                            flex-col mx-auto justify-center md:justify-evenly md:flex-row`}
                            >
                                <div className="flex flex-col items-center md:w-96 mx-auto md:mx-0">
                                    <Image
                                        className=" shadow-gradient-green-blue rounded-2xl 
                                        border-1 border-blue-50 shadow-turquoise-100"
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

                                    <BadgesComponent sources={project.sources} id={project.id} />

                                    <div className="mb-0 flex flex-col md:flex-row gap-8 justify-between mt-8">
                                        <ButtonToSeeDeploy pageLink={project.liveDemogithubLink} id={project.id} />
                                        <ButtonToSeeCode pageLink={project.githubLink} id={project.id} />
                                    </div>
                                </div>

                            </li>
                        </ul>
                    );
                })}
            </div>
            <StripesProjectSection />
        </div>
    )
}
