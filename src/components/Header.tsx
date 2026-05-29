"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsList, BsX } from "react-icons/bs";
import Image from "next/image";

const navLinks = [
  { label: "Início",            href: "#inicio"   },
  { label: "Serviços",          href: "#servicos" },
  { label: "Região de Atuação", href: "#regiao"   },
  { label: "Sobre",             href: "#sobre"    },
  { label: "Contato",           href: "#contato"  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 10) {
        setHidden(false);
      } else if (currentY > lastY + 4) {
        setHidden(true);
        setMobileOpen(false);
      } else if (currentY < lastY - 4) {
        setHidden(false);
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="fixed top-0 left-0 right-0 z-50 overflow-visible"
      style={{
        background: "rgba(0,0,0,0.97)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between h-14 sm:h-18 overflow-visible">

          {/* ── Logo ── */}
          <button
            onClick={() => scrollTo("#inicio")}
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/imagens/logo-sem-fundo.png"
              alt="ADN Transportes"
              width={110}
              height={60}
              style={{ objectFit: "contain", height: "clamp(44px, 12vw, 100px)", width: "auto", maxHeight: "52px" }}
              priority
            />
          </button>

          {/* ── Desktop nav — centered ── */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200 cursor-pointer hover:bg-white/[0.08]"
                style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-outfit)" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Mobile menu button ── */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-lg cursor-pointer transition-colors hover:bg-white/[0.08]"
              style={{ color: "rgba(255,255,255,0.82)" }}
              aria-label="Menu"
            >
              {mobileOpen ? <BsX size={22} /> : <BsList size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="px-6 py-5 space-y-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium cursor-pointer transition-all hover:bg-white/[0.06]"
                  style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-outfit)" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
