"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCartContext } from "@/context/CartContext";
import { FileText, CreditCard, User, Mail, DollarSign, ChevronRight } from "lucide-react";
import type { Product } from "@/hooks/useProducts";

export default function CotizaPage() {
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

    // Crear el "Producto Especial" basado en la cotización
    const quoteProduct: Product = {
      id: `QUOTE-${formData.quoteId}-${Date.now()}`,
      name: `Cotización Especial #${formData.quoteId}`,
      category: "Servicio Personalizado",
      price: parseFloat(formData.monto),
      description: `Pago de cotización personalizada para ${formData.nombre} ${formData.apellidos}. ID Referencia: ${formData.quoteId}`,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=300&auto=format&fit=crop", // Imagen genérica de documento/finanzas
      inStock: true,
      sku: formData.quoteId,
      rating: 5,
      reviews: 1,
    };

    // Agregar al carrito y redirigir
    addToCart(quoteProduct, 1);
    router.push("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fb]">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Profesional Azul */}
        <section className="bg-[#102f67] py-16 border-b-4 border-[#fbbf24]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
              Pago de Cotización Personalizada
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-sans">
              Ingrese los detalles proporcionados por su asesor comercial para proceder con el pago seguro de su pedido especial.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                {/* Encabezado del Formulario */}
                <div className="bg-gray-50 px-8 py-6 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#102f67] rounded-lg text-white">
                      <FileText size={24} />
                    </div>
                    <h2 className="text-[#102f67] font-bold text-xl font-sans">Detalles del Acuerdo</h2>
                  </div>
                  <span className="text-[10px] font-black text-[#102f67]/40 uppercase tracking-widest">Paso 1 de 2</span>
                </div>

                <form onSubmit={handleProcessQuote} className="p-8 md:p-10 space-y-6">
                  
                  {/* Fila: Nombre y Apellidos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#102f67] uppercase ml-1">Nombre</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                          required
                          name="nombre"
                          placeholder="Ej. Juan"
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fbbf24] outline-none transition-all font-sans"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#102f67] uppercase ml-1">Apellidos</label>
                      <input
                        required
                        name="apellidos"
                        placeholder="Ej. Pérez"
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fbbf24] outline-none transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Campo: Correo */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#102f67] uppercase ml-1">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input
                        required
                        type="email"
                        name="correo"
                        placeholder="usuario@ejemplo.com"
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fbbf24] outline-none transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Fila: ID Cotización y Monto */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-dashed">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#102f67] uppercase ml-1">ID de Cotización</label>
                      <input
                        required
                        name="quoteId"
                        placeholder="Ej. COT-2024-001"
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-[#102f67] rounded-xl focus:ring-2 focus:ring-[#fbbf24] outline-none transition-all font-mono font-bold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#102f67] uppercase ml-1">Monto a Pagar (MXN)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 text-[#102f67]" size={18} />
                        <input
                          required
                          type="number"
                          step="0.01"
                          name="monto"
                          placeholder="0.00"
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#fbbf24]/10 border-2 border-[#fbbf24] rounded-xl text-[#102f67] font-bold text-lg outline-none focus:ring-2 focus:ring-[#102f67] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Botón de Acción */}
                  <button
                    type="submit"
                    className="w-full mt-8 bg-[#102f67] text-white py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#1a4a8a] transition-all flex items-center justify-center gap-2 group"
                  >
                    Ir a pagar ahora
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
                    <CreditCard size={14} /> Transacción protegida por cifrado de seguridad bancaria.
                  </p>
                </form>
              </div>

              {/* Nota Informativa */}
              <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-2xl flex gap-3">
                <div className="text-blue-500 shrink-0 mt-0.5">
                  <CreditCard size={20} />
                </div>
                <p className="text-sm text-blue-700 leading-relaxed font-sans">
                  <strong>Aviso:</strong> Esta sección es exclusivamente para clientes con una cotización previa validada por un asesor de Medi Health. El monto ingresado será procesado como un pago único.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}