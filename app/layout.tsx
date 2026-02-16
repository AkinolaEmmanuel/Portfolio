import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeprovider";
import SmoothScroll from "@/providers/smoothscroll";
import Navbar from "@/components/layouts/nav";
import CustomCursor from "@/components/ui/custom-cursor";

const inter = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Akinola Emmanuel | Software Engineer & Designer",
  description: "Crafting premium digital experiences through minimal, high-performance software engineering. Based in Nigeria, building globally.",
  openGraph: {
    title: "Akinola Emmanuel | Portolio",
    description: "Software Engineer & Designer",
    url: "https://akinolaemmanuel.netlify.app", 
    siteName: "Akinola Emmanuel Portfolio",
    images: [
      {
        url: "/me4.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akinola Emmanuel | Software Engineer",
    description: "Crafting digital experiences through minimal, high-performance engineering.",
    creator: "@akinolatijesu7",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} font-sans antialiased bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] noise-overlay" />
          <CustomCursor />
          <SmoothScroll>
            <div className="relative flex min-h-screen flex-col selection:bg-foreground selection:text-background">
              <Navbar />
              <main className="flex-1">{children}</main>
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}