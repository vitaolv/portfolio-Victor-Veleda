import Image from "next/image";
import { useRouter } from "next/navigation";


interface ButtonToSeeDeployTypes {
    readonly pageLink: string;
}

export function ButtonToSeeDeploy({ pageLink }: ButtonToSeeDeployTypes) {
    const router = useRouter();

    const handleButtonClickToSeeDeploy = () => {
        router.push(pageLink)
    };
    return (
        <button
            className="flex hover:shadow-gradient-green-blue hover:duration-400 
            duration-900 ease-in-out transition-shadow hover:shadow-green-700 
            items-center gap-2 w-36 text-center justify-center text-gray-900 
            font-semibold bg-gradient-to-r to-green-700 from-turquoise-200 rounded-lg"
            type="button"
            onClick={handleButtonClickToSeeDeploy}>
            <Image
                alt="Visualizar"
                className=""
                src="/portfolio-Victor-Veleda/assets/icons/see.svg"
                width={26}
                height={26}
            />
            Visualizar
        </button>
    )
}