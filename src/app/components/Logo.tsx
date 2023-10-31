import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/portfolio-Victor-Veleda/assets/logo.svg"
      alt="logo"
      width={320}
      height={80}
      className="h-auto max-h-16 max-w-full w-56 md:w-auto"
    />
  );
}
