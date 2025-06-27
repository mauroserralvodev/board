import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const font = IBM_Plex_Mono({ subsets: ['latin'], weight: "500" });


export const metadata: Metadata = {
  title: "[BOARD] - MS",
  description: "Just a board.",
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
