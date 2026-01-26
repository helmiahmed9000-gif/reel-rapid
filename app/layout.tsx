import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Reel Rapid',
    default: 'Video Marketing Agency - Reel Rapid',
  },
  description: "Transform your brand with premium video marketing services. We create viral short videos, product videos, explainer videos, and more.",
  keywords: ["video marketing", "video production", "viral videos", "product videos", "video ads", "video agency"],
  authors: [{ name: "Reel Rapid Agency" }],
  openGraph: {
    title: "Reel Rapid Agency - Video Marketing Experts",
    description: "Transform your brand with premium video marketing services.",
    type: "website",
    siteName: "Reel Rapid Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reel Rapid Agency - Video Marketing Experts",
    description: "Transform your brand with premium video marketing services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V8CTYFNL0G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V8CTYFNL0G');
          `}
        </Script>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
