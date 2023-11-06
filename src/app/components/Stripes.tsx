import { useEffect, useState } from "react";
export function StripesProjectSection() {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        };

        setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);

    return (
        <>
            {windowWidth > 1000 &&
                <div className="absolute left-1/2 top-0 w-3 bg-stripes h-[2820px]" />
            }
        </>
    )
}