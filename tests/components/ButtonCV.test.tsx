import { ButtonCV } from "@/app/components/ButtonCV"
import { screen, render } from "@testing-library/react"

describe("Testing the download button and a resume/CV.", () => {

    it("The download button should be visible in screen", () => {
        render(<ButtonCV />)
        const buttonCV = screen.getByRole('button')
        expect(buttonCV).toBeInTheDocument()

    })


    it("The icon download should be visible in the button", () => {

        render(<ButtonCV />)
        const svgElement = screen.getByTestId('iconDownload')
        expect(svgElement).toBeInTheDocument()
    })
})