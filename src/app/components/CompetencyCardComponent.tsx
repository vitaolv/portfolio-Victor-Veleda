import { MyCompetencies } from "../utils/MyCompetencies";

import Image from "next/image";


export function CompetencyCardComponent() {
    return (
        <>
            {MyCompetencies.map((category) => (
                <div key={category.id} >
                    <p className="font-alt text-xl mt-6 mb-6">
                        {category.title}
                    </p>
                    <div className="border-green-700 border-2 shadow-gradient-green-blue
                            shadow-green-700 p-12 pb-24 rounded-lg">
                        <ul>
                            <li className="flex flex-row gap-8 justify-center">
                                {
                                    category.items.map((item) => (
                                        <div key={item.id} className="flex flex-col text-center justify-center w-56 mx-auto">
                                            <Image
                                                className="mx-auto h-24"
                                                alt="icon"
                                                width={58}
                                                height={58}
                                                src={item.icon} />
                                            <p className="font-sans text-center text-lg font-medium h-5">
                                                {item.name}
                                            </p>
                                        </div>
                                    ))
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}