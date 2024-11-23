import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const charlevoixLight = localFont({
  src: [
    {
      path: "../app/fonts/CharlevoixPro-Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--charlevoix-light",
});

const charlevoixMedium = localFont({
  src: [
    {
      path: "../app/fonts/CharlevoixPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--charlevoix-medium",
});

const charlevoixBold = localFont({
  src: [
    {
      path: "../app/fonts/CharlevoixPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--charlevoix-bold",
});

export const metadata: Metadata = {
  title: "Next.js 15 | Shadcn Template",
  description: "A template with Next.js 15, React.js 19 and Shadcn-UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${charlevoixLight.variable} ${charlevoixMedium.variable} ${charlevoixBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
