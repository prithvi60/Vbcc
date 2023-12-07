import "../globals.css";
export const metadata = {
  title: "VBCC About",
  description: "Vbbc About Us Pages",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
