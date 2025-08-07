import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-full`}
      >
        <header className="relative w-full nav-appear ">
          <nav className="absolute left-1/2 trasform -translate-x-1/2  container mx-auto flex item justify-center py-4">
            <ul className="flex gap-6">
            <li className="hover:underlinee">
              <a href="/">Inicio</a>
            </li>
            <li className="hover:underline">
              <a href="/about">My About</a>
            </li>
            <li className="hover:underline">
              <a href="/works">My Works</a>
            </li>
            <li className="hover:underline">
              <a href="/blog">My Blog</a>
            </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow">
        {children}
        </main>

        <footer className="py-4 text-center text-sm text-gray-600 ">
          2025 -  Adolfo Layme Bonifacio. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
