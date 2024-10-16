import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

const pt_sans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--pt_sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pt_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
