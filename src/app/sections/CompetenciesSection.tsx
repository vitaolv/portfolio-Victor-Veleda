import { CompetencyCardComponent } from "../components/CompetencyCardComponent"

export function CompetenciesSection() {
    return (
        <div className="pt-28 items-center text-center bg-[url(/assets/bg-stars.svg)] pb-32">
            <h2 className="font-alt text-3xl text-green-700">Competências</h2>
            <div className="mt-12 mx-auto max-w-screen-xl flex flex-wrap justify-center gap-4 w-auto">
                <CompetencyCardComponent />
            </div>
        </div>
    )
}
