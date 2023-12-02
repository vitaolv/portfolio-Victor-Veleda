import { render, screen } from "@testing-library/react";
import { ContactDetailsComponent } from "@/app/components/ContactDetailsComponent";
import { ContactSection } from "@/app/sections/ContactSection";

const introductionTextInTheCard = 'Curtindo a minha jornada no mundo do desenvolvimento front-end?';
const textsInTheCardOfTheContactSection = [
    "Entre em contato por meio do LinkedIn ou E-mail abaixo:",
    "Acompanhe cada passo dessa jornada, siga-me no GitHub e LinkedIn:"
]

describe("Info and contact in 'Contato' section.", () => {

    it("Should have the h1 tag in the 'Contato' section.", () => {
        render(<ContactSection />)

        const header1InSection = screen.getByRole('heading');
        expect(header1InSection).toHaveTextContent('Contato');
    })

    it("Should have the introduction text in the card of the 'Contato' section.", () => {
        render(<ContactSection />)

        const introductionTextInTheCardOfTheContactSection = screen.getByText(introductionTextInTheCard);
        expect(introductionTextInTheCardOfTheContactSection).toHaveTextContent(introductionTextInTheCard)
    })

    it("Shoul have the text in the card of the 'Contato' section", () => {
        render(<ContactDetailsComponent />)

        textsInTheCardOfTheContactSection.forEach((text) => {
            const elementParagraph = screen.getAllByTestId("textContact");
            const isTextPresent = elementParagraph.some((element) => element.textContent?.includes(text));
            expect(isTextPresent).toBeTruthy();
        })
    })


})