import NavBar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./providers";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
          <Footer/>
          </Providers>
      </body>
    </html>
  );
}
