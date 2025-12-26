import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUAMMAR Film Production - Produksi Film & Televisi Profesional",
  description: "Perusahaan produksi film dan televisi profesional yang berdedikasi untuk menciptakan konten visual berkualitas tinggi. Dari konsep hingga produksi final.",
  keywords: ["MUAMMAR", "film production", "produksi film", "televisi", "video production", "Aceh", "Indonesia"],
  authors: [{ name: "MUAMMAR Film Production" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "MUAMMAR Film Production",
    description: "Perusahaan produksi film dan televisi profesional Indonesia",
    url: "https://muammarfilm.com",
    siteName: "MUAMMAR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUAMMAR Film Production",
    description: "Perusahaan produksi film dan televisi profesional Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
