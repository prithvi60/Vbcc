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
      url: 'http://cdn.shopifyapp.shop/vbcc/Products/MPE/seiki/Vacuum%20Hot%20Press/isometric.png',
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
