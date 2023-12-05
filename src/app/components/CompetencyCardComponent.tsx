import { MyCompetencies } from "../utils/dates/MyCompetencies";
import Image from "next/image";

export function CompetencyCardComponent() {
    return (
        <>
            {MyCompetencies.map((category) => (
                <div key={category.id} className="max-w-md mx-auto p-4">
                    <p className="font-alt text-xl mt-6 mb-3 md:h-16 w-auto sm:w-96 md:w-96 h-auto text-center">
                        {category.title}
                    </p>
                    <div data-testid="cardCompetencies" className="border-green-700 border-2 shadow-gradient-green-blue shadow-green-700 p-10 rounded-lg md:w-96 w-auto text-center md:text-left">
                        <ul className="flex flex-wrap justify-center gap-4">
                            {category.items.map((item) => (
                                <li key={item.id} className="flex flex-row w-auto md:w-56 mx-auto items-center gap-4">
                                    <Image
                                        className="m-0 h-24"
                                        width={55}
                                        height={55}
                                        src={item.icon}
                                        alt={item.name}
                                    />
                                    <p className="font-sans text-left text-md md:text-lg font-medium items-center w-32 sm:w-56 md:w-56">
                                        {item.name}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}
