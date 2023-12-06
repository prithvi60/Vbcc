import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense } from "react";
export const metadata = {
  title: "VBCC Products",
  description: "Vbbc All Products Pages",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
