import { screen, render } from "@testing-library/react";
import { CompetencyCardComponent } from "@/app/components/CompetencyCardComponent";
import { CompetenciesSection } from "@/app/sections/CompetenciesSection";
import { MyCompetencies } from "@/app/utils/dates/MyCompetencies";


describe('Competencies list, text and icons in "Serviços" section', () => {

    it('should have title header in "Serviços" section', () => {
        render(<CompetenciesSection />)

        const header1InTheSectionCompetencies = screen.getByRole('heading');
        expect(header1InTheSectionCompetencies).toHaveTextContent('Serviços');

    })

    it('should have text in "Serviços" section', () => {
        render(<CompetencyCardComponent />)

        MyCompetencies.forEach((item) => {
            const textElement = screen.getByText(item.title);
            expect(textElement).toHaveTextContent(item.title)
        })
    })

    it('should have card in competencies section', () => {
        render(<CompetencyCardComponent />)

        const divElements = screen.queryAllByTestId('cardCompetencies');
        expect(divElements.length).toBeGreaterThan(0);
    })

    it('should have icons in the competency card', () => {
        render(<CompetencyCardComponent />)

        MyCompetencies.forEach((category) => {
            category.items.forEach((item) => {
                const icons = screen.getByAltText(item.name)
                expect(icons).toBeInTheDocument()
                expect(icons).toHaveAttribute('src', item.icon)
            })
        })
    })

    it('should have name in the competency card', () => {
        render(<CompetencyCardComponent />)

        MyCompetencies.forEach((category) => {
            category.items.forEach((item) => {
                const name = screen.getByText(item.name)
                expect(name).toBeInTheDocument()
                expect(name).toHaveTextContent(item.name)
            })
        })
    })
})