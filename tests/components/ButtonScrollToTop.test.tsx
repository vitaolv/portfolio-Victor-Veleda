
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { ButtonScrollToTop } from "@/app/components/ButtonScrollToTop";
import { act } from "react-dom/test-utils";

const spyScrollTo = jest.fn()

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



    it("should have an icon into the button element", () => {
        Object.defineProperty(window, 'scrollY', {
            value: 303
        });
        render(<ButtonScrollToTop />);

        act(() => window.dispatchEvent(new Event('scroll')));

        const icon = screen.getByRole("img")
        expect(icon).toBeInTheDocument();

        const srcAttribute = icon.getAttribute('src');
        expect(srcAttribute).toContain('backToTop.svg');
    })


    it("when the button is clicked, it should go to the top of the page", async () => {
        render(<ButtonScrollToTop />);


        Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
        Object.defineProperty(global.window, 'scrollY', { value: 301 });

        act(() => {
            window.dispatchEvent(new Event('scroll'));
        });

        const buttonElement = await waitFor(() => {
            const buttonElement = screen.getByTestId("ButtonScrollToTop-test");
            return buttonElement
        }, { timeout: 3000 });

        fireEvent.click(buttonElement);

        expect(spyScrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });
    });
});