"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Headphones, Globe, Clock, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

const items: {
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    num: "01",
    icon: Zap,
    title: "Agilidade",
    description: "Processos otimizados e frota preparada para entregas nos menores prazos possíveis.",
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Segurança",
    description: "Monitoramento em tempo real, seguro de carga e motoristas treinados e certificados.",
  },
  {
    num: "03",
    icon: Headphones,
    title: "Atendimento Dedicado",
    description: "Canal direto para cada cliente. Disponíveis para resolver qualquer situação com rapidez.",
  },
  {
    num: "04",
    icon: Globe,
    title: "Cobertura Nacional",
    description: "Atuação estratégica em MT, MS, RO, GO, SP e em todo o território brasileiro.",
  },
  {
    num: "05",
    icon: Clock,
    title: "Cumprimento de Prazos",
    description: "Comprometimento rigoroso com as janelas de entrega acordadas. Sua operação não para.",
  },
  {
    num: "06",
    icon: Truck,
    title: "Frota Moderna",
    description: "Veículos revisados, rastreados e equipados para os mais variados tipos de carga.",
  },
];

export default function DiferenciaisSection() {
  return (
    <section
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
          <div className="section-label mb-4 justify-center">Por que escolher a ADN</div>
          <h2
            className="font-black tracking-tight leading-none text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "#0D0D0D",
              letterSpacing: "-0.04em",
            }}
          >
            Nossos Diferenciais
          </h2>
        </motion.div>

        {/* ── Fleet photo banner ── */}
        <div className="relative rounded-2xl overflow-hidden mb-8 lg:mb-12" style={{ height: "clamp(140px, 35vw, 220px)" }}>
          <Image
            src="/imagens/img26.jpeg"
            alt="Frota ADN em operação na estrada"
            fill
            className="object-cover object-[center_60%]"
            sizes="100vw"
          />
        </div>

        {/* ── Numbered editorial list ── */}
        <div>
          {items.map(({ num, icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.055,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              viewport={{ once: true, margin: "-20px" }}
              className="group"
            >
              <div className="h-px w-full" style={{ background: "#E5E7EB" }} />

              <div className="flex items-start gap-4 sm:gap-8 py-5 sm:py-6 px-4 -mx-4 rounded-xl transition-colors duration-300 group-hover:bg-black/[0.025] cursor-default flex-wrap sm:flex-nowrap">
                <span
                  className="font-black flex-shrink-0 tabular-nums select-none mt-1"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    color: "#9CA3AF",
                    width: "2rem",
                    textAlign: "right",
                  }}
                >
                  {num}
                </span>

                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "rgba(0,87,184,0.07)",
                    border: "1px solid rgba(0,87,184,0.15)",
                  }}
                >
                  <Icon className="w-4 h-4 text-[#0057B8]" strokeWidth={1.8} />
                </div>

                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                  <span
                    className="font-bold flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                      color: "#0D0D0D",
                      minWidth: "clamp(120px, 20vw, 220px)",
                    }}
                  >
                    {title}
                  </span>

                  <span
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "#4B5563" }}
                  >
                    {description}
                  </span>
                </div>

                <span
                  className="hidden sm:block flex-shrink-0 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "#9CA3AF" }}
                >
                  →
                </span>
              </div>

              {i === items.length - 1 && (
                <div className="h-px w-full" style={{ background: "#E5E7EB" }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
