import { CompetencyCardComponent } from "../components/CompetencyCardComponent"
import { DetailsCompetencyService } from "../components/DetailsCompetencyService"

export function CompetenciesSection() {
    return (
        <section
            data-testid="competencies-test"
            id="competencia"
            className="mx=auto pt-28 md:pt-48 items-center text-center bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)] pb-4">

            <div className="">
                <h2 className="font-alt text-3xl md:text-6xl text-green-700" >Serviços</h2>
                <div className="mt-2 mx-auto max-w-screen-xl flex flex-wrap justify-center gap-4 w-auto">
                    <CompetencyCardComponent />
                </div>
            </div>

            <DetailsCompetencyService />
            {/* Blur */}
            <div
                data-testid="blurContactSection-test"
                className="absolute left-0 bottom-0 h-[180px]
                w-[240px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purble-800
                opacity-70 blur-full mx-0 overflow-hidden"
            />
        </section>
    )
}
