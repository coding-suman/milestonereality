// layout.tsx

import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainMenu from "../components/MainMenu"; // Import MobileMenu component
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  mobileOptimized: "width",
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
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  alternates: {
    canonical: "https://milestone-realty.vercel.app",
    languages: {
      "en-US": "/en",
      "en-GB": "/gb",
    },
  },
  appLinks: {
    web: {
      url: "https://milestone-realty.vercel.app",
      should_fallback: true,
      app_name: "Milestone Realty",
      app_id: "com.mavis.infra",
      package: "com.mavis.infra",
      url_fallback: "https://milestone-realty.vercel.app",
    },
    ios: {
      url: "https://milestone-realty.vercel.app",
      app_name: "Milestone Realty",
      app_store_id: "1234567890",
      app_id: "com.mavis.infra",
      url_fallback: "https://milestone-realty.vercel.app",
    },
    android: {
      url: "https://milestone-realty.vercel.app",
      app_name: "Milestone Realty",
      package: "com.mavis.infra",
      url_fallback: "https://milestone-realty.vercel.app",
    },
    windows: {
      url: "https://milestone-realty.vercel.app",
      app_name: "Milestone Realty",
      package: "com.mavis.infra",
      url_fallback: "https://milestone-realty.vercel.app",
    },
    // Add other app links as needed
  },
  themeColor: "#000000",
  appleTouchIcon: "/logo.png",
  appleTouchStartupImage: "/logo.png",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
