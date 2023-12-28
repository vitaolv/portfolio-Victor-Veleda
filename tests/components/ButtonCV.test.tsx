import { ButtonCV } from "@/app/components/ButtonCV"
import { screen, render } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { HandleDownloadResume } from "@/app/utils/downloads/DownloadResume";

jest.mock("../../src/app/utils/downloads/DownloadResume.tsx", () => ({
    HandleDownloadResume: jest.fn(),
}));

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

    it("should trigger download when clicked", async () => {
        render(<ButtonCV />);
        const buttonElement = screen.getByRole("button");
        await userEvent.click(buttonElement)
        expect(HandleDownloadResume).toHaveBeenCalled();
    });

})