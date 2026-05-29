"use client";

import Link from "next/link";
import Image from "next/image";
import { BsGeoAltFill, BsTelephoneFill } from "react-icons/bs";

const navLinks = [
  { label: "Início",            href: "#inicio"   },
  { label: "Serviços",          href: "#servicos" },
  { label: "Região de Atuação", href: "#regiao"   },
  { label: "Sobre",             href: "#sobre"    },
  { label: "Contato",           href: "#contato"  },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Instagram">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.055)" }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,87,184,0.35) 50%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-10 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-5">
              <Image
                src="/imagens/logo-adn.png"
                alt="ADN Transportes"
                width={130}
                height={70}
                style={{ objectFit: "contain", height: "clamp(70px, 18vw, 110px)", width: "auto" }}
              />
            </div>

            <p
              className="text-sm leading-[1.75] mb-5 sm:mb-6 max-w-full sm:max-w-[280px]"
              style={{ color: "rgba(248,250,252,0.6)" }}
            >
              ADN Transportes & Soluções Logísticas — especializada em transporte
              rodoviário, fretes e distribuição com cobertura nacional.
            </p>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/adntransportes?igsh=MWJwYTB2ZmJvNjRzNw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-200 hover:text-white group"
              style={{ color: "rgba(248,250,252,0.4)" }}
            >
              <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
              @adntransportes
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-semibold text-white tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm cursor-pointer transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(248,250,252,0.6)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold text-white tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Contato
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <BsGeoAltFill size={14} className="text-[#4da3ff] flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-snug" style={{ color: "rgba(248,250,252,0.4)" }}>
                  Várzea Grande – MT<br />
                  <span style={{ color: "rgba(248,250,252,0.25)" }}>Matriz Nacional</span>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <BsTelephoneFill size={14} className="text-[#4da3ff] flex-shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <Link
                    href="https://wa.me/5567999293509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm cursor-pointer transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(248,250,252,0.45)" }}
                  >
                    (67) 99929-3509
                  </Link>
                  <Link
                    href="https://wa.me/5565999846280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm cursor-pointer transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(248,250,252,0.45)" }}
                  >
                    (65) 99984-6280
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 sm:mt-14 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(248,250,252,0.22)" }}>
            © {new Date().getFullYear()} ADN Transportes & Soluções Logísticas.
          </p>
          <p className="text-xs" style={{ color: "rgba(248,250,252,0.18)" }}>
            Várzea Grande · MT · Brasil
          </p>
          <a
            href="https://camaly.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(248,250,252,0.22)" }}
          >
            Produzida com 💚 por CAMALY
          </a>
        </div>
      </div>
    </footer>
  );
}
