import { Link } from "@/i18n/routing";

export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
          alt="Medical professionals"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f67]/90 via-[#102f67]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="text-white/90 text-sm md:text-base mb-3 tracking-wide font-sans">
            Maximiza tu bienestar con insumos de calidad
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
            Prime Suppliers
          </h1>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3b82f6] text-white font-semibold rounded-full hover:bg-[#2563eb] transition-colors text-lg font-sans"
          >
            Ir a Comprar
          </Link>
        </div>
      </div>
    </section>
  );
}
