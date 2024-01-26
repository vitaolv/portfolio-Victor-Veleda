import { ContactSection } from "../sections/ContactSection";
export function Footer() {
  return (
    <div
      data-testid="divFooter-test"
      className="items-center text-center">
      <div
        className="border-t-2 border-green-700 flex flex-col-reverse sm:flex-row gap-4 sm:gap-10 text-gray-250 
      bg-gray-900 font-alt text-center px-6 mb-6 transition-colors justify-center items-center"
      >
        <div className="bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)]
        self-center mx-auto m-3 text-md js-show-on-scroll transition-opacity invisible">
          <p>Obrigado por visitar nosso site!</p>
          <div
            className="inset-x-0 p-0 h-1 rounded-xl mb-2 w-auto mx-auto 
                bg-gradient-to-r via-green-700 from-turquoise-100"
          />
          <p className="text-sm">Espero que tenha apreciado a navegação pelo universo do desenvolvimento front-end.</p>
          <p className="text-sm">Até a próxima!
            <span className="text-3xl ml-3 pt-4 animate-waveHand inline-block transform origin-center">👋🏼</span>
          </p>
        </div>

        <div className="self-center mx-auto pt-8 pb-6 pr-10 pl-10 sm:pr-14 sm:pl-14">
          <ContactSection />
        </div>

      </div>
      <p data-testid="textFooter-test"
        className="text-md col-span-2 self-center border-t-2 border-green-700
        rounded-lg w-screen break-words p-4">
        © 2023-2024 Victor Veleda. Todos os direitos reservados.
      </p>
    </div>
  );
}