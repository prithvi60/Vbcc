import { decode } from "html-entities";

export const metadata = {
  title: decode("VBCC's India-first high-end dental furnace for restorative treatments "),
  description: "Elevate your restorative and prosthetic treatments with our state-of-the-art dental furnaces focused on providing high-precision dental crowns, bridges, inlays, and onlays.",
  openGraph: {
    title: decode("VBCC's India-first high-end dental furnace for restorative treatments "),
    description: "Elevate your restorative and prosthetic treatments with our state-of-the-art dental furnaces focused on providing high-precision dental crowns, bridges, inlays, and onlays.",
    images: [{
      url: 'https://ik.imagekit.io/webibee/VBCC/homepage/category-1.png?updatedAt=1733228209724',
      width: 800,
      height: 600,
      alt: 'Dental Furnaces',
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
