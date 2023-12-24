import { screen, render } from "@testing-library/react";
import { ProjectsSection } from "@/app/sections/ProjectsSection";

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('The projects section presenting the my projects desenvolviment', () => {
    it('should have title header in the section projects', () => {
        render(<ProjectsSection />)

        const header1InTheSectionProjects = screen.getByTestId('projects-header1');
        expect(header1InTheSectionProjects).toBeInTheDocument();
        expect(header1InTheSectionProjects).toHaveTextContent('Meus projetos')
    })
});