import { listServices } from "../utils/texts/arrayCompentecyServices"
import { textMyExperiences } from "../utils/texts/arrayMyExperienciesText"

import { useState } from "react"

export function DetailsCompetencyService() {

    return (
        <article className="m-12 p-6 flex flex-col mx-auto items-center gap-10 justify-center max-w-5xl">

            <div className="flex flex-col gap-6 items-center justify-center">
                <h1
                    className="font-alt text-green-700 font-bold text-2xl">
                    Perguntas Frequentes
                </h1>
                <p
                    className="w-fit max-w-full mx-auto text-lg font-semibold">
                    Algumas respostas prontas para as perguntas mais comuns sobre meu trabalho:
                </p>
            </div>

            <div className="flex bg-gray-500 bg-opacity-20 flex-col border-2 pl-12 pr-12 pb-10 pt-10 w-full border=2 shadow-gradient-green-blue
            shadow-green-700 border-green-700 rounded-xl gap-10 justify-center items-start text-left max-w-5xl">
                <details
                    className={`transition-transform transform duration-300 w-full`}
                >
                    <summary
                        className="border-b-2 select-none w-auto text-turquoise-100 max-w-5xl 
                        font-extrabold border-green-700 p-2">
                        Quais são meus serviços?
                    </summary>

                    <div className="">
                        <p
                            className="pt-3 max-w-5xl leading-normal">
                            Desenvolvo atividades por meio de projetos práticos, como:
                            <ul className="p-4">
                                {listServices.map((item: string, index: number) => (
                                    <li key={index} className="leading-loose">
                                        <span className=" font-black text-turquoise-100">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </p>
                    </div>
                </details>

                <details
                    className={`transition-transform transform duration-300 w-full `}
                >
                    <summary
                        className="border-b-2 select-none text-turquoise-100 
                        font-extrabold max-w-5xl w-full border-green-700 p-2">
                        Quanto tempo estou na área de programação?
                    </summary>
                    <div className="max-w-5xl w-full pt-4">
                        <p>
                            <p className="max-w-5xl leading-normal">
                                <ul className="">
                                    {textMyExperiences.map((item: string, index: number) => (
                                        <li key={index} className="leading-loose pt-3">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </p>
                        </p>

                    </div>
                </details>

            </div>
        </article >
    )
}