import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { decode } from "html-entities";

export const metadata = {
  title: "VBCC | THE TAILOR MADE",
  description: decode(
    "VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD's Dental Furnace"
  ),
  metadataBase: new URL(
    "https://vbccinstruments.com/denkirodental/dentalfurnace/productline"
  ),
  openGraph: {
    title: "VBCC | THE TAILOR MADE",
    description: decode(
      "VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD's Dental Furnace"
    ),
    url: "https://vbccinstruments.com/denkirodental/dentalfurnace/productline",
    images: [
      {
        url: "https://cdn.webibee.com/vbcc/Products/dental%20furnaces/Isometric%20-%20Sintering.png",
        width: 630,
        height: 630,
        alt: "VBCC High Temperature Instruments",
      },
    ],
  },
};

export default function LandingLayout({ children }) {
  return <main> {children}</main>;
}
