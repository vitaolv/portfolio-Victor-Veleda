import './globals.css'
import './css/scrollbar.css'; 
import './css/animate.css';

import type { Metadata } from 'next'
import { ReactNode } from 'react'


import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google"

import { Footer } from './components/Footer'
import { SideLeft } from '@/parcials/SideLeft'

const roboto = Roboto({ subsets: ['latin'], variable: "--font-roboto" })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Neste portfólio, trago diversos projetos de websites \
  desenvolvidos com foco em desenvolvimento de front-end.',
}

export default function RootLayout({children}: {children: ReactNode}) 
{

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans 
        text-gray-100`}
      >
        <main className='grid min-h-screen md:grid-cols-2 sm:grid-cols-1 row-span-6 lg:grid-cols-2'>


          <SideLeft />

          {/* Right */}
          <div className=" grid min-h-screen flex-col grid-rows-2">
            <div className={"row-span-4 overflow-y-scroll \
            bg=[url(../assets/bg-stars.svg)] bg-cover"}>
              {children}
            </div>
            <div className='row-span-1 h-12 text-center'>
              <Footer />
            </div>
          </div>

      </main>
      </body>
    </html>
  )
}
