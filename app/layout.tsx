import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: {
    absolute: "Demo 001",
    template: "%s | Nasz portal dodane w meta layout",
  },
  description: "Generated by create next app",
  keywords: ["Next.js", "My App"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${poppins.variable} antialiased poppins`}>
        <Header></Header>

        <main>{children}</main>
      </body>
    </html>
  );
}
