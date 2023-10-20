import { MyCompetencies } from "../utils/MyCompetencies";
import Image from "next/image";

export function CompetencyCardComponent() {
    return (
        <>
            {MyCompetencies.map((category) => (
                <div key={category.id} className="max-w-md mx-auto p-4">
                    <p className="font-alt text-xl mt-6 mb-3 md:h-16 w-auto sm:w-96 md:w-96 h-auto text-center md:text-left">
                        {category.title}
                    </p>
                    <div className="border-green-700 border-2 shadow-gradient-green-blue shadow-green-700 p-10 rounded-lg md:w-96 w-auto text-center md:text-left">
                        <ul>
                            <li className="grid grid-cols-1 md:grid-rows-2 gap-4 justify-center">
                                {category.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-row w-auto md:w-56 mx-auto items-center gap-4"
                                    >
                                        <Image
                                            className="m-0 h-24"
                                            alt="icon"
                                            width={58}
                                            height={58}
                                            src={item.icon}
                                        />
                                        <p className="font-sans text-left text-md md:text-lg font-medium items-center w-32 sm:w-56 md:w-56">
                                            {item.name}
                                        </p>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}
