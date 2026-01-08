import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeprovider";
import SmoothScroll from "@/providers/smoothscroll";
import Navbar from "@/components/layouts/nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });


export const metadata: Metadata = {
  title: "Akinola Emmanuel | Software Engineer | Fullstak Developer - Portfolio",
  description: "Akinola Emmanuel's personal portfolio showcasing projects, skills, and experience as a Software Engineer and Fullstack Developer. Akinola Emmanuel is building great and groundbreaking software solutions with seamless user experiences.",
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