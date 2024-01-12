import { CompetencyCardComponent } from "../components/CompetencyCardComponent"
import { DetailsCompetencyService } from "../components/DetailsCompetencyService"

export function CompetenciesSection() {
    return (
        <section
            data-testid="competencies-test"
            id="competencia"
            className=" pt-28 md:pt-48 items-center text-center bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)] pb-4">

            <div className="">
                <h2 className="font-alt text-3xl md:text-6xl text-green-700" >Competências</h2>
                <div className="mt-2 mx-auto max-w-screen-xl flex flex-wrap justify-center gap-4 w-auto">
                    <CompetencyCardComponent />
                </div>
            </div>

            <DetailsCompetencyService />
        </section>
    )
}
