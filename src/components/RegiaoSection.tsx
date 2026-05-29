"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BrazilMap from "@/components/ui/BrazilMap";
import { CheckCircle2 } from "lucide-react";

export default function RegiaoSection() {
  return (
    <section
      id="regiao"
      className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-14 overflow-hidden"
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
          className="mb-12 lg:mb-16 flex flex-col items-center"
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
            Atendemos em todo o Brasil
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* ── Mapa interativo do Brasil ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex-shrink-0 w-full max-w-[320px] sm:max-w-[400px] mx-auto lg:mx-0"
          >
            <BrazilMap className="w-full" />
          </motion.div>

          {/* ── Informações e Foto ── */}
          <div className="flex-1 w-full max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 
                className="text-2xl sm:text-3xl font-bold mb-4" 
                style={{ fontFamily: "var(--font-inter)", color: "#0057B8" }}
              >
                Cobertura Nacional
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "#4B5563" }}>
                Com nossa matriz no Mato Grosso, possuímos estrutura logística para atender demandas em <strong>todos os estados do Brasil</strong>. 
                Oferecemos rotas estratégicas e parceiros confiáveis para garantir que sua carga chegue ao destino com segurança e agilidade.
              </p>

              <div className="space-y-3">
                {[
                  "Rotas otimizadas para todas as regiões",
                  "Monitoramento em tempo real",
                  "Parcerias estratégicas para capilaridade",
                  "Segurança em todo o trajeto"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D62828] flex-shrink-0" />
                    <span className="text-sm font-medium" style={{ color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Fleet photo ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.75 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg"
              style={{ height: "180px" }}
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
