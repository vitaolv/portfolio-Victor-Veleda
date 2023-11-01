import { ProjetctsList } from "../components/ProjectsList";

export function ProjectsSection() {
  return (
    <section id="projetos"
      className="bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)] grid min-h-screen 
    grid-rows-2 flex-col bg-gray-900 pt-36">
      <div
        className={"bg=[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)] row-span-4 bg-cover"}
      >
        <div className=" text-center">
          <h1 className="font-alt text-3xl md:text-6xl font-semibold text-green-700">
            Meus projetos
          </h1>

          <ProjetctsList />

        </div>
      </div>
    </ section>
  );
}
