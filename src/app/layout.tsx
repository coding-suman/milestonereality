// layout.tsx

import { Metadata } from "next";
import "./globals.css";
import MainMenu from "../components/MainMenu"; // Import MobileMenu component
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Dynamic Metadata - You can fetch this from an API or a database if needed
export const metadata: Metadata = {
  title: "Milestone Realty",
  description: "Milestone Realty",
  keywords: [
    "Milestone Realty",
    "construction",
    "infrastructure",
    "real estate",
    "development",
    "engineering",
    "project management",
    "architecture",
    "design",
    "sustainability",
    "construction services",
    "infrastructure solutions",
    "real estate development",

  ],
  authors: [{ name: "Milestone Realty" }],
  creator: "Milestone Realty",
  publisher: "Milestone Realty",
  openGraph: {
    title: "Milestone Realty",
    description: "Milestone Realty",
    url: "https://milestone-realty.vercel.app",
    siteName: "Milestone Realty",
    images: [
      {
        url: "https://milestone-realty.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "Milestone Realty Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milestone Realty",
    description: "Milestone Realty",
    images: [
      {
        url: "https://milestone-realty.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "Milestone Realty Logo",
      },
    ],
    site: "@milestone_realty",
    creator: "@milestone_realty",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://milestone-realty.vercel.app",
    languages: {
      "en-US": "/en",
      "en-GB": "/gb",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <MainMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
