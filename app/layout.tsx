import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventify — Discover Events Near You",
  description: "Find and register for local events across Pakistan.",
  openGraph: {
    title: "Eventify — Discover Events Near You",
    description: "Find and register for local events across Pakistan.",
    images: [{ url: "/ogImage.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventify — Discover Events Near You",
    description: "Find and register for local events across Pakistan.",
    images: ["/ogImage.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
