import "./globals.css";
import { Providers } from "./providers";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Lora, Montserrat, Nunito, Urbanist, Tinos } from "next/font/google";
import { Partytown } from "@builder.io/partytown/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const nunito = Tinos({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "700"
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
  metadataBase: new URL("https://vbccinstruments.com"),
  openGraph: {
    title: "VBCC | THE TAILOR MADE",
    description: "VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD",
    url: "https://vbccinstruments.com",
    images: [
      {
        url: "https://ik.imagekit.io/webibee/VBCC/products/Lab%20Products/Box%20or%20Muffle%20Furnace/isometric.png?updatedAt=1732097862921",
        width: 1200,
        height: 630,
        alt: "VBCC High Temperature Instruments",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${nunito.variable} ${urbanist.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
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
      </head>
      <body>
        <Providers>{children}</Providers>
        <LinkedInTracking />
        <MetaPixelTracking />
      </body>
    </html>
  );
}
const LinkedInTracking = () => {
  return (
    <>
      {/* LinkedIn Partner ID */}
      <script
        id="linkedin-partner-id"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window._linkedin_partner_id = "6697532";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `,
        }}
      />

      {/* LinkedIn Insight Tag */}
      <script
        id="linkedin-insight"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function(l) {
            if (!l) {
              window.lintrk = function(a,b) {
                window.lintrk.q.push([a,b]);
              };
              window.lintrk.q = [];
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `,
        }}
      />

      {/* Noscript Tag for tracking */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=6697532&fmt=gif"
        />
      </noscript>
    </>
  );
};

LinkedInTracking;

const MetaPixelTracking = () => {
  return (
    <>
      {/* Meta Pixel Code */}
      <script
        id="meta-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1986364945119098');
          fbq('track', 'PageView');`
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1986364945119098&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </>
  );
};

MetaPixelTracking;