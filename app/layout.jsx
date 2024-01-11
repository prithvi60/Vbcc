
import "./globals.css";
import { Providers } from "./providers";
import Banner from "@/components/Banner";
import NavBar from "@/components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Lora, Nunito,Urbanist } from 'next/font/google'
import Footer from "@/components/Footer";
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})
 
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})
  
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})

export const metadata = {
  title: "VBCC",
  description: "Vb Ceramic Consultants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${nunito.variable} ${urbanist.variable}`}>
      <body>
        <Providers>
        <Banner/>
        <NavBar/>
          {children}
          <Footer/>
          </Providers>
      </body>
    </html>
  );
}
