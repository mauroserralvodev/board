import type { Metadata } from "next";
import "./globals.css";
import { Wix_Madefor_Display } from "next/font/google";

const font = Wix_Madefor_Display({ subsets: ["latin"], weight: "400" });


export const metadata: Metadata = {
  title: "BrinPage Board — AI Solutions",
  description: "BrinPage is pioneering AI-driven innovations, including Brinpage Board, a cutting-edge tool for developers, students and creatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
