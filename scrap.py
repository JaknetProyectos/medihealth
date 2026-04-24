import requests
from bs4 import BeautifulSoup
import re
import json
import os
import time

def limpiar_slug_a_titulo(url):
    """Fallback: Extrae el slug de la URL y lo convierte en Formato De Título."""
    # Elimina la barra final si existe y toma el último segmento
    slug = url.rstrip('/').split('/')[-1]
    # Reemplaza guiones por espacios y pone mayúsculas iniciales
    return slug.replace('-', ' ').title()

links_raw = [
"https://prime-health.mx/product/adaptador-para-filtro-espirometria/",
"https://prime-health.mx/product/adaptador-para-filtro-espirometria/",
"https://prime-health.mx/product/adaptador-para-filtro-espirometria/",
"https://prime-health.mx/product/aircurve-10-v-auto/",
"https://prime-health.mx/product/aircurve-10-v-auto/",
"https://prime-health.mx/product/aircurve-10-v-auto/",
"https://prime-health.mx/product/airsense-10-cpap-con-mascarilla-p10-dos-unidades-de-cada-una/",
"https://prime-health.mx/product/airsense-10-cpap-con-mascarilla-p10-dos-unidades-de-cada-una/",
"https://prime-health.mx/product/airsense-10-cpap-con-mascarilla-p10-dos-unidades-de-cada-una/",
"https://prime-health.mx/product/almohada-cpapmax-2-0/",
"https://prime-health.mx/product/almohada-cpapmax-2-0/",
"https://prime-health.mx/product/almohada-cpapmax-2-0/",
"https://prime-health.mx/product/analizador-de-quimica-clinica/",
"https://prime-health.mx/product/analizador-de-quimica-clinica/",
"https://prime-health.mx/product/analizador-de-quimica-clinica/",
"https://prime-health.mx/product/apnealink-air/",
"https://prime-health.mx/product/apnealink-air/",
"https://prime-health.mx/product/apnealink-air/",
"https://prime-health.mx/product/b8-incubadora-neonatal/",
"https://prime-health.mx/product/b8-incubadora-neonatal/",
"https://prime-health.mx/product/b8-incubadora-neonatal/",
"https://prime-health.mx/product/bomba-de-infusion-comen-m260/",
"https://prime-health.mx/product/bomba-de-infusion-comen-m260/",
"https://prime-health.mx/product/bomba-de-infusion-comen-m260/",
"https://prime-health.mx/product/bomba-de-infusion-comen-me660/",
"https://prime-health.mx/product/bomba-de-infusion-comen-me660/",
"https://prime-health.mx/product/bomba-de-infusion-comen-me660/",
"https://prime-health.mx/product/bomba-de-infusion-m500/",
"https://prime-health.mx/product/bomba-de-infusion-m500/",
"https://prime-health.mx/product/bomba-de-infusion-m500/",
"https://prime-health.mx/product/boquillas-pediatricas/",
"https://prime-health.mx/product/boquillas-pediatricas/",
"https://prime-health.mx/product/boquillas-pediatricas/",
"https://prime-health.mx/product/canula-nasal-apnealink/",
"https://prime-health.mx/product/canula-nasal-apnealink/",
"https://prime-health.mx/product/canula-nasal-apnealink/",
"https://prime-health.mx/product/circuito-para-airmini/",
"https://prime-health.mx/product/circuito-para-airmini/",
"https://prime-health.mx/product/circuito-para-airmini/",
"https://prime-health.mx/product/colposcopio-ci-100f/",
"https://prime-health.mx/product/colposcopio-ci-100f/",
"https://prime-health.mx/product/colposcopio-ci-100f/",
"https://prime-health.mx/product/compresor-de-aire-comen-vs-20/",
"https://prime-health.mx/product/compresor-de-aire-comen-vs-20/",
"https://prime-health.mx/product/compresor-de-aire-comen-vs-20/",
"https://prime-health.mx/product/concentrador-everflo-con-opi-y-pulso-oximetro-onyx-vantage-9590/",
"https://prime-health.mx/product/concentrador-everflo-con-opi-y-pulso-oximetro-onyx-vantage-9590/",
"https://prime-health.mx/product/concentrador-everflo-con-opi-y-pulso-oximetro-onyx-vantage-9590/",
"https://prime-health.mx/product/concentrador-inogen-at-home/",
"https://prime-health.mx/product/concentrador-inogen-at-home/",
"https://prime-health.mx/product/concentrador-inogen-at-home/",
"https://prime-health.mx/product/filtro-para-espirometria/",
"https://prime-health.mx/product/filtro-para-espirometria/",
"https://prime-health.mx/product/filtro-para-espirometria/",
"https://prime-health.mx/product/filtros-astral/",
"https://prime-health.mx/product/filtros-astral/",
"https://prime-health.mx/product/filtros-astral/",
"https://prime-health.mx/product/filtros-s8/",
"https://prime-health.mx/product/filtros-s8/",
"https://prime-health.mx/product/filtros-s8/",
"https://prime-health.mx/product/gecko-pad/",
"https://prime-health.mx/product/gecko-pad/",
"https://prime-health.mx/product/gecko-pad/",
"https://prime-health.mx/product/humidificador-activo/",
"https://prime-health.mx/product/humidificador-activo/",
"https://prime-health.mx/product/humidificador-activo/",
"https://prime-health.mx/product/humidificador-respiratorio-comen-nf5/",
"https://prime-health.mx/product/humidificador-respiratorio-comen-nf5/",
"https://prime-health.mx/product/humidificador-respiratorio-comen-nf5/",
"https://prime-health.mx/product/humidificador-termico-tr917-evolution-servocontrolado/",
"https://prime-health.mx/product/humidificador-termico-tr917-evolution-servocontrolado/",
"https://prime-health.mx/product/humidificador-termico-tr917-evolution-servocontrolado/",
"https://prime-health.mx/product/humidificador-tr-517-para-ventiladores-5-niveles-de-temperatura/",
"https://prime-health.mx/product/humidificador-tr-517-para-ventiladores-5-niveles-de-temperatura/",
"https://prime-health.mx/product/humidificador-tr-517-para-ventiladores-5-niveles-de-temperatura/",
"https://prime-health.mx/product/humidx/",
"https://prime-health.mx/product/humidx/",
"https://prime-health.mx/product/humidx/",
"https://prime-health.mx/product/kit-remplazo-de-accesorios-resmed-s10/",
"https://prime-health.mx/product/kit-remplazo-de-accesorios-resmed-s10/",
"https://prime-health.mx/product/kit-remplazo-de-accesorios-resmed-s10/",
"https://prime-health.mx/product/laser-co2-40w/",
"https://prime-health.mx/product/laser-co2-40w/",
"https://prime-health.mx/product/laser-co2-40w/",
"https://prime-health.mx/product/laser-diodo-quattro/",
"https://prime-health.mx/product/laser-diodo-quattro/",
"https://prime-health.mx/product/laser-diodo-quattro/",
"https://prime-health.mx/product/laser-lipo/",
"https://prime-health.mx/product/laser-lipo/",
"https://prime-health.mx/product/laser-lipo/",
"https://prime-health.mx/product/laser-vein/",
"https://prime-health.mx/product/laser-vein/",
"https://prime-health.mx/product/laser-vein/",
"https://prime-health.mx/product/maquina-de-anestesia-comen-ax400/",
"https://prime-health.mx/product/maquina-de-anestesia-comen-ax400/",
"https://prime-health.mx/product/maquina-de-anestesia-comen-ax400/",
"https://prime-health.mx/product/mascarilla-airtouch-n20/",
"https://prime-health.mx/product/mascarilla-airtouch-n20/",
"https://prime-health.mx/product/mascarilla-airtouch-n20/",
"https://prime-health.mx/product/mascarilla-airfit-f30i/",
"https://prime-health.mx/product/mascarilla-airfit-f30i/",
"https://prime-health.mx/product/mascarilla-airfit-f30i/",
"https://prime-health.mx/product/mascarilla-kn95/",
"https://prime-health.mx/product/mascarilla-kn95/",
"https://prime-health.mx/product/mascarilla-kn95/",
"https://prime-health.mx/product/oximetro-p-dedo-c-3-modos-de-visualizacion/",
"https://prime-health.mx/product/oximetro-p-dedo-c-3-modos-de-visualizacion/",
"https://prime-health.mx/product/oximetro-p-dedo-c-3-modos-de-visualizacion/",
"https://prime-health.mx/product/pila-inogen-g3-4-5-horas/",
"https://prime-health.mx/product/pila-inogen-g3-4-5-horas/",
"https://prime-health.mx/product/pila-inogen-g3-4-5-horas/",
"https://prime-health.mx/product/resucitador-manual-1-pza/",
"https://prime-health.mx/product/resucitador-manual-1-pza/",
"https://prime-health.mx/product/resucitador-manual-1-pza/",
"https://prime-health.mx/product/rollos-de-impresion-para-microlab/",
"https://prime-health.mx/product/rollos-de-impresion-para-microlab/",
"https://prime-health.mx/product/rollos-de-impresion-para-microlab/",
"https://prime-health.mx/product/sistema-de-control-de-temperatura-p3/",
"https://prime-health.mx/product/sistema-de-control-de-temperatura-p3/",
"https://prime-health.mx/product/sistema-de-control-de-temperatura-p3/",
"https://prime-health.mx/product/sistema-de-reanimacion-con-pieza-en-t-bq70/",
"https://prime-health.mx/product/sistema-de-reanimacion-con-pieza-en-t-bq70/",
"https://prime-health.mx/product/sistema-de-reanimacion-con-pieza-en-t-bq70/",
"https://prime-health.mx/product/sujetador-de-mandibula/",
"https://prime-health.mx/product/sujetador-de-mandibula/",
"https://prime-health.mx/product/sujetador-de-mandibula/",
"https://prime-health.mx/product/termometro-infrarrojo-yuwell-yt-1/",
"https://prime-health.mx/product/termometro-infrarrojo-yuwell-yt-1/",
"https://prime-health.mx/product/termometro-infrarrojo-yuwell-yt-1/",
"https://prime-health.mx/product/tridiodo-laser-mini/",
"https://prime-health.mx/product/tridiodo-laser-mini/",
"https://prime-health.mx/product/tridiodo-laser-mini/",
"https://prime-health.mx/product/vaso-borboteador-para-concentrador/",
"https://prime-health.mx/product/vaso-borboteador-para-concentrador/",
"https://prime-health.mx/product/vaso-borboteador-para-concentrador/",
"https://prime-health.mx/product/ventilador-neonatal/",
"https://prime-health.mx/product/ventilador-neonatal/",
"https://prime-health.mx/product/ventilador-neonatal/",
"https://prime-health.mx/product/ventilador-nv70/",
"https://prime-health.mx/product/ventilador-nv70/",
"https://prime-health.mx/product/ventilador-nv70/",
"https://prime-health.mx/product/videolaringoscopio-comen-cvl-5/",
"https://prime-health.mx/product/videolaringoscopio-comen-cvl-5/",
"https://prime-health.mx/product/videolaringoscopio-comen-cvl-5/",
"https://prime-health.mx/product/virtuclean-2-0/",
"https://prime-health.mx/product/virtuclean-2-0/",
"https://prime-health.mx/product/virtuclean-2-0/"
]


def unificar_enlaces(lista_links):
    # Convertir a set para eliminar duplicados y luego a list para manejarlo
    enlaces_unicos = list(set(lista_links))
    
    # Opcional: Ordenarlos alfabéticamente
    enlaces_unicos.sort()
    
    return enlaces_unicos

# Ejecución
enlaces = unificar_enlaces(links_raw)


def extraer_datos_producto(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 1. Nombre con Fallback al Slug
        nombre_tag = soup.select_one('h1.sc_layouts_title_title')
        if nombre_tag and nombre_tag.get_text(strip=True):
            nombre = nombre_tag.get_text(strip=True)
        else:
            nombre = limpiar_slug_a_titulo(url)

        # 2. Descripción (el <p> más largo)
        todos_los_p = soup.find_all('p')
        descripcion = max([p.get_text(strip=True) for p in todos_los_p], key=len) if todos_los_p else ""

        # 3. Precio (Heurística)
        precio = "No encontrado"
        precio_tag = soup.find(class_="woocommerce-Price-amount")
        if precio_tag:
            precio = precio_tag.get_text(strip=True)
        else:
            match_precio = re.search(r'(?:MXN|MNX)?\s?\$?\s?(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)', soup.get_text())
            if match_precio:
                precio = match_precio.group(0).strip()

        # 4. Imágenes (Heurística de resolución alta)
        imagenes_finales = []
        img_tags = soup.find_all('img', class_=re.compile(r'attachment|size-large|wp-image-'))
        
        for img in img_tags:
            srcset = img.get('srcset')
            if srcset:
                url_img = [s.strip().split(' ')[0] for s in srcset.split(',')][-1]
            else:
                url_img = img.get('src')
            
            if url_img and url_img not in imagenes_finales:
                imagenes_finales.append(url_img)

        return {
            "nombre": nombre,
            "precio": precio,
            "descripcion": descripcion,
            "imagenes": imagenes_finales,
            "url": url,
            "status": "success"
        }

    except Exception as e:
        print(f"❌ Error procesando {url}: {e}")
        return None

def procesar_lista_productos(lista_urls, nombre_archivo="productos_extraidos.json"):
    # Cargar datos previos si el archivo ya existe para no perder nada
    if os.path.exists(nombre_archivo):
        with open(nombre_archivo, 'r', encoding='utf-8') as f:
            try:
                resultados = json.load(f)
            except:
                resultados = []
    else:
        resultados = []

    urls_ya_procesadas = {p['url'] for p in resultados}

    for i, url in enumerate(lista_urls):
        if url in urls_ya_procesadas:
            print(f"⏩ Saltando (ya procesado): {url}")
            continue

        print(f"🔎 [{i+1}/{len(lista_urls)}] Procesando: {url}")
        
        datos = extraer_datos_producto(url)
        
        if datos:
            resultados.append(datos)
            # Guardado incremental: escribimos en cada iteración
            with open(nombre_archivo, 'w', encoding='utf-8') as f:
                json.dump(resultados, f, indent=4, ensure_ascii=False)
            print(f"✅ Guardado: {datos['nombre']}")
        
        # Pequeña pausa para no saturar el servidor
        time.sleep(1)

    print(f"\n--- Proceso finalizado. Datos guardados en {nombre_archivo} ---")

# --- EJECUCIÓN ---
mis_enlaces = [
    "https://prime-health.mx/product/apnealink-air/",
    "https://prime-health.mx/product/airsense-10-cpap-con-mascarilla-p10-dos-unidades-de-cada-una/",
    # Agrega aquí todos los enlaces que quieras
]

procesar_lista_productos(enlaces)