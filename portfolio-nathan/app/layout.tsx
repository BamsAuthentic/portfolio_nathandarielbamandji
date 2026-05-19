import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Dariel BAMANDJI — Portfolio",
  description: "Développeur Web Full Stack Junior | MSc (Master of science) WOOLF Génie Logiciel | Cybersécurité Check Point",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        <footer className="text-center py-8 text-sm text-gray-400 border-t border-gray-100 mt-16">
          © 2026 Nathan Dariel BAMANDJI — Développeur Web Full Stack Junior
        </footer>
      </body>
    </html>
  );
}
