import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../components/home/spots.css";
import "../components/home/cities.css";
// import Header from "@/components/Header";
import { Providers } from "@/providers/Providers";
const inter = Inter({ subsets: ["latin"] });
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Heyo",
  description: "Heyo website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <Header /> */}
          <div className="max-width-[1920px] mx-auto" id="root">
            {children}
          </div>
        </Providers>
        <GoogleAnalytics gaId="GTM-NSPJXPWS" />
      </body>
    </html>
  );
}
