import { ContactSection } from "@/app/sections/ContactSection";
import { render, screen } from "@testing-library/react";

const textContactSection = 'Curtindo a minha jornada no mundo do desenvolvimento front-end?'

describe("Testing if the contact section is correct", () => {
    it("Testing if the contact section is visible within the screen.", () => {
        render(<ContactSection />)

        const sectionElement = screen.getByTestId('contactSection-test')
        expect(sectionElement).toBeInTheDocument();
    });

    it("Testing if the stars image is visible within the section.", async () => {
        render(<ContactSection />)

        const sectionElement = screen.getByTestId('contactSection-test');
        expect(sectionElement).toHaveClass('bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)]');
    })

    it("Testing if the blur is visible within the section.", () => {
        render(<ContactSection />)

        const divElement = screen.getByTestId('blurContactSection-test');
        expect(divElement).toBeInTheDocument();
    })

    it("Testing if the text is visible within the section.", () => {
        render(<ContactSection />)

        const divElement = screen.getByTestId('contactSection-test');
        expect(divElement).toHaveTextContent(textContactSection);
    })
})