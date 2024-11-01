import FooterLanding from "@/components/landing page/FooterLanding";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      {/* <FooterLanding /> */}
    </>
    // <html>
    //   <body>
    //     {children}
    //     <FooterLanding />
    //   </body>
    // </html>
  );
}
