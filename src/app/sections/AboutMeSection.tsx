import { AboutMeTextComponent } from "../components/AboutMeText"
export function AboutMeSection() {

    return (
        <section data-testid="aboutMe-test" id="sobre-mim"
            className="items-center text-center bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)]">

            <div className="mx-auto bg-gray-800 shadow-inset-top-about-me
            sm:shadow-inset-top-about-me-sm shadow-gray-900 
            js-show-on-scroll transition-opacity invisible"
            >
                <div
                    className="mx-auto flex max-w-screen-md flex-col gap-3 justify-center
                rounded-lg p-5"
                >
                    < AboutMeTextComponent />
                </div>
            </div >
        </section >
    )
}