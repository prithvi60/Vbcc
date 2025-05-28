export const metadata = {
  title: "Material Processing Equipment | Ball Mills",
  description: "We specialise in high-quality material processing equipment. Our product range includes roller jar mills and planetary ball mills, designed to ensure precise grinding for a variety of industries. ",
  openGraph: {
    title:
      "VBCC | Material Processing Equipment Categories",
    description:
      "We specialise in high-quality material processing equipment. Our product range includes roller jar mills and planetary ball mills, designed to ensure precise grinding for a variety of industries. ",
    images: [{
      url: 'https://cdn.webibee.com/vbcc/Products/MPE/funsai/multideck%20two%20tier%20(polyuruthene)/isometric-left.png',
      width: 800,
      height: 600,
      alt: 'Material Processing Equipment Categories Ball Mills',
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
