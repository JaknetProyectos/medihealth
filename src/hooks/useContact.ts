"use client";

import { useLocale } from "next-intl";
import { useState, useCallback } from "react";

export interface ContactMessage {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface UseContactReturn {
  submitContact: (data: ContactMessage) => Promise<{ success: boolean; error?: string }>;
  isSubmitting: boolean;
}

export function useContact(): UseContactReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const locale = useLocale()

  const submitContact = useCallback(async (data: ContactMessage) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/${locale ?? "es"}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Error en el servidor');

      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { submitContact, isSubmitting };
}