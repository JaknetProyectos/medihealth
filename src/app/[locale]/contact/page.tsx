"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useContact } from "@/hooks/useContact";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck,
  ChevronRight 
} from "lucide-react";
import ServicesBar from "@/components/ServicesBar";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const { submitContact, isSubmitting } = useContact();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitResult, setSubmitResult] = useState<{ success: boolean; error?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitContact(formData);
    setSubmitResult(result);
    if (result.success) setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-grow">
        
        {/* Banner Institucional Moderno */}
        <section className="bg-[#3048ab] py-20 relative overflow-hidden border-b-8 border-[#facc15]">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#facc15 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6   uppercase  ">
              {t("heroTitle")}
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-light">
              {t("heroSubtitle")}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">

            {/* Columna 1: Información de Contacto */}
            <div className="space-y-4 lg:sticky lg:top-32">
              <ContactInfoCard 
                icon={<MapPin className="text-[#facc15]" />} 
                title={t("labelLocation")} 
                content="Av Periférico Sur 4829, Tlalpan, CDMX." 
              />
              <ContactInfoCard 
                icon={<Mail className="text-[#facc15]" />} 
                title={t("labelEmail")} 
                content="contacto@distribucionmedica.com" 
                isLink 
                href="mailto:contacto@distribucionmedica.com" 
              />
              <ContactInfoCard 
                icon={<Phone className="text-[#facc15]" />} 
                title={t("labelPhone")} 
                content="+52 55 2155 4503" 
                isLink 
                href="tel:+525521554503" 
              />
              <ContactInfoCard 
                icon={<Clock className="text-[#facc15]" />} 
                title={t("labelHours")} 
                content="Lun - Vie: 9:00 - 18:00" 
              />
            </div>

            {/* Columna 2 y 3: Formulario */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                
                {/* Encabezado del Formulario */}
                <div className="bg-[#3048ab] p-6 border-b border-white/10 flex items-center gap-4">
                  <div className="p-2 bg-[#facc15] rounded text-[#0a0f1a]">
                    <Mail size={20} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-white font-black text-lg uppercase tracking-tight">{t("formHeader")}</h2>
                </div>

                <div className="p-8 md:p-12">
                  {submitResult?.success ? (
                    <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-black text-[#0a0f1a] mb-2 uppercase">{t("successTitle")}</h3>
                      <p className="text-white mb-8 font-medium">{t("successSubtitle")}</p>
                      <button 
                        onClick={() => setSubmitResult(null)} 
                        className="px-10 py-4 bg-[#3048ab] text-white rounded-xl font-black uppercase   hover:bg-slate-800 transition-all shadow-lg"
                      >
                        {t("btnReset")}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <InputField 
                          label={t("inputFirstName")} 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={(val: string) => setFormData({ ...formData, firstName: val })} 
                          required 
                          placeholder="Ej. Juan"
                        />
                        <InputField 
                          label={t("inputLastName")} 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={(val: string) => setFormData({ ...formData, lastName: val })} 
                          required 
                          placeholder="Ej. Pérez"
                        />
                      </div>
                      
                      <InputField 
                        label={t("inputEmail")} 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={(val: string) => setFormData({ ...formData, email: val })} 
                        required 
                        placeholder="email@company.com"
                      />

                      <div className="space-y-2">
                        <label className="text-xs font-black text-[#0a0f1a] uppercase   ml-1">
                          {t("inputMessage")}
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-[#3048ab]/5 focus:border-[#3048ab] outline-none transition-all resize-none font-sans text-sm"
                          placeholder={t("phMessage")}
                        />
                      </div>

                      {submitResult?.error && (
                        <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                          <AlertCircle size={20} strokeWidth={2.5} /> 
                          <span className="text-sm font-bold uppercase tracking-tight">{submitResult.error}</span>
                        </div>
                      )}

                      <button
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-12 py-5 bg-[#3048ab] text-white rounded-xl font-black uppercase   shadow-xl shadow-blue-900/20 hover:bg-[#1d4ed8] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:bg-slate-300 disabled:transform-none group"
                      >
                        {isSubmitting ? (
                          <><span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" /> {t("btnSending")}</>
                        ) : (
                          <><Send size={18} /> {t("btnSend")} <ChevronRight className="group-hover:translate-x-2 transition-transform" /></>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Disclaimer de Privacidad Estilizado */}
              <div className="p-6 bg-slate-100/50 rounded-2xl border border-slate-200 flex gap-4">
                <ShieldCheck size={24} className="text-[#3048ab] shrink-0" />
                <p className="text-[11px] text-white-500 leading-relaxed font-medium">
                  {t("privacyDisclaimer")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Mapa Estilizada */}
        <section className="px-6 pb-20">
          <div className="container mx-auto max-w-7xl">
             <div className="rounded-2xl shadow-2xl border-4 border-white overflow-hidden h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2638446187645!2d-99.1764669238803!3d19.29260798195861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0079979a32c5%3A0x673193437256e076!2sPerif.%20Sur%204829%2C%20Parque%20del%20Pedregal%2C%20Tlalpan%2C%2014010%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1714150000000!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Distribución Médica"
                className="grayscale-[20%] contrast-[1.1]"
              />
            </div>
          </div>
        </section>

        <ServicesBar />
      </main>
      <Footer />
    </div>
  );
}

// Componentes Auxiliares
function ContactInfoCard({ icon, title, content, isLink, href }: any) {
  return (
    <div className="bg-[#3048ab] p-6 rounded-xl shadow-lg border border-white/5 flex items-center gap-5 transition-transform hover:scale-[1.02] duration-300">
      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-black text-[#facc15] uppercase   mb-1">{title}</h4>
        {isLink ? (
          <a href={href} className="text-sm font-bold text-white hover:text-[#facc15] transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-sm font-bold text-white">{content}</p>
        )}
      </div>
    </div>
  );
}

function InputField({ label, type = "text", value, onChange, required, name, placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-black text-[#0a0f1a] uppercase   ml-1">{label}</label>
      <input
        type={type} 
        required={required} 
        value={value} 
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-[#3048ab]/5 focus:border-[#3048ab] outline-none transition-all font-sans text-sm"
      />
    </div>
  );
}