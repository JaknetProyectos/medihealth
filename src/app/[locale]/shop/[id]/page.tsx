"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useProduct } from "@/hooks/useProducts";
import { useCartContext } from "@/context/CartContext";
import {
  ChevronLeft,
  Star,
  ShoppingCart,
  Check,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  Tag,
  Hash,
  ArrowRight,
  ChevronRight
} from "lucide-react";

export default function ProductDetailPage() {
  const t = useTranslations("ProductDetail");
  const locale = useLocale();
  const params = useParams();
  const productId = params.id as string;
  const { product, relatedProducts, isLoading, error } = useProduct(productId);
  const { addToCart, isInCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  };

  const handleAddToCart = () => {
    if (product) addToCart(product, quantity);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-12 animate-pulse">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-slate-100 rounded-2xl" />
            <div className="space-y-6">
              <div className="h-4 bg-slate-100 w-24" />
              <div className="h-12 bg-slate-100 w-3/4" />
              <div className="h-20 bg-slate-100" />
              <div className="h-12 bg-slate-100 w-1/2" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center py-20 px-6">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Hash className="text-white-300" size={40} />
            </div>
            <h1 className="text-3xl font-black text-[#0a0f1a] mb-2 uppercase tracking-tight">
              {t("notFoundTitle")}
            </h1>
            <p className="text-white-500 mb-8 font-medium">{error || t("notFoundDesc")}</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3048ab] text-white rounded-xl font-bold hover:bg-slate-800 transition-all uppercase   text-xs"
            >
              <ChevronLeft size={16} />
              {t("backToShop")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = [product.image];
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb Técnico */}
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center gap-3 text-[10px] font-black uppercase   text-white-400">
              <Link href="/" className="hover:text-[#3048ab] transition-colors">{t("home")}</Link>
              <ChevronRight size={10} />
              <Link href="/shop" className="hover:text-[#3048ab] transition-colors">{t("shop")}</Link>
              <ChevronRight size={10} />
              <span className="text-[#0a0f1a] truncate">
                {locale === "es" ? product.name : (product.name_english || product.name)}
              </span>
            </nav>
          </div>
        </div>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Columna 1: Galería de Imágenes */}
              <div className="space-y-6">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 group shadow-2xl">
                  <img
                    src={images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                  {discount > 0 && (
                    <div className="absolute top-6 left-6 bg-[#facc15] text-[#0a0f1a] text-xs font-black px-4 py-2 rounded-lg shadow-lg uppercase  ">
                      {discount}% OFF
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-[#3048ab]/80 backdrop-blur-sm flex items-center justify-center p-6">
                      <span className="text-white text-xl font-black uppercase   border-2 border-white/20 px-8 py-4 rounded-xl">
                        {t("outOfStock")}
                      </span>
                    </div>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all p-2 bg-slate-50 ${selectedImage === index ? "border-[#facc15] shadow-lg scale-95" : "border-slate-100 opacity-60 hover:opacity-100"
                          }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Columna 2: Información de Compra */}
              <div className="flex flex-col h-full">
                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-[#3048ab]/10 text-[#3048ab] text-[10px] font-black uppercase   rounded">
                      {product.category}
                    </span>
                    <span className="text-[10px] font-bold text-white-400 uppercase   flex items-center gap-1">
                      <Hash size={12} /> SKU: {product.sku}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-black text-[#0a0f1a]   uppercase  ">
                    {locale === "es" ? product.name : (product.name_english || product.name)}
                  </h1>

                  <div className="flex items-center gap-4">


                  </div>
                </div>

                <div className="mb-10 p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#facc15]/5 rounded-full -mr-16 -mt-16 blur-2xl" />

                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-4xl font-black text-[#0a0f1a] tracking-tight">
                      {formatPrice(product.price)}
                    </span>
                   
                  </div>
                  <p className="text-xs font-bold text-green-600 uppercase   flex items-center gap-2">
                    <Tag size={12} /> {t("taxIncluded")}
                  </p>
                </div>

                <div className="mb-10 space-y-6">
                  <p className="text-white-600 leading-relaxed font-light text-lg   border-l-4 border-[#facc15] pl-6">
                    {locale === "es" ? product.description : (product.description_english || product.description)}
                  </p>

                  <div className="flex items-center gap-3 py-4 border-y border-slate-100">
                    {product.inStock ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-black uppercase  ">{t("inStockStatus")}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-500">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-xs font-black uppercase  ">{t("outOfStockStatus")}</span>
                      </div>
                    )}
                  </div>
                </div>

                {product.inStock && (
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-lg transition-all"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-black text-[#0a0f1a]">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-lg transition-all"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      disabled={isInCart(product.id)}
                      className={`flex-1 py-4 px-8 rounded-xl font-black uppercase   flex items-center justify-center gap-3 transition-all shadow-xl ${isInCart(product.id)
                          ? "bg-green-500 text-white shadow-green-500/20"
                          : "bg-[#3048ab] text-white hover:bg-slate-800 shadow-slate-900/20 hover:-translate-y-1"
                        }`}
                    >
                      {isInCart(product.id) ? <Check size={20} /> : <ShoppingCart size={20} />}
                      {isInCart(product.id) ? t("btnAdded") : t("btnAddToCart")}
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-100">
                  <BenefitItem icon={<Truck size={20} />} text={t("benefitShipping")} />
                  <BenefitItem icon={<Shield size={20} />} text={t("benefitWarranty")} />
                  <BenefitItem icon={<RotateCcw size={20} />} text={t("benefitReturns")} />
                </div>
              </div>
            </div>

            {/* Especificaciones Técnicas */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="mt-24">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-3xl font-black text-[#0a0f1a] uppercase  ">{t("specsTitle")}</h2>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-[#facc15] transition-colors">
                      <span className="text-[10px] font-black text-white-400 uppercase   block mb-2">{spec.label}</span>
                      <p className="font-bold text-[#0a0f1a] uppercase text-sm tracking-tight">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Productos Relacionados */}
            {relatedProducts.length > 0 && (
              <div className="mt-24">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-3xl font-black text-[#0a0f1a] uppercase  ">{t("relatedTitle")}</h2>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {relatedProducts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/shop/${related.id}`}
                      className="group bg-white rounded-3xl border border-slate-100 p-6 hover:shadow-2xl transition-all hover:-translate-y-2"
                    >
                      <div className="aspect-square rounded-2xl bg-slate-50 mb-6 overflow-hidden relative">
                        <img src={related.image} alt={related.name} className="w-full h-full object-contain p-6 grayscale-[40%] group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <span className="text-[10px] font-black text-[#3048ab] uppercase  ">{related.category}</span>
                      <h3 className="font-black text-[#0a0f1a] uppercase text-sm mt-2 mb-4 line-clamp-1 tracking-tight">{related.name}</h3>
                      <div className="flex items-center justify-between">
                        <p className="font-black text-[#0a0f1a]">{formatPrice(related.price)}</p>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#facc15] transition-colors">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function BenefitItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="text-center group">
      <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mx-auto mb-3 text-white-400 group-hover:text-[#facc15] group-hover:bg-[#3048ab] transition-all">
        {icon}
      </div>
      <p className="text-[10px] font-black text-white-500 uppercase   leading-tight">{text}</p>
    </div>
  );
}