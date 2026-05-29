import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ADN Transportes & Soluções Logísticas | Transporte Rodoviário Nacional",
  description:
    "ADN Transportes – especializada em transporte rodoviário, fretes, distribuição e logística empresarial. Atuação em todo o Brasil, com sede em Várzea Grande – MT. Solicite seu orçamento.",
  keywords:
    "transporte rodoviário, logística, fretes, distribuição, cargas, Várzea Grande, Mato Grosso, MT, MS, RO, GO, SP",
  icons: {
    icon: "/imagens/logo-adn.png",
    apple: "/imagens/logo-adn.png",
  },
  openGraph: {
    title: "ADN Transportes & Soluções Logísticas",
    description: "Soluções logísticas que movem o Brasil.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/imagens/logo-adn.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="bg-[#FAFAFA] text-[#0D0D0D] antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
