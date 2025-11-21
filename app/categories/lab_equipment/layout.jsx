export const metadata = {
  title:
    "Laboratory Equipment - VBCC",
  description:
    "Jikken, a VBCC sub-brand, offers high-performance lab equipment for research and industrial applications, specializing in precision instruments for material synthesis and coating processes",
  openGraph: {
    title:
      "Laboratory Equipment - VBCC",
    description:
      "Jikken, a VBCC sub-brand, offers high-performance lab equipment for research and industrial applications, specializing in precision instruments for material synthesis and coating processes",
    images: [{
      url: 'http://cdn.shopifyapp.shop/vbcc/Products/Lab_Equipments/Spin%20Basic/Isometric.png',
      width: 800,
      height: 600,
      alt: 'Laboratory Equipment',
    }],
  },
};

export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
