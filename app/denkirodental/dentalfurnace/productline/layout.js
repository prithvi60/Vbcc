import FooterLanding from "@/components/landing page/FooterLanding";

export default function LandingLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <FooterLanding />
    </>
    // <html>
    //   <body>
    //     {children}
    //     <FooterLanding />
    //   </body>
    // </html>
  );
}
