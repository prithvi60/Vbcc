import "../globals.css";
export const metadata = {
  title: "VBCC FAQ",
  description: "Vbbc FAQ Page",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
