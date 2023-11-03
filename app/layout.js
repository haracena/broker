import { permanentMarker } from "./fonts";
import "./reset.css";
import "./globals.css";

export const metadata = {
  title: "Broker",
  description: "Broker - venta de cuadros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={permanentMarker.className}>{children}</body>
    </html>
  );
}
