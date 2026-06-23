import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import Script from "next/script";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Dariel BAMANDJI — Portfolio",
  description:
    "Développeur Web Full Stack | MSc (Master of science) WOOLF Génie Logiciel | Analyste en Cybersécurité",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const [messages, t] = await Promise.all([
    getMessages(),
    getTranslations("Footer"),
  ]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen`}
        style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("theme");
                if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                  document.documentElement.classList.add("dark");
                } else if (theme === "light") {
                  document.documentElement.classList.remove("dark");
                }
              } catch(e) {}
            `,
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
          <footer
            className="text-center py-8 text-sm mt-16"
            style={{
              color: "var(--text-secondary)",
              borderTop: "1px solid var(--border)",
            }}
          >
            {t("text")}
          </footer>
          <Toaster
            position="top-right"
            gutter={12}
            containerClassName=""
            toastOptions={{
              duration: 4000,
              className:
                "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm font-medium shadow-lg border border-gray-100 dark:border-gray-700",
              style: {
                padding: "12px 20px",
                borderRadius: "12px",
              },
              success: {
                iconTheme: {
                  primary: "#22c55e",
                  secondary: "#fff",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#fff",
                },
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
