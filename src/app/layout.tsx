import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { AnimatedLayout } from "@/components/animations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adolfo - Portafolio",
  description: "Portafolio Personal",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-full bg-black text-white`}
      >
        <AnimatedLayout 
          loaderText="Adolfo Layme"
          loaderDuration={2500}
        >
          <Navigation />

          <main className="flex-grow">
            {children}
          </main>

        </AnimatedLayout>
        <footer className="py-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} - Adolfo Layme Bonifacio. Todos los derechos reservados.
          </footer>
      </body>
    </html>
  );
}
