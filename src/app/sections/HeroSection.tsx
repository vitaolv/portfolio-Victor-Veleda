import { Hero } from "@/app/components/Hero";

import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col gap-12 overflow-hidden
            border-r border-white/10 bg-[url(/assets/bg-stars.svg)] py-20 pt-52 h-fit md:h-[900px]"
    >
      {/* Blur */}
      <div
        className="absolute right-0 top-1/2 h-[288px]
                w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purble-850
                opacity-70 blur-full"
      />

      {/* Stripes */}
      <div className="absolute bottom-1/2 w-2 bg-stripes" />

      {/* Hero Component*/}
      <Hero />

      {/*Animation*/}
      <div className="animate-nave w-full h-">
        <Image
          src="/assets/nave.png"
          className=""
          alt="nave"
          width={45}
          height={20}
        />
      </div>
    </section>
  );
}
