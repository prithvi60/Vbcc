import { decode } from "html-entities";

export const metadata = {
  title: decode("VBCC's Material Extrusion Solutions"),
  description: decode("Discover Oshidashi, VBCC's sub-brand specializing in advanced extrusion technology. Explore our range of manual, automatic, and vacuum extruders for precise material processing."),
  openGraph: {
    title:
      decode("VBCC's Material Extrusion Solutions"),
    description:
      decode("Discover Oshidashi, VBCC's sub-brand specializing in advanced extrusion technology. Explore our range of manual, automatic, and vacuum extruders for precise material processing."),
    images: [{
      url: 'https://cdn.webibee.com/vbcc/Products/MPE/oshidashi/automatic%20extruder/isometric.png',
      width: 800,
      height: 600,
      alt: 'Material Processing Equipment Categories Extruder',
    }],
  },
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
