import { FaMedal, FaGraduationCap, FaShieldAlt, FaChartBar, FaBullhorn } from "react-icons/fa";

const certs = [
  {
    icon: <FaShieldAlt className="text-blue-500 text-xl mt-0.5" />,
    label: "Cybersécurité régionale & consolidation numérique de la paix",
    org: "PNUD · Give1Project · Open Society Foundation",
    badge: "Check Point International",
  },
  {
    icon: <FaGraduationCap className="text-purple-500 text-xl mt-0.5" />,
    label: "MSc (Master of science) Woolf — Génie Logiciel",
    org: "En cours de finalisation",
    badge: "MSc",
  },
  {
    icon: <FaChartBar className="text-green-500 text-xl mt-0.5" />,
    label: "Data Science",
    org: "Certification internationale",
    badge: "Data",
  },
  {
    icon: <FaBullhorn className="text-orange-500 text-xl mt-0.5" />,
    label: "Marketing Digital · Téléservices",
    org: "Certifications professionnelles",
    badge: "Marketing",
  },
  {
    icon: <FaMedal className="text-yellow-500 text-xl mt-0.5" />,
    label: "Gestion de projet humanitaire & MEAL",
    org: "Suivi, Évaluation, Apprentissage et Redevabilité",
    badge: "MEAL",
  },
];

const experiences = [
  {
    role: "Développeur Web Full Stack",
    company: "Dave Procode",
    period: " Février 2023 — 2026 (en cours)",
    desc: "Développement et déploiement des applications web moderne, Rédaction des cahiers de charge,tests logiciels et assurance qualité.",
  },
  {
    role: "Enseignant en Informatique",
    company: "Lycée privé Birago Diop du groupe ISM Sénégal",
    period: "Octobre 2024 — Juin 2025",
    desc: "Formations des élèves aux fondamentaux du numérique, animation des cours théoriques et pratiques, évaluation des apprentissages et suivi des projets en petit groupe",
  },
  {
    role: "Conseiller Commercial Amazon France",
    company: " Majorel Group Sénégal",
    period: "Aout 2023 — Juin 2024",
    desc: "SAV (service après vente) et concession des clients Amazon France, Support Informatique à la logistique d'Amazon",
  },
];

export default function About() {
  return (
    <div className="max-w-3xl space-y-14">

      {/* BIO */}
      <section>
        <h1 className="text-2xl font-bold mb-4">À propos de moi</h1>
        <p className="text-gray-500 leading-relaxed mb-4">
          Je suis <strong className="text-gray-800">Nathan Dariel BAMANDJI</strong>, Développeur Web Full Stack Junior
          passionné par la création d&apos;applications web modernes, performantes et sécurisées.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Actuellement en fin de <strong className="text-gray-800">MSc ( Master of Science) Woolf en Génie Logiciel</strong>, je combine
          des compétences techniques solides (JavaScript, React, Next.js, Node.js, Python, Power BI) avec une expertise en
          DevOps, CI/CD, Analyse de données et Cybersécurité. Engagé dans des projets à impact social et technologique à l&apos;échelle
          régionale et internationale à l'issue de ma formation en Cybersécurité piloté par le PNUD, Give1project et Open Society Fondation
        </p>
      </section>

      {/* THESIS */}
      <section>
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl p-6">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Mémoire de Licence</p>
          <h2 className="text-base font-semibold text-gray-800 mb-2">
            Intégration, validation et déploiement continu CI/CD avec DevOps et Jenkins — Cas Dave Procode
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Travail de recherche axé sur l&apos;assurance qualité logicielle (QA), le contrôle qualité,
            les tests logiciels et la mise en place d&apos;une pipeline DevOps complète avec Jenkins
            dans un contexte réel de production.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Expériences</h2>
        <div className="space-y-4">
          {experiences.map((e) => (
            <div key={e.company} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-800">{e.role}</p>
                  <p className="text-blue-600 text-sm">{e.company}</p>
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Certifications</h2>
        <ul className="space-y-3">
          {certs.map((c) => (
            <li key={c.label} className="flex gap-4 items-start bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <span>{c.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{c.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{c.org}</p>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full whitespace-nowrap">
                {c.badge}
              </span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
