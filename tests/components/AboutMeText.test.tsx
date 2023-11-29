import { render, screen } from "@testing-library/react";
import { AboutMeTextComponent } from "@/app/components/AboutMeText";
import { aboutMeParagraph } from "@/app/utils/texts/aboutMeText";

describe("About Text and image", () => {


    it("should have the text in the section About me.", () => {
        render(<AboutMeTextComponent />)

        aboutMeParagraph.forEach((paragraph) => {
            const elementParagraph = screen.getByTestId(paragraph.id);
            expect(elementParagraph).toBeInTheDocument();
            console.log('Texto antes do trim:', elementParagraph.textContent);
            console.log('Texto depois do trim:', elementParagraph.textContent?.trim());
            expect(elementParagraph.textContent?.trim()).toBe(paragraph.text.trim());
        });
    })
}) 