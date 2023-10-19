import Image from "next/image"
import { MyCompetencies } from "../utils/MyCompetencies"
export function CompetenciesSection() {
    return (
        <div className="pt-40 items-center text-center bg-[url(/assets/bg-stars.svg)] pb-40">
            <h2 className="font-alt text-3xl text-green-700">Competências</h2>

            <div className="mt-12 mx-auto flex flex-col gap-6 max-w-screen-lg">

                <p className="font-alt text-xl">
                    Base Tecnológica para soluções
                </p>

                <div className="border-green-700 border-2 shadow-gradient-green-blue
                            shadow-green-700 p-12 rounded-lg">
                    <ul>
                        {MyCompetencies.filter((category) => category.id === 1).map((category) => (
                            <li key={category.id} className="flex flex-row gap-12 mx-auto justify-center">
                                {
                                    category.items.map((item) => (
                                        <div key={item.id}>
                                            <Image
                                                className="mx-auto h-20"
                                                alt="icon"
                                                width={50}
                                                height={50}
                                                src={item.icon} />
                                            <p className="font-sans text-lg font-medium">
                                                {item.name}
                                            </p>
                                        </div>
                                    ))
                                }
                            </li>
                        ))
                        }
                    </ul >
                </div>

                <p className="font-alt text-xl mt-8">
                    Tecnologias e ferramentas disponíveis para escolha e otimização de soluções
                </p>
                <div className="border-green-700 border-2 shadow-gradient-green-blue
                            shadow-green-700 p-12 rounded-lg">
                    <ul>
                        {MyCompetencies.filter((category) => category.id === 2).map((category) => (
                            <li key={category.id} className="flex flex-row gap-12 mx-auto justify-center">
                                {category.items.map((item) => (
                                    <div key={item.id} className="flex flex-col text-center justify-center">
                                        <Image
                                            className="mx-auto h-20"
                                            alt="icon"
                                            width={50}
                                            height={50}
                                            src={item.icon} />
                                        <p className="font-sans text-center text-lg font-medium">
                                            {item.name}
                                        </p>
                                    </div>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="font-alt text-xl mt-8">
                    Boas práticas e habilidades para melhores soluções e qualidade
                </p>
                <div className="border-green-700 border-2 shadow-gradient-green-blue
                            shadow-green-700 p-12 pb-24 rounded-lg">
                    <ul>
                        {MyCompetencies.filter((category) => category.id === 3).map((category) => (
                            <li key={category.id} className="flex flex-row gap-8 justify-center">
                                {
                                    category.items.map((item) => (
                                        <div key={item.id} className="flex flex-col text-center justify-center w-56 mx-auto">
                                            <Image
                                                className="mx-auto h-20"
                                                alt="icon"
                                                width={50}
                                                height={50}
                                                src={item.icon} />
                                            <p className="font-sans text-center text-lg font-medium h-5">
                                                {item.name}
                                            </p>
                                        </div>
                                    ))
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}