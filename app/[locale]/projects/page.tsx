import { getTranslations, setRequestLocale } from "next-intl/server";
import { IconExternalLink, IconCode, IconBuilding, IconBrandGit, IconLock, IconWorld, IconUsersGroup, IconShieldSearch } from "@tabler/icons-react";
import { CometCard } from "@/components/ui/comet-card";

const tagColorMap: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
  green: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
  orange: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
  purple: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
};

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProjectsPage");

  const projects = [
    {
      icon: <IconCode className="text-blue-600 text-2xl" />,
      title: t("project_1_title"),
      category: t("project_1_cat"),
      desc: t("project_1_desc"),
      tags: ["Next.js", "React", "Jenkins", "DevOps", "QA"],
      url: "https://daveprocode.com",
      thesis: true,
      color: "blue",
    },
    {
      icon: <IconBuilding className="text-green-600 text-2xl" />,
      title: t("project_2_title"),
      category: t("project_2_cat"),
      desc: t("project_2_desc"),
      tags: ["PHP", "Node.js", "CSS", "Responsive"],
      url: "https://www.eden-ic.com",
      color: "green",
    },
    {
      icon: <IconBrandGit className="text-orange-500 text-2xl" />,
      title: t("project_3_title"),
      category: t("project_3_cat"),
      desc: t("project_3_desc"),
      tags: ["Jenkins", "DevOps", "CI/CD", "Tests", "QA", "Docker"],
      color: "orange",
    },
    {
      icon: <IconLock className="text-purple-600 text-2xl" />,
      title: t("project_4_title"),
      category: t("project_4_cat"),
      desc: t("project_4_desc"),
      tags: ["Check Point", "Cybersécurité", "PNUD", "Sécurité réseau"],
      color: "purple",
    },
    {
      icon: <IconWorld className="text-blue-600 text-2xl" />,
      title: t("project_5_title"),
      category: t("project_5_cat"),
      desc: t("project_5_desc"),
      tags: ["WordPress"],
      url: "https://sefinpetroleumcorp.com",
      color: "blue",
    },
    {
      icon: <IconUsersGroup className="text-purple-600 text-2xl" />,
      title: t("project_6_title"),
      category: t("project_6_cat"),
      desc: t("project_6_desc"),
      tags: ["WordPress"],
      url: "https://oclacongo.org",
      color: "purple",
    },
    {
      icon: <IconShieldSearch className="text-orange-500 text-2xl" />,
      title: t("project_7_title"),
      category: t("project_7_cat"),
      desc: t("project_7_desc"),
      tags: ["Wireshark", "Splunk", "Nessus", "Nmap", "Metasploit", "Burp Suite"],
      color: "orange",
    },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
        <p className="text-gray-400 dark:text-gray-500 text-sm">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <CometCard key={p.title}>
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl p-6 flex flex-col h-full">

              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 border flex items-center justify-center mb-4">
                {p.icon}
              </div>

              <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide font-medium mb-1">{p.category}</p>
              <h2 className="text-lg font-semibold mb-3">{p.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-2 py-1 rounded-full font-medium ${tagColorMap[p.color]}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium mt-auto">
                  <IconExternalLink className="text-xs" />
                  {t("view_site")}
                </a>
              )}
            </div>
          </CometCard>
        ))}
      </div>
    </div>
  );
}
