import { render, screen, fireEvent } from "@testing-library/react";

import { ContactDetailsComponent } from "@/app/components/ContactDetailsComponent";
import { ContactSection } from "@/app/sections/ContactSection";
import { Contacts } from "@/app/utils/dates/Contacts";

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

    it("Should have the text in the card of the 'Contato' section", () => {
        render(<ContactDetailsComponent />)

        textsInTheCardOfTheContactSection.forEach((text) => {
            const elementParagraph = screen.getAllByTestId("textContact");
            const isTextPresent = elementParagraph.some((element) => element.textContent?.includes(text));
            expect(isTextPresent).toBeTruthy();
        })
    })

    it("Should have imagens in the card of the 'Contato' section", () => {
        render(<ContactDetailsComponent />)

        Contacts.forEach((items) => {
            const icons = screen.getByAltText(items.name);
            expect(icons).toBeInTheDocument()
            expect(icons).toHaveAttribute('src', items.icon);
        })
    })

    it("Should navigate to the correct link on click", async () => {
        render(<ContactDetailsComponent />)

        for (const item of Contacts) {
            const linkElement = screen.getByRole('link', { name: item.name })
            fireEvent.click(linkElement);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', item.link)
        }
    })
})