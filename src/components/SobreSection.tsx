"use client";

import { motion } from "framer-motion";
import { BsGeoAltFill, BsBuildings, BsClockHistory, BsBriefcaseFill } from "react-icons/bs";
import Image from "next/image";

const states = [
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Rondônia",
  "Goiás",
  "São Paulo",
];

const BRAZIL_PATH =
  "M 180,5 L 200,4 L 228,9 L 255,16 L 272,26 L 292,50 L 302,78 " +
  "L 308,108 L 312,132 L 308,152 L 300,168 L 294,182 L 302,200 " +
  "L 308,218 L 308,240 L 296,256 L 280,270 L 266,288 L 252,310 " +
  "L 236,332 L 218,348 L 198,358 L 174,362 L 152,357 L 132,345 " +
  "L 112,326 L 96,304 L 82,282 L 70,258 L 60,234 L 54,210 " +
  "L 56,188 L 66,170 L 74,150 L 70,130 L 62,108 L 56,86 " +
  "L 60,66 L 70,48 L 88,34 L 112,22 L 140,12 L 162,6 Z";

const MAP_DOTS = [
  { abbr: "MT", cx: 138, cy: 178, base: true,  delay: 0   },
  { abbr: "RO", cx: 88,  cy: 155, base: false, delay: 0.5 },
  { abbr: "GO", cx: 202, cy: 212, base: false, delay: 0.9 },
  { abbr: "MS", cx: 158, cy: 258, base: false, delay: 0.3 },
  { abbr: "SP", cx: 206, cy: 290, base: false, delay: 0.7 },
];

function MiniBrazilMap() {
  return (
    <svg viewBox="30 0 300 390" className="w-full h-full" aria-hidden>
      <path
        d={BRAZIL_PATH}
        fill="rgba(0,87,184,0.07)"
        stroke="rgba(0,87,184,0.28)"
        strokeWidth="5"
      />
      {MAP_DOTS.map((s) => (
        <g key={s.abbr}>
          {/* Anel pulsante */}
          <motion.circle
            cx={s.cx} cy={s.cy}
            r={s.base ? 20 : 15}
            fill="transparent"
            stroke={s.base ? "rgba(0,87,184,0.5)" : "rgba(214,40,40,0.45)"}
            strokeWidth="2.5"
            animate={{ opacity: [0.15, 1, 0.15], scale: [0.8, 1.35, 0.8] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
            style={{ originX: `${s.cx}px`, originY: `${s.cy}px` }}
          />
          {/* Ponto central */}
          <circle
            cx={s.cx} cy={s.cy}
            r={s.base ? 7 : 5.5}
            fill={s.base ? "#0057B8" : "#D62828"}
          />
          {/* Label */}
          <text
            x={s.cx} y={s.cy + (s.base ? 20 : 17)}
            textAnchor="middle"
            fontSize={s.base ? "11" : "10"}
            fontWeight="700"
            fill={s.base ? "#0057B8" : "#D62828"}
            fontFamily="var(--font-inter), sans-serif"
            letterSpacing="0.04em"
          >
            {s.abbr}
          </text>
        </g>
      ))}
    </svg>
  );
}

const stats = [
  { icon: BsBuildings,     value: "MT",   label: "Sede em\nVárzea Grande" },
  { icon: BsClockHistory,  value: "24/7", label: "Disponibilidade\noperacional" },
  { icon: BsBriefcaseFill, value: "B2B",  label: "Foco\nempresarial" },
];

export default function SobreSection() {
  return (
    <section
      id="sobre"
      className="relative py-10 sm:py-14 px-6 sm:px-10 lg:px-14 overflow-hidden"
      style={{ background: "#FAFAFA" }}
    >
      <div className="section-divider" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch">

          {/* ── Esquerda — Foto ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            viewport={{ once: true, margin: "-80px" }}
            className="w-full lg:w-[42%] flex-shrink-0"
            style={{ minHeight: "clamp(200px, 50vw, 340px)" }}
          >
            <div className="relative rounded-2xl overflow-hidden h-full" style={{ minHeight: "clamp(200px, 50vw, 340px)" }}>
              <Image
                src="/imagens/foto2.jpeg"
                alt="Motorista ADN Transportes com frota na estrada"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </motion.div>

          {/* ── Direita — Conteúdo ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex-1 flex flex-col justify-center gap-4 sm:gap-6"
          >
            {/* Label + título */}
            <div>
              <div className="section-label mb-4">Quem Somos</div>
              <h2
                className="leading-[1.1] sm:leading-[0.92] tracking-tight"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 900,
                  fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)",
                  color: "#0D0D0D",
                  letterSpacing: "-0.04em",
                }}
              >
                Especialistas em logística nacional.
              </h2>
            </div>

            {/* Texto descritivo */}
            <div>
              <p
                className="leading-[1.78] mb-3"
                style={{ fontSize: "clamp(0.92rem, 2.5vw, 0.97rem)", color: "#6B7280" }}
              >
                A ADN Transportes & Soluções Logísticas é uma empresa especializada em
                transporte rodoviário com presença estratégica em todo o território
                nacional. Sediados em Várzea Grande – MT, atendemos empresas de todos
                os segmentos com eficiência, comprometimento e confiabilidade.
              </p>
              <p
                className="leading-[1.78]"
                style={{ fontSize: "clamp(0.86rem, 2vw, 0.9rem)", color: "#9CA3AF" }}
              >
                Nossa frota moderna, motoristas experientes e processos operacionais
                otimizados garantem que sua logística funcione sem imprevistos —
                do ponto A ao ponto B, com a segurança que seu negócio merece.
              </p>
            </div>

            {/* Cards — mapa + ícones */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">

              {/* Card especial: mini mapa do Brasil */}
              <div
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl"
                style={{ background: "#FFFFFF", border: "1px solid #E5E7EB" }}
              >
                <div className="w-12 h-12">
                  <MiniBrazilMap />
                </div>
                <div
                  className="font-black text-xl leading-none"
                  style={{ fontFamily: "var(--font-inter)", color: "#0D0D0D" }}
                >
                  5+
                </div>
                <div
                  className="text-[10px] leading-snug whitespace-pre-line text-center"
                  style={{ color: "#6B7280" }}
                >
                  {"Estados\natendidos"}
                </div>
              </div>

              {/* Cards normais */}
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl"
                  style={{ background: "#FFFFFF", border: "1px solid #E5E7EB" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(0,87,184,0.07)",
                      border: "1px solid rgba(0,87,184,0.15)",
                    }}
                  >
                    <Icon size={14} className="text-[#0057B8]" />
                  </div>
                  <div
                    className="font-black text-xl leading-none"
                    style={{ fontFamily: "var(--font-inter)", color: "#0D0D0D" }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-[10px] leading-snug whitespace-pre-line text-center"
                    style={{ color: "#6B7280" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Sede chip */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl self-start"
              style={{ background: "#FFFFFF", border: "1px solid #E5E7EB" }}
            >
              <BsGeoAltFill size={12} className="text-[#0057B8] flex-shrink-0" />
              <span
                className="text-xs font-medium"
                style={{ color: "#374151", fontFamily: "var(--font-inter)" }}
              >
                Sede: Várzea Grande – MT
              </span>
            </div>

            {/* Regiões */}
            <div>
              <p
                className="text-[9px] uppercase tracking-[0.22em] font-semibold mb-2"
                style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}
              >
                Principais regiões
              </p>
              <div className="flex flex-wrap gap-1.5">
                {states.map((state) => (
                  <span
                    key={state}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E5E7EB",
                      color: "#6B7280",
                    }}
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
