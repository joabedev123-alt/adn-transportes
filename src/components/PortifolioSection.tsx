"use client";

import { ImageGallery } from "@/components/ui/image-gallery";

const PORTIFOLIO_IMAGES = [
  { src: "/imagens/img7.jpeg", alt: "Operação de carga" },
  { src: "/imagens/img10.jpeg", alt: "Frota ADN em pátio" },
  { src: "/imagens/img13.jpeg", alt: "Equipamento industrial" },
  { src: "/imagens/img16.jpeg", alt: "Chegada ao cliente" },
  { src: "/imagens/img20.jpeg", alt: "Scania em operação" },
  { src: "/imagens/img23.jpeg", alt: "Armazém com carga paletizada" },
  { src: "/fotos adriel/WhatsApp Image 2026-05-29 at 16.01.19 (1).jpeg", alt: "Nova operação logística" },
  { src: "/imagens/img8.jpeg", alt: "Movimentação com empilhadeira" },
  { src: "/imagens/img11.jpeg", alt: "Carga especial em transporte" },
  { src: "/imagens/img14.jpeg", alt: "Entrega em planta industrial" },
  { src: "/fotos adriel/WhatsApp Image 2026-05-29 at 16.01.24.jpeg", alt: "Frota na estrada ao entardecer" },
  { src: "/imagens/img21.jpeg", alt: "Frota na estrada" },
  { src: "/fotos adriel/WhatsApp Image 2026-05-29 at 16.01.21 (1).jpeg", alt: "Frota Scania" },
  { src: "/imagens/foto2.jpeg", alt: "Logística operacional" },
];

export default function PortifolioSection() {
  return (
    <section
      id="portifolio"
      className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-14 overflow-hidden"
      style={{ background: "#FAFAFA" }}
    >
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="section-label mb-3 justify-center">Nossa Estrutura</div>
          <h2
            className="font-black tracking-tight leading-none"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              color: "#0D0D0D",
              letterSpacing: "-0.04em",
            }}
          >
            Portfólio de Operações
          </h2>
          <p className="mt-4 max-w-2xl text-gray-500" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
            Conheça um pouco mais da nossa frota, estrutura de armazenagem e o cuidado em cada etapa logística.
          </p>
        </div>

        {/* ── Image Gallery Component ── */}
        <ImageGallery images={PORTIFOLIO_IMAGES} />

        {/* ── CTA ── */}
        <div className="flex justify-center mt-12">
          <div className="relative">
            <span className="absolute inset-0 rounded-xl animate-ping" style={{ background: "rgba(37,211,102,0.35)" }} />
            <a
              href="https://wa.me/5567999293509"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97]"
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
