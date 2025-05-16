import { decode } from "html-entities";

export const metadata = {
  title: decode("Laboratory Analytical Instruments"),
  description: "VBCC offers precision instruments for thermal expansion, conductivity, and resistivity studies. Ideal for advanced research, our tools guarantee accuracy and ease of use.",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
