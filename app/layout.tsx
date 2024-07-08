import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stefan Bura Film",
  description: "App for displaying Stefan Bura's film photos",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
