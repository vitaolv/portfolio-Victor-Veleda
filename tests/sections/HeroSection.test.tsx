import { render, screen, waitFor } from "@testing-library/react";
import { HeroSection } from "@/app/sections/HeroSection";

describe("Testing if the hero section is correct", () => {
    it("Testing if the hero section is visible within the screen.", () => {
        render(<HeroSection />)

        const sectionElement = screen.getByTestId('hero-test')
        expect(sectionElement).toBeInTheDocument();
    });

    it("Testing if the stars image is visible within the section.", () => {
        render(<HeroSection />)

        const sectionElement = screen.getByTestId('hero-test');
        expect(sectionElement).toHaveClass('bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)]');
    })

    it("Testing if the blur is visible within the section.", () => {
        render(<HeroSection />)

        const divElement = screen.getByTestId('blurHeroSection-test');
        expect(divElement).toBeInTheDocument();
    })

    it("Testing if the animation image file is correct", async () => {
        render(<HeroSection />)

        const url = '/portfolio-Victor-Veleda/assets/nave.png'
        const imgElement = screen.getByRole('img');

        await waitFor(() => {
            const actualUrl = imgElement.getAttribute('src') ?? '';
            const decodedSrc = decodeURIComponent(actualUrl);
            expect(decodedSrc).toContain(url);
        });
    })
})