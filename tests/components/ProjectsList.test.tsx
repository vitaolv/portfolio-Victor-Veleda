import { screen, render } from "@testing-library/react";
import { projects } from "@/app/utils/dates/MyProjects";
import { ProjetctsList } from "@/app/components/ProjectsList";

describe('Projects list, the project description and imagens in the section projects', () => {

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

    it('should have text description of the project', () => {
        render(<ProjetctsList />);

        projects.forEach((item) => {
            const h1TitleElement = screen.getByTestId(`text-description-${item.id}`);
            expect(h1TitleElement).toBeInTheDocument();

            const expectedText = item.description.replace(/\s+/g, ' ').trim();

            expect(h1TitleElement.textContent?.replace(/\s+/g, ' ').trim()).toBe(expectedText);

        });
    })

})