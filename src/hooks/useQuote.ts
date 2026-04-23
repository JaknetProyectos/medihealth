"use client";

import { useState, useCallback } from "react";

export interface QuoteItem {
  productName: string;
  quantity: number;
  specifications?: string;
}

export interface QuoteRequest {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  company?: string;
  items: QuoteItem[];
  message?: string;
  status: "pending" | "processing" | "completed";
  createdAt: Date;
}

interface UseQuoteReturn {
  quoteItems: QuoteItem[];
  addQuoteItem: (item: QuoteItem) => void;
  removeQuoteItem: (index: number) => void;
  updateQuoteItem: (index: number, item: QuoteItem) => void;
  clearQuoteItems: () => void;
  submitQuote: (customerInfo: Omit<QuoteRequest, "id" | "items" | "status" | "createdAt">) => Promise<{ success: boolean; quoteId?: string; error?: string }>;
  isSubmitting: boolean;
}

export function useQuote(): UseQuoteReturn {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addQuoteItem = useCallback((item: QuoteItem) => {
    setQuoteItems((current) => [...current, item]);
  }, []);

  const removeQuoteItem = useCallback((index: number) => {
    setQuoteItems((current) => current.filter((_, i) => i !== index));
  }, []);

  const updateQuoteItem = useCallback((index: number, item: QuoteItem) => {
    setQuoteItems((current) =>
      current.map((existing, i) => (i === index ? item : existing))
    );
  }, []);

  const clearQuoteItems = useCallback(() => {
    setQuoteItems([]);
  }, []);

  const submitQuote = useCallback(
    async (
      customerInfo: Omit<QuoteRequest, "id" | "items" | "status" | "createdAt">
    ): Promise<{ success: boolean; quoteId?: string; error?: string }> => {
      setIsSubmitting(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      try {
        // Generate a random quote ID
        const quoteId = `QT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        // In a real app, this would send the data to an API
        console.log("Quote submitted:", {
          ...customerInfo,
          items: quoteItems,
          id: quoteId,
          status: "pending",
          createdAt: new Date(),
        });

        // Clear items after successful submission
        setQuoteItems([]);

        return { success: true, quoteId };
      } catch (error) {
        return { success: false, error: "Error al enviar la cotización" };
      } finally {
        setIsSubmitting(false);
      }
    },
    [quoteItems]
  );

  return {
    quoteItems,
    addQuoteItem,
    removeQuoteItem,
    updateQuoteItem,
    clearQuoteItems,
    submitQuote,
    isSubmitting,
  };
}
