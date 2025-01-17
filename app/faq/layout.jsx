export const metadata = {
  title: "FAQ",
  description: "Visit our FAQ section for insights on our products, services, and customer support.",
  openGraph: {
    title: "FAQ",
    description: "Visit our FAQ section for insights on our products, services, and customer support.",
  },
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
