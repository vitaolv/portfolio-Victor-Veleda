
import { screen, render } from "@testing-library/react";
import { ButtonScrollToTop } from "@/app/components/ButtonScrollToTop";
import { act } from "react-dom/test-utils";

describe("This button componente is responsible for scrolling to the top when clicked", () => {

    it("should not be visible when scrollY <= 300", () => {
        Object.defineProperty(window, 'scrollY', {
            value: 280,
        });

        render(<ButtonScrollToTop />)

        act(() => window.dispatchEvent(new Event('scroll')));

        const buttonElement = screen.queryByTestId("ButtonScrollToTop-test")
        expect(buttonElement).not.toBeInTheDocument();
    })


    it("should be visible when scrollY > 300", () => {
        Object.defineProperty(window, 'scrollY', {
            value: 303
        });
        render(<ButtonScrollToTop />);

        act(() => window.dispatchEvent(new Event('scroll')));

        const buttonElement = screen.getByTestId("ButtonScrollToTop-test");
        expect(buttonElement).toBeInTheDocument();
    });



    it.skip("should have an icon into the button element", () => {
        render(<ButtonScrollToTop />)

    })


    it.skip("when the button is cliked, it should go to the top of the page", () => {
        render(<ButtonScrollToTop />)

    })

});