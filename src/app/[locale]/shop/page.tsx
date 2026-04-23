"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
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
  PackageSearch 
} from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Cantidad de productos por página

  // Llamada al hook con las nuevas opciones
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

  const { addToCart, isInCart , items} = useCartContext();

  // Resetear a la página 1 cuando cambian los filtros o la búsqueda
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Scroll suave hacia arriba al cambiar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#102f67] to-[#1a4a8a] py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Tienda de Suministros Médicos
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-sans">
              Encuentra equipos y dispositivos médicos de la más alta calidad
              para tu práctica profesional.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="bg-white border-b sticky top-16 md:top-20 z-40">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent font-sans"
                />
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full font-sans"
                type="button"
              >
                <Filter className="w-4 h-4" />
                Filtros
              </button>

              {/* Desktop Category Filters */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors font-sans ${
                    selectedCategory === "all"
                      ? "bg-[#3b82f6] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  type="button"
                >
                  Todos
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors font-sans ${
                      selectedCategory === category
                        ? "bg-[#3b82f6] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="md:hidden mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-[#102f67]">Categorías</span>
                  <button onClick={() => setShowFilters(false)} type="button">
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setShowFilters(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors font-sans ${
                      selectedCategory === "all"
                        ? "bg-[#3b82f6] text-white"
                        : "bg-white text-gray-700 border"
                    }`}
                    type="button"
                  >
                    Todos
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowFilters(false);
                      }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors font-sans ${
                        selectedCategory === category
                          ? "bg-[#3b82f6] text-white"
                          : "bg-white text-gray-700 border"
                      }`}
                      type="button"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-[#f5f6f8]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(pageSize)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse"
                  >
                    <div className="h-48 bg-gray-200" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                      <div className="h-6 bg-gray-200 rounded w-1/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                <PackageSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-sans">
                  No se encontraron productos con esos criterios
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-6 px-8 py-3 bg-[#3b82f6] text-white rounded-full hover:bg-[#2563eb] transition-colors font-sans font-medium"
                  type="button"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <p className="text-gray-600 font-sans">
                    Mostrando <span className="font-bold text-[#102f67]">{products.length}</span> de <span className="font-bold text-[#102f67]">{totalCount}</span> productos
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
                    >
                      {/* Product Image - Clickable */}
                      <Link href={`/shop/${product.id}`}>
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {product.originalPrice && (
                            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                              OFERTA
                            </span>
                          )}
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
                              <span className="bg-[#102f67] text-white px-3 py-1 rounded text-sm font-medium">
                                Agotado
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="p-4 flex flex-col flex-grow">
                        <span className="text-xs text-[#3b82f6] font-medium uppercase tracking-wide">
                          {product.category}
                        </span>
                        <Link href={`/shop/${product.id}`}>
                          <h3 className="text-[#102f67] font-bold mt-1 line-clamp-2 min-h-[3rem] hover:text-[#3b82f6] transition-colors">
                            {product.name}
                          </h3>
                        </Link>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 font-sans">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xl font-bold text-[#102f67]">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>

                        {/* Add to Cart Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            console.log(items)
                            addToCart(product);
                          }}
                          disabled={!product.inStock || isInCart(product.id)}
                          className={`w-full mt-auto pt-4 py-2.5 rounded-full font-medium transition-colors flex items-center justify-center gap-2 font-sans ${
                            !product.inStock
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : isInCart(product.id)
                                ? "bg-green-500 text-white"
                                : "bg-[#3b82f6] text-white hover:bg-[#2563eb]"
                          }`}
                          type="button"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          {isInCart(product.id)
                            ? "Agregado"
                            : product.inStock
                              ? "Agregar al carrito"
                              : "No disponible"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-full border border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-colors"
                      type="button"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#102f67]" />
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-10 h-10 rounded-full font-medium transition-all ${
                              currentPage === pageNum
                                ? "bg-[#102f67] text-white shadow-md scale-110"
                                : "hover:bg-white text-gray-600 border border-transparent hover:border-gray-200"
                            }`}
                            type="button"
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-full border border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-colors"
                      type="button"
                    >
                      <ChevronRight className="w-6 h-6 text-[#102f67]" />
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