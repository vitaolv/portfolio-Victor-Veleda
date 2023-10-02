import Image from "next/image"

export function Hero() {
    return (
        <div>
                <h1 className="text-2-1'">Olá! Meu nome é Victor Veleda,</h1>
            <div className="flex flex-row">
                <h2 >desenvolvedor front-end.</h2>
                <Image src="/assets/nave.png" alt="nave" width={30} height={30}/>
            </div>
            <p>Aqui, você pode conhecer os meus projetos voltados para o front-end.</p>
            <p>Quer saber mais sobre mim e quais tecnologias eu utilizo? Basta clicar em "Sobre mim" e "Minhas Habilidades".</p>
        </div>
    )
}