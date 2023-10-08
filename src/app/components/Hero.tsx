import Image from "next/image";

export function Hero() {
  return (
    <div className="px-12 md:ml-9 md:mr-9">
      <h1 className="font-alt text-4xl font-bold text-green-700">
        Olá! Sou Victor Veleda,
      </h1>

      <h2 className="mb-6 mt-5 font-alt text-2xl font-semibold text-blue-100">
        um explorador do universo do desenvolvimento front-end.
      </h2>

      <div className="flex flex-col gap-3">
        <p className="m-1 mx-auto max-w-screen-md font-sans text-lg text-gray-50 ">
          Aqui, você está prestes a embarcar em uma jornada intergaláctica
          através dos meus projetos, onde cada site é uma estrela brilhante no
          vasto céu do desenvolvimento web.
        </p>

        <div
          className="mx-auto mt-5 flex max-w-screen-md flex-col gap-3
                 rounded-lg border-2 border-green-700 bg-gray-500 bg-opacity-20 p-5 shadow-gradient-green-blue shadow-green-200"
        >
          <p className="m-1 font-sans text-lg text-gray-50">
            Quer saber mais sobre a minha história e as tecnologias que utilizo
            para viajar pelo espaço digital?
          </p>

          <p className="m-1 font-sans text-lg text-gray-50">
            Basta clicar em &apos;Sobre mim&apos; e &apos;Competências&apos; e
            juntar-se à minha missão interestelar de criação de experiências web
            incríveis.
          </p>
        </div>
      </div>
    </div>
  );
}
