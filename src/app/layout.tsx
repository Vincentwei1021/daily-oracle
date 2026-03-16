import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", weight: ["400","500","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daily-oracle.vercel.app";

export const metadata: Metadata = {
  title: "Daily Oracle — Your Daily Fortune & Horoscope | Free Fortune Drawing",
  description: "Draw your daily fortune with a beautiful ritual animation. Get personalized daily readings for career, love, wealth, and health. Free, fun, and refreshed every day.",
  keywords: ["daily fortune", "fortune telling", "daily horoscope", "fortune draw", "daily oracle", "lucky draw", "daily reading", "fortune cookie"],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Daily Oracle — Draw Your Fortune Today ✨",
    description: "Draw your daily fortune with beautiful animations. Career, love, wealth & health readings refreshed every day.",
    url: siteUrl, siteName: "Daily Oracle", type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Daily Oracle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Oracle ✨ Draw Your Fortune",
    description: "Daily fortune readings for career, love, wealth & health. New fortune every day!",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
