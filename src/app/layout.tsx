import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "App Template",
};

const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>{children}</body>
    </html>
  );
}
