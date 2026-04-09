import AuthProvider from "@/hooks/AuthProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "@/styles/main.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const manropeHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Truqorun Projects Marketplace",
  description: "A marketplace for Truqorun projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <TooltipProvider>
        <html
          lang="en"
          className={cn(
            "h-full",
            "antialiased",
            geistSans.variable,
            geistMono.variable,
            manropeHeading.variable,
          )}
        >
          <body className="min-h-full flex flex-col">{children}</body>
        </html>
      </TooltipProvider>
    </AuthProvider>
  );
}
