'use cluent'

import "./globals.css";
import "./css/scrollbar.css";
import "./css/animate.css";

import type { Metadata } from "next";
import { ReactNode } from "react";

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
});

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Neste portfólio, trago diversos projetos de websites desenvolvidos com foco em desenvolvimento de front-end.",
};

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <div className=" grid min-h-screen grid-rows-2 flex-col bg-gray-900">
          <div
            className={"bg=[url(../assets/bg-stars.svg)] row-span-4 bg-cover"}
          >
            {children}
          </div>
        </div>
      </body>
    </html>

  );
}
