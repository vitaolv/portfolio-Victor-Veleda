import Image from "next/image";
import Link from "next/link";

interface ButtonToSeeDeployTypes {
    readonly id: number;
    readonly pageLink: string;
}

export function ButtonToSeeDeploy({ pageLink, id }: ButtonToSeeDeployTypes) {
    return (
        <Link
            data-testid={`testId-${id}`}
            className="flex hover:shadow-gradient-green-blue hover:duration-400 
            duration-900 ease-in-out transition-shadow hover:shadow-green-700 
            items-center gap-2 w-36 text-center justify-center text-gray-900 
            font-semibold bg-gradient-to-r h-11 to-green-700 from-turquoise-200 rounded-lg"
            type="button"
            href={pageLink}
        >
            <Image
                alt="Visitar o site"
                className=""
                src="/portfolio-Victor-Veleda/assets/icons/see.svg"
                width={26}
                height={26}
            />
            Visualizar
        </Link>
    )
}