import { Footer } from "@/app/components/Footer";
import { screen, render } from "@testing-library/react";

describe("the footer should be visible", () => {
    it("Testing if the footer is visible in the end page", () => {
        render(<Footer />)
        const divElement = screen.getByTestId('divFooter-test');
        expect(divElement).toBeInTheDocument()
    })

    it("Testing if the text footer is correct", () => {
        render(<Footer />)
        const pElement = screen.getByTestId('textFooter-test');
        expect(pElement).toHaveTextContent('© 2023 Victor Veleda. Todos os direitos reservados.')
    })
})