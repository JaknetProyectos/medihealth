"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function OfferModal() {
    const t = useTranslations("OfferModal");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Botón Cerrar */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors z-10 bg-white/50 rounded-full p-1"
                >
                    <X size={24} />
                </button>

                <div className="relative h-48 w-full">
                    <Image
                        src="https://images.unsplash.com/photo-1659353886868-753b0c5c5772?q=80&w=870&auto=format&fit=crop"
                        fill
                        className="object-cover"
                        alt="Offer background"
                        priority
                    />
                </div>

                <div className="p-8 text-center flex flex-col items-center">
                    <span className="text-sm font-bold tracking-widest text-[#334aaa] uppercase">
                        {t("welcome")}
                    </span>

                    <div className="my-4">
                        <h2 className="text-6xl font-black text-gray-900 leading-none">10%</h2>
                        <p className="text-xl font-semibold text-gray-800 uppercase tracking-tight">
                            {t("discount")}
                        </p>
                    </div>

                    <p className="text-gray-600 mb-6">
                        {t("description")} <br />
                        <span className="font-mono font-bold text-black bg-gray-100 px-2 py-1 rounded">
                            {t("code")}
                        </span>
                    </p>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-[#334aaa] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
                    >
                        {t("cta")}
                    </button>
                </div>
            </div>
        </div>
    );
}