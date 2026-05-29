"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BrazilGlobe from "@/components/ui/BrazilGlobe";

const STATES = [
  { id: "MT", name: "Mato Grosso",        base: true,  note: "Sede — Várzea Grande" },
  { id: "RO", name: "Rondônia",           base: false, note: "Forte atuação" },
  { id: "GO", name: "Goiás",              base: false, note: "Forte atuação" },
  { id: "MS", name: "Mato Grosso do Sul", base: false, note: "Forte atuação" },
  { id: "SP", name: "São Paulo",          base: false, note: "Forte atuação" },
];

export default function RegiaoSection() {

  return (
    <section
      id="regiao"
      className="relative py-14 px-6 sm:px-10 lg:px-14 overflow-hidden"
      style={{ background: "#FAFAFA" }}
    >
      <div className="section-divider" />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 lg:mb-16 flex flex-col items-center"
        >
          <div className="section-label mb-4 justify-center">Onde atuamos</div>
          <h2
            className="font-black tracking-tight leading-none text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "#0D0D0D",
              letterSpacing: "-0.04em",
            }}
          >
            Região de Atuação
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* ── Globe interativo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0"
          >
            <BrazilGlobe className="w-full rounded-full" />
          </motion.div>

          {/* ── State list ── */}
          <div className="flex-1 w-full space-y-2.5">
            {STATES.map((state, i) => (
              <motion.div
                key={state.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.09,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                viewport={{ once: true, margin: "-30px" }}
                className="group flex items-center gap-4 p-4 rounded-xl cursor-default transition-colors duration-250"
                style={{
                  background: state.base ? "#FFFFFF" : "transparent",
                  border: state.base ? "1px solid #D1D5DB" : "1px solid #F3F4F6",
                }}
              >
                <div className="flex flex-col items-center gap-1 flex-shrink-0 self-stretch py-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: state.base ? "#0057B8" : "#9CA3AF" }}
                  />
                  <div
                    className="flex-1 w-px"
                    style={{ background: state.base ? "rgba(0,87,184,0.2)" : "#F3F4F6" }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="font-bold text-sm"
                      style={{ fontFamily: "var(--font-inter)", color: "#0D0D0D" }}
                    >
                      {state.name}
                    </span>
                    {state.base && (
                      <span
                        className="px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider"
                        style={{
                          background: "rgba(0,87,184,0.08)",
                          color: "#0057B8",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        Sede
                      </span>
                    )}
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                    {state.note}
                  </p>
                </div>

                <span
                  className="font-black text-2xl select-none"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: state.base ? "rgba(0,87,184,0.18)" : "rgba(214,40,40,0.14)",
                  }}
                >
                  {state.id}
                </span>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              viewport={{ once: true }}
              className="pt-4 text-sm leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              <span className="text-[#0057B8] font-medium">Cobertura nacional</span> — além dos
              estados destacados, atendemos todo o Brasil mediante consulta.
            </motion.p>

            {/* ── Fleet photo ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.75 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden mt-4"
              style={{ height: "175px" }}
            >
              <Image
                src="/imagens/img18.jpeg"
                alt="Frota ADN em operação"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
