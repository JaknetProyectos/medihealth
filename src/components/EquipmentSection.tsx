"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

export default function EquipmentSection() {
  const t = useTranslations("Equipment");

  return (
    <section className="py-20 md:py-32 bg-[#f8fafc] overflow-hidden relative">
      {/* Decoración de fondo moderna */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#facc15]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content - Lado Izquierdo */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-[#334155] leading-relaxed text-lg font-light">
                <strong className="text-[#0a0f1a] font-black">{t("brand")}</strong> {t("paragraph1")}
              </p>
              
              <p className="text-[#475569] leading-relaxed text-lg font-normal border-l-2 border-slate-200 pl-6">
                {t("paragraph2")}
              </p>
              
              <p className="text-[#334155] leading-relaxed text-lg font-light">
                {t("paragraph3_part1")} <strong className="text-[#0a0f1a] font-black">{t("brand")}</strong>, {t("paragraph3_part2")}
              </p>
              
              <p className="text-[#475569] leading-relaxed text-lg font-normal">
                {t("paragraph4")}
              </p>
            </div>

            {/* Elemento de diseño: Línea de progreso/detalle técnica */}
            <div className="pt-4">
              <div className="h-px w-full bg-slate-200 relative">
                <div className="absolute top-0 left-0 h-1 w-20 bg-[#facc15] -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Right Side - Lado Derecho (Título e Imagen) */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#3048ab]" />
                <p className="text-[#3048ab] uppercase tracking-[0.25em] text-xs font-black">
                  {t("subtitle")}
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0f1a] leading-[1.1]  ">
                {t("title")}
              </h2>
            </div>

            <div className="relative group">
              {/* Marco decorativo moderno */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#facc15] rounded-xl -z-10 group-hover:top-0 group-hover:right-0 transition-all duration-500" />
              
              <div className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
                  alt="Medical Equipment Solutions"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex items-center gap-2 text-[#facc15] font-bold">
                    <span>{t("viewMore")}</span>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}