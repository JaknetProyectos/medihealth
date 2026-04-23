"use client";

import { Award, Users, HeadphonesIcon, FileText } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChoose");

  const features = [
    {
      icon: Award,
      title: t("qualityTitle"),
      description: t("qualityDesc"),
    },
    {
      icon: Users,
      title: t("experienceTitle"),
      description: t("experienceDesc"),
    },
    {
      icon: HeadphonesIcon,
      title: t("serviceTitle"),
      description: t("serviceDesc"),
    },
    {
      icon: FileText,
      title: t("quoteTitle"),
      description: t("quoteDesc"),
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#3048ab] overflow-hidden">
      {/* Elemento decorativo: Rejilla técnica de fondo */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#facc15 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white   uppercase  ">
            {t('WhyChoose')}
          </h2>
          <div className="h-1 w-24 bg-[#facc15] mx-auto mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group flex gap-6 p-8 bg-white/5 text-white border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all duration-300 hover:border-[#facc15]/30 shadow-2xl"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#3048ab] border-2 border-[#facc15] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 duration-500">
                    <Icon className="w-7 h-7 text-[#facc15]" strokeWidth={2} />
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white leading-relaxed text-sm md:text-base font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}