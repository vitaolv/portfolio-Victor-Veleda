import { screen, render, waitFor } from "@testing-library/react"
import { projects } from "@/app/utils/dates/MyProjects";
import { ButtonToSeeCode } from "@/app/components/ButtonToSeeCode"

describe("Testing the button to see deploy.", () => {
    const mockPageLink = ['https://github.com/vitaolv/projeto-frontend-web-HTML-CSS', 'https://github.com/vitaolv/project-vite-react-ecommerce', ''];

    it("The clicked link should be redirect to a the page GitHub", async () => {
        for (const item of projects) {
            render(<ButtonToSeeCode pageLink={item.githubLink} id={item.id} />);
            const linkElement = screen.getByTestId(`testId-${item.id}`);

            await waitFor(() => {
                expect(linkElement).toHaveAttribute('href', mockPageLink[item.id - 1]);
            });
        }
    });

    it("The code icon should be visible within the 'button' link", () => {
        for (const item of projects) {
            render(<ButtonToSeeCode pageLink={item.githubLink} id={item.id} />)
            const svgElement = screen.getAllByAltText("Ver código");
            expect(svgElement).toEqual(expect.arrayContaining([expect.objectContaining({ alt: "Ver código" })]));
        }
    })
})