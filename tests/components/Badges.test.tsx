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

    it.skip("Testing if the names is correct within the badge", () => {
    })
})