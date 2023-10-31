import Image from "next/image";
import Link from "next/link";

type logoProps = {
  sections: { key: string, value: string }[],
}

export function Logo({ sections }: logoProps) {
  return (
    <Link href='/'>
      <Image
        src="/portfolio-Victor-Veleda/assets/logo.svg"
        alt="logo"
        width={320}
        height={80}
        className="h-auto max-h-16 max-w-full w-56 md:w-auto"
      />
    </Link>
  );
}
