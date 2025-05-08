import { ToastProvider } from "@/components/UI/Toast";
import Footer from "@/components/UI/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const yekanBakh = localFont({
  src: [
    {
      path: "./fonts/yekan-bakh-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
});

export const metadata: Metadata = {
  title: "مرکز آموزش های تخصصی",
  description: "مرکز آموزش های تخصصی",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} antialiased`}>
        <ToastProvider>
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
