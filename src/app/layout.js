import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <h1>Header</h1>
      <body>{children}</body>
    </html>
  );
}
