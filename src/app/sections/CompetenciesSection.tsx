import { CompetencyCardComponent } from "../components/CompetencyCardComponent"


export function CompetenciesSection() {
    return (
        <div className="pt-40 items-center text-center bg-[url(/assets/bg-stars.svg)] pb-40">
            <h2 className="font-alt text-3xl text-green-700">Competências</h2>
            <div className="mt-12 mx-auto flex flex-col gap-6 max-w-screen-lg">
                <CompetencyCardComponent />
            </div>
        </div>
    )
}