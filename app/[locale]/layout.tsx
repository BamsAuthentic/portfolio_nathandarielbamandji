import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Dariel BAMANDJI — Portfolio",
  description:
    "Développeur Web Full Stack Junior | MSc (Master of science) WOOLF Génie Logiciel | Cybersécurité Check Point",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem("theme");
                  if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                    document.documentElement.classList.add("dark");
                  } else if (theme === "light") {
                    document.documentElement.classList.remove("dark");
                  }
                } catch(e) {}
              })();
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
