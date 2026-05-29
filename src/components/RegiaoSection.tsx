"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

const BRAZIL_PATH =
  "M 180,5 L 200,4 L 228,9 L 255,16 L 272,26 L 292,50 L 302,78 " +
  "L 308,108 L 312,132 L 308,152 L 300,168 L 294,182 L 302,200 " +
  "L 308,218 L 308,240 L 296,256 L 280,270 L 266,288 L 252,310 " +
  "L 236,332 L 218,348 L 198,358 L 174,362 L 152,357 L 132,345 " +
  "L 112,326 L 96,304 L 82,282 L 70,258 L 60,234 L 54,210 " +
  "L 56,188 L 66,170 L 74,150 L 70,130 L 62,108 L 56,86 " +
  "L 60,66 L 70,48 L 88,34 L 112,22 L 140,12 L 162,6 Z";

const STATES = [
  { id: "MT", name: "Mato Grosso",        abbr: "MT", cx: 138, cy: 178, base: true,  note: "Sede — Várzea Grande" },
  { id: "RO", name: "Rondônia",           abbr: "RO", cx: 88,  cy: 155, base: false, note: "Forte atuação" },
  { id: "GO", name: "Goiás",              abbr: "GO", cx: 202, cy: 212, base: false, note: "Forte atuação" },
  { id: "MS", name: "Mato Grosso do Sul", abbr: "MS", cx: 158, cy: 258, base: false, note: "Forte atuação" },
  { id: "SP", name: "São Paulo",          abbr: "SP", cx: 206, cy: 290, base: false, note: "Forte atuação" },
];

export default function RegiaoSection() {
  const base = STATES.find((s) => s.base)!;

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
          {/* ── SVG Map ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex-shrink-0 w-full max-w-[260px] sm:max-w-sm lg:max-w-[340px] mx-auto lg:mx-0"
          >
            <svg viewBox="30 0 300 380" className="w-full h-auto">
              <path
                d={BRAZIL_PATH}
                fill="rgba(15,15,15,0.03)"
                stroke="rgba(15,15,15,0.14)"
                strokeWidth="0.9"
              />
              {STATES.filter((s) => !s.base).map((s) => (
                <line
                  key={s.id}
                  x1={base.cx} y1={base.cy}
                  x2={s.cx}    y2={s.cy}
                  stroke="rgba(0,87,184,0.35)"
                  strokeWidth="0.9"
                  className="dash-animated"
                />
              ))}
              {STATES.map((st) => (
                <g key={st.id}>
                  <motion.circle
                    cx={st.cx} cy={st.cy}
                    r={st.base ? 20 : 14}
                    fill="transparent"
                    stroke={st.base ? "rgba(0,87,184,0.22)" : "rgba(214,40,40,0.18)"}
                    strokeWidth="0.8"
                    animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: Math.random() * 1.5 }}
                    style={{ originX: `${st.cx}px`, originY: `${st.cy}px` }}
                  />
                  <circle
                    cx={st.cx} cy={st.cy}
                    r={st.base ? 6 : 4.5}
                    fill={st.base ? "#0057B8" : "#D62828"}
                  />
                  <text
                    x={st.cx} y={st.cy + (st.base ? 18 : 15)}
                    textAnchor="middle"
                    fontSize={st.base ? "9.5" : "8.5"}
                    fontWeight="700"
                    fill={st.base ? "#0057B8" : "#D62828"}
                    fontFamily="var(--font-inter), sans-serif"
                    letterSpacing="0.05em"
                  >
                    {st.abbr}
                  </text>
                </g>
              ))}
            </svg>
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
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: state.base ? "rgba(0,87,184,0.08)" : "rgba(214,40,40,0.06)",
                    border: `1px solid ${state.base ? "rgba(0,87,184,0.15)" : "rgba(214,40,40,0.12)"}`,
                  }}
                >
                  <MapPin
                    className="w-3.5 h-3.5"
                    style={{ color: state.base ? "#0057B8" : "#D62828" }}
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
                  {state.abbr}
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
