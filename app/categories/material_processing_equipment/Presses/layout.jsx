import { decode } from "html-entities";

export const metadata = {
  title: "Material processing presses",
  description: decode("VBCC's advanced pressing technologies are meticulously engineered for material processing, delivering consistent results while enhancing performance and reliability across diverse industries."),
  openGraph: {
    title:
      "Material processing presses",
    description:
      decode("VBCC's advanced pressing technologies are meticulously engineered for material processing, delivering consistent results while enhancing performance and reliability across diverse industries."),
  },
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
