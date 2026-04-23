"use client";

import { useState } from "react";
// Importamos todo desde nuestro archivo de routing
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, ShoppingCart, Globe } from "lucide-react";
import { useCartContext } from "@/context/CartContext";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-9 md:h-9">
        <circle cx="18" cy="18" r="18" fill="#3b82f6" />
        <path d="M18 8C17.4 8 17 8.4 17 9V17H9C8.4 17 8 17.4 8 18C8 18.6 8.4 19 9 19H17V27C17 27.6 17.4 28 18 28C18.6 28 19 27.6 19 27V19H27C27.6 19 28 18.6 28 18C28 17.4 27.6 17 27 17H19V9C19 8.4 18.6 8 18 8Z" fill="white" />
      </svg>
      <span className="text-xl md:text-2xl font-bold text-[#102f67] font-serif">
        Medi Health
      </span>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCartContext();
  
  // Hooks de traducción y rutas
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Función para cambiar el idioma manteniendo la página actual
  const toggleLocale = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#102f67] font-medium hover:text-[#3b82f6] transition-colors font-sans">
              {t("home")}
            </Link>
            <Link href="/cotiza" className="text-[#102f67] font-medium hover:text-[#3b82f6] transition-colors font-sans">
              {t("quote")}
            </Link>
            <Link href="/shop" className="text-[#102f67] font-medium hover:text-[#3b82f6] transition-colors font-sans">
              {t("shop")}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Locale Switcher Button */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-[#102f67] border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
              title={locale === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Globe size={16} />
              <span className="uppercase">{locale}</span>
            </button>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#3b82f6] text-white font-medium rounded-full hover:bg-[#2563eb] transition-colors font-sans"
            >
              {t("contact")}
            </Link>

            <Link href="/cart" className="relative p-2 text-[#102f67] hover:text-[#3b82f6] transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#3b82f6] text-white text-xs rounded-full flex items-center justify-center font-sans">
                {totalItems}
              </span>
            </Link>

            <button className="md:hidden p-2 text-[#102f67]" onClick={() => setIsMenuOpen(!isMenuOpen)} type="button">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-[#102f67] font-medium hover:text-[#3b82f6] transition-colors py-2 font-sans" onClick={() => setIsMenuOpen(false)}>
                {t("home")}
              </Link>
              <Link href="/cotiza" className="text-[#102f67] font-medium hover:text-[#3b82f6] transition-colors py-2 font-sans" onClick={() => setIsMenuOpen(false)}>
                {t("quote")}
              </Link>
              <Link href="/shop" className="text-[#102f67] font-medium hover:text-[#3b82f6] transition-colors py-2 font-sans" onClick={() => setIsMenuOpen(false)}>
                {t("shop")}
              </Link>
              <div className="flex justify-between items-center pt-2">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#3b82f6] text-white font-medium rounded-full hover:bg-[#2563eb] transition-colors w-fit font-sans" onClick={() => setIsMenuOpen(false)}>
                  {t("contact")}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}