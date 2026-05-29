"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";

/* Precomputed spoke offsets for 6-bolt wheel (r=9, angles 0°,60°,…,300°) */
const SPOKES: [number, number][] = [
  [9, 0], [4.5, 7.79], [-4.5, 7.79], [-9, 0], [-4.5, -7.79], [4.5, -7.79],
];

/* ── Truck outline on cream — dark-gray fine lines, architectural feel ── */
function TruckEditorial({ className }: { className?: string }) {
  const line = "rgba(15,15,15,0.13)";
  const fill = "rgba(15,15,15,0.04)";

  return (
    <svg viewBox="0 0 580 130" fill="none" className={className} aria-hidden>
      {/* Ground shadow */}
      <ellipse cx="290" cy="126" rx="270" ry="6" fill="rgba(15,15,15,0.06)" />

      {/* Cab body */}
      <path
        d="M 5,118 L 5,32 Q 5,14 20,13 L 108,13 Q 122,13 130,27 L 162,72 L 176,72 L 176,118 Z"
        fill={fill} stroke={line} strokeWidth="1.1"
      />
      {/* Windshield */}
      <path
        d="M 13,35 L 13,69 L 124,69 L 104,30 Q 96,20 85,20 L 27,20 Q 14,20 13,35 Z"
        fill="rgba(15,15,15,0.03)" stroke={line} strokeWidth="0.8"
      />
      {/* Windshield pillar */}
      <line x1="70" y1="20" x2="60" y2="69" stroke={line} strokeWidth="0.6" />

      {/* Door panel */}
      <rect x="96" y="37" width="30" height="32" rx="3" fill={fill} stroke={line} strokeWidth="0.7" />
      {/* Door handle */}
      <rect x="96" y="53" width="6" height="2.5" rx="1" fill={line} />

      {/* Step */}
      <rect x="12" y="95" width="32" height="9" rx="2" fill={fill} stroke={line} strokeWidth="0.6" />

      {/* Exhaust stack */}
      <rect x="148" y="2" width="7" height="30" rx="3.5" fill={fill} stroke={line} strokeWidth="0.7" />
      <ellipse cx="151.5" cy="2" rx="5.5" ry="2" fill={line} />

      {/* Trailer */}
      <rect x="176" y="18" width="394" height="100" rx="3" fill={fill} stroke={line} strokeWidth="1.1" />
      {/* Trailer vertical ribs */}
      {[266, 356, 446, 536].map((x) => (
        <line key={x} x1={x} y1="18" x2={x} y2="118" stroke={line} strokeWidth="0.55" strokeDasharray="3 5" />
      ))}
      {/* Trailer center horizontal */}
      <line x1="176" y1="68" x2="570" y2="68" stroke={line} strokeWidth="0.55" />
      {/* Trailer rear doors */}
      <line x1="551" y1="18" x2="551" y2="118" stroke={line} strokeWidth="1.1" />
      <line x1="563" y1="18" x2="563" y2="118" stroke={line} strokeWidth="1.1" />
      {/* Door handles */}
      <circle cx="551" cy="68" r="2.5" fill={line} />
      <circle cx="563" cy="68" r="2.5" fill={line} />

      {/* Fifth wheel */}
      <rect x="172" y="108" width="40" height="10" rx="3" fill={fill} stroke={line} strokeWidth="0.6" />

      {/* Wheels — front */}
      <circle cx="48" cy="118" r="22" fill="#F4F1EB" stroke={line} strokeWidth="1.1" />
      <circle cx="48" cy="118" r="13" fill={fill} stroke={line} strokeWidth="0.7" />
      <circle cx="48" cy="118" r="4.5" fill={line} />
      {SPOKES.map(([dx, dy]) => (
        <circle key={`f-${dx}-${dy}`} cx={48 + dx} cy={118 + dy} r="1.5" fill={line} />
      ))}

      {/* Wheels — rear tandem */}
      {[380, 436].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="118" r="22" fill="#F4F1EB" stroke={line} strokeWidth="1.1" />
          <circle cx={cx} cy="118" r="13" fill={fill} stroke={line} strokeWidth="0.7" />
          <circle cx={cx} cy="118" r="4.5" fill={line} />
          {SPOKES.map(([dx, dy]) => (
            <circle key={`${cx}-${dx}-${dy}`} cx={cx + dx} cy={118 + dy} r="1.5" fill={line} />
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const truckX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#0A0A0F" }}
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/imagens/img26.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay — heavy on left for text, lighter on right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,14,0.72) 0%, rgba(8,8,14,0.58) 50%, rgba(8,8,14,0.72) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(8,8,14,0.7), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 pt-20 sm:pt-28 pb-12 sm:pb-16 flex flex-col items-center text-center">

        {/* ── Top label ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="section-label mb-5 sm:mb-8 justify-center"
          style={{ color: "rgba(244,241,235,0.75)" }}
        >
          ADN Transportes & Soluções Logísticas
        </motion.div>

        {/* ── Main title ── */}
        <motion.div style={{ y: textY, opacity }} className="flex flex-col items-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="leading-[1.1] sm:leading-[0.95] tracking-tight mb-5 sm:mb-6"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 7vw, 5.2rem)",
              color: "#F4F1EB",
              letterSpacing: "-0.04em",
            }}
          >
            Logística que move o Brasil.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="max-w-[560px] leading-relaxed mb-7 sm:mb-10 px-1 sm:px-0"
            style={{
              fontSize: "clamp(0.93rem, 3.5vw, 1.1rem)",
              color: "rgba(244,241,235,0.8)",
            }}
          >
            Transporte rodoviário seguro, rastreamento em tempo real e atendimento
            personalizado — tudo em uma única solução logística para o seu negócio.
          </motion.p>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.54 }}
          >
            <a
              href="https://wa.me/5567999293509"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white cursor-pointer transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
              style={{
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.45)",
                fontFamily: "var(--font-inter)",
                boxShadow: "none",
                transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.background = "#25D366";
                el.style.borderColor = "#25D366";
                el.style.boxShadow = "0 0 24px rgba(37,211,102,0.45)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(255,255,255,0.45)";
                el.style.boxShadow = "none";
              }}
            >
              Solicitar Orçamento
              <BsArrowUpRight size={15} className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
            </a>
          </motion.div>

          {/* ── Inline stats ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 sm:mt-14 flex flex-wrap justify-center items-center gap-x-5 sm:gap-x-10 gap-y-3 pt-6 sm:pt-8 w-full"
            style={{ borderTop: "1px solid rgba(244,241,235,0.15)" }}
          >
            {[
              { value: "5+",   label: "Estados atendidos" },
              { value: "B2B",  label: "Foco empresarial" },
              { value: "24/7", label: "Disponibilidade" },
              { value: "MT",   label: "Sede Várzea Grande" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span
                  className="font-heading font-black text-[#F4F1EB]"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "1.1rem" }}
                >
                  {s.value}
                </span>
                <span className="text-xs" style={{ color: "rgba(244,241,235,0.65)" }}>
                  {s.label}
                </span>
                {i < 3 && (
                  <div className="w-px h-4 ml-4" style={{ background: "rgba(244,241,235,0.2)" }} />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
