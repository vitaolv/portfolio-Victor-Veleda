import Image from "next/image"
import { Contacts } from "@/app/utils/dates/Contacts";

import Link from "next/link";

export function ContactDetailsComponent() {

    return (
        <div className="flex flex-col">
            <p className="w-auto text-lg font-alt text-center mb-4">
                Entre em contato por meio do <span className="text-green-700">
                    LinkedIn
                </span> ou <span className="text-green-700">
                    E-mail
                </span> abaixo:
            </p>
            <a
                href="mailto:devlveleda@gmail.com"
                className="w-auto text-green-700 mb-4 mb-text-lg font-alt text-center">
                devlveleda@gmail.com
            </a>
            <p className="w-auto mb-6 text-lg font-alt text-center">
                Acompanhe cada passo dessa jornada, siga-me no GitHub e LinkedIn:
            </p>
            <div className="flex flex-row mx-auto items-center max-w-[150px] gap-2">

                {Contacts.map((items) => (
                    <ul key={items.id} className="mx-auto">
                        <li>
                            <Link href={items.link}>
                                <Image
                                    className="´p-0 m-0 mx-auto rounded-xl"
                                    src={items.icon}
                                    width={50}
                                    height={50}
                                    alt={items.name}
                                    data-noindex="true"
                                />
                            </Link>
                        </li>
                    </ul>
                ))}
            </div >
        </div>
    )
}