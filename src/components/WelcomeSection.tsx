"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

export default function WelcomeSection() {
  const t = useTranslations("Welcome");

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="w-12 h-1.5 bg-[#facc15] mb-6 rounded-full" />
          <p className="text-[#3048ab] uppercase   text-xs md:text-sm font-black mb-4">
            {t("subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0f1a] leading-[1.1] max-w-3xl  ">
            {t("title")}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image con diseño moderno (Floating Effect) */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#facc15]/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500" />
            <div className="relative h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
                alt="Medical Laboratory"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

          </div>

          {/* Text Content */}
          <div className="space-y-8 lg:pl-4">
            <div className="space-y-6">
              <p className="text-[#334155] leading-relaxed text-xl font-light   border-l-4 border-[#3048ab] pl-6">
                {t("paragraph1_part1")} <strong className="text-[#0a0f1a] font-bold">Distribución Médica</strong>, {t("paragraph1_part2")}
              </p>
              
              <p className="text-[#475569] leading-relaxed text-lg font-normal">
                {t("paragraph2")}
              </p>
              
              <p className="text-[#475569] leading-relaxed text-lg font-normal">
                {t("paragraph3")}
              </p>
            </div>

            {/* Lista de beneficios rápida (Modern Touch) */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a0f1a]">{t("feature1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a0f1a]">{t("feature2")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}