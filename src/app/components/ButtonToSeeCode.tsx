import Image from "next/image";
import Link from "next/link";

interface ButtonToSeeCodeTypes {
    readonly id: number;
    readonly pageLink: string;
}

export function ButtonToSeeCode({ pageLink, id }: ButtonToSeeCodeTypes) {
    return (
        <Link
            data-testid={`testId-${id}`}
            className="{flex gap-2 w-36 items-center text-center justify-center h-11 border-2 
            font-semibold text-to-green-700 border-t-green-700 border-l-green-700 
            border-b-turquoise-100 border-r-turquoise-100 rounded-lg
            hover:shadow-gradient-green-blue hover:shadow-green-700 hover:border-t-turquoise-100
            hover:border-l-turquoise-100 hover:border-r-green-700 hover:border-b-green-700
            hover:duration-400 duration-900 ease-in-out transition-all"
            type="button"
            href={pageLink}
        >
            <Image
                alt="Ver código"
                className=""
                src="/portfolio-Victor-Veleda/assets/icons/code.svg"
                width={26}
                height={26}
            />
            Ver código
        </Link >
    )
}