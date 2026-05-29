"use client";

import { motion } from "framer-motion";
import { BsTruck, BsBox, BsSignpost2, BsBuildings, BsBoxSeam, BsGearFill } from "react-icons/bs";
import Image from "next/image";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Transporte Rodoviário",
    date: "Principal",
    content: "Transporte seguro e ágil de cargas em todo o território nacional. Frota moderna, rastreamento em tempo real e equipe preparada para qualquer tipo de carga — do início ao destino.",
    category: "Transporte",
    icon: BsTruck,
    relatedIds: [2, 3],
    status: "in-progress" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Fretes",
    date: "Serviço",
    content: "Frete competitivo para todos os volumes, com entrega garantida e rastreabilidade.",
    category: "Carga",
    icon: BsBox,
    relatedIds: [1],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Distribuição",
    date: "Logística",
    content: "Redes de distribuição eficientes com múltiplos pontos de entrega e controle total.",
    category: "Distribuição",
    icon: BsSignpost2,
    relatedIds: [1, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Logística Empresarial",
    date: "B2B",
    content: "Soluções completas que integram transporte, armazenagem e gestão de prazos.",
    category: "Gestão",
    icon: BsBuildings,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 5,
    title: "Cargas Diversas",
    date: "Especialidades",
    content: "Especialistas em cargas secas, frigoríficas e de alto valor agregado.",
    category: "Tipos de Carga",
    icon: BsBoxSeam,
    relatedIds: [1, 6],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 6,
    title: "Soluções Sob Medida",
    date: "Projetos",
    content: "Desenvolvemos projetos logísticos personalizados para cada cliente.",
    category: "Projetos",
    icon: BsGearFill,
    relatedIds: [4, 5],
    status: "in-progress" as const,
    energy: 100,
  },
];


export default function ServicosSection() {
  return (
    <section
      id="servicos"
      className="relative py-10 sm:py-14 px-6 sm:px-10 lg:px-14 overflow-hidden"
      style={{ background: "#0A0A0F" }}
    >
      <div className="section-divider" style={{ background: "rgba(255,255,255,0.08)" }} />

      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-7 sm:mb-10">
          <div className="section-label mb-3 justify-center" style={{ color: "rgba(244,241,235,0.7)" }}>O que oferecemos</div>
          <h2
            className="font-black tracking-tight leading-none"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              color: "#F4F1EB",
              letterSpacing: "-0.04em",
            }}
          >
            Nossos Serviços
          </h2>
        </div>

        {/* ── Timeline Orbital de Serviços ── */}
        <div className="w-full relative mb-16 rounded-3xl overflow-hidden shadow-lg" style={{ background: "#0F1218", border: "1px solid rgba(255,255,255,0.08)" }}>
           <RadialOrbitalTimeline timelineData={timelineData} />
        </div>


      </div>
    </section>
  );
}
