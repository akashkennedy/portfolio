import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "./globals.css";

const preahvihear = Preahvihear({
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Akash Kennedy",
  description: "Front End Web Developer...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={preahvihear.className}>{children}</body>
    </html>
  );
}
