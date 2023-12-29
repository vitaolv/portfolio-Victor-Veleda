import { screen, render } from "@testing-library/react";
import { ProjectsSection } from "@/app/sections/ProjectsSection";

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('The projects section presenting the my projects desenvolviment', () => {
    it("Testing if the my projects section is visible within the screen.", () => {
        render(<ProjectsSection />)

        const sectionElement = screen.getByTestId('projectsSection-test')
        expect(sectionElement).toBeInTheDocument();
    });


    it('should have title header in the section projects', () => {
        render(<ProjectsSection />)

        const header1InTheSectionProjects = screen.getByTestId('projects-header1');
        expect(header1InTheSectionProjects).toBeInTheDocument();
        expect(header1InTheSectionProjects).toHaveTextContent('Meus projetos')
    })

    it("Testing if the stars image is visible within the section.", async () => {
        render(<ProjectsSection />)

        const header1InTheSectionProjects = screen.getByTestId('projectsSection-test');
        expect(header1InTheSectionProjects).toHaveClass('bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)]');
    })
})