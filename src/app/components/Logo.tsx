import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href='/'>
      <Image
        src="/portfolio-Victor-Veleda/assets/logo.svg"
        alt="logo"
        width={320}
        priority={true}
        height={80}
        className="max-h-16 md:min-w-fit w-56"
      />
    </Link>
  );
}
