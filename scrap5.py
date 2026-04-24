import json

def generar_sql_final(archivo_master='productos_final_master.json', archivo_sql='importar_supabase.sql'):
    # Diccionario local de categorías para inyectarlas durante la generación
    categorizacion = {
        "apnealink-air": "Diagnóstico del Sueño", "airsense-10-cpap-con-mascarilla-p10-dos-unidades-de-cada-una": "Terapia de Sueño",
        "adaptador-para-filtro-espirometria": "Accesorios Médicos", "aircurve-10-v-auto": "Terapia de Sueño",
        "almohada-cpapmax-2-0": "Accesorios de Sueño", "analizador-de-quimica-clinica": "Equipos de Laboratorio",
        "b8-incubadora-neonatal": "Cuidado Neonatal", "bomba-de-infusion-comen-m260": "Cuidado Crítico",
        "bomba-de-infusion-comen-me660": "Cuidado Crítico", "bomba-de-infusion-m500": "Cuidado Crítico",
        "boquillas-pediatricas": "Consumibles", "canula-nasal-apnealink": "Accesorios de Sueño",
        "circuito-para-airmini": "Terapia de Sueño", "colposcopio-ci-100f": "Ginecología",
        "compresor-de-aire-comen-vs-20": "Equipos Hospitalarios", "concentrador-everflo-con-opi-y-pulso-oximetro-onyx-vantage-9590": "Oxigenoterapia",
        "concentrador-inogen-at-home": "Oxigenoterapia", "filtro-para-espirometria": "Consumibles",
        "filtros-astral": "Consumibles", "filtros-s8": "Consumibles", "gecko-pad": "Accesorios de Sueño",
        "humidificador-activo": "Cuidado Respiratorio", "humidificador-respiratorio-comen-nf5": "Cuidado Respiratorio",
        "humidificador-termico-tr917-evolution-servocontrolado": "Cuidado Respiratorio",
        "humidificador-tr-517-para-ventiladores-5-niveles-de-temperatura": "Cuidado Respiratorio",
        "humidx": "Accesorios de Sueño", "kit-remplazo-de-accesorios-resmed-s10": "Accesorios de Sueño",
        "laser-co2-40w": "Láser Médico", "laser-diodo-quattro": "Láser Médico", "laser-lipo": "Láser Médico",
        "laser-vein": "Láser Médico", "maquina-de-anestesia-comen-ax400": "Quirófano",
        "mascarilla-airfit-f30i": "Terapia de Sueño", "mascarilla-airtouch-n20": "Terapia de Sueño",
        "mascarilla-kn95": "Protección Personal", "oximetro-p-dedo-c-3-modos-de-visualizacion": "Monitoreo",
        "pila-inogen-g3-4-5-horas": "Oxigenoterapia", "resucitador-manual-1-pza": "Emergencias",
        "rollos-de-impresion-para-microlab": "Consumibles", "sistema-de-control-de-temperatura-p3": "Cuidado Neonatal",
        "sistema-de-reanimacion-con-pieza-en-t-bq70": "Cuidado Neonatal", "sujetador-de-mandibula": "Accesorios de Sueño",
        "termometro-infrarrojo-yuwell-yt-1": "Monitoreo", "tridiodo-laser-mini": "Láser Médico",
        "vaso-borboteador-para-concentrador": "Oxigenoterapia", "ventilador-neonatal": "Cuidado Neonatal",
        "ventilador-nv70": "Cuidado Crítico", "videolaringoscopio-comen-cvl-5": "Quirófano",
        "virtuclean-2-0": "Desinfección"
    }

    def sql_esc(text):
        if text is None: return "''"
        return "'" + str(text).replace("'", "''") + "'"

    try:
        with open(archivo_master, 'r', encoding='utf-8') as f:
            productos = json.load(f)
        
        sql_lines = []

        for p in productos:
            slug = p.get('slug', '')
            categoria = categorizacion.get(slug, 'General')
            
            # Datos principales
            name = p.get('nombre', 'Sin Nombre')
            price = p.get('price', 0)
            desc_es = p.get('descripcion', '')
            desc_es_corta = (desc_es[:147] + '...') if len(desc_es) > 150 else desc_es
            image = p.get('imagen', '')
            
            # Datos inglés
            name_en = p.get('nombre_english', 'Medical Product')
            desc_en = p.get('description_english', 'Medical description')
            desc_en_corta = (desc_en[:147] + '...') if len(desc_en) > 150 else desc_en

            # Formateo SQL
            images_pg = f"ARRAY[{sql_esc(image)}]" if image else "'{}'::text[]"

            query = (
                f"INSERT INTO public.distribucionmedica_products "
                f"(name, category, price, \"originalPrice\", description, \"longDescription\", image, images, \"inStock\", sku, rating, reviews, specifications, name_english, description_english, \"longDescription_english\") "
                f"VALUES ("
                f"{sql_esc(name)}, {sql_esc(categoria)}, {price}, {price}, "
                f"{sql_esc(desc_es_corta)}, {sql_esc(desc_es)}, {sql_esc(image)}, {images_pg}, "
                f"true, {sql_esc(slug)}, 0, 0, '[]'::jsonb, "
                f"{sql_esc(name_en)}, {sql_esc(desc_en_corta)}, {sql_esc(desc_en)});"
            )
            sql_lines.append(query)

        with open(archivo_sql, 'w', encoding='utf-8') as f:
            f.write("\n".join(sql_lines))
            
        print(f"✅ SQL generado exitosamente: {len(sql_lines)} productos con categorías.")

    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    generar_sql_final()