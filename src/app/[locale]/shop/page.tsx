"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useProducts } from "@/hooks/useProducts";
import { useCartContext } from "@/context/CartContext";
import {
  Search,
  ShoppingCart,
  Star,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  PackageSearch,
  LayoutGrid,
  Hash
} from "lucide-react";
import ServicesBar from "@/components/ServicesBar";

export default function ShopPage() {
  const t = useTranslations("Shop");
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const {
    products,
    isLoading,
    categories,
    totalCount,
    totalPages
  } = useProducts({
    category: selectedCategory === "all" ? undefined : selectedCategory,
    search: searchQuery || undefined,
    page: currentPage,
    pageSize: pageSize,
  });

  const { addToCart, isInCart } = useCartContext();

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">

        {/* Banner Institucional */}
        <section className="bg-[#3048ab] py-16 md:py-24 relative overflow-hidden border-b-8 border-[#facc15]">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#facc15 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6   uppercase  ">
                {t("heroTitle")}
              </h1>
              <p className="text-white text-lg md:text-xl font-light max-w-xl">
                {t("heroSubtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Barra de Herramientas y Filtros */}
        <section className="bg-white border-b border-slate-200 top-16 md:top-20 z-40 shadow-sm">
          <div className="container mx-auto px-6 py-4">

            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

              {/* Buscador de Precisión */}
              <div className="relative w-full py-4 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white-400 group-focus-within:text-[#3048ab] transition-colors" size={18} />
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-[#3048ab]/5 focus:border-[#3048ab] outline-none transition-all font-sans text-sm"
                />
              </div>
            </div>


            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Toggle de Filtros Móvil */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#3048ab] text-white rounded-xl font-black uppercase   text-xs"
              >
                <Filter size={16} /> {t("btnFilters")}
              </button>

              {/* Filtros Desktop Estilizados */}
              <div className="hidden lg:flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2 mr-4 text-[10px] font-black text-white-400 uppercase  ">
                  <LayoutGrid size={14} /> {t("labelCategories")}:
                </div>
                <FilterButton
                  active={selectedCategory === "all"}
                  onClick={() => setSelectedCategory("all")}
                  label={t("catAll")}
                />
                {categories.map((category) => (
                  <FilterButton
                    key={category}
                    active={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                    label={category}
                  />
                ))}
              </div>
            </div>

            {/* Panel de Filtros Móvil */}
            {showFilters && (
              <div className="lg:hidden mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 animate-in slide-in-from-top duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-black text-[#0a0f1a] uppercase   text-xs">{t("labelCategories")}</span>
                  <button onClick={() => setShowFilters(false)} className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                    <X size={18} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <FilterButton mobile active={selectedCategory === "all"} onClick={() => { setSelectedCategory("all"); setShowFilters(false) }} label={t("catAll")} />
                  {categories.map((category) => (
                    <FilterButton key={category} mobile active={selectedCategory === category} onClick={() => { setSelectedCategory(category); setShowFilters(false) }} label={category} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Cuadrícula de Productos */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(pageSize)].map((_, i) => (
                  <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 animate-pulse space-y-4">
                    <div className="aspect-square bg-slate-100 rounded-2xl" />
                    <div className="h-4 bg-slate-100 w-2/3" />
                    <div className="h-8 bg-slate-100 w-1/2" />
                  </div>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mt-32" />
                <PackageSearch className="w-20 h-20 text-white-200 mx-auto mb-6 relative z-10" />
                <h3 className="text-2xl font-black text-[#0a0f1a] uppercase tracking-tight mb-2 relative z-10">{t("noResultsTitle")}</h3>
                <p className="text-white-400 mb-8 font-medium relative z-10">{t("noResultsDesc")}</p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all") }}
                  className="px-10 py-4 bg-[#3048ab] text-white rounded-xl font-black uppercase   text-xs hover:bg-slate-800 transition-all relative z-10"
                >
                  {t("btnClearFilters")}
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-10">
                  <p className="text-[10px] font-black text-white-400 uppercase  ">
                    {t("showing")} <span className="text-[#0a0f1a]">{products.length}</span> / <span className="text-[#0a0f1a]">{totalCount}</span> {t("results")}
                  </p>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-[2rem] border border-slate-100 p-6 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 flex flex-col relative"
                    >


                      <Link href={`/shop/${product.id}`} className="block relative aspect-square rounded-2xl bg-slate-50 mb-6 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-6 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-[#3048ab]/70 backdrop-blur-sm flex items-center justify-center p-4">
                            <span className="text-white text-[10px] font-black uppercase   border border-white/20 px-4 py-2 rounded-lg">
                              {t("outOfStock")}
                            </span>
                          </div>
                        )}
                      </Link>

                      <div className="flex flex-col flex-grow">
                        <span className="text-[10px] font-black text-[#3048ab] uppercase   mb-1 flex items-center gap-1">
                          <Hash size={10} /> {product.category}
                        </span>

                        <Link href={`/shop/${product.id}`}>
                          <h3 className="text-[#0a0f1a] font-black uppercase text-xs leading-tight tracking-tight mt-1 line-clamp-2 min-h-[2.5rem] group-hover:text-[#3048ab] transition-colors">
                            {locale === "es" ? product.name : (product.name_english || product.name)}
                          </h3>
                        </Link>



                        <div className="mt-6 flex flex-col">
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-black text-[#0a0f1a]  ">
                              {formatPrice(product.price)} {t("tax")}
                            </span>

                          </div>
                        </div>

                        <button
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock || isInCart(product.id)}
                          className={`w-full mt-6 py-4 rounded-xl font-black uppercase text-[10px] flex items-center justify-center gap-2 transition-all ${!product.inStock
                              ? "bg-slate-100 text-white-400 cursor-not-allowed border border-slate-200"
                              : isInCart(product.id)
                                ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                                : "bg-[#3048ab] text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20"
                            }`}
                        >
                          <ShoppingCart size={14} />
                          {isInCart(product.id) ? t("btnAdded") : product.inStock ? t("btnAddToCart") : t("btnUnavailable")}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Paginación Industrial */}
                {totalPages > 1 && (
                  <div className="mt-20 flex justify-center items-center gap-4">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center disabled:opacity-30 hover:bg-slate-50 transition-all text-[#0a0f1a]"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-2">
                      {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-12 h-12 rounded-xl font-black text-xs transition-all border ${currentPage === pageNum
                                ? "bg-[#3048ab] text-white border-[#0a0f1a] shadow-xl shadow-slate-900/20 scale-110"
                                : "bg-white text-white-400 border-slate-200 hover:border-[#0a0f1a] hover:text-[#0a0f1a]"
                              }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center disabled:opacity-30 hover:bg-slate-50 transition-all text-[#0a0f1a]"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// Componentes Auxiliares
function FilterButton({ label, active, onClick, mobile }: { label: string; active: boolean; onClick: () => void; mobile?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-xl text-[11px] font-black transition-all border ${active
          ? "bg-[#3048ab] text-white border-[#3048ab] shadow-lg shadow-blue-900/20"
          : "bg-white text-white-500 border-slate-200 hover:border-[#3048ab] hover:text-[#3048ab]"
        } ${mobile ? "flex-1 text-center" : ""}`}
    >
      {label}
    </button>
  );
}