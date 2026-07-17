import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfitHeading = Outfit({subsets:['latin'],variable:'--font-heading'});

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://placegradient.recodes26.dev'),
  title: "PlaceGradient API — Generate SVG Gradient Images",
  description: "Generate customizable SVG gradient placeholder images with a free API. Perfect for web development, UI mockups, prototypes, and modern applications.",
keywords: ["Placeholder Image","Gradient","SVG maker", "SVG Gradient", "Developer tool", "Free Image API", "Gradient Generator", "Placeholder API", "Image generator"],
  openGraph: {
    title: 'PlaceGradient API',
    description: 'Generate customizable SVG placeholder gradients instantly.',
    url: 'https://placegradient.recodes26.dev',
    siteName: 'PlaceGradient',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'PlaceGradient API',
    description: 'Generate customizable SVG placeholder gradients instantly.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable, outfitHeading.variable)}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
