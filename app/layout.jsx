import "./globals.css";
import { Providers } from "./providers";
import Banner from "@/components/Banner";
import NavBar from "@/components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Lora, Montserrat, Nunito, Urbanist } from "next/font/google";
import Footer from "@/components/Footer";
import { Partytown } from "@builder.io/partytown/react";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
// ADD verifcation code and measurement id when account are created
export const metadata = {
  title: "VBCC",
  description: "Vb Ceramic Consultants",
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${nunito.variable} ${urbanist.variable} ${montserrat.variable}`}
    >
      <head>
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <Banner />
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
