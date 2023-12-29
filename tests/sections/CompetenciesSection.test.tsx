import { render, screen } from "@testing-library/react";
import { CompetenciesSection } from "@/app/sections/CompetenciesSection";

describe("Testing if the competencies section is correct", () => {
    it("Testing if the competencies section is visible within the screen.", () => {
        render(<CompetenciesSection />)

        const sectionElement = screen.getByTestId('competencies-test')
        expect(sectionElement).toBeInTheDocument();
    });

    it("Testing if the stars image is visible within the section.", async () => {
        render(<CompetenciesSection />)

        const sectionElement = screen.getByTestId('competencies-test');
        expect(sectionElement).toHaveClass('bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)]');
    })
})