import { decode } from "html-entities";

export const metadata = {
  title: decode("VBCC's India-first high-end dental furnace for restorative treatments "),
  description: "Elevate your restorative and prosthetic treatments with our state-of-the-art dental furnaces focused on providing high-precision dental crowns, bridges, inlays, and onlays.",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
