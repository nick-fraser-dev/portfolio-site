import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar/nav-bar";

import ActiveSectionContextProvider from "@/context/active-section-context";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick Fraser",
  description: "A portfolio page for the developer Nick Fraser",
  icons: {
    icon: [
      {
        url: '/nf.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/nf.jpg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-100 text-gray-950 relative h-[5000px] pt-28 sm:pt-36 `}>

        {/* background color */}

        {/* 1 */}
        <div className="bg-[#fad9ff] absolute -z-10 sm:z-1 rounded-full
        top-[-1rem] right-[10%] sm:right-[5%]
        h-[10%] w-[40%] lg:w-[50%]  
        sm:blur-[100px] blur-[75px]">
        </div>

        {/* 2 */}
        <div className="bg-[#d7fff4] absolute -z-10 rounded-full
        top-[-1rem] left-[10%] sm:left-[5%]
        h-[10%] w-[40%] lg:w-[50%]
        sm:blur-[100px] blur-[75px]">
        </div>

        {/* 1 */}
        <div className="bg-[#b490f6] absolute -z-10 sm:z-1 rounded-full
        top-[50rem] sm:top-[70rem] right-[10%] sm:right-[5%]
        h-[10%] w-[40%] lg:w-[50%]  
        sm:blur-[120px] blur-[75px]">
        </div>

        {/* 2 */}
        <div className="bg-[#90eff6] absolute -z-10 rounded-full
        top-[50rem] sm:top-[70rem] left-[10%]  sm:left-[5%]
        h-[10%] w-[40%] lg:w-[50%]
        sm:blur-[120px] blur-[75px]">
        </div>

        {/* 1 */}
        <div className="bg-[#9284f8] absolute -z-10 sm:z-1 rounded-full
        top-[100rem] sm:top-[130rem] right-[10%] sm:right-[5%]
        h-[10%] w-[40%] lg:w-[50%]  
        sm:blur-[120px] blur-[75px]">
        </div>

        {/* 2 */}
        <div className="bg-[#74b1fb] absolute -z-10 rounded-full
        top-[100rem] sm:top-[130rem] left-[10%] sm:left-[5%]
        h-[10%] w-[40%] lg:w-[50%]
        sm:blur-[120px] blur-[75px]">
        </div>

        {/* 1 */}
        <div className="bg-[#8852f5] absolute -z-10 sm:z-1 rounded-full
        top-[150rem] sm:top-[200rem] right-[10%] sm:right-[5%]
        h-[10%] w-[40%] lg:w-[50%]  
        sm:blur-[150px] blur-[85px]">
        </div>

        {/* 2 */}
        <div className="bg-[#5691fe] absolute -z-10 rounded-full
        top-[150rem] sm:top-[200rem] left-[10%] sm:left-[5%]
        h-[10%] w-[40%] lg:w-[50%]
        sm:blur-[150px] blur-[85px]">
        </div>

        <div className="bg-[#b490f6] absolute -z-10 sm:z-1 rounded-full
        top-[225rem] sm:top-[300rem] right-[10%] sm:right-[5%]
        h-[10%] w-[40%] lg:w-[50%]  
        sm:blur-[150px] blur-[85px]">
        </div>

        {/* 2 */}
        <div className="bg-[#90eff6] absolute -z-10 rounded-full
        top-[225rem] sm:top-[300rem] left-[10%] sm:left-[5%]
        h-[10%] w-[40%] lg:w-[50%]
        sm:blur-[150px] blur-[85px]">
        </div>


        <ActiveSectionContextProvider>

          <NavBar />

          {children}

        </ActiveSectionContextProvider>

      </body>
    </html>
  );
}