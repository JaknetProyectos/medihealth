"use client";

import { useState } from "react";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { 
  Menu, 
  X, 
  ShoppingCart, 
  Globe, 
  Home, 
  FileText, 
  Stethoscope, 
  PhoneCall 
} from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/favicon.png" width={35} height={35} alt="logo" className="object-contain"/>
      <h1 className="text-lg text-blue-600 font-black font-serif">Distribución</h1> 
      <h1 className="text-lg text-yellow-400 font-black font-serif"> Médica</h1>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCartContext();
  
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: nextLocale });
  };

  // Clases compartidas para los links
  const navLinkStyles = "flex items-center gap-2 text-[#0f172a] font-semibold hover:text-[#2563eb] transition-all duration-200 group";
  const iconStyles = "text-[#facc15] group-hover:text-[#2563eb] transition-colors";

  return (
    <header className="bg-white border-b-4 border-[#facc15] sticky top-0 z-20 shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className={navLinkStyles}>
              <Home size={18} className={iconStyles} />
              <span className="tracking-wide uppercase text-sm">{t("home")}</span>
            </Link>
            <Link href="/cotiza" className={navLinkStyles}>
              <FileText size={18} className={iconStyles} />
              <span className="tracking-wide uppercase text-sm">{t("quote")}</span>
            </Link>
            <Link href="/shop" className={navLinkStyles}>
              <Stethoscope size={18} className={iconStyles} />
              <span className="tracking-wide uppercase text-sm">{t("shop")}</span>
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-[#3048ab] bg-blue-50 border border-blue-100 rounded-md hover:bg-blue-100 transition-colors"
            >
              <Globe size={14} />
              <span className="uppercase">{locale}</span>
            </button>

            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#3048ab] text-white text-sm font-bold rounded shadow-sm hover:bg-[#1d4ed8] transition-all transform active:scale-95"
            >
              <PhoneCall size={16} />
              {t("contact")}
            </Link>

            <div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block"></div>

            <Link href="/cart" className="relative p-2 text-[#0f172a] hover:text-[#2563eb] transition-colors">
              <ShoppingCart size={26} strokeWidth={2.5} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-[#e11d48] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>

            <button 
              className="lg:hidden p-2 text-[#0f172a] bg-gray-100 rounded" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-50 border-t border-gray-200 absolute left-0 w-full shadow-xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-6 gap-6">
              <Link href="/" className={navLinkStyles} onClick={() => setIsMenuOpen(false)}>
                <Home size={20} className={iconStyles} />
                {t("home")}
              </Link>
              <Link href="/cotiza" className={navLinkStyles} onClick={() => setIsMenuOpen(false)}>
                <FileText size={20} className={iconStyles} />
                {t("quote")}
              </Link>
              <Link href="/shop" className={navLinkStyles} onClick={() => setIsMenuOpen(false)}>
                <Stethoscope size={20} className={iconStyles} />
                {t("shop")}
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 px-6 py-4 bg-[#3048ab] text-white font-bold rounded shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <PhoneCall size={20} />
                {t("contact")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}