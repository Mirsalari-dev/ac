import AppInitializer from "@/components/Providers/AppInitializer/AppInitializer";
import ReactQueryProvider from "@/components/Providers/reactQueryProvider/reactQueryProvider";
import Footer from "@/components/UI/Footer/Footer";
import Navbar from "@/components/UI/Navbar";
import { ToastListener, ToastProvider } from "@/components/UI/Toast";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  fetchSchoolData,
  SchoolDataType,
} from "@/services/common/fetchSchoolData";

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

export async function generateMetadata(): Promise<Metadata> {
  const schoolData = await fetchSchoolData();

  return {
    title: schoolData?.panel?.browser_title || "مرکز آموزش های تخصصی",
    description: schoolData?.school?.name || "مرکز آموزش های تخصصی",
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        {
          url: "/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schoolData = await fetchSchoolData();

  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} antialiased`}>
        <ReactQueryProvider>
          <ToastProvider>
            <ToastListener />
            <AppInitializer initialSchoolData={schoolData}>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </AppInitializer>
          </ToastProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
