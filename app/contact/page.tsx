import { IconMail, IconBrandGithub, IconBrandLinkedin, IconMapPin, IconBrandWhatsapp } from "@tabler/icons-react";

const contacts = [
  {
    icon: <IconMail className="text-blue-600 text-xl" />,
    label: "Email",
    value: "nbamandji@gmail.com",
    href: "mailto:nbamandji@gmail.com",
  },
  {
    icon: <IconBrandWhatsapp className="text-green-500 text-xl" />,
    label: "WhatsApp",
    value: "+221 77 760 52 33",
    href: "https://wa.me/221777605233",
  },
  {
    icon: <IconBrandGithub className="text-gray-800 text-xl" />,
    label: "GitHub",
    value: "https://github.com/BamsAuthentic",
    href: "https://github.com",
  },
  {
    icon: <IconBrandLinkedin className="text-blue-700 text-xl" />,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/nathan-dariel-bamandji-255301256/",
    href: "https://linkedin.com",
  },
  {
    icon: <IconMapPin className="text-red-500 text-xl" />,
    label: "Localisation",
    value: "Dakar, Sénégal",
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2">Me contacter</h1>
        <p className="text-gray-400 text-sm">
          Disponible pour des missions freelance, des collaborations ou des opportunités professionnelles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Envoyer un message</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
              <input
                type="text"
                placeholder="Objet du message"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Décrivez votre projet ou votre demande..."
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              Envoyer le message
            </button>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold mb-2">Coordonnées</h2>
          {contacts.map((c) => (
            <div key={c.label} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                {c.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer"
                    className="text-sm text-gray-800 hover:text-blue-600 transition font-medium">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-800 font-medium">{c.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="mt-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
            <p className="font-semibold mb-1">Disponible pour travailler 🚀</p>
            <p className="text-blue-100 text-sm leading-relaxed">
              Ouvert aux opportunités en développement web Full Stack, DevOps, cybersécurité ou data science.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
