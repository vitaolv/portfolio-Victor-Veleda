import { render, screen, waitFor } from "@testing-library/react";
import { AboutMeSection } from "@/app/sections/AboutMeSection";

describe("Testing if the about me section is correct", () => {
    it("Testing if the about me section is visible within the screen.", () => {
        render(<AboutMeSection />)

        const sectionElement = screen.getByTestId('aboutMe-test')
        expect(sectionElement).toBeInTheDocument();
    });

    it("Testing if the stars image is visible within the section.", async () => {
        render(<AboutMeSection />)

        const sectionElement = screen.getByTestId('aboutMe-test');
        expect(sectionElement).toHaveClass('bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)]');
    })
})