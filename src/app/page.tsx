import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection"

export default function Home() {

  return (
    <div className="flex flex-col gap-10">
      <div className="">
        <main className="row-span-6 grid min-h-screen overflow-hidden">
          <HeroSection />
          <ProjectsSection />
        </main>
      </div>
    </div>
  )
}
