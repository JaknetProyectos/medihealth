"use client";

import { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesBar from "@/components/ServicesBar";
import {
  Trash2, Plus, Minus, CreditCard, ShieldCheck,
  Loader2, AlertCircle, CheckCircle2, X, Package,
  MapPin, User, ChevronRight, Lock, Hash
} from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const t = useTranslations("Cart");
  const locale = useLocale();
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCartContext();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState<{ id: string; items: any[]; total: number } | null>(null);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", middleName: "", email: "", telefono: "",
    direccion: "", city: "", state: "", cp: "", country: "MX",
    cardNumber: "", cardName: "", expMonth: "", expYear: "", cvv: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US", {
      style: "currency",
      currency: "MXN"
    }).format(price);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentError(null);

    try {
      const orderId = `PH-${Date.now()}`;
      // Simulación de respuesta exitosa (Lógica original preservada)
      const result = { response: "APPROVED", responseCode: "00" };

      if (result.response === "APPROVED" || result.responseCode === "00") {
        const finalItems = [...items];
        const finalTotal = totalPrice;
        setOrderSummary({ id: orderId, items: finalItems, total: finalTotal });

        try {
          await fetch(`/${locale}/api/checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId, items: finalItems, total: finalTotal, customer: formData })
          });
        } catch (emailError) {
          console.error("Error en API checkout:", emailError);
        }

        setShowSuccessModal(true);
        clearCart();
      } else {
        throw new Error(t("errorPayment"));
      }
    } catch (err: any) {
      setPaymentError(err.message || t("errorGeneric"));
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0 && !showSuccessModal) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow flex items-center justify-center py-20 px-6">
          <div className="text-center max-w-md bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="text-white-200" size={40} />
            </div>
            <h2 className="text-2xl font-black text-[#0a0f1a] mb-4 uppercase">{t("emptyTitle")}</h2>
            <p className="text-white-400 mb-8 text-sm">{t("emptyDesc")}</p>
            <Link href="/shop" className="inline-block w-full py-4 bg-[#3048ab] text-white rounded-xl font-black uppercase text-xs hover:bg-slate-800 transition-all">
              {t("btnBackShop")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col relative">
      <Header />

      {/* MODAL DE ÉXITO REDISEÑADO */}
      {showSuccessModal && orderSummary && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#3048ab]/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] shadow-2xl max-w-xl w-full overflow-hidden flex flex-col animate-in zoom-in-95 border border-white/20">
            <div className="bg-[#facc15] p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#0a0f1a 1px, transparent 0px)', backgroundSize: '20px 20px' }} />
              <CheckCircle2 className="w-20 h-20 text-[#0a0f1a] mx-auto mb-4 relative z-10" />
              <h2 className="text-3xl font-black text-[#0a0f1a] uppercase     relative z-10">{t("successTitle")}</h2>
              <p className="text-[#0a0f1a]/60 font-black uppercase text-[10px] mt-2 relative z-10">{t("orderId")}: {orderSummary.id}</p>
            </div>
            <div className="p-10 overflow-y-auto max-h-[40vh]">
              <div className="space-y-4">
                {orderSummary.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-3">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-[#0a0f1a] uppercase truncate max-w-[250px]">{locale === "es" ? item.product.name : item.product.name_english}</span>
                      <span className="text-[10px] font-bold text-white-400 uppercase">{t("qty")}: {item.quantity}</span>
                    </div>
                    <span className="text-sm font-black text-[#0a0f1a]">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 bg-slate-50 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="font-black text-[#0a0f1a] uppercase   text-xs">{t("totalPaid")}</span>
                <span className="text-3xl font-black text-[#0a0f1a]  ">{formatPrice(orderSummary.total)}</span>
              </div>
              <Link href="/shop" className="w-full py-5 bg-[#3048ab] text-white rounded-2xl font-black uppercase   text-xs text-center hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                {t("btnFinish")}
              </Link>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* COLUMNA IZQUIERDA: RESUMEN DE PRODUCTOS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3048ab] text-white rounded-xl flex items-center justify-center">
                <Package size={20} />
              </div>
              <h1 className="text-2xl font-black text-[#0a0f1a] uppercase     ">
                {t("cartTitle")}
              </h1>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="group bg-white p-5 rounded-3xl border border-slate-100 flex gap-5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.product.image} className="w-full h-full object-contain p-2 grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div>
                      <span className="text-[10px] font-black text-white-400 uppercase  ">{item.product.category}</span>
                      <h3 className="font-black text-[#0a0f1a] text-sm uppercase leading-tight mt-1 line-clamp-1">
                        {locale === "es" ? item.product.name : item.product.name_english}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-slate-100 p-1 rounded-xl border border-slate-200">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all"><Minus size={12} /></button>
                        <span className="font-black text-xs w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all"><Plus size={12} /></button>
                      </div>
                      <p className="font-black text-[#0a0f1a] text-sm">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-white-200 hover:text-red-500 transition-colors p-1">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[#3048ab] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Hash size={80} /></div>
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase   text-white-400">{t("subtotalLabel")}</span>
                <div className="text-4xl font-black text-[#facc15]   mt-1">{formatPrice(totalPrice)}</div>
                <p className="text-[10px] font-bold text-white-400 uppercase mt-4 flex items-center gap-2">
                  <ShieldCheck size={12} className="text-[#facc15]" /> {t("secureCheckout")}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO DE PAGO */}
          <div className="lg:col-span-7">
            <form onSubmit={handleCheckout} className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
              <div className="p-8 md:p-12 space-y-10">

                {/* 1. DATOS PERSONALES */}
                <section>
                  <SectionLabel number="01" title={t("secPersonal")} icon={<User size={16} />} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input required name="firstName" placeholder={t("phName")} onChange={handleInputChange} />
                    <Input name="middleName" placeholder={t("phMiddleName")} onChange={handleInputChange} />
                    <Input required name="lastName" placeholder={t("phLastName")} onChange={handleInputChange} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Input required type="email" name="email" placeholder={t("phEmail")} onChange={handleInputChange} />
                    <Input required type="tel" name="telefono" placeholder={t("phPhone")} onChange={handleInputChange} />
                  </div>
                </section>

                {/* 2. ENVÍO */}
                <section>
                  <SectionLabel number="02" title={t("secShipping")} icon={<MapPin size={16} />} />
                  <Input required name="direccion" placeholder={t("phAddress")} onChange={handleInputChange} className="mb-4" />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Input required name="city" placeholder={t("phCity")} onChange={handleInputChange} />
                    <Input required name="state" placeholder={t("phState")} onChange={handleInputChange} />
                    <Input required name="cp" placeholder={t("phCP")} onChange={handleInputChange} />
                    <Input required name="country" placeholder="MX" defaultValue="MX" onChange={handleInputChange} />
                  </div>
                </section>

                {/* 3. PAGO */}
                <section>
                  <SectionLabel number="03" title={t("secPayment")} icon={<CreditCard size={16} />} />
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6 flex items-center justify-between">
                    <div className="flex gap-2">
                      <Image src={"/visa-mastercad.jpg"} width={120} height={40} alt="" />
                    </div>
                    <span className="text-[10px] font-black text-white-400 uppercase   flex items-center gap-1">
                      <Image src={"/etomin.png"} width={120} height={40} alt="" />
                    </span>
                  </div>
                  <Input required name="cardName" placeholder={t("phCardName")} onChange={handleInputChange} className="mb-4 uppercase font-black" />
                  <div className="relative mb-4">
                    <Input required name="cardNumber" maxLength={16} placeholder="0000 0000 0000 0000" onChange={handleInputChange} className="pl-12 font-mono" />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-white-300" size={18} />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Input required name="expMonth" placeholder="MM" maxLength={2} onChange={handleInputChange} className="text-center" />
                    <Input required name="expYear" placeholder="AA" maxLength={2} onChange={handleInputChange} className="text-center" />
                    <Input required name="cvv" type="password"  placeholder="CVV" maxLength={4} onChange={handleInputChange} className="text-center font-mono" />
                  </div>
                </section>

                {/* ERROR TOAST */}
                {paymentError && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-600 text-xs font-black uppercase   flex items-center gap-3 animate-in slide-in-from-left">
                    <AlertCircle size={18} />
                    <p>{paymentError}</p>
                    <button type="button" onClick={() => setPaymentError(null)} className="ml-auto"><X size={16} /></button>
                  </div>
                )}

                <div className="w-full flex items-center justify-center">
                  <Image src={"/secure-payment.png"} width={120} height={40} alt="" />
                </div>

                {/* BOTÓN FINAL */}
                <button
                  disabled={isProcessing}
                  className="w-full py-6 bg-[#3048ab] hover:bg-slate-800 disabled:bg-slate-300 text-white rounded-2xl font-black uppercase   text-xs transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-300 active:scale-95"
                >
                  {isProcessing ? (
                    <><Loader2 className="animate-spin" /> {t("btnProcessing")}</>
                  ) : (
                    <>{t("btnConfirm")}</>
                  )}
                </button>

              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// COMPONENTES AUXILIARES ESTILIZADOS
function SectionLabel({ number, title, icon }: { number: string; title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
      <span className="text-2xl font-black text-white-100    select-none">{number}</span>
      <div className="flex items-center gap-2 text-[#0a0f1a] font-black uppercase text-xs">
        <span className="text-[#facc15]">{icon}</span>
        {title}
      </div>
    </div>
  );
}

function Input({ className = "", ...props }: any) {
  return (
    <input
      {...props}
      className={`w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-[#0a0f1a] outline-none focus:ring-4 focus:ring-[#0a0f1a]/5 focus:border-[#0a0f1a] transition-all placeholder:text-white-300 placeholder:font-medium placeholder:uppercase  placeholder:text-[10px] ${className}`}
    />
  );
}