import { FaExternalLinkAlt, FaCode, FaLock, FaBuilding, FaGitAlt } from "react-icons/fa";

const projects = [
  {
    icon: <FaCode className="text-blue-600 text-2xl" />,
    title: "Dave Procode",
    category: "Site web vitrine de l'agence digitale",
    desc: "Développement complet du site web de l'agence digitale en développement logiciel. Mise en place d'une pipeline CI/CD avec Jenkins, tests logiciels, assurance qualité et contrôle qualité dans une approche DevOps complète.",
    tags: ["Next.js", "React", "Jenkins", "DevOps", "QA"],
    url: "https://daveprocode.com",
    thesis: true,
    color: "blue",
  },
  {
    icon: <FaBuilding className="text-green-600 text-2xl" />,
    title: "Eden Ingénieurs Conseil",
    category: "Site vitrine professionnel",
    desc: "Conception et développement du site web professionnel pour ce cabinet d'ingénierie. Interface moderne, responsive et optimisée pour les performances. Rendu côté serveur avec Next.js.",
    tags: ["PHP", , "Node.js", "CSS", "Responsive"],
    url: "https://www.eden-ic.com",
    color: "green",
  },
  {
    icon: <FaGitAlt className="text-orange-500 text-2xl" />,
    title: "Pipeline CI/CD — Mémoire Licence",
    category: "DevOps & Qualité logicielle",
    desc: "Recherche et implémentation d'un système d'intégration, validation et déploiement continu avec DevOps et Jenkins. Axé sur les tests logiciels, l'assurance qualité (QA) et le contrôle qualité en production.",
    tags: ["Jenkins", "DevOps", "CI/CD", "Tests", "QA", "Docker"],
    color: "orange",
  },
  {
    icon: <FaLock className="text-purple-600 text-2xl" />,
    title: "Cybersécurité & Paix Numérique",
    category: "Formation régionale",
    desc: "Programme de formation régionale en cybersécurité et consolidation numérique de la paix en Afrique, conduit avec le PNUD, Give1Project et l'Open Society Foundation. Certification internationale Check Point obtenue.",
    tags: ["Check Point", "Cybersécurité", "PNUD", "Sécurité réseau"],
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-100",
  green: "bg-green-50 border-green-100",
  orange: "bg-orange-50 border-orange-100",
  purple: "bg-purple-50 border-purple-100",
};

const tagColorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
  purple: "bg-purple-100 text-purple-700",
};

export default function Projects() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2">Mes projets</h1>
        <p className="text-gray-400 text-sm">Réalisations professionnelles et projets de recherche.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title}
            className={`bg-white border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 flex flex-col`}>

            {p.thesis && (
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-md mb-4 inline-block w-fit font-medium">
                📄 Mémoire de licence
              </span>
            )}

            <div className={`w-12 h-12 rounded-xl ${colorMap[p.color]} border flex items-center justify-center mb-4`}>
              {p.icon}
            </div>

            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">{p.category}</p>
            <h2 className="text-lg font-semibold mb-3">{p.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className={`text-xs px-2 py-1 rounded-full font-medium ${tagColorMap[p.color]}`}>
                  {t}
                </span>
              ))}
            </div>

            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium mt-auto">
                <FaExternalLinkAlt className="text-xs" />
                Voir le site
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
