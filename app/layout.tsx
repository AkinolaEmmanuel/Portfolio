import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeprovider";
import SmoothScroll from "@/providers/smoothscroll";
import Navbar from "@/components/layouts/nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });


export const metadata: Metadata = {
  title: "DevPortfolio | Full Stack Developer",
  description: "Modern portfolio built with Next.js 16",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScroll>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}