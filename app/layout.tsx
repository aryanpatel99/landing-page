import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";



const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Agenforec Marketing Template",
  description: "Agenforec Marketing Template built with Next.js and Tailwind CSS and motion for react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar/>
          <main className="bg-background text-foreground">
          {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
