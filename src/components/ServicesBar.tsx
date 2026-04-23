import { Truck, CreditCard, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Entregas",
    description: "Envíos nacionales e internacionales",
  },
  {
    icon: CreditCard,
    title: "Pago Seguro",
    description: "Fácil, Rápido y seguro",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte",
    description: "Permítenos ayudarte en tu compra",
  },
];

export default function ServicesBar() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#102f67]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-[#102f67]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#102f67]">
                    {service.title}
                  </h4>
                  <p className="text-[#627d92] text-sm">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
