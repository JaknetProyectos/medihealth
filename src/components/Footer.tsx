"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { PhoneCall, Mail, MapPin, ShieldCheck, Truck, FileText } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#2c46ac] text-white border-t-8 border-[#facc15]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Tagline & Logo */}
          <div className="space-y-6">
            <div className=" p-2 inline-block rounded"> 
              <Image 
              className="brightness-0 invert"
               src="/logo-full.png" width={160} height={50} alt="MediHealth Logo" />
            </div>
            <p className="text-base leading-relaxed text-white-300 font-sans border-l-2 border-[#facc15] pl-4">
              {t("tagline")}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-[#facc15] uppercase tracking-wider text-sm font-bold mb-6">
              {t("contactTitle")}
            </h5>
            <address className="not-  text-white-300 space-y-4 font-sans text-sm">
              <div className="flex gap-3">
                <MapPin size={20} className="text-[#facc15] shrink-0" />
                <p>Av Periférico Sur 4829, Piso 2, Col. Parque del Pedregal, Tlalpan, CDMX, CP 14010</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall size={20} className="text-[#facc15] shrink-0" />
                <p>+52 552155 4503</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#facc15] shrink-0" />
                <Link href="mailto:contacto@prime-health.mx" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                  contacto@prime-health.mx
                </Link>
              </div>
            </address>
          </div>

          {/* Policies */}
          <div>
            <h5 className="text-[#facc15] uppercase tracking-wider text-sm font-bold mb-6">
              {t("policiesTitle")}
            </h5>
            <nav className="space-y-4 font-sans text-sm">
              <Link href="/privacy-policy" className="flex items-center gap-2 text-white-300 hover:text-white transition-colors group">
                <ShieldCheck size={18} className="group-hover:text-[#facc15]" />
                {t("privacy")}
              </Link>
              <Link href="/returns" className="flex items-center gap-2 text-white-300 hover:text-white transition-colors group">
                <Truck size={18} className="group-hover:text-[#facc15]" />
                {t("returns")}
              </Link>
              <Link href="/terms" className="flex items-center gap-2 text-white-300 hover:text-white transition-colors group">
                <FileText size={18} className="group-hover:text-[#facc15]" />
                {t("terms")}
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#121c45] py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white-500 text-xs font-sans">
              © 2026 Medi Health. {t("rights")}
            </p>
            
            <div className="flex items-center gap-4 opacity-80 grayscale hover:grayscale-0 transition-all">
              <div className="w-10 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-[#1a1f71] text-[8px] font-black">VISA</span>
              </div>
              <div className="w-10 h-6 bg-[#1a1f71] rounded-sm flex items-center justify-center">
                <div className="flex -space-x-1">
                  <div className="w-3 h-3 rounded-full bg-[#eb001b]" />
                  <div className="w-3 h-3 rounded-full bg-[#f79e1b] opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}