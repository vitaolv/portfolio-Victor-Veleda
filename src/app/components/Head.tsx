import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ButtonBurguer } from "./ButtonBurguer";

type HeadProps = {
  sections: string[];
  setActiveSection: (section: string) => void;
};

export function Head({ sections, setActiveSection }: HeadProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const handleEesize = () => {
      if (window.innerWidth > 767) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleEesize);

    return () => {
      window.removeEventListener("resize", handleEesize);
    };
  }, []);

  return (
    <div className="m-0 mx-auto flex w-full flex-wrap items-center justify-center gap-5 pb-12 sm:justify-evenly">
      <Logo />
      <ButtonBurguer isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`${
          isOpen
            ? "h-38 left-0 top-20 flex w-11/12 flex-col rounded-lg border-2 border-blue-50 bg-gray-900 bg-opacity-20 pb-3"
            : "hidden"
        } transition-transform duration-300 ease-in-out md:flex`}
      >
        {sections.map((section) => (
          <button
            type="button"
            className="mr-0 sm:mt-4 md:mr-4 md:mt-2"
            key={section}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
}
