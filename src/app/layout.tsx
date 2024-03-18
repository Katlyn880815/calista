import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Navigation from "@/components/common/Navigation";
import Header from "@/components/common/Header";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

const myFont = localFont({
  src: [
    {
      path: "../static_fonts/NotoSerifTC-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../static_fonts/NotoSerifTC-Bold.otf",
      weight: "700",
      style: "Bold",
    },
    {
      path: "../static_fonts/NotoSerifTC-Medium.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export const metadata: Metadata = {
  title: "Calista Studio",
  description: "三芝、三重霧眉工作室",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-tw">
      <body className={myFont.className}>
        <div className="container">
          <div className="root">
            <Header>
              <Navigation />
            </Header>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
