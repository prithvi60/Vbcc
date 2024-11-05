import "./globals.css";
import { Providers } from "./providers";
import Banner from "@/components/Banner";
import NavBar from "@/components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Lora, Montserrat, Nunito, Urbanist } from "next/font/google";
import Footer from "@/components/Footer";
import { Partytown } from "@builder.io/partytown/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  title: "VBCC | THE TAILOR MADE",
  description: "VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD",
  verification: {
    google: "G-7T9F0FKPQM",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-7T9F0FKPQM"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7T9F0FKPQM');
            `,
          }}
        />
                <script type="text/javascript">
            {`
              _linkedin_partner_id = "YOUR_PARTNER_ID"; // Replace with your partner ID
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `}
          </script>
          <script type="text/javascript" src="//snap.licdn.com/li.lms-analytics/insights.min.js" async />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
