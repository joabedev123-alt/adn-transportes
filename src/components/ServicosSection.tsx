"use client";

import { motion } from "framer-motion";
import { BsTruck, BsBox, BsSignpost2, BsBuildings, BsBoxSeam, BsGearFill } from "react-icons/bs";
import type { IconType } from "react-icons";
import Image from "next/image";

const services: { icon: IconType; title: string; description: string }[] = [
  {
    icon: BsTruck,
    title: "Transporte Rodoviário",
    description:
      "Transporte seguro e ágil de cargas em todo o território nacional. Frota moderna, rastreamento em tempo real e equipe preparada para qualquer tipo de carga — do início ao destino.",
  },
  {
    icon: BsBox,
    title: "Fretes",
    description: "Frete competitivo para todos os volumes, com entrega garantida e rastreabilidade.",
  },
  {
    icon: BsSignpost2,
    title: "Distribuição",
    description: "Redes de distribuição eficientes com múltiplos pontos de entrega e controle total.",
  },
  {
    icon: BsBuildings,
    title: "Logística Empresarial",
    description: "Soluções completas que integram transporte, armazenagem e gestão de prazos.",
  },
  {
    icon: BsBoxSeam,
    title: "Cargas Diversas",
    description: "Especialistas em cargas secas, frigoríficas e de alto valor agregado.",
  },
  {
    icon: BsGearFill,
    title: "Soluções Sob Medida",
    description: "Desenvolvemos projetos logísticos personalizados para cada cliente.",
  },
];

const CAROUSEL = [
  { src: "/imagens/img7.jpeg",  alt: "Operação de carga" },
  { src: "/imagens/img8.jpeg",  alt: "Movimentação com empilhadeira" },
  { src: "/imagens/img9.jpeg",  alt: "Carregamento em doca" },
  { src: "/imagens/img10.jpeg", alt: "Frota ADN em pátio" },
  { src: "/imagens/img11.jpeg", alt: "Carga especial em transporte" },
  { src: "/imagens/img12.jpeg", alt: "Carregamento de equipamento" },
  { src: "/imagens/img13.jpeg", alt: "Equipamento industrial" },
  { src: "/imagens/img14.jpeg", alt: "Entrega em planta industrial" },
  { src: "/imagens/img15.jpeg", alt: "Frota Mercedes em operação" },
  { src: "/imagens/img16.jpeg", alt: "Chegada ao cliente" },
  { src: "/imagens/img17.jpeg", alt: "Frota na estrada ao entardecer" },
  { src: "/imagens/img19.jpeg", alt: "Terminal de armazenagem" },
  { src: "/imagens/img20.jpeg", alt: "Scania em operação" },
  { src: "/imagens/img21.jpeg", alt: "Frota na estrada" },
  { src: "/imagens/img22.jpeg", alt: "Carregamento de carga a granel" },
  { src: "/imagens/img23.jpeg", alt: "Armazém com carga paletizada" },
  { src: "/imagens/img24.jpeg", alt: "Frota Scania" },
  { src: "/imagens/img25.jpeg", alt: "Frota ao entardecer" },
];

function PhotoGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {CAROUSEL.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-30px" }}
          className="relative overflow-hidden rounded-xl"
          style={{ aspectRatio: "4/3", background: "#E5E7EB" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 640px) 50vw, 33vw"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function ServicosSection() {
  return (
    <section
      id="servicos"
      className="relative py-10 sm:py-14 px-6 sm:px-10 lg:px-14 overflow-hidden"
      style={{ background: "#FAFAFA" }}
    >
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-7 sm:mb-10">
          <div className="section-label mb-3 justify-center">O que oferecemos</div>
          <h2
            className="font-black tracking-tight leading-none"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              color: "#0D0D0D",
              letterSpacing: "-0.04em",
            }}
          >
            Nossos Serviços
          </h2>
        </div>

        {/* ── Grid 2 × 3 ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-4">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.065,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-2xl cursor-default transition-all duration-300 hover:shadow-sm"
              style={{ padding: "clamp(1rem, 4vw, 1.4rem)", background: "#FFFFFF", border: "1px solid #E5E7EB" }}
            >
              <div
                className="rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                style={{
                  width: "38px", height: "38px",
                  background: "rgba(0,87,184,0.07)",
                  border: "1px solid rgba(0,87,184,0.15)",
                }}
              >
                <Icon size={16} className="text-[#0057B8]" />
              </div>
              <h3
                className="font-bold leading-tight mb-2"
                style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem", color: "#0D0D0D" }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "#4B5563", lineHeight: 1.68 }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Grade de fotos ── */}
        <PhotoGrid />

        {/* ── CTA ── */}
        <div className="flex justify-center mt-8">
          <div className="relative">
            <span className="absolute inset-0 rounded-xl animate-ping" style={{ background: "rgba(37,211,102,0.35)" }} />
            <a
              href="https://wa.me/5567999293509"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: "#25D366",
                fontFamily: "var(--font-inter)",
                boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
              }}
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Orçamento ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
