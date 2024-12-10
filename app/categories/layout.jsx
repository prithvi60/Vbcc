export const metadata = {
  title: "Products",
  description: "VBCC High Temperature Instruments offers a wide range of laboratory and industrial furnaces, kilns, analytical instruments, and material processing equipment. Our products ensure high performance and reliability for all your heating needs.",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}