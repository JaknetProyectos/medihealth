import json

def generar_sql_desde_master(input_json='productos_final_master.json', output_sql='importar_supabase.sql'):
    def sql_esc(text):
        if text is None: return "''"
        return "'" + str(text).replace("'", "''") + "'"

    try:
        with open(input_json, 'r', encoding='utf-8') as f:
            productos = json.load(f)
        
        statements = []

        for p in productos:
            # Mapeo de campos según tu esquema de Supabase
            name = p.get('nombre', 'Sin Nombre')
            price = p.get('price', 0)
            desc_es_completa = p.get('descripcion', '')
            # Descripción corta para el campo 'description'
            desc_es_breve = (desc_es_completa[:147] + '...') if len(desc_es_completa) > 150 else desc_es_completa
            
            image = p.get('imagen', '')
            sku = p.get('slug', '')
            
            # Campos en inglés del master
            name_en = p.get('nombre_english', 'Product in English')
            desc_en_completa = p.get('description_english', 'Description in english for the world')
            desc_en_breve = (desc_en_completa[:147] + '...') if len(desc_en_completa) > 150 else desc_en_completa

            # Formateo de array de imágenes para PostgreSQL
            images_array = f"ARRAY[{sql_esc(image)}]" if image else "'{}'::text[]"

            sql = (
                f"INSERT INTO public.distribucionmedica_products "
                f"(name, category, price, \"originalPrice\", description, \"longDescription\", image, images, \"inStock\", sku, rating, reviews, specifications, name_english, description_english, \"longDescription_english\") "
                f"VALUES ("
                f"{sql_esc(name)}, 'Equipamiento Médico', {price}, {price}, "
                f"{sql_esc(desc_es_breve)}, {sql_esc(desc_es_completa)}, "
                f"{sql_esc(image)}, {images_array}, true, {sql_esc(sku)}, 0, 0, '[]'::jsonb, "
                f"{sql_esc(name_en)}, {sql_esc(desc_en_breve)}, {sql_esc(desc_en_completa)});"
            )
            statements.append(sql)

        with open(output_sql, 'w', encoding='utf-8') as f:
            f.write("\n".join(statements))
            
        print(f"✅ Archivo {output_sql} generado con {len(statements)} inserts.")

    except FileNotFoundError:
        print("❌ Error: No se encontró el archivo 'productos_final_master.json'.")
    except Exception as e:
        print(f"❌ Error inesperado: {e}")

if __name__ == "__main__":
    generar_sql_desde_master()