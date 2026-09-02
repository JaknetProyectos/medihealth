'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useLocale } from 'next-intl'; // Ajusta según tu librería
import { getTipoCambioDolar } from '@/lib/banxico';

interface CurrencyContextType {
    currency: 'MXN' | 'USD';
    exchangeRate: number;
    isLoading: boolean;
    convertPrice: (amountInMXN: number) => number;
    formatPrice: (amountInMXN: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Definimos el tiempo de caché: 4 horas en milisegundos (puedes cambiarlo)
const CACHE_DURATION = 4 * 60 * 60 * 1000;
const CACHE_KEY = 'banxico_exchange_rate';

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const locale = useLocale();
    const [exchangeRate, setExchangeRate] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const currency = locale === 'en' ? 'USD' : 'MXN';

    useEffect(() => {
        const fetchRate = async () => {
            try {
                // 1. Revisar si hay un tipo de cambio guardado en el navegador
                const cachedData = localStorage.getItem(CACHE_KEY);

                if (cachedData) {
                    const { rate, timestamp } = JSON.parse(cachedData);
                    const isExpired = Date.now() - timestamp > CACHE_DURATION;

                    // Si el caché aún es válido, lo usamos y evitamos la llamada a la API
                    if (!isExpired) {
                        setExchangeRate(rate);
                        setIsLoading(false);
                        return;
                    }
                }

                // 2. Si no hay caché o ya expiró, llamamos a Banxico
                setIsLoading(true);
                const { tipoDeCambio } = await getTipoCambioDolar();
                const validRate = tipoDeCambio > 0 ? tipoDeCambio : 1;

                setExchangeRate(validRate);

                // 3. Guardamos el nuevo tipo de cambio y la fecha exacta en localStorage
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    rate: validRate,
                    timestamp: Date.now(),
                }));

            } catch (error) {
                console.error("Error al obtener tipo de cambio:", error);
                // Fallback seguro usando caché viejo si existe, o 1 en el peor caso
                const staleCache = localStorage.getItem(CACHE_KEY);
                if (staleCache) {
                    setExchangeRate(JSON.parse(staleCache).rate);
                } else {
                    setExchangeRate(1);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchRate();
    }, []);

    const convertPrice = (amountInMXN: number): number => {
        if (currency === 'USD' && exchangeRate > 1) {
            return amountInMXN / exchangeRate;
        }
        return amountInMXN;
    };

    const formatPrice = (amountInMXN: number): string => {
        const finalAmount = convertPrice(amountInMXN);
        const isUsd = currency === 'USD';

        const formattedNumber = new Intl.NumberFormat(isUsd ? 'en-US' : 'es-MX', {
            style: 'currency',
            currency: isUsd ? 'USD' : 'MXN',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(finalAmount);

        return `${formattedNumber} ${currency}`;
    };

    return (
        <CurrencyContext.Provider value={{ currency, exchangeRate, isLoading, convertPrice, formatPrice }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency debe ser usado dentro de un CurrencyProvider');
    }
    return context;
};