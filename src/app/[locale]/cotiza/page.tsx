"use client";

import { useState } from "react";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCartContext } from "@/context/CartContext";
import {
  FileText,
  CreditCard,
  User,
  Mail,
  DollarSign,
  ChevronRight,
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import type { Product } from "@/hooks/useProducts";
import ServicesBar from "@/components/ServicesBar";

export default function CotizaPage() {
  const t = useTranslations("Quote");
  const router = useRouter();
  const { addToCart } = useCartContext();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    quoteId: "",
    monto: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProcessQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const quoteProduct: Product = {
      id: `QUOTE-${formData.quoteId}-${Date.now()}`,
      name: `${t("productPrefix")} #${formData.quoteId}`,
      category: "Servicio Personalizado",
      price: parseFloat(formData.monto),
      description: `${t("productDesc")} ${formData.nombre} ${formData.apellidos}. ID: ${formData.quoteId}`,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=300&auto=format&fit=crop",
      inStock: true,
      sku: formData.quoteId,
      rating: 5,
      reviews: 1,
      description_english: `${t("productDesc")} ${formData.nombre} ${formData.apellidos}. ID: ${formData.quoteId}`,
      name_english: `${t("productPrefix")} #${formData.quoteId}`,
    };

    addToCart(quoteProduct, 1);
    router.push("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section Rediseñado */}
        <section className="bg-[#3048ab] py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#facc15]/5 skew-x-12 translate-x-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6   uppercase  ">
                {t("heroTitle")} <span className="text-[#facc15] not- ">Personalizada</span>
              </h1>
              <p className="text-white text-lg md:text-xl max-w-xl font-light mb-10">
                {t("heroSubtitle")}
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#facc15] text-[#0a0f1a] font-black rounded-lg hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10 group">
                <MessageSquare size={20} />
                {t("heroButton")}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Columna 1: Información */}
              <div className="space-y-10 lg:sticky lg:top-32">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-[#3048ab]/10 border border-[#3048ab]/20 rounded text-[#3048ab] text-xs font-bold uppercase  ">
                    {t("infoBadge")}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#0a0f1a] leading-tight  ">
                    {t("infoTitle")}
                  </h2>
                  <h3 className="text-xl text-white-600 font-light leading-relaxed">
                    {t("infoSubtitle")}
                  </h3>
                </div>

                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://prime-health.mx/wp-content/uploads/2024/05/young-happy-woman-talking-to-her-dentist-at-dental-2023-11-27-05-28-02-utc-1365x2048-1-683x1024.jpg"
                    alt="Dental Consultation"
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/80 via-transparent to-transparent flex items-end p-8">
                    <div className="flex items-center gap-3 text-white">
                      <ShieldCheck className="text-[#facc15]" size={28} />
                      <span className="font-bold text-sm uppercase  ">{t("secureTag")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna 2: Formulario */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
                <div className="bg-[#3048ab] px-8 py-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#facc15] rounded-lg text-[#0a0f1a]">
                      <FileText size={24} strokeWidth={2.5} />
                    </div>
                    <h2 className="text-white font-black text-xl uppercase tracking-tight">{t("formHeader")}</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-white-500 uppercase  ">{t("stepLabel")}</p>
                    <p className="text-[#facc15] font-black  ">01 / 02</p>
                  </div>
                </div>

                <form onSubmit={handleProcessQuote} className="p-8 md:p-12 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#0a0f1a] uppercase tracking-wider">{t("labelName")}</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white-400" size={18} />
                        <input
                          required
                          name="nombre"
                          placeholder={t("phName")}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#3048ab] focus:ring-4 focus:ring-[#3048ab]/5 outline-none transition-all font-sans text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#0a0f1a] uppercase tracking-wider">{t("labelLastName")}</label>
                      <input
                        required
                        name="apellidos"
                        placeholder={t("phLastName")}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#3048ab] focus:ring-4 focus:ring-[#3048ab]/5 outline-none transition-all font-sans text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#0a0f1a] uppercase tracking-wider">{t("labelEmail")}</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white-400" size={18} />
                      <input
                        required
                        type="email"
                        name="correo"
                        placeholder="email@company.com"
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#3048ab] focus:ring-4 focus:ring-[#3048ab]/5 outline-none transition-all font-sans text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#0a0f1a] uppercase tracking-wider">{t("labelQuoteId")}</label>
                      <input
                        required
                        name="quoteId"
                        placeholder="COT-000-000"
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-white border-2 border-[#0a0f1a] rounded-xl focus:ring-4 focus:ring-[#facc15]/20 outline-none transition-all font-mono font-bold text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#0a0f1a] uppercase tracking-wider">{t("labelAmount")}</label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0a0f1a]" size={18} />
                        <input
                          required
                          type="number"
                          step="0.01"
                          name="monto"
                          placeholder="0.00"
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-[#facc15]/5 border-2 border-[#facc15] rounded-xl text-[#0a0f1a] font-black text-xl outline-none focus:ring-4 focus:ring-[#facc15]/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3048ab] text-white py-5 rounded-xl font-black text-lg uppercase   shadow-xl shadow-blue-900/20 hover:bg-[#1d4ed8] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                  >
                    {t("btnPay")}
                    <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </button>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
                    <div className="flex gap-4">
                      <div className="text-[#3048ab] shrink-0">
                        <ShieldCheck size={24} />
                      </div>
                      <p className="text-[11px] text-white-500 leading-relaxed font-medium">
                        {t("privacyText")} <Link href="/legal/privacy" className="text-[#3048ab] font-bold underline underline-offset-2">{t("privacyLink")}</Link>.
                      </p>
                    </div>
                    <p className="text-center text-[10px] font-bold text-white-400 uppercase   flex items-center justify-center gap-2">
                      <CreditCard size={14} /> {t("securityNote")}
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>
        <ServicesBar />
      </main>

      <Footer />
    </div>
  );
}