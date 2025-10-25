

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
// Import CartProvider to provide cart context to the entire app
import { CartProvider } from "@/components/CartContext";
import { AuthProvider } from "@/components/AuthContext";
import Navigation from "@/components/Navigation";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EDUcational",
  description: "Your one-stop solution for all educational resources",
  openGraph: {
    images: "/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <CartProvider>
            <header className="bg-blue-700 border-b-4 border-blue-200 mb-8 shadow-lg">
              <Navigation />
            </header>
            <main className="mx-auto px-4">{children}</main>
            <footer className="bg-blue-700 text-center font-medium py-8 text-blue-100 text-lg border-t-4 border-blue-200 mt-12">
              <span className="block mb-2">&copy; {new Date().getFullYear()} EDUcational. All rights reserved.</span>
              <span className="block text-sm">Made with <span className="text-red-400">&#10084;</span> for learners everywhere.</span>
            </footer>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
