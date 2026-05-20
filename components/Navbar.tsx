"use client";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatedThemeToggler } from "@/components/AnimatedThemeToggler";
import { routing } from "@/i18n/routing";

const links = [
  { href: "/" as const, labelKey: "home" },
  { href: "/about" as const, labelKey: "about" },
  { href: "/projects" as const, labelKey: "projects" },
  { href: "/contact" as const, labelKey: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(false);

  function switchLocale(locale: string) {
    router.replace(pathname, { locale });
  }

  return (
    <nav
      className="sticky top-0 z-50 border-b shadow-sm"
      style={{
        backgroundColor: "var(--bg-nav)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          {t("brand")}<span className="text-blue-600">.</span>dev
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    pathname === l.href
                      ? "text-blue-600 border-b-2 border-blue-600 pb-0.5"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {t(l.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 ml-4 pl-4 border-l"
            style={{ borderColor: "var(--border)" }}>
            <AnimatedThemeToggler className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" />
            {routing.locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                  currentLocale === locale
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                {t(locale === "fr" ? "locale_fr" : "locale_en")}
              </button>
            ))}
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <AnimatedThemeToggler className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" />
          <div className="flex gap-1 mr-1">
            {routing.locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                  currentLocale === locale
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                {t(locale === "fr" ? "locale_fr" : "locale_en")}
              </button>
            ))}
          </div>
          <button className="p-2" onClick={() => setOpen(!open)}>
            {open ? <IconX className="text-2xl" /> : <IconMenu2 className="text-2xl" />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="md:hidden border-t px-6 pb-4"
          style={{
            backgroundColor: "var(--bg-nav)",
            borderColor: "var(--border)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === l.href ? "text-blue-600" : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {t(l.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
