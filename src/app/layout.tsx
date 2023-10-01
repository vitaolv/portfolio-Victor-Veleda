import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { Footer } from './components/Footer'

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google"

const roboto = Roboto({ subsets: ['latin'], variable: "--font-roboto" })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})


export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Neste portfólio, trago diversos projetos de websites desenvolvidos com foco em desenvolvimento de front-end.',
}

export default function RootLayout({children}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className='grid min-h-screen grid-cols-2'>
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-900 opacity-50 blur-full" />
            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            Olá!
            <Footer/>
          </div>
          
          {/* Right */}
          <div className={"grid min-h-screen flex-col overflow-y-scroll bg=[url(../assets/bg-stars.svg)] bg-cover"}>{children}</div>
      </main>
      </body>
    </html>
  )
}
