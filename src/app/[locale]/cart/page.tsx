"use client";

import { useState, useMemo } from "react";
import { useCartContext } from "@/context/CartContext";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Trash2, Plus, Minus, CreditCard, ShieldCheck,
  Loader2, AlertCircle, CheckCircle2, X, Package,
  MapPin, User, Hash, Tag
} from "lucide-react";
import Image from "next/image";
import { processEtominPayment } from "@/lib/payment";

export default function CartPage() {
  const t = useTranslations("Cart");
  const locale = useLocale();
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCartContext();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState<{ id: string; items: any[]; total: number } | null>(null);

  // Lógica de Cupón
  const [couponInput, setCouponInput] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponStatus, setCouponStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", middleName: "", email: "", telefono: "",
    direccion: "", city: "", state: "", cp: "", country: "MX",
    cardNumber: "", cardName: "", expMonth: "", expYear: "", cvv: ""
  });

  // Cálculos Financieros
  const totals = useMemo(() => {
    const IVA_RATE = 0.16;
    const subtotal = totalPrice;
    const discountAmount = subtotal * discountPercent;
    const subtotalWithDiscount = subtotal - discountAmount;
    const taxAmount = subtotalWithDiscount * IVA_RATE;
    const finalTotal = subtotalWithDiscount + taxAmount;

    return {
      subtotal,
      discountAmount,
      taxAmount,
      finalTotal
    };
  }, [totalPrice, discountPercent]);

  const handleApplyCoupon = () => {
    const validCodes = ["BIENVENIDO"];
    if (validCodes.includes(couponInput.toUpperCase())) {
      setDiscountPercent(0.10); // 10% de descuento
      setCouponStatus({ type: 'success', msg: t("couponApplied") });
    } else {
      setDiscountPercent(0);
      setCouponStatus({ type: 'error', msg: t("couponInvalid") });
    }
  };

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
      // Usamos el total calculado con IVA y descuento
      const result = await processEtominPayment({
        amount: totals.finalTotal,
        cardData: {
          cvv: formData.cvv,
          month: formData.expMonth,
          name: formData.cardName,
          number: formData.cardNumber,
          year: formData.expYear
        },
        customer: {
          city: formData.city,
          country: formData.country,
          cp: formData.cp,
          direccion: formData.direccion,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          state: formData.state,
          telefono: formData.telefono,
          middleName: formData.middleName ?? ""
        },
        orderId: orderId
      })

      if (result.response === "APPROVED" || result.responseCode === "00") {
        setOrderSummary({
          id: orderId,
          items: [...items],
          total: totals.finalTotal
        });

        try {
          await fetch(`/${locale ?? "es"}/api/checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId,
              items,
              total: totals.finalTotal,
              customer: formData,
              discount: totals.discountAmount,
              tax: totals.taxAmount
            })
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
              <Package className="text-slate-200" size={40} />
            </div>
            <h2 className="text-2xl font-black text-[#0a0f1a] mb-4 uppercase">{t("emptyTitle")}</h2>
            <p className="text-slate-400 mb-8 text-sm">{t("emptyDesc")}</p>
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

      {/* MODAL DE ÉXITO */}
      {showSuccessModal && orderSummary && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#3048ab]/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] shadow-2xl max-w-xl w-full overflow-hidden flex flex-col animate-in zoom-in-95 border border-white/20">
            <div className="bg-[#facc15] p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#0a0f1a 1px, transparent 0px)', backgroundSize: '20px 20px' }} />
              <CheckCircle2 className="w-20 h-20 text-[#0a0f1a] mx-auto mb-4 relative z-10" />
              <h2 className="text-3xl font-black text-[#0a0f1a] uppercase relative z-10">{t("successTitle")}</h2>
              <p className="text-[#0a0f1a]/60 font-black uppercase text-[10px] mt-2 relative z-10">{t("orderId")}: {orderSummary.id}</p>
            </div>
            <div className="p-10 overflow-y-auto max-h-[40vh]">
              <div className="space-y-4">
                {orderSummary.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-3">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-[#0a0f1a] uppercase truncate max-w-[250px]">{locale === "es" ? item.product.name : item.product.name_english}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{t("qty")}: {item.quantity}</span>
                    </div>
                    <span className="text-sm font-black text-[#0a0f1a]">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 bg-slate-50 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="font-black text-[#0a0f1a] uppercase text-xs">{t("totalPaid")}</span>
                <span className="text-3xl font-black text-[#0a0f1a]">{formatPrice(orderSummary.total)}</span>
              </div>
              <Link href="/shop" className="w-full py-5 bg-[#3048ab] text-white rounded-2xl font-black uppercase text-xs text-center hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                {t("btnFinish")}
              </Link>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* COLUMNA IZQUIERDA: RESUMEN Y CUPÓN */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3048ab] text-white rounded-xl flex items-center justify-center">
                <Package size={20} />
              </div>
              <h1 className="text-2xl font-black text-[#0a0f1a] uppercase">{t("cartTitle")}</h1>
            </div>

            {/* LISTA DE PRODUCTOS */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={item.product.id} className="group bg-white p-4 rounded-3xl border border-slate-100 flex gap-4 shadow-sm hover:shadow-md transition-all">
                  <div className="w-20 h-20 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.product.image} className="w-full h-full object-contain p-2 grayscale group-hover:grayscale-0 transition-all" alt={item.product.name} />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <h3 className="font-black text-[#0a0f1a] text-xs uppercase leading-tight line-clamp-1">
                      {locale === "es" ? item.product.name : item.product.name_english}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-all"><Minus size={10} /></button>
                        <span className="font-black text-[10px] w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-all"><Plus size={10} /></button>
                      </div>
                      <p className="font-black text-[#0a0f1a] text-xs">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* SECCIÓN DE CUPÓN */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={14} className="text-[#3048ab]" />
                <span className="text-[10px] font-black uppercase text-[#0a0f1a]">{t("couponPlaceholder")}</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="BIENVENIDO"
                  className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-[#3048ab] uppercase"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-[#0a0f1a] text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase hover:bg-[#3048ab] transition-colors"
                >
                  {t("btnApplyCoupon")}
                </button>
              </div>
              {couponStatus && (
                <p className={`mt-2 text-[10px] font-bold uppercase ${couponStatus.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                  {couponStatus.msg}
                </p>
              )}
            </div>

            {/* RESUMEN DE COSTOS */}
            <div className="bg-[#3048ab] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-900/20">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Hash size={80} /></div>
              <div className="relative z-10 space-y-3">
                <div className="flex justify-between items-center opacity-60">
                  <span className="text-[10px] font-black uppercase">{t("subtotalLabel")}</span>
                  <span className="text-sm font-bold">{formatPrice(totals.subtotal)}</span>
                </div>

                {totals.discountAmount > 0 && (
                  <div className="flex justify-between items-center text-[#facc15]">
                    <span className="text-[10px] font-black uppercase">{t("discountLabel")}</span>
                    <span className="text-sm font-bold">-{formatPrice(totals.discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center opacity-60">
                  <span className="text-[10px] font-black uppercase">{t("tax")}</span>
                  <span className="text-sm font-bold">{formatPrice(totals.taxAmount)}</span>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase text-[#facc15]">{t("totalLabel")}</span>
                  <div className="text-4xl font-black leading-none">{formatPrice(totals.finalTotal)}</div>
                </div>

                <p className="text-[10px] font-bold text-white/40 uppercase pt-4 flex items-center gap-2">
                  <ShieldCheck size={12} className="text-[#facc15]" /> {t("secureCheckout")}
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO (Se mantiene igual, solo cambia el envío del total) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleCheckout} className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
              <div className="p-8 md:p-12 space-y-10">
                {/* 1. DATOS PERSONALES */}
                <section>
                  <SectionLabel number="01" title={t("secPersonal")} icon={<User size={16} />} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input required name="firstName" placeholder={t("phName")} onChange={handleInputChange} />
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
                      <Image src={"/visa-mastercad.jpg"} width={120} height={40} alt="Payment Methods" />
                    </div>
                    <Image src={"/etomin.png"} width={100} height={30} alt="Etomin" />
                  </div>
                  <Input required name="cardName" placeholder={t("phCardName")} onChange={handleInputChange} className="mb-4 uppercase font-black" />
                  <div className="relative mb-4">
                    <Input required name="cardNumber" maxLength={16} placeholder="0000 0000 0000 0000" onChange={handleInputChange} className="pl-12 font-mono" />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Input required name="expMonth" placeholder="MM" maxLength={2} onChange={handleInputChange} className="text-center" />
                    <Input required name="expYear" placeholder="AA" maxLength={2} onChange={handleInputChange} className="text-center" />
                    <Input required name="cvv" type="password" placeholder="CVV" maxLength={4} onChange={handleInputChange} className="text-center font-mono" />
                  </div>
                </section>

                {paymentError && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-600 text-[10px] font-black uppercase flex items-center gap-3 animate-in slide-in-from-left">
                    <AlertCircle size={18} />
                    <p>{paymentError}</p>
                    <button type="button" onClick={() => setPaymentError(null)} className="ml-auto"><X size={16} /></button>
                  </div>
                )}

                <div className="w-full flex items-center justify-center">
                  <Image src={"/secure-payment.png"} width={120} height={40} alt="Secure Payment" />
                </div>

                <button
                  disabled={isProcessing}
                  className="w-full py-6 bg-[#3048ab] hover:bg-slate-800 disabled:bg-slate-300 text-white rounded-2xl font-black uppercase text-xs transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/20 active:scale-95"
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

// COMPONENTES AUXILIARES
function SectionLabel({ number, title, icon }: { number: string; title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
      <span className="text-2xl font-black text-slate-200 select-none">{number}</span>
      <div className="flex items-center gap-2 text-[#0a0f1a] font-black uppercase text-xs">
        <span className="text-[#3048ab]">{icon}</span>
        {title}
      </div>
    </div>
  );
}

function Input({ className = "", ...props }: any) {
  return (
    <input
      {...props}
      className={`w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-[#0a0f1a] outline-none focus:ring-4 focus:ring-[#3048ab]/5 focus:border-[#3048ab] transition-all placeholder:text-slate-300 placeholder:font-medium placeholder:uppercase placeholder:text-[10px] ${className}`}
    />
  );
}