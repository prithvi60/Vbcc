import { decode } from "html-entities";

export const metadata = {
  title: decode("VBCC's Material Extrusion Solutions"),
  description: decode("Discover Oshidashi, VBCC's sub-brand specializing in advanced extrusion technology. Explore our range of manual, automatic, and vacuum extruders for precise material processing."),
  openGraph: {
    title:
      decode("VBCC's Material Extrusion Solutions"),
    description:
      decode("Discover Oshidashi, VBCC's sub-brand specializing in advanced extrusion technology. Explore our range of manual, automatic, and vacuum extruders for precise material processing."),
  },
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
