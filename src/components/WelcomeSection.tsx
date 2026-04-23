export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#627d92] uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Bienvenido a Medi Health
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#102f67] leading-tight max-w-xl mx-auto">
            Tu Destino Principal para Suministros Médicos Especializados
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
              alt="Laboratorio médico"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-[#4a5568] leading-relaxed text-lg font-sans">
              En <strong className="text-[#102f67]">Medi Health</strong>, nos comprometemos a proporcionar
              suministros médicos de la más alta calidad que cumplen con los
              estándares más exigentes de excelencia.
            </p>
            <p className="text-[#4a5568] leading-relaxed text-lg font-sans">
              Nuestra amplia gama de productos especializados está diseñada
              para apoyar a los profesionales de la salud en la entrega del mejor
              cuidado posible a sus pacientes.
            </p>
            <p className="text-[#4a5568] leading-relaxed text-lg font-sans">
              Estamos disponibles para ayudarte a encontrar cualquier producto
              especializado que requieras a través de nuestra sección de cotizar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
