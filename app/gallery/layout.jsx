import "../globals.css";
export const metadata = {
  title: "VBCC Gallery",
  description: "Vbbc Gallery Page",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
