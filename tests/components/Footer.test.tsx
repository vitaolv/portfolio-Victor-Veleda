import { Footer } from "@/app/components/Footer";
import { screen, render } from "@testing-library/react";

describe.skip("the footer should be visible", () => {
    it("Testing if the footer is visible in the end page", () => {
        render(<Footer />)

        const imgElement = screen.getByRole('img');
        expect(imgElement).toBeInTheDocument()
    })
})