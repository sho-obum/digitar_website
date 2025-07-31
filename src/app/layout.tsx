// layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digitar Media | 360° Marketing & Performance Growth Agency",
  description:
    "From strategy to execution — Digitar Media delivers full-funnel 360° marketing solutions. Performance-driven. ROI-focused. Trusted by global brands to scale across digital platforms.",
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
      <body className={clsx(dmSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
