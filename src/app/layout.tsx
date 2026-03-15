import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f06500",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gastech Plumbing & Heating | Expert Keighley Plumbers | 24/7 Emergency Service",
  description: "Need a reliable plumber in Keighley? Gastech Plumbing & Heating offers 24/7 emergency repairs, blocked drain clearing, and boiler services. Fast response across West Yorkshire.",
  keywords: ["Plumber Keighley", "Emergency Plumber Keighley", "Blocked Drains Keighley", "Boiler Repair Keighley", "Plumbing Services West Yorkshire"],
  authors: [{ name: "Gastech Plumbing & Heating" }],
  openGraph: {
    title: "Gastech Plumbing & Heating | Reliable Keighley Plumbers",
    description: "24/7 Emergency plumbing services in Keighley & surrounding areas. Free quotes & same-day service.",
    url: "https://gastechplumbing.co.uk",
    siteName: "Gastech Plumbing & Heating",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gastech Plumbing & Heating Keighley",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gastech Plumbing & Heating | Keighley Plumbers",
    description: "Reliable 24/7 plumbing services across Keighley. Same-day repairs & emergency support.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://gastechplumbing.co.uk",
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
      <body className="antialiased selection:bg-[#7FD13B]/30">{children}</body>
    </html>
  );
}