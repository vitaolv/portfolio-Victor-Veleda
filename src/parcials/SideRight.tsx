import { Footer } from "@/app/components/Footer";
import { projects } from "@/app/utils/MyProjects";
import Image from "next/image";

export function SideRight() {
  return (
    <div className="flex flex-col items-center gap-5 overflow-y-scroll">
      {" "}
      <h1>projects</h1>
      <ul>
        {projects.map((project) => (
          <li
            className=" mt-12 flex w-96 flex-col items-center justify-center gap-5"
            key={project.link}
          >
            <div
              className="flex flex-col items-center justify-center gap-4 
            rounded-lg border-2 border-green-700 p-5 
            shadow-gradient-green-blue shadow-green-200"
            >
              <Image
                src="/assets/videos/1projeto-ecommerce.gif"
                width={300}
                height={80}
                alt="E-commerce.gif"
              />
              <h2>{project.name}</h2>
              <div
                className="top-1/2 h-[200px]
                w-[228px] rounded-full bg-purble-200 bg-opacity-50 blur-[50px]"
                z-index="-1"
              />
              <h2>{project.description}</h2>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <div className="row-span-1 h-12 text-center">
        <Footer />
      </div>
    </div>
  );
}
