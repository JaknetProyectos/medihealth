"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/supabase/client";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  inStock: boolean;
  sku: string;
  rating: number;
  reviews: number;
  name_english: string;
  description_english: string;
  specifications?: { label: string; value: string }[];
}

interface UseProductsOptions {
  category?: string;
  search?: string;
  page?: number;     // Nueva opción
  pageSize?: number; // Nueva opción
}

interface UseProductsReturn {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  categories: string[];
  totalCount: number; // Para mostrar "X productos encontrados"
  totalPages: number; // Para los botones de paginación
}

export function useProducts(options: UseProductsOptions = {}): UseProductsReturn {
  const { 
    category, 
    search, 
    page = 1, 
    pageSize = 10 
  } = options;

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // 1. Obtener categorías únicas (Solo una vez o cuando sea necesario)
        const { data: catData } = await supabase
          .from("distribucionmedica_products")
          .select("category");
        
        if (catData) {
          const uniqueCategories = [...new Set(catData.map(item => item.category))];
          setCategories(uniqueCategories);
        }

        // 2. Calcular el rango para la paginación
        // SQL range es inclusivo (0-9 trae 10 elementos)
        const from = (page - 1) * pageSize;
        const to = from + pageSize - 1;

        // 3. Construir consulta de productos con conteo
        let query = supabase
          .from("distribucionmedica_products")
          .select("*", { count: 'exact' }); // Pedimos el conteo total

        // Filtro por categoría
        if (category && category !== "all") {
          query = query.eq("category", category);
        }

        // Filtro por búsqueda
        if (search) {
          query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
        }

        // Aplicar paginación y orden
        const { data, error: prodError, count } = await query
          .order("name", { ascending: true })
          .range(from, to);

        if (prodError) throw prodError;

        setProducts(data || []);
        setTotalCount(count || 0);

      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError(err.message || "Error al cargar los productos");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, [category, search, page, pageSize]); // Dependencias actualizadas

  return { 
    products, 
    isLoading, 
    error, 
    categories, 
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize)
  };
}

// Hook useProduct (Sin cambios, se mantiene íntegro como pediste)
interface UseProductReturn {
  product: Product | null;
  relatedProducts: Product[];
  isLoading: boolean;
  error: string | null;
}

export function useProduct(id: string): UseProductReturn {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) return;
      
      setIsLoading(true);
      setError(null);

      try {
        const { data: mainProduct, error: mainError } = await supabase
          .from("distribucionmedica_products")
          .select("*")
          .eq("id", id)
          .single();

        if (mainError) throw mainError;

        if (mainProduct) {
          setProduct(mainProduct);

          const { data: related, error: relatedError } = await supabase
            .from("distribucionmedica_products")
            .select("*")
            .eq("category", mainProduct.category)
            .neq("id", id)
            .limit(4);

          if (relatedError) throw relatedError;
          setRelatedProducts(related || []);
        } else {
          setError("Producto no encontrado");
        }
      } catch (err: any) {
        console.error("Error fetching product:", err);
        setError(err.message || "Error al cargar el producto");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  return { product, relatedProducts, isLoading, error };
}