'use client'

import { HeroSection } from "@/app/sections/HeroSection";
import { ProjectsSection } from "@/app/sections/ProjectsSection"

import { Provider } from 'react-redux';
import { store } from "./store";

import { Footer } from "./components/Footer";
import { Head } from "./components/Head";


export default function HomePage() {

  return (
    <Provider store={store}>
      <Head />
      <main className="row-span-6 grid min-h-screen">

        <div className="flex flex-col gap-10">
          <div className="row-span-6 grid min-h-screen overflow-hidden">
            <HeroSection />
            <ProjectsSection />
          </div>
        </div>

      </main>
      <div className="row-span-1 m-5 h-12 text-center">
        <Footer />
      </div>
    </Provider >
  )
}
