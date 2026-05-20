import { getTranslations, setRequestLocale } from "next-intl/server";
import { IconMedal, IconSchool, IconShieldCheck, IconChartBar, IconSpeakerphone } from "@tabler/icons-react";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");

  const certs = [
    {
      icon: <IconShieldCheck className="text-blue-500 text-xl mt-0.5" />,
      label: t("cert_1_label"),
      org: t("cert_1_org"),
      badge: t("cert_1_badge"),
    },
    {
      icon: <IconSchool className="text-purple-500 text-xl mt-0.5" />,
      label: t("cert_2_label"),
      org: t("cert_2_org"),
      badge: t("cert_2_badge"),
    },
    {
      icon: <IconChartBar className="text-green-500 text-xl mt-0.5" />,
      label: t("cert_3_label"),
      org: t("cert_3_org"),
      badge: t("cert_3_badge"),
    },
    {
      icon: <IconSpeakerphone className="text-orange-500 text-xl mt-0.5" />,
      label: t("cert_4_label"),
      org: t("cert_4_org"),
      badge: t("cert_4_badge"),
    },
    {
      icon: <IconMedal className="text-yellow-500 text-xl mt-0.5" />,
      label: t("cert_5_label"),
      org: t("cert_5_org"),
      badge: t("cert_5_badge"),
    },
  ];

  const experiences = [
    {
      role: t("exp_1_role"),
      company: t("exp_1_company"),
      period: t("exp_1_period"),
      desc: t("exp_1_desc"),
    },
    {
      role: t("exp_2_role"),
      company: t("exp_2_company"),
      period: t("exp_2_period"),
      desc: t("exp_2_desc"),
    },
    {
      role: t("exp_3_role"),
      company: t("exp_3_company"),
      period: t("exp_3_period"),
      desc: t("exp_3_desc"),
    },
  ];

  return (
    <div className="max-w-3xl space-y-14">

      {/* BIO */}
      <section>
        <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          {t.rich("bio_p1", {
            strong: (chunks) => <strong className="text-gray-800 dark:text-gray-100">{chunks}</strong>,
          })}
        </p>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          {t.rich("bio_p2", {
            strong: (chunks) => <strong className="text-gray-800 dark:text-gray-100">{chunks}</strong>,
          })}
        </p>
      </section>

      {/* THESIS */}
      <section>
        <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 rounded-r-2xl p-6">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">{t("thesis_badge")}</p>
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {t("thesis_title")}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {t("thesis_desc")}
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2 className="text-xl font-semibold mb-6">{t("experience_title")}</h2>
        <div className="space-y-4">
          {experiences.map((e) => (
            <div key={e.company} className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-5 shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">{e.role}</p>
                  <p className="text-blue-600 text-sm">{e.company}</p>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-700 px-3 py-1 rounded-full">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section>
        <h2 className="text-xl font-semibold mb-6">{t("certs_title")}</h2>
        <ul className="space-y-3">
          {certs.map((c) => (
            <li key={c.label} className="flex gap-4 items-start bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <span>{c.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{c.label}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{c.org}</p>
              </div>
              <span className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full whitespace-nowrap">
                {c.badge}
              </span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
