import { CompetencyCardComponent } from "../components/CompetencyCardComponent"

export function CompetenciesSection() {
    return (
        <div className="pt-28 md:pt-48 items-center text-center bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)] pb-4">
            <div className="js-show-on-scroll transition-opacity invisible">
                <h2 className="font-alt text-3xl text-green-700">Competências</h2>
                <div className="mt-2 mx-auto max-w-screen-xl flex flex-wrap justify-center gap-4 w-auto">
                    <CompetencyCardComponent />
                </div>
            </div>
        </div>
    )
}
