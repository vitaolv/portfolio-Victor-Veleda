import Image from "next/image";
import { useRouter } from "next/navigation";

interface ButtonToSeeCodeTypes {
    readonly pageLink: string;
}

export function ButtonToSeeCode({ pageLink }: ButtonToSeeCodeTypes) {
    const router = useRouter();

    const handleButtonClickToSeeCode = () => {
        router.push(pageLink)
    };
    return (
        <button
            className="flex gap-2 w-36 items-center text-center justify-center h-11 border-2 
            font-semibold text-to-green-700 border-t-green-700 border-l-green-700 
            border-b-turquoise-100 border-r-turquoise-100 rounded-lg"
            type="button"
            onClick={handleButtonClickToSeeCode}>
            <Image
                alt="Visualizar"
                className=""
                src="/portfolio-Victor-Veleda/assets/icons/code.svg"
                width={28}
                height={28}
            />
            Ver código
        </button>
    )
}