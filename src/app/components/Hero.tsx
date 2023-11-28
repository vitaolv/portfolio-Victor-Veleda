import { TextSaudation, FrontEndExplorer, introductoryText, journeyIntroductionText } from "../utils/texts/heroTexts"

export function Hero() {
  return (
    <div className="m-4 pl-5 pr-5 md:mt-5 md:pl-20 md:pr-20 mx-auto items-center w-auto md:w-11/12 js-show-on-scroll transition-opacity invisible">
      <h1 className="font-alt text-4xl md:text-6xl font-bold text-green-700">
        {TextSaudation}
      </h1>

      <h2 className="mb-6 mt-5 font-alt text-2xl md:text-3xl font-semibold text-blue-100">
        {FrontEndExplorer}
      </h2>

      <div className="flex flex-col justify-left items-left text-left gap-3 max-w-screen-lg">
        <p data-testid="paragraph-hero-1" className="m-1 mx-auto font-sans text-xl text-gray-50 md:text-left">
          {introductoryText}
        </p>

        <div
          className="mx-auto mt-8 flex max-w-screen-lg flex-col gap-3
                rounded-lg border-2 border-green-700 bg-gray-500 bg-opacity-20 
                p-12 shadow-gradient-green-blue shadow-green-200"
        >
          <p data-testid="paragraph-hero-2" className="m-1 font-alt text-lgPlus text-green-700 md:text-left">
            {journeyIntroductionText}
          </p>

          <p data-testid="paragraph-hero-3" className="m-1 font-sans text-lg text-gray-50 md:text-left">
            Clique em <span className="font-alt">&apos;Sobre mim&apos;</span> e <span className="font-alt"> &apos;Competências&apos;</span> no menu e
            junte-se à minha missão de criação de experiências web
            incríveis.
          </p>

          <p data-testid="paragraph-hero-4" className="m-1 font-sans text-lg text-gray-50 md:text-left">
            Veja meus projetos, minhas estrelas brilhantes no universo do front-end.
            Clique em <span className="font-alt">&apos;Projetos&apos;</span> no menu e impressione-se com meu trabalho.
          </p>
        </div>
      </div>
    </div>
  );
}
