import "./globals.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Products App",
  description: "Product Form with dynamic Variants",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className="bg-[#f5f5f5] text-[#111827]">{children}</body>
    </html>
  );
}
