
import "./globals.css";
import { Providers } from "./providers";
import Banner from "@/components/Banner";
import NavBar from "@/components/Navbar";
import dynamic from 'next/dynamic'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const FooterComponent = dynamic(() => import('@/components/Footer'))

export const metadata = {
  title: "VBCC",
  description: "Vb Ceramic Consultants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Banner/>
        <NavBar/>
          {children}
          <FooterComponent/>
          </Providers>
      </body>
    </html>
  );
}
