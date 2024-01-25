import Image from "next/image";
import { ContactSection } from "../sections/ContactSection";
export function Footer() {
  return (
    <div
      data-testid="divFooter-test"
      className="items-center text-center">
      <div
        className="border-t-2 border-green-700 flex flex-col-reverse sm:flex-row gap-4 sm:gap-10 text-gray-250 
      bg-gray-900 font-alt text-center px-6 mt-6 mb-6 transition-colors justify-center items-center"
      >
        <div className="self-center mx-auto m-3 text-md">
          <p>Obrigado por visitar nosso site!</p>
          <div
            className="inset-x-0 p-0 h-1 rounded-xl mb-2 w-auto mx-auto 
                bg-gradient-to-r via-green-700 from-turquoise-100"
          />
          <p className="text-sm">Espero que tenha apreciado a navegação pelo universo do desenvolvimento front-end.</p>
          <p className="text-sm">Até a próxima! <span className="text-3xl pt-4">👋🏼</span></p>
        </div>

        <div className="self-center mx-auto p-1 sm:p-12">
          <ContactSection />
        </div>

      </div>
      <p data-testid="textFooter-test"
        className="text-sm col-span-2 self-center border-2 border-green-700 shadow-gradient-green-blue
      shadow-green-700 rounded-lg w-full sm:w-fit break-words p-3 mx-auto mb-4">
        © 2023-2024 Victor Veleda. Todos os direitos reservados.
      </p>
    </div>
  );
}