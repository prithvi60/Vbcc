import { decode } from "html-entities";

export const metadata = {
  title: decode("Discover VBCC's high-quality laboratory furnaces"),
  description: "Explore our extensive range of furnaces with temperatures up to 1800°C designed for applications ranging from research labs to industrial-scale operations for metallurgy, ceramics, and refractory.",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
