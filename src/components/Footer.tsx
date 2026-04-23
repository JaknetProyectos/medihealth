import { Link } from "@/i18n/routing";

export default function Footer() {
  return (
    <footer className="bg-[#141b23] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Tagline */}
          <div>
            <p className="text-lg md:text-xl font-medium italic leading-relaxed text-white/90 font-sans">
              Soluciones integrales y asequibles para todas tus necesidades de atención médica.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-bold mb-4">Contacto</h5>
            <address className="not-italic text-white/80 space-y-3 font-sans">
              <p className="leading-relaxed">
                Av Periférico Sur 4829, Piso 2, Col. Parque del Pedregal,
                Tlalpan, Ciudad de México, CP 14010
              </p>
              <p>
                <Link
                  href="mailto:contacto@prime-health.mx"
                  className="hover:text-[#3b82f6] transition-colors"
                >
                  contacto@prime-health.mx
                </Link>
              </p>
            </address>
          </div>

          {/* Policies */}
          <div>
            <h5 className="text-lg font-bold mb-4">Políticas</h5>
            <nav className="space-y-3 font-sans">
              <Link
                href="/privacy-policy"
                className="block text-white/80 hover:text-[#3b82f6] transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/returns"
                className="block text-white/80 hover:text-[#3b82f6] transition-colors"
              >
                Devoluciones, Reembolsos y Envíos
              </Link>
              <Link
                href="/terms"
                className="block text-white/80 hover:text-[#3b82f6] transition-colors"
              >
                Términos y Condiciones
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm font-sans">
              PRIME HEALTH © 2026. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              {/* Payment Icons */}
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#1a1f71] text-xs font-bold tracking-tight">VISA</span>
              </div>
              <div className="w-12 h-8 bg-[#1a1f71] rounded flex items-center justify-center">
                <div className="flex -space-x-1">
                  <div className="w-4 h-4 rounded-full bg-[#eb001b]" />
                  <div className="w-4 h-4 rounded-full bg-[#f79e1b] opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
