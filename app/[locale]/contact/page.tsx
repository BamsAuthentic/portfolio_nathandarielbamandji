import { getTranslations, setRequestLocale } from "next-intl/server";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconMapPin, IconBrandWhatsapp } from "@tabler/icons-react";
import ContactForm from "@/components/ContactForm";

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");

  const contacts = [
    {
      icon: <IconMail className="text-blue-600 text-xl" />,
      label: t("info_email"),
      value: "nbamandji@gmail.com",
      href: "mailto:nbamandji@gmail.com",
    },
    {
      icon: <IconBrandWhatsapp className="text-green-500 text-xl" />,
      label: t("info_whatsapp"),
      value: "+221 77 760 52 33",
      href: "https://wa.me/221777605233",
    },
    {
      icon: <IconBrandGithub className="text-gray-800 dark:text-gray-200 text-xl" />,
      label: t("info_github"),
      value: "https://github.com/BamsAuthentic",
      href: "https://github.com",
    },
    {
      icon: <IconBrandLinkedin className="text-blue-700 text-xl" />,
      label: t("info_linkedin"),
      value: "https://www.linkedin.com/in/nathan-dariel-bamandji-255301256/",
      href: "https://linkedin.com",
    },
    {
      icon: <IconMapPin className="text-red-500 text-xl" />,
      label: t("info_location"),
      value: "Dakar, Sénégal",
      href: null,
    },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        <ContactForm />

        {/* CONTACT INFO */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold mb-2">{t("info_title")}</h2>
          {contacts.map((c) => (
            <div key={c.label} className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{c.label}</p>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer"
                    className="text-sm text-gray-800 dark:text-gray-200 hover:text-blue-600 transition font-medium break-all">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-800 dark:text-gray-200 font-medium break-words">{c.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="mt-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
            <p className="font-semibold mb-1">{t("cta_title")}</p>
            <p className="text-blue-100 text-sm leading-relaxed">
              {t("cta_desc")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
