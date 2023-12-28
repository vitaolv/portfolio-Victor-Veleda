import { Logo } from "@/app/components/Logo";
import { screen, render } from "@testing-library/react";

describe("the logo image should be visible", () => {
    it("Testing if the image is visible in the page", () => {
        render(<Logo />)

        const imgElement = screen.getByRole('img');
        expect(imgElement).toBeInTheDocument()

    })

    it("Testing if the image file is correct", () => {
        render(<Logo />)
        const url = '/portfolio-Victor-Veleda/assets/logo.svg'
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute('src', url);
    })

})