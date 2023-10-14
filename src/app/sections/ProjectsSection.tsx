import { projects } from "@/app/utils/MyProjects";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section className=" grid min-h-screen grid-rows-2 flex-col bg-gray-900">
      <div
        className={"bg=[url(../assets/bg-stars.svg)] row-span-4 bg-cover"}
      >
        <div className=" text-center">
          <h1 className="font-alt text-3xl font-semibold text-green-700">
            Meus projetos
          </h1>

          <ul className="top-0 m-0 grid grid-cols-2 justify-items-center gap-5 p-0">
            {projects.map((project) => (
              <li
                className="mt-12 flex max-w-[350px] flex-col gap-5"
                key={project.link}
              >
                <div
                  className="flex flex-col gap-4 
            rounded-lg border-2 border-green-700
            shadow-gradient-green-blue shadow-green-200"
                >
                  <Image
                    className="´p-0 m-0 rounded-xl"
                    src="/assets/videos/1projeto-ecommerce.gif"
                    width={350}
                    height={80}
                    alt="E-commerce.gif"
                  />
                  <h2 className="p-5">{project.name}</h2>
                  <div
                    className="top-1/2 h-[200px]
                w-[228px] rounded-full bg-purble-200 bg-opacity-50 blur-[50px]"
                    z-index="-1"
                  />
                  <h2 className="p-5">{project.description}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ section>
  );
}
