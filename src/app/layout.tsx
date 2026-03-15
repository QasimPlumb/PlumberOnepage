import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f06500",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Keighley Emergency Plumber | Fast Local Plumbing Service",
  description: " Burst pipe or blocked drain in Keighley? Our local plumbers respond fast with fixed pricing and same-day service. Get your free quote now.",
  keywords: ["Keighley Emergency Plumber", "Local Plumbers Keighley", "Fast Plumbing Service Keighley", "Blocked Drain Keighley", "Burst Pipe Repair Keighley", "Same Day Plumber Keighley", "Fixed Price Plumbing", "24/7 Plumber Keighley"],
  authors: [{ name: "Keighley Emergency Plumber" }],
  openGraph: {
    title: "Keighley Emergency Plumber | Fast Local Plumbing Service",
    description: " Burst pipe or blocked drain in Keighley? Our local plumbers respond fast with fixed pricing and same-day service. Get your free quote now.",
    url: "emergencyplumbers247.uk",
    siteName: "Keighley Emergency Plumber",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keighley Emergency Plumber",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keighley Emergency Plumber | Fast Local Plumbing Service",
    description: " Burst pipe or blocked drain in Keighley? Our local plumbers respond fast with fixed pricing and same-day service. Get your free quote now.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://emergencyplumbers247.uk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#f06500]/30">{children}</body>
    </html>
  );
}