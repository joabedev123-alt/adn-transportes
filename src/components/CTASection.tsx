"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";


export default function CTASection() {
  return (
    <section
      id="contato"
      className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-14 overflow-hidden"
      style={{ background: "#0F1218" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(0,87,184,0.5) 50%, transparent 100%)",
        }}
      />

      {/* Background photo */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/imagens/img4.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,18,24,0.88) 0%, rgba(15,18,24,0.78) 50%, rgba(15,18,24,0.88) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-7 sm:mb-10"
          >
            <div className="w-7 h-px" style={{ background: "#0057B8" }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#4da3ff", fontFamily: "var(--font-inter)" }}
            >
              Pronto para começar?
            </span>
            <div className="w-7 h-px" style={{ background: "#0057B8" }} />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            viewport={{ once: true }}
            className="leading-[1.1] sm:leading-[0.95] tracking-tight mb-5 sm:mb-8"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              color: "#F4F1EB",
              letterSpacing: "-0.04em",
            }}
          >
            Sua carga em boas mãos.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            viewport={{ once: true }}
            className="leading-[1.75] mb-8 sm:mb-12 max-w-[480px] px-2 sm:px-0"
            style={{
              fontSize: "clamp(0.88rem, 3.5vw, 1rem)",
              color: "rgba(244,241,235,0.75)",
            }}
          >
            Solicite seu orçamento agora e descubra como a ADN Transportes pode transformar
            a logística do seu negócio — com agilidade, segurança e preço competitivo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-14"
          >
            {/* Primary */}
            <a
              href="https://wa.me/5567999293509"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white cursor-pointer transition-all duration-250 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                fontFamily: "var(--font-outfit)",
                background: "#0057B8",
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Orçamento
              <BsArrowUpRight size={15} className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
            </a>

            {/* Secondary */}
            <a
              href="https://wa.me/5565999846280"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-250 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                fontFamily: "var(--font-outfit)",
                background: "rgba(244,241,235,0.05)",
                border: "1px solid rgba(244,241,235,0.12)",
                color: "rgba(244,241,235,0.6)",
              }}
            >
              (65) 99984-6280
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-5 sm:gap-x-8 gap-y-2"
          >
            {["Resposta em minutos", "Orçamento sem compromisso", "Atendimento B2B"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#0057B8]" />
                <span className="text-xs" style={{ color: "rgba(244,241,235,0.78)" }}>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
    </section>
  );
}
