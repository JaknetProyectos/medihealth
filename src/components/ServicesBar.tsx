"use client";

import { Truck, CreditCard, HeadphonesIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesBar() {
  const t = useTranslations("Services");

  const services = [
    {
      icon: Truck,
      title: t("deliveryTitle"),
      description: t("deliveryDesc"),
    },
    {
      icon: CreditCard,
      title: t("paymentTitle"),
      description: t("paymentDesc"),
    },
    {
      icon: HeadphonesIcon,
      title: t("supportTitle"),
      description: t("supportDesc"),
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 px-8 py-8 md:py-4 group transition-colors hover:bg-slate-50/50"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-[#3048ab] flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-lg shadow-blue-900/10">
                    <Icon className="w-8 h-8 text-[#facc15]" strokeWidth={2} />
                  </div>
                  {/* Elemento decorativo moderno */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#facc15] rounded-full border-4 border-white" />
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-sm uppercase   font-black text-[#0a0f1a]">
                    {service.title}
                  </h4>
                  <p className="text-white-500 text-sm font-medium leading-relaxed">
                    {service.description}
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