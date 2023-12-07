import { screen, render } from "@testing-library/react";
import { StripesProjectSection } from "@/app/components/Stripes";

describe('The Stripes component, responsable for dividing into two columns withim the projects section', () => {

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
})