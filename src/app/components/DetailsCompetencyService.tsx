import { listServices } from "../utils/texts/arrayCompentecyServices"

export function DetailsCompetencyService() {
    return (
        <div className="m-14 p-6 flex flex-col justify-center items-start mx-auto w-full text-left max-w-3xl ">
            <details
                className={`group`}
            >
                <summary
                    className="border-b-2 select-none text-turquoise-50 font-extrabold border-green-700 pb-2 mb-4 pt-5 w-max">
                    Quais são meus serviços?
                </summary>

                <div className="">
                    <p className="leading-normal">
                        Atuo na área de desenvolvimento front-end em JavaScript ou TypeScript, utilizando tecnologias como React.js, Next.js, Sass e Tailwind CSS, além de realizar testes com Jest para garantir que o software funcione conforme o esperado.
                    </p>
                    <p className="pt-3">
                        Desenvolvo atividades por meio de projetos práticos, como:
                        <ul className="p-4">
                            {listServices.map((item: string, index: number) => (
                                <li key={index} className="leading-loose">
                                    <span className=" font-black text-turquoise-100">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </p>
                </div>
            </details>
        </div>
    )
}