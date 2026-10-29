import type { Metadata } from "next";
import React from "react";

import { GlobalHeader } from "@/components/GlobalHeader";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cursor.dev.bueno.enterprises"),
  title: "Bueno Cursor",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <GlobalHeader />
        {children}
      </body>
    </html>
  );
}
