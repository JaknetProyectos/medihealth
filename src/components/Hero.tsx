"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[750px] overflow-hidden bg-[#3048ab]">
      {/* Background Image con Overlay Moderno */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
          alt="Medical professionals"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Overlay de degradado más profundo y serio */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-[1.1]  ">
            Prime <span className="text-[#facc15]">Suppliers</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl lg:text-2xl mb-10 max-w-xl font-light leading-relaxed">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#3048ab] text-white font-bold rounded-lg hover:bg-[#1d4ed8] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20 text-lg"
            >
              {t("buttonPrimary")}
              <ArrowRight size={20} />
            </Link>
            
            <Link
              href="/cotiza"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white hover:text-[#0a0f1a] transition-all text-lg backdrop-blur-sm"
            >
              {t("buttonSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Decoración geométrica moderna */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-[#facc15] hidden lg:block" />
    </section>
  );
}