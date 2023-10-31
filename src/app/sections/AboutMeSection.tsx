import Image from "next/image";

export function AboutMeSection() {

    return (
        <section id="sobre-mim" className="items-center text-center bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)]">
            <div className="mx-auto p-5 js-show-on-scroll transition-opacity invisible">
                <div
                    className="mx-auto mt-5 mb-5 flex max-w-screen-md flex-col gap-3 justify-center
                rounded-lg border-2 border-blue-100 bg-gray-500 bg-opacity-20
                p-5 shadow-gradient-green-blue shadow-blue-200"
                >
                    <div className="mx-auto left-0 items-center text-center w-fit border-green-700 border-2 border-double 
                shadow-gradient-green-blue shadow-blue-200 rounded-full p-1">
                        <Image
                            className="´p-0 m-0 rounded-full border-blue-100 border-2 border-double
                        shadow-gradient-green-blue shadow-blue-200"
                            src="/portfolio-Victor-Veleda/assets/foto-victor.png"
                            width={180}
                            height={80}
                            alt="Vitão"
                            data-noindex="true"
                        />
                    </div>

                    <p className="m-1 font-alt text-2xl font-bold text-blue-100 text-center">
                        Sobre mim
                    </p>

                    <p className="m-1 font-sans text-gray-50 text-justify">
                        Em minha jornada intergaláctica, explorei desde linguagens de baixo nível,
                        como C e Assembly, e na minha busca por conhecimento, explorei galáxias de Java,
                        Python e finalmente aterrissando no terreno fértil de JavaScript e TypeScript.
                    </p>

                    <p className="m-1 font-sans text-gray-50 text-justify">
                        Quando não estou explorando o espaço, gosto de jogar no computador, simulando missões e batalhas interestelares.
                        Também gosto de assistir filmes ou séries que me inspiram a criar novas histórias e cenários.
                        Sou um leitor de livros e notícias, que me fornecem conhecimento cósmico e me mantém atualizado sobre as novidades do universo.
                    </p>

                    <p className="m-1 font-sans text-gray-50 text-justify">
                        Sou louco por café, que é o meu combustível para navegar pelo espaço digital. Tenho uma afinidade especial por resolver problemas, que são como enigmas espaciais que desafiam a minha lógica e criatividade.
                        Enquanto navego pelos códigos, também aprimoro minha audição, já que possuo uma deficiência auditiva e uso tecnologia de implante coclear.
                        A música é minha companheira constante, reabilitando minha audição enquanto ilumina minha jornada.
                    </p>
                    <p className="m-1 font-sans text-gray-50 text-justify">
                        Atualmente, graduando em Sistemas para Internet com ênfase em Front-End, sou apaixonado pela criação de interfaces incríveis e funcionais,
                        transformando ideias em realidade. Cada site que eu crio é como uma nave espacial que leva os usuários a uma experiência única e memorável.

                        Além disso, programo em JavaScript com React, TypeScript e Next.js,
                        buscando constantemente aprender novas ferramentas e atualizar minhas habilidades, como um astronauta curioso e inovador.
                    </p>


                </div>
            </div >
        </section >
    )
}