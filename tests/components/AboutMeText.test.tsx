import { render, screen } from "@testing-library/react";
import { AboutMeTextComponent } from "@/app/components/AboutMeText";
import { aboutMeParagraph } from "@/app/utils/texts/aboutMeText";

describe("About Text and image", () => {

    it("should have a image in the card of the section About me.", () => {
        render(<AboutMeTextComponent />)


    })


    it("should have the text in the section About me.", () => {
        render(<AboutMeTextComponent />)

        aboutMeParagraph.forEach((paragraph) => {
            const elementParagraph = screen.getByTestId(paragraph.id);
            expect(elementParagraph).toBeInTheDocument();
            expect(elementParagraph.textContent?.trim()).toBe(paragraph.text.trim());
        });
    })
}) 