"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Nathan<span className="text-blue-600">.</span>dev
        </Link>
        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === l.href
                    ? "text-blue-600 border-b-2 border-blue-600 pb-0.5"
                    : "text-gray-500"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <IconX className="text-2xl" /> : <IconMenu2 className="text-2xl" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === l.href ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
