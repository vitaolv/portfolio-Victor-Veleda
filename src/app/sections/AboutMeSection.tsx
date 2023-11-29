import { AboutMeTextComponent } from "../components/AboutMeText"
export function AboutMeSection() {

    return (
        <section id="sobre-mim"
            className="items-center text-center bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)]">

            <div className="mx-auto p-5 js-show-on-scroll transition-opacity invisible">
                <div
                    className="mx-auto mt-5 mb-5 flex max-w-screen-md flex-col gap-3 justify-center
                rounded-lg border-2 border-blue-100 bg-gray-500 bg-opacity-20
                p-5 shadow-gradient-green-blue shadow-blue-200"
                >

                    < AboutMeTextComponent />

                </div>
            </div >
        </section >
    )
}