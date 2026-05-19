import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPython, SiTailwindcss, SiDocker, SiJenkins,
  SiMongodb, SiMysql, SiGit, SiTypescript,
} from "react-icons/si";

const skills = [
  { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
  { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
  { icon: <SiReact className="text-cyan-400" />, label: "React" },
  { icon: <SiNextdotjs className="text-black dark:text-white" />, label: "Next.js" },
  { icon: <SiNodedotjs className="text-green-500" />, label: "Node.js" },
  { icon: <SiPython className="text-blue-500" />, label: "Python" },
  { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind CSS" },
  { icon: <SiDocker className="text-blue-400" />, label: "Docker" },
  { icon: <SiJenkins className="text-red-500" />, label: "Jenkins" },
  { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
  { icon: <SiMysql className="text-blue-700" />, label: "MySQL" },
  { icon: <SiGit className="text-orange-500" />, label: "Git & CI/CD" },
];

export default function Home() {
  return (
    <div className="space-y-20">

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center gap-10 pt-8">
        <div className="relative">
          <Image
            src="/Maphoto.png"
            alt="Nathan Dariel BAMANDJI"
            width={180}
            height={180}
            className="rounded-full border-4 border-blue-600 object-cover object-top shadow-xl"
            style={{ height: "180px", width: "180px" }}
            priority
          />
          <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-white" title="Disponible" />
        </div>

        <div className="flex-1">
          <p className="text-blue-600 font-medium text-sm mb-1 tracking-wide uppercase">
            Développeur Web Full Stack Junior
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Nathan Dariel<br />BAMANDJI
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed mb-6 text-sm">
            MSc ( Master of science) Woolf en Génie Logiciel · Certifié Check Point (Cybersécurité) · 
            Data Science · CI/CD & DevOps. Passionné par le développement web, 
            la qualité logicielle et la sécurité numérique. Basé à Dakar, Sénégal.
          </p>
          <div className="flex gap-3 flex-wrap items-center">
            <Link href="/projects"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Voir mes projets
            </Link>
            <Link href="/contact"
              className="border border-gray-200 bg-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              Me contacter
            </Link>
            <div className="flex gap-2 ml-1">
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="p-2.5 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition shadow-sm" title="GitHub">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="p-2.5 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition shadow-sm" title="LinkedIn">
                <FaLinkedin className="text-lg text-blue-700" />
              </a>
              <a href="mailto:nbamandji@gmail.com"
                className="p-2.5 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition shadow-sm" title="Email">
                <FaEnvelope className="text-lg text-gray-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "2+", label: "Ans d'expérience" },
          { value: "5+", label: "Projets réalisés" },
          { value: "5", label: "Certifications" },
          { value: "MSc", label: "Génie Logiciel" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600 mb-1">{s.value}</p>
            <p className="text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Technologies maîtrisées</h2>
        <p className="text-gray-400 text-sm mb-6">Stack technique et outils utilisés au quotidien.</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((s) => (
            <div key={s.label}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
              <span className="text-3xl">{s.icon}</span>
              <span className="text-xs text-gray-600 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK BIO */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <h2 className="text-xl font-semibold mb-3">Mémoire de Licence</h2>
        <p className="text-blue-100 leading-relaxed text-sm max-w-2xl">
          <strong className="text-white">Intégration, validation et déploiement continu CI/CD avec DevOps et Jenkins — Cas Dave Procode.</strong>{" "}
          Axé sur l&apos;assurance qualité logicielle (QA), le contrôle qualité et les tests logiciels dans une approche DevOps complète.
        </p>
        <Link href="/about"
          className="inline-block mt-5 bg-white text-blue-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
          En savoir plus →
        </Link>
      </section>

    </div>
  );
}
