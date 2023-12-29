import { BadgesComponent } from "@/app/components/Badges";
import { screen, render } from "@testing-library/react";
import { projects } from "@/app/utils/dates/MyProjects";

describe("the badges component should be visible", () => {
    it("Testing if the badges is visible in the page", () => {
        for (const item of projects) {
            render(<BadgesComponent sources={item.sources} id={item.id} />)
            const divElement = screen.getByTestId(`div-badges-${item.id}`);
            expect(divElement).toBeInTheDocument()
        };
    })

    it("Testing if the paragraph is visible in the 'Tecnologias utilizadas' part of the 'Meus projetos' section.",
        () => {
            for (const item of projects) {
                render(<BadgesComponent sources={item.sources} id={item.id} />)
                const pElement = screen.getByTestId(`p-badges-${item.id}`);
                expect(pElement).toHaveTextContent('Tecnologias utilizadas:')
            };
        })

    it("Testing if the stack is visible in each badge of the project",
        () => {
            for (const item of projects) {
                if (item.sources) {
                    render(<BadgesComponent sources={item.sources} id={item.id} />)
                    for (const source of item.sources) {
                        const testId = `${item.id}-${source}`;
                        const badge = screen.getByTestId(testId);
                        expect(badge).toHaveTextContent(source);
                    }
                }
            };
        })
})