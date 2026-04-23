"use client";

import { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { processEtominPayment } from "@/lib/payment";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Trash2, Plus, Minus, CreditCard, ShieldCheck,
    Truck, Loader2, ChevronRight, AlertCircle,
    CheckCircle2, X, Package, MapPin, User, Info
} from "lucide-react";
import { useLocale } from "next-intl";

export default function CartPage() {
    const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCartContext();
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);

    // Modal de Éxito
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [orderSummary, setOrderSummary] = useState<{ id: string; items: any[]; total: number } | null>(null);

    // Estado con TODOS los campos requeridos por tu interfaz
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", middleName: "", email: "", telefono: "",
        direccion: "", city: "", state: "", cp: "", country: "MX",
        cardNumber: "", cardName: "", expMonth: "", expYear: "", cvv: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);
    };

    const locale = useLocale()

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setPaymentError(null);

        try {
            const orderId = `PH-${Date.now()}`;

            // const result = await processEtominPayment({
            //     amount: totalPrice,
            //     orderId: orderId,
            //     customer: {
            //         firstName: formData.firstName,
            //         lastName: formData.lastName,
            //         middleName: formData.middleName,
            //         email: formData.email,
            //         telefono: formData.telefono,
            //         direccion: formData.direccion,
            //         city: formData.city,
            //         state: formData.state,
            //         cp: formData.cp,
            //         country: formData.country,
            //     },
            //     cardData: {
            //         number: formData.cardNumber,
            //         name: formData.cardName,
            //         month: formData.expMonth,
            //         year: formData.expYear,
            //         cvv: formData.cvv,
            //     }
            // });

            const result = { response: "APPROVED", responseCode: "00" }

            if (result.response === "APPROVED" || result.responseCode === "00") {
                // 1. Preparamos los datos para el resumen visual
                const finalItems = [...items];
                const finalTotal = totalPrice;

                setOrderSummary({ id: orderId, items: finalItems, total: finalTotal });

                // 2. Disparamos el envío del ticket por email (sin bloquear la UI)
                try {
                    await fetch(`/${locale || "es"}/api/checkout`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            orderId,
                            items: finalItems,
                            total: finalTotal,
                            customer: formData
                        })
                    })
                } catch (emailError) {
                    console.error("Error al enviar el ticket, pero el pago fue exitoso:", emailError);
                }

                // 3. Mostramos éxito y limpiamos
                setShowSuccessModal(true);
                clearCart();
            } else {
                console.log(result)
                throw new Error("Pago rechazado por el banco.");
            }
        } catch (err: any) {
            setPaymentError(err.message || "Error al procesar el pago.");
        } finally {
            setIsProcessing(false);
        }
    };

    if (items.length === 0 && !showSuccessModal) {
        return (
            <div className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-20 text-center">
                    <h2 className="text-2xl font-bold text-[#102f67] mb-4">Tu carrito está vacío</h2>
                    <Link href="/shop" className="px-8 py-3 bg-[#3b82f6] text-white rounded-full font-bold">Volver a la tienda</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f9fb] flex flex-col relative">
            <Header />

            {/* --- MODAL DE ÉXITO --- */}
            {showSuccessModal && orderSummary && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#102f67]/90 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95">
                        <div className="bg-[#fbbf24] p-8 text-center">
                            <CheckCircle2 className="w-16 h-16 text-[#102f67] mx-auto mb-4" />
                            <h2 className="text-3xl font-black text-[#102f67]">¡Compra Exitosa!</h2>
                            <p className="text-[#102f67]/70 font-bold">Orden: {orderSummary.id}</p>
                        </div>
                        <div className="p-8 overflow-y-auto flex-grow">
                            <div className="space-y-4">
                                {orderSummary.items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between border-b pb-2">
                                        <span className="text-sm text-gray-600">({item.quantity}) {item.product.name}</span>
                                        <span className="text-sm font-bold text-[#102f67]">{formatPrice(item.product.price * item.quantity)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-gray-50 rounded-xl flex justify-between items-center">
                                <span className="font-bold text-[#102f67]">Total Pagado:</span>
                                <span className="text-2xl font-black text-[#102f67]">{formatPrice(orderSummary.total)}</span>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 flex gap-3">
                            <Link href="/shop" className="flex-1 py-4 bg-[#102f67] text-white rounded-full font-bold text-center">Finalizar</Link>
                        </div>
                    </div>
                </div>
            )}

            <main className="flex-grow container mx-auto px-4 md:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* COLUMNA IZQUIERDA: CARRITO */}
                    <div className="lg:col-span-6 space-y-6">
                        <h1 className="text-2xl font-bold text-[#102f67] flex items-center gap-2">
                            <Package /> Tu Pedido
                        </h1>
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div key={item.product.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 shadow-sm">
                                    <img src={item.product.image} className="w-20 h-20 object-cover rounded-xl" />
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-[#102f67] text-sm line-clamp-1">{item.product.name}</h3>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-full border">
                                                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}><Minus size={14} /></button>
                                                <span className="font-bold text-sm">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}><Plus size={14} /></button>
                                            </div>
                                            <p className="font-bold text-[#102f67]">{formatPrice(item.product.price * item.quantity)}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.product.id)} className="text-gray-300 hover:text-red-500"><Trash2 size={20} /></button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: PAGO COMPLETO */}
                    <div className="lg:col-span-6">
                        <form onSubmit={handleCheckout} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="p-6 md:p-8 space-y-8">

                                {/* 1. Datos Personales */}
                                <section>
                                    <h2 className="text-[#102f67] font-bold flex items-center gap-2 mb-4 uppercase text-xs tracking-widest border-b pb-2">
                                        <User size={16} className="text-[#3b82f6]" /> 1. Datos Personales
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <input required name="firstName" placeholder="Nombre" onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                        <input name="middleName" placeholder="Seg. Nombre" onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                        <input required name="lastName" placeholder="Apellidos" onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                        <input required type="email" name="email" placeholder="Correo Electrónico" onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                        <input required type="tel" name="telefono" placeholder="Teléfono" onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                    </div>
                                </section>

                                {/* 2. Dirección de Envío */}
                                <section>
                                    <h2 className="text-[#102f67] font-bold flex items-center gap-2 mb-4 uppercase text-xs tracking-widest border-b pb-2">
                                        <MapPin size={16} className="text-[#3b82f6]" /> 2. Dirección de Envío
                                    </h2>
                                    <input required name="direccion" placeholder="Calle, Número y Colonia" onChange={handleInputChange} className="w-full p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6] mb-3" />
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        <input required name="city" placeholder="Ciudad" onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                        <input required name="state" placeholder="Estado" onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                        <input required name="cp" placeholder="C.P." onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                        <input required name="country" placeholder="País (MX)" defaultValue="MX" onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                    </div>
                                </section>

                                {/* 3. Información de Pago */}
                                <section>
                                    <h2 className="text-[#102f67] font-bold flex items-center gap-2 mb-4 uppercase text-xs tracking-widest border-b pb-2">
                                        <CreditCard size={16} className="text-[#3b82f6]" /> 3. Información de Pago
                                    </h2>
                                    <input required name="cardName" placeholder="Nombre en la Tarjeta" onChange={handleInputChange} className="w-full p-3 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#3b82f6] mb-3 uppercase" />
                                    <div className="relative mb-3">
                                        <input required name="cardNumber" maxLength={16} placeholder="Número de Tarjeta (16 dígitos)" onChange={handleInputChange} className="w-full p-3 pl-10 bg-gray-50 border rounded-xl text-sm font-mono outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                        <CreditCard className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <input required name="expMonth" placeholder="MM" maxLength={2} onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm text-center outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                        <input required name="expYear" placeholder="AA" maxLength={2} onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm text-center outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                        <input required name="cvv" placeholder="CVV" maxLength={4} onChange={handleInputChange} className="p-3 bg-gray-50 border rounded-xl text-sm text-center outline-none focus:ring-2 focus:ring-[#3b82f6]" />
                                    </div>
                                </section>

                                {/* --- TOAST DE ERROR (SOBRE EL BOTÓN) --- */}
                                {paymentError && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm flex items-center gap-3 animate-bounce-short">
                                        <AlertCircle size={20} className="shrink-0" />
                                        <p className="font-semibold">{paymentError}</p>
                                        <button type="button" onClick={() => setPaymentError(null)} className="ml-auto"><X size={18} /></button>
                                    </div>
                                )}

                                {/* Botón de Pago */}
                                <div className="bg-[#102f67] p-6 rounded-3xl text-white shadow-inner">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-white/60 font-bold uppercase text-[10px] tracking-[0.2em]">Total Final</span>
                                        <span className="text-3xl font-black text-[#fbbf24] tracking-tighter">{formatPrice(totalPrice)}</span>
                                    </div>
                                    <button
                                        disabled={isProcessing}
                                        className="w-full py-4 bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-gray-500 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg active:scale-95"
                                    >
                                        {isProcessing ? (
                                            <><Loader2 className="animate-spin" /> Procesando...</>
                                        ) : (
                                            <>Confirmar Pedido</>
                                        )}
                                    </button>
                                    <div className="mt-4 flex items-center justify-center gap-2 opacity-50">
                                        <ShieldCheck size={14} />
                                        <span className="text-[10px] uppercase font-bold tracking-widest">Pago Encriptado</span>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}