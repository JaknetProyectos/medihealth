import json

def unir_traducciones(archivo_procesados, lista_traducciones, archivo_salida):
    try:
        # 1. Cargar el JSON original con todos los datos técnicos y precios
        with open(archivo_procesados, 'r', encoding='utf-8') as f:
            productos_base = json.load(f)
        
        # 2. Crear un diccionario de búsqueda rápida para las traducciones usando el slug
        # Esto hace que el proceso sea mucho más eficiente que buscar uno por uno
        dict_traducciones = {t['slug']: t for t in lista_traducciones}
        
        conteo_exitos = 0
        
        # 3. Recorrer los productos base e inyectar la traducción
        for producto in productos_base:
            slug = producto.get('slug')
            if slug in dict_traducciones:
                traduccion = dict_traducciones[slug]
                producto['nombre_english'] = traduccion.get('nombre_english', "")
                producto['description_english'] = traduccion.get('description_english', "")
                conteo_exitos += 1
            else:
                print(f"⚠️ Advertencia: No se encontró traducción para el slug: {slug}")

        # 4. Guardar el resultado final
        with open(archivo_salida, 'w', encoding='utf-8') as f:
            json.dump(productos_base, f, indent=4, ensure_ascii=False)
            
        print(f"\n✅ Proceso completado con éxito.")
        print(f"📊 Productos actualizados con traducción: {conteo_exitos} de {len(productos_base)}")
        print(f"📂 Archivo final guardado como: {archivo_salida}")

    except Exception as e:
        print(f"❌ Error al unir los archivos: {e}")

# --- DATOS DE ENTRADA ---

# Aquí pegas la lista de traducciones que te proporcioné anteriormente
traducciones_generadas = [
    {
        "slug": "apnealink-air",
        "nombre_english": "ApneaLink Air",
        "description_english": "ApneaLink Air Portable diagnostic device used in sleep studies to evaluate respiratory disorders such as obstructive sleep apnea (OSA) and hypopnea. This system allows for the monitoring of sleep patterns and evaluation of respiratory disorders during the night, providing crucial data for medical diagnosis."
    },
    {
        "slug": "airsense-10-cpap-con-mascarilla-p10-dos-unidades-de-cada-una",
        "nombre_english": "AirSense 10 CPAP with P10 Mask Two Units of Each",
        "description_english": "Adjustable fixed pressure equipment from 4 to 20 cm H2O. It consists of two units of the AirSense 10 device and two units of the P10 mask, designed to offer a complete and effective solution for the treatment of sleep apnea."
    },
    {
        "slug": "adaptador-para-filtro-espirometria",
        "nombre_english": "Spirometry Filter Adapter",
        "description_english": "It is a device designed to connect bacterial and viral filters to spirometry equipment. These filters are essential to ensure the accuracy of measurements and to protect both the patient and the equipment from potential contaminants. These filters are crucial to avoid cross-contamination and protect both the patient and the medical equipment from inhaling microorganisms during respiratory tests."
    },
    {
        "slug": "aircurve-10-v-auto",
        "nombre_english": "AirCurve 10 V Auto",
        "description_english": "Positive airway pressure (CPAP) therapy device manufactured by ResMed. This device is designed to provide respiratory support in both controlled ventilation modes and automatic positive pressure modes, dynamically adapting to the patient's respiratory needs during sleep."
    },
    {
        "slug": "almohada-cpapmax-2-0",
        "nombre_english": "CPAPmax 2.0 Pillow",
        "description_english": "Pillow designed for people who use CPAP devices (continuous positive airway pressure) for the treatment of sleep apnea or other respiratory disorders during the night. These pillows are designed to offer comfort and support, taking into account the unique needs of those who use CPAP masks to treat sleep apnea and other respiratory disorders."
    },
    {
        "slug": "analizador-de-quimica-clinica",
        "nombre_english": "Clinical Chemistry Analyzer",
        "description_english": "Av Periférico Sur 4829, 2nd Floor, Col. Parque del Pedregal, Tlalpan, Mexico City, CP 14010."
    },
    {
        "slug": "b8-incubadora-neonatal",
        "nombre_english": "B8 Neonatal Incubator",
        "description_english": "12.1\" TFT touch screen. Temperature control (air/baby mode). One (1) temperature probe (skin temperature). Humidity control. Double-layered wall design. Dampening doors. Electronic bed lift. Electronic bed tilt. One (1) storage drawer. One (1) PU mattress, 396*622*20 mm. X-ray tray. Tray. C31 modular monitor (C31 configured separately in SAP. Specify in order). Printer for modular monitor."
    },
    {
        "slug": "bomba-de-infusion-comen-m260",
        "nombre_english": "Comen M260 Infusion Pump",
        "description_english": "Multiple operating modes: includes basic infusion modes, such as rate mode, time mode, and weight mode; advanced infusion modes, such as intermittent mode, ramp mode, sequence mode, micro mode, first dose mode (TIVA), dose-time mode, and additional display mode: night mode."
    },
    {
        "slug": "bomba-de-infusion-comen-me660",
        "nombre_english": "Comen ME660 Infusion Pump",
        "description_english": "Multiple working modes: Features basic infusion modes including rate mode, time mode, weight mode; advanced infusion modes such as drip mode, intermittent mode, ramp mode, sequence mode, micro mode, first dose mode (TIVA), dose-time mode, and additional display mode: night mode."
    },
    {
        "slug": "bomba-de-infusion-m500",
        "nombre_english": "M500 Infusion Pump",
        "description_english": "Two-channel cascade. 6.2-inch screen with 0 to 45-degree tilt, touch screen operation, numerical display, and the maximum single continuous infusion is 120 ml of drug solution. Multiple working modes: includes rate mode, time mode, weight mode, interval mode, trapezoid mode, sequential mode, ramp mode, micro mode, TIVA mode, first dose mode, and night mode. Pole clamp."
    },
    {
        "slug": "boquillas-pediatricas",
        "nombre_english": "Pediatric Mouthpieces",
        "description_english": "These are accessories used in spirometry to perform lung function tests in children and babies. These mouthpieces are specifically designed to adapt to the size and respiratory needs of pediatric patients, ensuring accurate and comfortable measurements during testing. These mouthpieces allow children to breathe comfortably and properly during lung function tests, which is crucial for obtaining accurate measurements."
    },
    {
        "slug": "canula-nasal-apnealink",
        "nombre_english": "ApneaLink Nasal Cannula",
        "description_english": "Accessory used with ResMed's ApneaLink system, a portable device for the detection and monitoring of sleep apnea. This nasal cannula is designed to provide an accurate measurement of airflow during sleep, facilitating the evaluation of sleep-disordered breathing in the home environment."
    },
    {
        "slug": "circuito-para-airmini",
        "nombre_english": "Circuit for AirMini",
        "description_english": "The AirMini is a CPAP (continuous positive airway pressure) device designed to help treat sleep apnea and other respiratory disorders during the night. The circuit for AirMini, which connects to the device."
    },
    {
        "slug": "colposcopio-ci-100f",
        "nombre_english": "Colposcope Ci 100F",
        "description_english": "LED life 50,000 hrs, 20% more lighting, whiter LED, halogen is yellower. 5 magnifications. Pantographic arm, Ball bearing system, 10X vision eyepieces, and 25mm wide angle."
    },
    {
        "slug": "compresor-de-aire-comen-vs-20",
        "nombre_english": "Comen Vs 20 Air Compressor",
        "description_english": "The pressure gauge is designed with a 60° tilt angle for easy viewing. Super quiet with a noise level as low as 45 dB."
    },
    {
        "slug": "concentrador-everflo-con-opi-y-pulso-oximetro-onyx-vantage-9590",
        "nombre_english": "Everflo Concentrator with OPI and Onyx Vantage 9590 Pulse Oximeter",
        "description_english": "Designed for use at home and in clinical settings. It is a set of medical devices designed to provide oxygen therapy efficiently and accurately, along with the ability to reliably monitor blood oxygen saturation and pulse rate."
    },
    {
        "slug": "concentrador-inogen-at-home",
        "nombre_english": "Inogen At Home Concentrator",
        "description_english": "With its compact and efficient design, it provides high-performance oxygen flow while saving energy, ideal for patients requiring long-term oxygen therapy. This concentrator is known for its energy efficiency, compact design, and ease of use, making it ideal for daily use at home."
    },
    {
        "slug": "filtro-para-espirometria",
        "nombre_english": "Spirometry Filter",
        "description_english": "It is an essential component used in spirometry equipment to protect both the patient and the device from inhaling particles and microorganisms during respiratory tests. These filters fulfill several key functions to ensure measurement accuracy and maintain a safe and clean clinical environment."
    },
    {
        "slug": "filtros-astral",
        "nombre_english": "Astral Filters",
        "description_english": "These filters are designed to trap particles such as dust, pollen, bacteria, and viruses, helping to maintain a clean and safe respiratory environment. They are essential accessories for ResMed's Astral ventilators, designed to ensure a clean and safe air supply to patients using these respiratory support devices. These filters help protect both the patient and the device from particles and contaminants present in the air."
    },
    {
        "slug": "filtros-s8",
        "nombre_english": "S8 Filters",
        "description_english": "These filters play an important role in cleaning and purifying the air that circulates within the CPAP device. These filters play a crucial role in purifying the air that enters the device, protecting both the machine and the user from inhaling dust particles and other contaminants present in the environment."
    },
    {
        "slug": "gecko-pad",
        "nombre_english": "Gecko Pad",
        "description_english": "It is an accessory designed to improve the comfort and sealing of nasal masks in CPAP therapy devices. This product, manufactured by ResMed, is specifically designed for use with ResMed Mirage™ series nasal and oronasal masks, including models such as the Mirage Activa™ LT and the Mirage Quattro™."
    },
    {
        "slug": "humidificador-activo",
        "nombre_english": "Active Humidifier",
        "description_english": "Neptune brand. Device designed to maintain an optimal humidity level in the air, improving environmental quality in indoor spaces. This humidifier is especially useful for people suffering from dry airways, dry skin, or those looking to improve the general comfort of their environment."
    },
    {
        "slug": "humidificador-respiratorio-comen-nf5",
        "nombre_english": "Comen NF5 Respiratory Humidifier",
        "description_english": "Electronic air and oxygen mixer, rapid oxygen ventilation function, timer function."
    },
    {
        "slug": "humidificador-termico-tr917-evolution-servocontrolado",
        "nombre_english": "TR917 Evolution Servo-Controlled Thermal Humidifier",
        "description_english": "With state-of-the-art features, the TR917 Evolution is ideal for intensive care units and other critical applications where precise humidity is essential for patient comfort and recovery. It is an advanced device designed to provide precise control of humidity in specific environments. This type of humidifier is ideal for applications in the medical field, laboratories, and other environments where exact regulation of humidity is required."
    },
    {
        "slug": "humidificador-tr-517-para-ventiladores-5-niveles-de-temperatura",
        "nombre_english": "TR 517 Humidifier for Ventilators with 5 Temperature Levels",
        "description_english": "Offers five adjustable temperature levels, ensuring optimal and comfortable humidification for patients in critical settings. Ideal for intensive care units and other medical scenarios, the TR-517 ensures precise and constant humidification."
    },
    {
        "slug": "humidx",
        "nombre_english": "HumidX",
        "description_english": "HumidX is a component designed specifically for ResMed CPAP therapy devices, such as the AirMini, which offers integrated humidification to improve respiratory comfort during sleep. This small heat and moisture exchanger fits directly inside the mask connector, offering significant benefits for CPAP users, especially in conditions of baja ambient humidity."
    },
    {
        "slug": "kit-remplazo-de-accesorios-resmed-s10",
        "nombre_english": "ResMed S10 Accessory Replacement Kit",
        "description_english": "This kit includes a variety of essential accessories that wear out over time or need to be replaced periodically to ensure optimal operation of the CPAP equipment, designed for ResMed AirSense 10 and AirCurve 10 series devices, which are positive airway pressure therapy machines (CPAP and BiPAP)."
    },
    {
        "slug": "laser-co2-40w",
        "nombre_english": "CO2 Laser 40W",
        "description_english": "Av Periférico Sur 4829, 2nd Floor, Col. Parque del Pedregal, Tlalpan, Mexico City, CP 14010."
    },
    {
        "slug": "laser-diodo-quattro",
        "nombre_english": "Quattro Diode Laser",
        "description_english": "100 million shots, 755 nm-808 nm-1064 nm, American Laser Bar, all skin types, all hair types, fast treatment, 10 shots/s, 1200W, easy use."
    },
    {
        "slug": "laser-lipo",
        "nombre_english": "Lipo Laser",
        "description_english": "Av Periférico Sur 4829, 2nd Floor, Col. Parque del Pedregal, Tlalpan, Mexico City, CP 14010."
    },
    {
        "slug": "laser-vein",
        "nombre_english": "Vein Laser",
        "description_english": "Av Periférico Sur 4829, 2nd Floor, Col. Parque del Pedregal, Tlalpan, Mexico City, CP 14010."
    },
    {
        "slug": "maquina-de-anestesia-comen-ax400",
        "nombre_english": "Comen AX400 Anesthesia Machine",
        "description_english": "Touch control screen design, simple user interface for quick operation."
    },
    {
        "slug": "mascarilla-airfit-f30i",
        "nombre_english": "AirFit F30i Mask",
        "description_english": "Full face mask designed for use with positive airway pressure (CPAP) therapy devices, ideal for the treatment of sleep apnea. This mask offers an innovative design that provides comfort and freedom of movement."
    },
    {
        "slug": "mascarilla-airtouch-n20",
        "nombre_english": "AirTouch N20 Mask",
        "description_english": "Its design includes an UltraSoft™ memory foam cushion, which perfectly adapts to facial contours, minimizing marks and providing a pleasant wearing experience."
    },
    {
        "slug": "mascarilla-kn95",
        "nombre_english": "KN95 Mask",
        "description_english": "Facial filtering mask that meets particle filtration standards established by China, similar to N95 standards in the United States. They are designed to offer effective protection against airborne particles, including aerosols and droplets that may contain viruses and other pathogens."
    },
    {
        "slug": "oximetro-p-dedo-c-3-modos-de-visualizacion",
        "nombre_english": "Finger Oximeter with 3 Display Modes",
        "description_english": "Anti-scratch screen with advanced mirror-type design, advanced SpO2 technology with PI (perfusion index) reading, 6 display modes for SpO2 values, PI, HR (heart rate), pulse wave, graphic bar, friendly menu and commands, brightness adjustment and memories, anti-interference source system, low perfusion 0.3%. Low energy consumption, auto-off function, real-time pulse sound."
    },
    {
        "slug": "pila-inogen-g3-4-5-horas",
        "nombre_english": "Inogen G3 Battery 4.5 Hours",
        "description_english": "This battery provides up to 4.5 hours of continuous use, offering users greater freedom and mobility without worrying about the need to recharge frequently. It is a replacement or additional battery for the Inogen One G3 portable oxygen concentrator, designed to provide portable power and allow continuous use of the device for extended periods without needing a connection to a fixed power source."
    },
    {
        "slug": "resucitador-manual-1-pza",
        "nombre_english": "Manual Resuscitator 1 Pc",
        "description_english": "Manual resuscitator with higher levels of oxygen supply and pre-installed components in quick-opening packaging. Provides fast and effective care in the most difficult situations. BRAND: flexicare."
    },
    {
        "slug": "rollos-de-impresion-para-microlab",
        "nombre_english": "MicroLab Printing Rolls",
        "description_english": "These printing rolls are specifically designed to print the results of tests performed with the MicroLab in the form of charts and numerical data. These rolls are essential for recording and documenting the data obtained during lung function tests and other respiratory analyses."
    },
    {
        "slug": "sistema-de-control-de-temperatura-p3",
        "nombre_english": "P3 Temperature Control System",
        "description_english": "Rapid cooling using cooling blankets to reach a core body temperature of 33°C to 34°C within 2 hours. Maintenance: Maintains the core body temperature of newborns at 33.5°C to 34°C for 72 hours. Reheating: Recovers the core body temperature of newborns to 37°C at 0.5°C / 2 hours with maintenance of normothermia."
    },
    {
        "slug": "sistema-de-reanimacion-con-pieza-en-t-bq70",
        "nombre_english": "T-Piece Resuscitation System BQ70",
        "description_english": "Air and oxygen mixture, negative pressure suction, open pressure control, Resuscitation, oxygen therapy, airway pressure monitoring, maximum pressure control, negative pressure monitoring, mechanical alarm."
    },
    {
        "slug": "sujetador-de-mandibula",
        "nombre_english": "Jaw Strap",
        "description_english": "It is designed to hold the jaw in a specific position during sleep, which helps keep the upper airways open and prevent the obstruction that can cause apnea or snoring. These straps are intended to promote better breathing by keeping the airway open and reducing obstruction during the night."
    },
    {
        "slug": "termometro-infrarrojo-yuwell-yt-1",
        "nombre_english": "Yuwell YT-1 Infrared Thermometer",
        "description_english": "Non-contact temperature measurement device, designed to provide fast and accurate body temperature readings. These types of thermometers are ideal for domestic and professional use, especially in environments where temperature measurement is required quickly and without direct contact with the skin."
    },
    {
        "slug": "tridiodo-laser-mini",
        "nombre_english": "Tridiode Laser Mini",
        "description_english": "American Laser Bar, all skin types, all hair types, fast treatment, 10 shots/s, 1200W, easy use."
    },
    {
        "slug": "vaso-borboteador-para-concentrador",
        "nombre_english": "Concentrator Bubble Humidifier Jar",
        "description_english": "Component used in some oxygen supply systems, such as oxygen concentrators, to humidify and filter the oxygen supplied to the patient. This device is used to humidify the oxygen before it is delivered to the patient, ensuring that the inhaled air is adequately humidified and more comfortable for the lungs and airways."
    },
    {
        "slug": "ventilador-neonatal",
        "nombre_english": "Neonatal Ventilator",
        "description_english": "Av Periférico Sur 4829, 2nd Floor, Col. Parque del Pedregal, Tlalpan, Mexico City, CP 14010."
    },
    {
        "slug": "ventilador-nv70",
        "nombre_english": "NV70 Ventilator",
        "description_english": "Respiratory tools: Electronic nebulization port, inspiration and expiration hold, manual breathing, high-flow O2 therapy, pneumatic nebulization, intelligent synchronization technology, C-Free, rampa, oxygen flush."
    },
    {
        "slug": "videolaringoscopio-comen-cvl-5",
        "nombre_english": "Comen CVL 5 Video Laryngoscope",
        "description_english": "Av Periférico Sur 4829, 2nd Floor, Col. Parque del Pedregal, Tlalpan, Mexico City, CP 14010."
    },
    {
        "slug": "virtuclean-2-0",
        "nombre_english": "VirtuCLEAN 2.0",
        "description_english": "VirtuCLEAN 2.0 Automatic CPAP cleaning device designed to facilitate the cleaning and disinfection process of sleep apnea therapy equipment, such as masks, tubes, and humidifiers. It offers a convenient and effective solution for keeping these devices free of germs and bacteria, thus promoting a more hygienic and safer therapy."
    }
]

# Ejecución del script
unir_traducciones('productos_procesados.json', traducciones_generadas, 'productos_final_master.json')