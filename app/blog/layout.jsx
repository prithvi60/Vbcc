import "../globals.css";
export const metadata = {
  title: "VBCC Blog/Article",
  description: "Vbbc Blog/Article Pages",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
