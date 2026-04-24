import json
import re

def transformar_json_productos(input_file, output_file):
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            productos = json.load(f)
        
        nuevos_productos = []

        for p in productos:
            # 1. Limpieza de Precio a Número
            # Eliminamos MXN, $, comas y espacios para quedarnos solo con el número
            precio_limpio = re.sub(r'[^\d.]', '', p.get('precio', '0'))
            try:
                price_numeric = float(precio_limpio)
            except ValueError:
                price_numeric = 0.0

            # 2. Extracción de Slug
            # Tomamos la parte después de /product/ y quitamos la barra final
            url_path = p.get('url', '').rstrip('/')
            slug = url_path.split('/')[-1]

            # 3. Selección de Imagen Principal
            # Tomamos solo la primera si existe, si no, un string vacío
            imagen_principal = p.get('imagenes', [None])[0] if p.get('imagenes') else ""

            # Construcción del nuevo objeto
            nuevo_p = {
                "nombre": p.get('nombre'),
                "precio_original": p.get('precio'), # Mantenemos el original por referencia
                "descripcion": p.get('descripcion'),
                "url": p.get('url'),
                "status": p.get('status'),
                # Nuevos Atributos
                "imagen": imagen_principal,
                "slug": slug,
                "nombre_english": "",
                "description_english": "",
                "price": price_numeric
            }
            
            nuevos_productos.append(nuevo_p)

        # Guardar el nuevo JSON
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(nuevos_productos, f, indent=4, ensure_ascii=False)
            
        print(f"✅ Transformación completada. Archivo guardado como: {output_file}")

    except Exception as e:
        print(f"❌ Error al transformar el JSON: {e}")

# --- EJECUCIÓN ---
# Asumiendo que tu archivo anterior se llama 'productos_extraidos.json'
transformar_json_productos('productos_extraidos.json', 'productos_procesados.json')