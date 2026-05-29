"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Headphones, Globe, Clock, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

/* Spoke offsets for 6-bolt wheel (r=8) */
const WSPOKES: [number, number][] = [
  [8, 0], [4, 6.93], [-4, 6.93], [-8, 0], [-4, -6.93], [4, -6.93],
];

const STARS: [number, number, number][] = [
  [120,18,1.2],[280,32,0.7],[45,52,0.9],[390,22,1.0],[510,40,0.7],[650,15,1.1],[790,38,0.8],[930,12,1.3],
  [1060,28,0.7],[1200,44,1.0],[1340,20,0.8],[85,72,0.7],[230,88,1.1],[470,65,0.7],[615,82,0.9],
  [755,70,0.7],[900,85,1.0],[1040,62,0.7],[1175,80,0.9],[1310,68,0.7],[168,108,1.2],[345,122,0.7],
  [495,102,0.8],[685,115,0.7],[840,105,1.0],[975,128,0.7],[1125,110,0.9],[1255,122,0.7],[1390,98,1.1],
  [55,138,0.7],[270,152,0.9],[435,140,0.7],[605,155,1.0],[765,142,0.7],[915,158,0.9],[1105,145,0.7],
  [1350,152,0.8],[180,175,0.7],[360,168,1.0],[540,180,0.7],[720,170,0.9],[900,182,0.7],[1080,172,0.8],
  [1260,178,0.7],[62,200,0.9],[300,195,0.7],[580,202,1.0],[820,197,0.7],[1100,200,0.8],[1380,195,0.7],
];

function HighwayScene({ className }: { className?: string }) {
  const ts = "rgba(0,120,255,0.5)";   /* truck stroke */
  const tf = "rgba(255,255,255,0.03)"; /* truck fill */
  const bg = "#060910";               /* wheel bg */

  return (
    <svg
      viewBox="0 0 1440 460"
      fill="none"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="dSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#020407" />
          <stop offset="60%" stopColor="#061020" />
          <stop offset="100%" stopColor="#0b1a30" />
        </linearGradient>
        <linearGradient id="dRoad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#0d1420" />
          <stop offset="100%" stopColor="#1a2235" />
        </linearGradient>
        <radialGradient id="dHorizon" cx="50%" cy="100%" r="60%">
          <stop offset="0%"  stopColor="rgba(0,87,184,0.22)" />
          <stop offset="100%" stopColor="rgba(0,87,184,0)" />
        </radialGradient>
        <radialGradient id="dBeam" cx="0%" cy="50%" r="100%">
          <stop offset="0%"  stopColor="rgba(210,230,255,0.18)" />
          <stop offset="100%" stopColor="rgba(210,230,255,0)" />
        </radialGradient>
        <radialGradient id="dTailLight" cx="100%" cy="50%" r="80%">
          <stop offset="0%"  stopColor="rgba(200,20,20,0.0)" />
          <stop offset="100%" stopColor="rgba(200,20,20,0)" />
        </radialGradient>
      </defs>

      {/* ── Sky ── */}
      <rect width="1440" height="460" fill="url(#dSky)" />

      {/* Stars */}
      {STARS.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="rgba(255,255,255,0.65)" />
      ))}

      {/* Subtle Milky Way band */}
      <ellipse cx="720" cy="100" rx="680" ry="55" fill="rgba(100,130,200,0.03)" />

      {/* Horizon atmospheric glow */}
      <rect x="0" y="255" width="1440" height="80" fill="url(#dHorizon)" />
      <ellipse cx="720" cy="310" rx="560" ry="45" fill="rgba(0,87,184,0.07)" />

      {/* Moon */}
      <circle cx="1280" cy="65" r="22" fill="rgba(240,245,255,0.12)" stroke="rgba(240,245,255,0.18)" strokeWidth="0.8" />
      <circle cx="1272" cy="60" r="18" fill="rgba(30,40,60,0.7)" />

      {/* ── Mountains far ── */}
      <path
        d="M 0,278 L 75,208 L 140,245 L 210,192 L 285,226 L 355,178 L 428,215 L 500,170 L 572,205 L 648,175 L 718,202 L 792,162 L 862,195 L 935,175 L 1005,202 L 1078,180 L 1148,208 L 1220,186 L 1295,215 L 1368,192 L 1440,210 L 1440,310 L 0,310 Z"
        fill="#04070F"
      />
      {/* Mountains near */}
      <path
        d="M 0,292 L 110,255 L 195,272 L 285,255 L 370,270 L 455,256 L 540,270 L 630,258 L 720,272 L 810,260 L 900,272 L 990,260 L 1080,272 L 1170,260 L 1265,272 L 1360,260 L 1440,270 L 1440,310 L 0,310 Z"
        fill="#060A18"
      />

      {/* ── Road surface ── */}
      <rect x="0" y="308" width="1440" height="152" fill="url(#dRoad)" />

      {/* Road top edge */}
      <line x1="0" y1="308" x2="1440" y2="308" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      {/* Shoulder stripe — top lane */}
      <line x1="0" y1="320" x2="1440" y2="320" stroke="rgba(255,255,255,0.42)" strokeWidth="1.4" />
      {/* Shoulder stripe — bottom lane */}
      <line x1="0" y1="428" x2="1440" y2="428" stroke="rgba(255,255,255,0.38)" strokeWidth="1.4" />

      {/* Center dashes */}
      {Array.from({ length: 22 }, (_, i) => i * 70).map((x) => (
        <rect key={x} x={x + 2} y={372} width={48} height={3.5} rx={1.8} fill="rgba(255,255,255,0.48)" />
      ))}

      {/* Road texture — subtle horizontal bands */}
      {[335, 355, 390, 410].map((y) => (
        <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
      ))}

      {/* ── Headlight beam (from truck facing right) ── */}
      <polygon
        points="296,338 1100,308 1100,435 296,435"
        fill="url(#dBeam)"
      />
      <polygon
        points="296,348 680,308 680,435 296,435"
        fill="rgba(210,230,255,0.05)"
      />
      {/* Headlight glow spot */}
      <ellipse cx="280" cy="368" rx="18" ry="10" fill="rgba(210,230,255,0.28)" />

      {/* ── TRUCK ── */}

      {/* Trailer */}
      <rect x="298" y="238" width="420" height="130" rx="3.5" fill={tf} stroke={ts} strokeWidth="1.3" />
      {/* Trailer vertical ribs */}
      {[388, 478, 568, 648].map((x) => (
        <line key={x} x1={x} y1="238" x2={x} y2="368" stroke={ts} strokeWidth="0.65" strokeDasharray="4 7" />
      ))}
      {/* Trailer center horizontal */}
      <line x1="298" y1="303" x2="718" y2="303" stroke={ts} strokeWidth="0.55" />
      {/* Trailer rear doors */}
      <line x1="694" y1="238" x2="694" y2="368" stroke={ts} strokeWidth="1.3" />
      <line x1="707" y1="238" x2="707" y2="368" stroke={ts} strokeWidth="1.3" />
      <circle cx="694" cy="303" r="2.8" fill={ts} />
      <circle cx="707" cy="303" r="2.8" fill={ts} />
      {/* Trailer ADN label area (subtle rect) */}
      <rect x="390" y="252" width="230" height="40" rx="3" fill="rgba(0,87,184,0.06)" stroke={ts} strokeWidth="0.5" strokeDasharray="3 3" />

      {/* Fifth wheel */}
      <rect x="292" y="355" width="44" height="13" rx="3.5" fill={tf} stroke={ts} strokeWidth="0.7" />

      {/* Cab body */}
      <path
        d="M 148,365 L 148,255 Q 148,236 162,234 L 250,234 Q 266,234 276,250 L 302,300 L 312,300 L 312,365 Z"
        fill={tf} stroke={ts} strokeWidth="1.3"
      />
      {/* Windshield */}
      <path
        d="M 157,258 L 157,294 L 264,294 L 246,252 Q 239,238 226,237 L 174,237 Q 158,237 157,258 Z"
        fill="rgba(0,87,184,0.08)" stroke={ts} strokeWidth="0.9"
      />
      {/* Windshield center pillar */}
      <line x1="205" y1="237" x2="197" y2="294" stroke={ts} strokeWidth="0.65" />
      {/* Door panel */}
      <rect x="234" y="258" width="30" height="38" rx="3" fill={tf} stroke={ts} strokeWidth="0.7" />
      {/* Door handle */}
      <rect x="234" y="276" width="8" height="2.8" rx="1.2" fill={ts} />
      {/* Cab top light strip */}
      <rect x="152" y="234" width="120" height="5" rx="2.5" fill="rgba(0,87,184,0.12)" stroke={ts} strokeWidth="0.5" />
      {/* Marker lights on top */}
      {[165, 185, 205, 225, 245].map((x) => (
        <rect key={x} x={x} y="232" width="8" height="4" rx="2" fill="rgba(255,150,0,0.35)" />
      ))}
      {/* Mirror left */}
      <rect x="133" y="256" width="16" height="9" rx="2.5" fill={tf} stroke={ts} strokeWidth="0.65" />
      <line x1="141" y1="265" x2="148" y2="261" stroke={ts} strokeWidth="0.55" />
      {/* Exhaust stack */}
      <rect x="274" y="212" width="8" height="34" rx="4" fill={tf} stroke={ts} strokeWidth="0.8" />
      <ellipse cx="278" cy="212" rx="5.5" ry="2.2" fill={ts} opacity="0.55" />
      {/* Smoke puffs */}
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={278 + i * 4} cy={205 - i * 9} r={3 + i * 1.5}
          fill="rgba(150,160,180,0.12)" />
      ))}
      {/* Step */}
      <rect x="150" y="330" width="32" height="9" rx="2.5" fill={tf} stroke={ts} strokeWidth="0.65" />
      {/* Fuel tank */}
      <rect x="150" y="295" width="18" height="38" rx="3" fill={tf} stroke={ts} strokeWidth="0.6" />
      {/* Headlights */}
      <rect x="151" y="330" width="24" height="15" rx="3.5" fill="rgba(210,230,255,0.15)" stroke={ts} strokeWidth="0.7" />
      <rect x="155" y="333" width="16" height="9" rx="2" fill="rgba(210,230,255,0.3)" />
      {/* Turn signal */}
      <rect x="151" y="318" width="12" height="8" rx="2" fill="rgba(255,150,0,0.25)" stroke="rgba(255,150,0,0.45)" strokeWidth="0.6" />

      {/* ── Wheels ── */}
      {/* Front */}
      <circle cx="196" cy="368" r="21" fill={bg} stroke={ts} strokeWidth="1.2" />
      <circle cx="196" cy="368" r="13" fill={tf} stroke={ts} strokeWidth="0.75" />
      <circle cx="196" cy="368" r="4.5" fill={ts} opacity="0.65" />
      {WSPOKES.map(([dx, dy]) => (
        <circle key={`f${dx}${dy}`} cx={196 + dx} cy={368 + dy} r="1.6" fill={ts} opacity="0.65" />
      ))}

      {/* Rear tandem */}
      {[530, 595].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={368} r={21} fill={bg} stroke={ts} strokeWidth="1.2" />
          <circle cx={cx} cy={368} r={13} fill={tf} stroke={ts} strokeWidth="0.75" />
          <circle cx={cx} cy={368} r={4.5} fill={ts} opacity="0.65" />
          {WSPOKES.map(([dx, dy]) => (
            <circle key={`${cx}${dx}${dy}`} cx={cx + dx} cy={368 + dy} r="1.6" fill={ts} opacity="0.65" />
          ))}
        </g>
      ))}

      {/* Ground shadow */}
      <ellipse cx="430" cy="382" rx="280" ry="9" fill="rgba(0,0,0,0.5)" />

      {/* ── Second distant truck (right side, smaller) ── */}
      <g opacity="0.35">
        <rect x="970" y="298" width="165" height="52" rx="2" fill={tf} stroke={ts} strokeWidth="0.7" />
        <path d="M 900,340 L 900,302 Q 900,294 908,293 L 945,293 Q 952,293 956,300 L 970,324 L 975,324 L 975,340 Z"
          fill={tf} stroke={ts} strokeWidth="0.7" />
        <path d="M 905,304 L 905,320 L 966,320 L 958,300 Q 955,294 948,294 L 915,294 Q 905,294 905,304 Z"
          fill="rgba(0,87,184,0.06)" stroke={ts} strokeWidth="0.5" />
        <circle cx="916" cy="342" r="10" fill={bg} stroke={ts} strokeWidth="0.7" />
        <circle cx="916" cy="342" r="6" fill={tf} stroke={ts} strokeWidth="0.4" />
        <circle cx="1068" cy="342" r="10" fill={bg} stroke={ts} strokeWidth="0.7" />
        <circle cx="1068" cy="342" r="6" fill={tf} stroke={ts} strokeWidth="0.4" />
        <ellipse cx="995" cy="348" rx="90" ry="4" fill="rgba(0,0,0,0.3)" />
      </g>

      {/* ── Road reflections / wet sheen ── */}
      <ellipse cx="720" cy="400" rx="600" ry="12" fill="rgba(0,87,184,0.04)" />
      <ellipse cx="400" cy="390" rx="200" ry="6" fill="rgba(210,230,255,0.04)" />
    </svg>
  );
}

export default function DiferenciaisSection() {
  return (
    <section
      className="relative py-14 px-6 sm:px-10 lg:px-14 overflow-hidden"
      style={{ background: "#06090F" }}
    >
      {/* ── Highway background scene ── */}
      <div className="absolute inset-0 pointer-events-none">
        <HighwayScene className="w-full h-full" />
        {/* Overlay to darken bottom so content is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,9,15,0.25) 0%, rgba(6,9,15,0.55) 55%, rgba(6,9,15,0.82) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 lg:mb-16 flex flex-col items-center"
        >
          <div
            className="section-label mb-4 justify-center"
            style={{ color: "rgba(244,241,235,0.55)" }}
          >
            Por que escolher a ADN
          </div>
          <h2
            className="font-black tracking-tight leading-none text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "#F4F1EB",
              letterSpacing: "-0.04em",
            }}
          >
            Nossos Diferenciais
          </h2>
        </motion.div>

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
              <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />

              <div className="flex items-start gap-4 sm:gap-8 py-5 sm:py-6 px-4 -mx-4 rounded-xl transition-colors duration-300 group-hover:bg-white/[0.04] cursor-default flex-wrap sm:flex-nowrap">
                <span
                  className="font-black flex-shrink-0 tabular-nums select-none mt-1"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    color: "rgba(255,255,255,0.22)",
                    width: "2rem",
                    textAlign: "right",
                  }}
                >
                  {num}
                </span>

                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "rgba(0,87,184,0.18)",
                    border: "1px solid rgba(0,87,184,0.35)",
                  }}
                >
                  <Icon className="w-4 h-4 text-[#4da3ff]" strokeWidth={1.8} />
                </div>

                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                  <span
                    className="font-bold flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                      color: "#F4F1EB",
                      minWidth: "clamp(120px, 20vw, 220px)",
                    }}
                  >
                    {title}
                  </span>

                  <span
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(244,241,235,0.58)" }}
                  >
                    {description}
                  </span>
                </div>

                <span
                  className="hidden sm:block flex-shrink-0 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  →
                </span>
              </div>

              {i === items.length - 1 && (
                <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
