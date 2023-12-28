import { screen, render, waitFor } from "@testing-library/react"
import { projects } from "@/app/utils/dates/MyProjects";
import { ButtonToSeeDeploy } from "@/app/components/ButtonToSeeDeploy"

describe("Testing the button to see deploy.", () => {
    const mockPageLink = ['https://vitaolv.github.io/projeto-frontend-web-HTML-CSS/', 'https://vitaolv.github.io/project-vite-react-ecommerce/', ''];

    it("The link should be visible in screen", async () => {
        for (const item of projects) {
            render(<ButtonToSeeDeploy pageLink={item.liveDemogithubLink} id={item.id} />);
            const linkElement = screen.getByTestId(`testId-${item.id}`);

            await waitFor(() => {
                expect(linkElement).toHaveAttribute('href', mockPageLink[item.id - 1]);
            });
        }
    });

    it("The icon should be visible in the 'button' link", () => {
        for (const item of projects) {
            render(<ButtonToSeeDeploy pageLink={item.liveDemogithubLink} id={item.id} />)
            const svgElement = screen.getAllByAltText("Visitar o site");
            expect(svgElement).toEqual(expect.arrayContaining([expect.objectContaining({ alt: "Visitar o site" })]));
        }
    })

    it.skip("The clicked link should be redirect to a the right page", () => {
        for (const item of projects) {
            render(<ButtonToSeeDeploy pageLink={item.liveDemogithubLink} id={item.id} />)
        }
    })
})