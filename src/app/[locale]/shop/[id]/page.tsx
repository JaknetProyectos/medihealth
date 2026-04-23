"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
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
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const { product, relatedProducts, isLoading, error } = useProduct(productId);
  const { addToCart, isInCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-[#f5f6f8] py-8">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 animate-pulse">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-96 bg-gray-200 rounded-lg" />
                <div className="space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="h-6 bg-gray-200 rounded w-1/3" />
                  <div className="h-24 bg-gray-200 rounded" />
                  <div className="h-12 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-[#f5f6f8] flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#102f67] mb-4">
              Producto no encontrado
            </h1>
            <p className="text-gray-600 mb-6 font-sans">{error}</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-full hover:bg-[#2563eb] transition-colors font-sans"
            >
              <ChevronLeft className="w-4 h-4" />
              Volver a la tienda
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = product.images || [product.image];
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-[#f5f6f8]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm font-sans">
              <Link href="/" className="text-gray-500 hover:text-[#3b82f6]">
                Inicio
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/shop" className="text-gray-500 hover:text-[#3b82f6]">
                Tienda
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#102f67] font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Gallery */}
                <div className="p-6 md:p-8 bg-gray-50">
                  {/* Main Image */}
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-white mb-4">
                    <img
                      src={images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                    {discount > 0 && (
                      <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                        -{discount}%
                      </span>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium">
                          Agotado
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                            selectedImage === index
                              ? "border-[#3b82f6]"
                              : "border-transparent hover:border-gray-300"
                          }`}
                          type="button"
                        >
                          <img
                            src={img}
                            alt={`${product.name} - imagen ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 md:p-8">
                  {/* Category & SKU */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#3b82f6] font-medium uppercase tracking-wide">
                      {product.category}
                    </span>
                    <span className="text-sm text-gray-400 font-sans">
                      SKU: {product.sku}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl font-bold text-[#102f67] mb-3">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-sans">
                      {product.rating} ({product.reviews} reseñas)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl font-bold text-[#102f67]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 font-sans leading-relaxed">
                    {product.longDescription || product.description}
                  </p>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2 mb-6">
                    {product.inStock ? (
                      <>
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-green-600 font-medium font-sans">
                          En stock - Disponible para envío
                        </span>
                      </>
                    ) : (
                      <span className="text-red-500 font-medium font-sans">
                        Producto agotado
                      </span>
                    )}
                  </div>

                  {/* Quantity & Add to Cart */}
                  {product.inStock && (
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-3 hover:bg-gray-100 transition-colors"
                          type="button"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-6 py-3 font-medium font-sans min-w-[60px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-3 hover:bg-gray-100 transition-colors"
                          type="button"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={handleAddToCart}
                        disabled={isInCart(product.id)}
                        className={`flex-1 py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors font-sans ${
                          isInCart(product.id)
                            ? "bg-green-500 text-white"
                            : "bg-[#3b82f6] text-white hover:bg-[#2563eb]"
                        }`}
                        type="button"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        {isInCart(product.id) ? "Agregado al carrito" : "Agregar al carrito"}
                      </button>
                    </div>
                  )}

                  {/* Benefits */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                    <div className="text-center">
                      <Truck className="w-6 h-6 text-[#3b82f6] mx-auto mb-2" />
                      <span className="text-xs text-gray-600 font-sans">
                        Envío gratis +$1,500
                      </span>
                    </div>
                    <div className="text-center">
                      <Shield className="w-6 h-6 text-[#3b82f6] mx-auto mb-2" />
                      <span className="text-xs text-gray-600 font-sans">
                        Garantía incluida
                      </span>
                    </div>
                    <div className="text-center">
                      <RotateCcw className="w-6 h-6 text-[#3b82f6] mx-auto mb-2" />
                      <span className="text-xs text-gray-600 font-sans">
                        Devolución 30 días
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="border-t p-6 md:p-8">
                  <h2 className="text-xl font-bold text-[#102f67] mb-4">
                    Especificaciones
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <span className="text-sm text-gray-500 font-sans">
                          {spec.label}
                        </span>
                        <p className="font-medium text-[#102f67] font-sans">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#102f67] mb-6">
                  Productos Relacionados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      href={`/shop/${relatedProduct.id}`}
                      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-[#3b82f6] font-medium uppercase">
                          {relatedProduct.category}
                        </span>
                        <h3 className="text-[#102f67] font-bold mt-1 line-clamp-2">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 font-sans">
                            {relatedProduct.rating}
                          </span>
                        </div>
                        <p className="text-lg font-bold text-[#102f67] mt-2">
                          {formatPrice(relatedProduct.price)}
                        </p>
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
