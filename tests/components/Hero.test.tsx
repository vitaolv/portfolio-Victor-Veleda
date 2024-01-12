import { render, screen } from '@testing-library/react';
import { Hero } from '@/app/components/Hero';

import { TextSaudation, FrontEndExplorer, introductoryText, journeyIntroductionText } from '@/app/utils/texts/heroTexts';


describe('Hero component', () => {
    it('should have saudation', () => {
        render(<Hero />);

        const elementHeader1 = screen.getByText(TextSaudation);
        expect(elementHeader1).toBeInTheDocument();
    });

    it('should have front-end Explorer', () => {
        render(<Hero />);

        const elementHeader2 = screen.getByText(FrontEndExplorer)
        expect(elementHeader2).toBeInTheDocument();
    });

    it('should have introductory text', () => {
        render(<Hero />);

        const elementIntroductoryParagraph = screen.getByText(introductoryText);
        expect(elementIntroductoryParagraph).toBeInTheDocument();
    });

    it('should have jorney introduction text', () => {
        render(<Hero />)

        const elementJorneyParagraph = screen.getByText(journeyIntroductionText);
        expect(elementJorneyParagraph).toBeInTheDocument();
    });

    it('should have the words "Sobre mim" and "Serviços" in the text', () => {
        render(<Hero />)

        const elementMissionParagraph = screen.getByTestId('paragraph-hero-3');

        expect(elementMissionParagraph).toHaveTextContent("Sobre mim");
        expect(elementMissionParagraph).toHaveTextContent("Serviços");
    });

    it('should have the words "Projetos" in the text', () => {
        render(<Hero />)

        const elementMyProjectsParagraph = screen.getByTestId("paragraph-hero-4");

        expect(elementMyProjectsParagraph).toHaveTextContent("Projetos");

    });
});