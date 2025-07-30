// layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adxity - Advanced Digital Marketing Solutions",
  description: "Transform your digital advertising with Adxity's cutting-edge programmatic solutions, AI-powered audience targeting, and comprehensive analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://path-to-ibrand-font.com/css" rel="stylesheet" />
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
