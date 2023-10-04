import Image from "next/image"

export function Hero() {
    return (
        <div className="ml-7 mr-7">
            <h1 className="text-4xl text-green-700 font-alt font-bold">
                Olá! Sou Victor Veleda,
            </h1>

            <h2 className="text-2xl text-blue-100 mt-5 mb-6 font-semibold font-alt">
                um explorador do universo do desenvolvimento front-end.
            </h2>

            <div className="flex flex-col gap-3">
                
                <p className="max-w-screen-md mx-auto text-lg font-sans text-gray-50 m-1 ">
                    Aqui, você está prestes a embarcar em uma jornada 
                    intergaláctica através dos meus projetos, 
                    onde cada site é uma estrela brilhante no vasto céu do desenvolvimento web.
                </p>
    
                <div className="max-w-screen-md mx-auto mt-5 flex flex-col gap-3
                 bg-gray-500 bg-opacity-20 p-5 border-2 border-green-700 rounded-lg">
                    
                    <p className="text-lg font-sans text-gray-50 m-1">
                        Quer saber mais sobre a minha história e as tecnologias que utilizo 
                        para viajar pelo espaço digital?
                    </p>
                    
                    <p className="text-lg font-sans text-gray-50 m-1">
                        Basta clicar em &apos;Sobre mim&apos; e &apos;Competências&apos; 
                        e juntar-se à minha missão interestelar de criação de experiências web incríveis.
                    </p>

                </div>
            </div>
        </div>
    )
}