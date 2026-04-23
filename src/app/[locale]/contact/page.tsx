"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useContact } from "@/hooks/useContact";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
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
    <div className="min-h-screen flex flex-col bg-[#f8f9fb]">
      <Header />
      <main className="flex-grow">
        {/* Banner Institucional */}
        <section className="bg-[#102f67] py-20 border-b-4 border-[#fbbf24]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contáctanos</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Soporte profesional y atención personalizada para instituciones de salud.</p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

            {/* Sidebar de Información */}
            <div className="space-y-4">
              <ContactInfoCard icon={<MapPin className="text-[#3b82f6]" />} title="Ubicación" content="Av Periférico Sur 4829, Tlalpan, CDMX." />
              <ContactInfoCard icon={<Mail className="text-[#3b82f6]" />} title="Email" content="contacto@prime-health.mx" isLink href="mailto:contacto@prime-health.mx" />
              <ContactInfoCard icon={<Phone className="text-[#3b82f6]" />} title="Teléfono" content="+52 55 2155 4503" isLink href="tel:+525521554503" />
              <ContactInfoCard icon={<Clock className="text-[#3b82f6]" />} title="Horario" content="Lun - Vie: 9:00 - 18:00" />
            </div>

            {/* Formulario */}
            <div className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              {submitResult?.success ? (
                <div className="text-center py-12 animate-in fade-in zoom-in">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-[#102f67] mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-500 mb-8">Hemos enviado una confirmación a tu correo electrónico.</p>
                  <button onClick={() => setSubmitResult(null)} className="px-8 py-3 bg-[#102f67] text-white rounded-full font-bold">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField label="Nombre(s) *" name="firstName" value={formData.firstName} onChange={(val) => setFormData({ ...formData, firstName: val })} required />
                    <InputField label="Apellidos *" name="lastName" value={formData.lastName} onChange={(val) => setFormData({ ...formData, lastName: val })} required />
                  </div>
                  <InputField label="Correo Electrónico *" type="email" name="email" value={formData.email} onChange={(val) => setFormData({ ...formData, email: val })} required />

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#102f67] uppercase tracking-wider">Mensaje *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#fbbf24] outline-none transition-all resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  {submitResult?.error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                      <AlertCircle size={18} /> <span className="text-sm font-medium">{submitResult.error}</span>
                    </div>
                  )}

                  <button
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 bg-[#102f67] text-white rounded-full font-bold shadow-lg hover:bg-[#1a4a8a] transition-all flex items-center justify-center gap-3 disabled:bg-gray-300"
                  >
                    {isSubmitting ? <><span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" /> Enviando...</> : <><Send size={18} /> Enviar Mensaje</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
        {/* Map */}
        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.7762456271793!2d-99.18883562394518!3d19.30441024659494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce006e4a7c7a5b%3A0x1b2c9b8a2d55e1!2sAv.%20Perif%C3%A9rico%20Sur%204829%2C%20Parque%20del%20Pedregal%2C%20Tlalpan%2C%2014010%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Medi Health"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Componentes Auxiliares para Limpieza de Código
function ContactInfoCard({ icon, title, content, isLink, href }: any) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{title}</h4>
        {isLink ? <a href={href} className="text-sm font-bold text-[#102f67] hover:text-[#3b82f6]">{content}</a> : <p className="text-sm font-bold text-[#102f67]">{content}</p>}
      </div>
    </div>
  );
}

function InputField({ label, type = "text", value, onChange, required, name }: any) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-[#102f67] uppercase tracking-wider ml-1">{label}</label>
      <input
        type={type} required={required} value={value} name={name}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#fbbf24] outline-none transition-all font-sans text-sm"
      />
    </div>
  );
}



