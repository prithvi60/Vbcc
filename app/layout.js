import NavBar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./providers";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

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
