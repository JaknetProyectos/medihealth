import Image from "next/image";

export default function EquipmentSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f6f8]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-[#4a5568] leading-relaxed text-lg font-sans">
              <strong className="text-[#102f67]">Medi Health</strong> proporciona una amplia variedad de equipos y
              dispositivos médicos, material quirúrgico, equipos de diagnóstico
              y otros insumos esenciales para la atención. Nos especializamos
              en brindar soluciones integrales y asequibles para todas tus
              necesidades de salud.
            </p>
            <p className="text-[#4a5568] leading-relaxed text-lg font-sans">
              Explora nuestro catálogo completo y descubre una vasta gama de
              productos diseñados para cumplir con los más altos estándares de
              calidad y seguridad.
            </p>
            <p className="text-[#4a5568] leading-relaxed text-lg font-sans">
              Nos comprometemos con tu bienestar y el de tus pacientes. En{" "}
              <strong className="text-[#102f67]">Medi Health</strong>, nos dedicamos a proporcionar productos que no
              solo cumplan, sino que superen las expectativas, asegurando la
              máxima satisfacción en cada compra.
            </p>
            <p className="text-[#4a5568] leading-relaxed text-lg font-sans">
              Desde suministros básicos hasta equipos especializados, nuestro
              catálogo abarca todo lo que necesitas para ofrecer atención
              médica de calidad.
            </p>
          </div>

          {/* Right Side - Title and Image */}
          <div className="order-1 md:order-2">
            <p className="text-[#627d92] uppercase tracking-[0.2em] text-sm mb-3 font-sans">
              Soluciones Completas en Equipamiento
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#102f67] leading-tight mb-8">
              Equipos Médicos de Calidad Superior
            </h2>
            <div className="relative h-[300px] md:h-[350px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
                alt="Doctor sonriente"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
