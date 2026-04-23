import { Award, Users, HeadphonesIcon, FileText } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Garantía de Calidad",
    description:
      "Todos nuestros productos se someten a rigurosos controles de calidad para garantizar su fiabilidad y efectividad.",
  },
  {
    icon: Users,
    title: "Experiencia",
    description:
      "Entendemos las necesidades únicas de los proveedores de salud y ofrecemos productos que satisfacen esos requisitos específicos.",
  },
  {
    icon: HeadphonesIcon,
    title: "Servicio Orientado al Cliente",
    description:
      "Nuestro dedicado equipo de soporte al cliente está aquí para asistirte en cada paso del camino, desde la selección de productos hasta el servicio postventa.",
  },
  {
    icon: FileText,
    title: "Productos cotizables",
    description:
      "Podemos ayudarte a encontrar cualquier producto que no esté en nuestro catálogo. Permítenos asesorarte en nuestra sección de cotizar.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0f2a5c] via-[#164080] to-[#1a4a8a]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          ¿Porqué elegirnos?
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center px-4">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
