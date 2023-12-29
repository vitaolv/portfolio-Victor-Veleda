import { ContactSection } from "@/app/sections/ContactSection";
import { render, screen } from "@testing-library/react";

describe("Testing if the about me section is correct", () => {
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
})