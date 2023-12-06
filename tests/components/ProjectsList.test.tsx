import { screen, render } from "@testing-library/react";
import { projects } from "@/app/utils/dates/MyProjects";
import { ProjetctsList } from "@/app/components/ProjectsList";
import { StripesProjectSection } from "@/app/components/Stripes";
import { ProjectsSection } from "@/app/sections/ProjectsSection";

describe('Projects list, the project description and imagens in the section projects', () => {

    it('should have title header in the section projects', () => {
        render(<ProjectsSection />)

        const header1InTheSectionProjects = screen.getByTestId('projects-header1');
        expect(header1InTheSectionProjects).toBeInTheDocument();
        expect(header1InTheSectionProjects).toHaveTextContent('Meus projetos')
    })

    it('should have stripes in the section projects when window width is greater than 1000px', () => {
        global.innerWidth = 1200;
        render(<StripesProjectSection />);

        const stripesElement = screen.getByTestId('stripes-in-section-projects');
        expect(stripesElement).toBeInTheDocument();
    })

    it('should not have stripes in the section projects when window width is greater than 1000px', () => {
        global.innerWidth = 200;
        render(<StripesProjectSection />);

        const stripesElement = screen.queryByTestId('stripes-in-section-projects');
        expect(stripesElement).not.toBeInTheDocument();
    })

    it('should have an imagem of the project in projects list', () => {
        render(<ProjetctsList />);

        projects.forEach((item) => {
            const img = screen.getByAltText(item.name);
            expect(img).toBeInTheDocument();

            const srcAttribute = img.getAttribute('src') ?? '';
            const decodedSrc = decodeURIComponent(srcAttribute);
            expect(decodedSrc).toContain(item.gif);

        });
    });

    it('should have a name of the project', () => {
        render(<ProjetctsList />);

        projects.forEach((item) => {
            const h1TitleElement = screen.getByText(item.name);
            expect(h1TitleElement).toBeInTheDocument();
            expect(h1TitleElement).toHaveTextContent(item.name)
        });

    })


    it.skip('should have text description of the project', () => {
        render(<ProjetctsList />);

    })


})