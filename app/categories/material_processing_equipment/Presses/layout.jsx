import { decode } from "html-entities";

export const metadata = {
  title: "Material processing presses",
  description: decode("VBCC's advanced pressing technologies are meticulously engineered for material processing, delivering consistent results while enhancing performance and reliability across diverse industries."),
  openGraph: {
    title:
      "Material processing presses",
    description:
      decode("VBCC's advanced pressing technologies are meticulously engineered for material processing, delivering consistent results while enhancing performance and reliability across diverse industries."),
    images: [{
      url: 'https://ik.imagekit.io/webibee/VBCC/products/MPE/seiki/Vacuum%20Hot%20Press/isometric.png?updatedAt=1736156797548',
      width: 800,
      height: 600,
      alt: 'Material Processing Equipment Categories Presses',
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
