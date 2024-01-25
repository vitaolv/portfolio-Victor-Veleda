import Image from "next/image"
import { Contacts } from "@/app/utils/dates/Contacts";

import Link from "next/link";

export function ContactDetailsComponent() {

    return (
        <div className="flex flex-col items-center justify-center">
            <a
                href="mailto:devlveleda@gmail.com"
                className="w-auto text-gray-50 transition-colors visited:text-gray-50 hover:text-green-700
                 mb-4 mb-text-lg font-alt text-center underline underline-offset-2">
                devlveleda@gmail.com
            </a>

            <div className="flex flex-col sm:flex-row mx-auto items-center justify-center max-w-[150px] gap-4">
                {Contacts.map((items) => (
                    <ul key={items.id} className="mx-auto">
                        <li className="mx-auto">
                            <Link
                                href={items.link}
                                className={items.id === 1 ? `flex self-center hover:shadow-gradient-green-blue hover:duration-400 
                                duration-900 ease-in-out transition-shadow hover:shadow-green-700 
                                items-center gap-2 w-36 text-center justify-center text-gray-900 
                                font-semibold bg-gradient-to-r h-11 to-green-700 from-turquoise-200 rounded-lg`
                                    :
                                    `flex gap-2 w-36 items-center text-center justify-center h-11 border-2 font-semibold 
                                text-to-green-700 border-t-green-700 border-l-green-700 border-b-turquoise-100
                                border-r-turquoise-100 rounded-lg hover:shadow-gradient-green-blue hover:shadow-green-700
                                hover:border-t-turquoise-100 hover:border-l-turquoise-100 hover:border-r-green-700 
                                hover:border-b-green-700 hover:duration-400 duration-900 ease-in-out transition-all`}
                            >
                                <Image
                                    className=""
                                    data-testid="iconsInContact"
                                    src={items.icon}
                                    width={26}
                                    height={26}
                                    alt={items.name}
                                    data-noindex="true"
                                />
                                {items.name}
                            </Link>
                        </li>
                    </ul>
                ))}
            </div >
        </div >
    )
}