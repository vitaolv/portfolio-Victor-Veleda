import { screen, render } from "@testing-library/react";
import { CompetencyCardComponent } from "@/app/components/CompetencyCardComponent";
import { CompetenciesSection } from "@/app/sections/CompetenciesSection";
import { MyCompetencies } from "@/app/utils/dates/MyCompetencies";


describe('Competencies list, text and icons in "Competências" section', () => {

    it('should have title header in "Competências" section', () => {
        render(<CompetenciesSection />)

        const header1InSection = screen.getByRole('heading');
        expect(header1InSection).toHaveTextContent('Competências');

    })

    it('should have text in "Competências" section', () => {
        render(<CompetencyCardComponent />)

        MyCompetencies.forEach((item) => {
            const textElement = screen.getByText(item.title);
            expect(textElement).toHaveTextContent(item.title)
        })
    })

    it('should have card, icons and name in card of competencies', () => {
        render(<CompetencyCardComponent />)

        const divElements = screen.queryAllByTestId('cardCompetencies');
        expect(divElements.length).toBeGreaterThan(0);

        MyCompetencies.forEach((category) => {
            category.items.forEach((item) => {
                const name = screen.getByText(item.name)
                expect(name).toBeInTheDocument()
                expect(name).toHaveTextContent(item.name)

                const icons = screen.getByAltText(item.name)
                expect(icons).toBeInTheDocument()
                expect(icons).toHaveAttribute('src', item.icon)
            })
        })
    })
})