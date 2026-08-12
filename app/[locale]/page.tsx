import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import {
  IconBrandJavascript, IconBrandReact, IconBrandNextjs, IconBrandNodejs,
  IconBrandPython, IconBrandTailwind, IconBrandDocker, IconPipeline,
  IconBrandMongodb, IconBrandMysql, IconBrandGit, IconBrandTypescript,
  IconBrandWordpress, IconChartBar, IconTerminal2, IconServer,
  IconShieldCheck, IconFileText, IconNetwork, IconShield, IconLock,
  IconCpu2, IconBrandUbuntu, IconBrandWindows,
  IconApi, IconSend, IconStack2, IconDeviceDesktopAnalytics, IconBrandPhp, IconAnalyze,
} from "@tabler/icons-react";

const skills = [
  { icon: <IconBrandJavascript className="text-yellow-400" />, label: "JavaScript" },
  { icon: <IconBrandTypescript className="text-blue-500" />, label: "TypeScript" },
  { icon: <IconBrandReact className="text-cyan-400" />, label: "React" },
  { icon: <IconBrandNextjs className="text-black dark:text-white" />, label: "Next.js" },
  { icon: <IconBrandNodejs className="text-green-500" />, label: "Node.js" },
  { icon: <IconBrandPython className="text-blue-500" />, label: "Python" },
  { icon: <IconBrandTailwind className="text-sky-400" />, label: "Tailwind CSS" },
  { icon: <IconBrandDocker className="text-blue-400" />, label: "Docker" },
  { icon: <IconPipeline className="text-red-500" />, label: "Jenkins" },
  { icon: <IconBrandMongodb className="text-green-600" />, label: "MongoDB" },
  { icon: <IconBrandMysql className="text-blue-700" />, label: "MySQL" },
  { icon: <IconBrandGit className="text-orange-500" />, label: "Git & CI/CD" },
  { icon: <IconBrandWordpress className="text-blue-600" />, label: "WordPress" },
  { icon: <IconChartBar className="text-yellow-500" />, label: "Power BI" },
  { icon: <IconTerminal2 className="text-blue-600" />, label: "Kali Linux" },
  { icon: <IconServer className="text-green-600" />, label: "VMware Station" },
  { icon: <IconShieldCheck className="text-red-500" />, label: "Acronis Cyber Protect" },
  { icon: <IconBrandGithub className="text-gray-800 dark:text-white" />, label: "Git & GitHub" },
  { icon: <IconFileText className="text-blue-500" />, label: "Microsoft Office" },
  { icon: <IconNetwork className="text-indigo-500" />, label: "TCP/IP" },
  { icon: <IconNetwork className="text-purple-500" />, label: "DNS" },
  { icon: <IconNetwork className="text-pink-500" />, label: "DHCP" },
  { icon: <IconLock className="text-green-600" />, label: "VPN" },
  { icon: <IconShield className="text-orange-500" />, label: "Pare-feu" },
  { icon: <IconCpu2 className="text-blue-500" />, label: "Virtualisation VMware" },
  { icon: <IconBrandUbuntu className="text-orange-600" />, label: "Linux (Ubuntu)" },
  { icon: <IconBrandWindows className="text-blue-500" />, label: "Windows Server" },
  { icon: <IconApi className="text-blue-500" />, label: "API REST" },
  { icon: <IconSend className="text-orange-500" />, label: "Postman" },
  { icon: <IconStack2 className="text-indigo-500" />, label: "Microservices" },
  { icon: <IconDeviceDesktopAnalytics className="text-cyan-500" />, label: "SonarQube" },
  { icon: <IconBrandPhp className="text-indigo-600" />, label: "PHP" },
  { icon: <IconAnalyze className="text-green-600" />, label: "Wireshark" },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  return (
    <div className="space-y-14 md:space-y-20">

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-10 pt-8">
        <div className="relative">
          <Image
            src="/Maphoto.png"
            alt="Nathan Dariel BAMANDJI"
            width={180}
            height={180}
            className="rounded-full border-4 border-blue-600 object-cover object-top shadow-xl w-[140px] h-[140px] sm:w-[180px] sm:h-[180px]"
            priority
          />
          <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-white" title={t("available")} />
        </div>

        <div className="flex-1">
          <p className="text-blue-600 font-medium text-sm mb-1 tracking-wide uppercase text-center md:text-left">
            {t("title")}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Nathan Dariel<br />BAMANDJI
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-6 text-sm text-center md:text-left">
            {t("description")}
          </p>
          <div className="flex gap-3 flex-wrap items-center justify-center md:justify-start">
            <Link href="/projects"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
              {t("view_projects")}
            </Link>
            <Link href="/contact"
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
              {t("contact_me")}
            </Link>
            <div className="flex gap-2 ml-1">
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm" title="GitHub">
                <IconBrandGithub className="text-lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm" title="LinkedIn">
                <IconBrandLinkedin className="text-lg text-blue-700" />
              </a>
              <a href="mailto:nbamandji@gmail.com"
                className="p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm" title="Email">
                <IconMail className="text-lg text-gray-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "2+", label: t("stats_exp") },
          { value: "9+", label: t("stats_projects") },
          { value: "5", label: t("stats_certs") },
          { value: "MSc", label: t("stats_degree") },
        ].map((s) => (
          <div key={s.label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-5 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600 mb-1">{s.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="text-xl font-semibold mb-2">{t("skills_title")}</h2>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-6">{t("skills_subtitle")}</p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3 sm:gap-4">
          {skills.map((s) => (
            <div key={s.label}
              className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
              <span className="text-3xl">{s.icon}</span>
              <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK BIO */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 sm:p-8 text-white">
        <h2 className="text-xl font-semibold mb-3">{t("thesis_title")}</h2>
        <p className="text-blue-100 leading-relaxed text-sm max-w-2xl">
          {t.rich("thesis_desc", {
            strong: (chunks) => <strong className="text-white">{chunks}</strong>,
          })}
        </p>
        <Link href="/about"
          className="inline-block mt-5 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-400 px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition">
          {t("thesis_cta")}
        </Link>
      </section>

    </div>
  );
}
