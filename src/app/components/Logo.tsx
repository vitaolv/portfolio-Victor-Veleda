import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="../assets/logo.svg"
      alt="logo"
      width={325}
      height={80}
      className="order-0 h-auto max-h-16 w-auto max-w-full self-center md:order-none"
    />
  );
}
