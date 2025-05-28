import { decode } from "html-entities";

export const metadata = {
  title: decode("Laboratory Analytical Instruments"),
  description: "VBCC offers precision instruments for thermal expansion, conductivity, and resistivity studies. Ideal for advanced research, our tools guarantee accuracy and ease of use.",
  openGraph: {
    title: decode("Laboratory Analytical Instruments"),
    description: "VBCC offers precision instruments for thermal expansion, conductivity, and resistivity studies. Ideal for advanced research, our tools guarantee accuracy and ease of use.",
    images: [{
      url: 'https://cdn.webibee.com/vbcc/Products/Analytical%20Instruments/Reverse%20Thermal%20Expansion%20System/left.png',
      width: 800,
      height: 600,
      alt: 'Laboratory Analytical Instruments',
    }],
  }
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
