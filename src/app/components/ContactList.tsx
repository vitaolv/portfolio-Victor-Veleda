import Image from "next/image"
import { Contacts } from "@/app/utils/dates/Contacts";

export function ContactListComponent() {

    return (

        <div className="flex flex-row mx-auto items-center max-w-[150px] gap-2">

            {Contacts.map((items) => (
                <ul key={items.id} className="mx-auto">
                    <li>
                        <Image
                            className="´p-0 m-0 mx-auto rounded-xl"
                            src={items.icon}
                            width={50}
                            height={50}
                            alt={items.name}
                            data-noindex="true"
                        />
                    </li>
                </ul>
            ))}

        </div>
    )
}