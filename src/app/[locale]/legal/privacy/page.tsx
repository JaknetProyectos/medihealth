"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function LegalEs() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

            <section>
                <h1>Política de privacidad</h1>

                <p>
                    Con fundamento en los artículos 18 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares hacemos de su conocimiento que MEDECH SUMINISTROS, S.A. DE C.V. (en adelante DISTRIBUCIÓN MEDICA) con domicilio en Avenida Periférico Sur 4829, Interior 201 Piso 2, Colonia Parque Del Pedregal, Alcaldía Tlalpan, C.P. 14010, Ciudad De México, es el responsable del tratamiento de los datos personales que nos proporcione.
                </p>

                <p>
                    Recopilamos sus datos personales con el fin de llevar a cabo diversas actividades, entre las que se incluyen proporcionar los productos que ha contratado, atender sus consultas y ofrecer información sobre nuestros servicios, mantener registros para futuras transacciones, gestionar aspectos financieros como la facturación y el cobro.
                </p>

                <p>
                    Además, utilizamos su información personal para mejorar su experiencia con nosotros, lo que implica evaluar la calidad de nuestro servicio, informarle sobre promociones y nuevos productos relacionados con los que ya ha adquirido, llevar a cabo análisis de hábitos de consumo, realizar evaluaciones periódicas de nuestros productos para garantizar su calidad, y en general, cumplir con nuestras obligaciones hacia usted.
                </p>

                <h2>Datos personales recabados</h2>

                <p>
                    Con el propósito de llevar a cabo las acciones mencionadas anteriormente, se podría requerir la siguiente información personal:
                </p>

                <ul>
                    <li>Datos de contacto: Nombre, dirección de correo electrónico, número de teléfono móvil, perfiles en redes sociales y dirección física.</li>
                    <li>Identificación oficial: Documentos como credencial para votar, pasaporte o licencia de conducir.</li>
                    <li>Detalles financieros (métodos de pago): Información asociada a tarjetas de crédito o débito.</li>
                    <li>Información de facturación: Registro Federal de Contribuyentes (RFC), razón social y dirección fiscal.</li>
                </ul>

                <h2>Transferencia de datos personales</h2>

                <p>
                    Queremos destacar que no se efectuarán transferencias de datos que requieran su consentimiento, a menos que se trate de aquellas indispensables para cumplir con solicitudes de información de una autoridad competente, debidamente justificadas y fundamentadas.
                </p>

                <h2>Derechos ARCO</h2>

                <p>
                    Queremos hacer hincapié en que usted tiene derecho a acceder, corregir y cancelar sus datos personales, así como a oponerse al tratamiento de los mismos o a renovar el consentimiento que nos haya otorgado para dicho fin. Para ejercer estos derechos, es necesario que envíe una solicitud conforme a los términos estipulados por la ley en su Artículo 29, ya sea por correo electrónico a:
                    <a href="mailto:contacto@distribucionmedica.com">contacto@distribucionmedica.com</a>,
                    o en su defecto acudir a nuestras oficinas ubicadas en Avenida Periférico Sur 4829, Interior 201 Piso 2, Colonia Parque Del Pedregal, Alcaldía Tlalpan, C.P. 14010.
                </p>

                <h2>Seguridad de los datos</h2>

                <p>
                    Se han implementado medidas de seguridad físicas, electrónicas y administrativas con el fin de resguardar sus datos personales contra accesos no autorizados, pérdida, uso indebido o divulgación.
                </p>

                <p>
                    Nos adherimos a los estándares ampliamente reconocidos por la industria para salvaguardar su información personal. Por ejemplo, al ingresar información delicada (como el número de su tarjeta de crédito) en nuestros formularios de registro o pedido, encriptamos dicha información.
                </p>

                <p>
                    Es importante tener en cuenta que ningún método de transmisión por Internet o almacenamiento electrónico es completamente infalible. Por consiguiente, a pesar de nuestros esfuerzos por proteger su información personal, no podemos garantizar su seguridad absoluta.
                </p>

                <p>
                    Si utiliza una contraseña para proteger su cuenta e información personal, es su responsabilidad mantener la confidencialidad de dicha contraseña.
                </p>

                <h2>Uso de cookies y otras tecnologías</h2>

                <p>
                    En DISTRIBUCIÓN MEDICA utilizamos “cookies” para facilitar su inicio de sesión en nuestro sitio web y para mejorar su experiencia en línea de manera personalizada. Una cookie es un pequeño archivo de texto que se almacena en su disco duro o dispositivo y que contiene información, incluyendo datos personales, que puede ser leída por un servidor web en el dominio que emitió la cookie.
                </p>

                <p>
                    Las cookies proporcionan varios beneficios, entre ellos:
                </p>

                <ul>
                    <li>Identificación de usuarios registrados al retornar al sitio para acceder a resultados de búsqueda anteriores, cajas de luz, carritos de compra y facturas anteriores.</li>
                    <li>Ahorro de tiempo al evitar la necesidad de ingresar repetidamente la misma información.</li>
                    <li>Entrega de contenido personalizado, como resultados de búsqueda y publicidad dirigida.</li>
                    <li>Mejora de la seguridad al verificar datos de acceso y prevenir fraudes.</li>
                    <li>Recordatorio de preferencias de uso del sitio.</li>
                    <li>Identificación de clientes específicos para ofrecer asistencia en tiempo real a través de nuestro servicio de atención al cliente en línea.</li>
                </ul>

                <p>
                    Nuestro objetivo es hacer que su experiencia en nuestro sitio sea fácil de usar y relevante.
                </p>

                <p>
                    Para lograr estos objetivos, en DISTRIBUCIÓN MEDICA colaboramos con socios y terceros que utilizan cookies en nuestro sitio con el fin de:
                </p>

                <ul>
                    <li>Medir y analizar el uso general y el volumen estadístico de información de nuestros usuarios en el sitio web, lo cual incluye la actividad del navegador, la ruta de navegación de los usuarios y la hora de acceso al sitio.</li>
                    <li>Recordar búsquedas previas de productos de nuestros usuarios y mostrarles contenido más relevante dinámicamente.</li>
                    <li>Registrar el comportamiento de los usuarios en el sitio, como páginas visitadas, clics en correos electrónicos, formularios completados y productos adquiridos, con el fin de crear anuncios y comunicaciones personalizadas que satisfagan mejor sus necesidades.</li>
                    <li>Evaluar el tráfico y el comportamiento de los usuarios en el sitio para recopilar informes de actividad para uso interno únicamente.</li>
                    <li>Realizar investigaciones y diagnósticos para mejorar nuestros productos.</li>
                    <li>Identificar a los usuarios que acceden al sitio a través de referencias de sitios web afiliados o enlaces patrocinados.</li>
                </ul>

                <p>
                    Es importante destacar que esta política de privacidad se aplica únicamente al uso de cookies por parte de DISTRIBUCIÓN MEDICA y no cubre el uso de cookies por parte de terceros.
                </p>

                <p>
                    Además de las cookies, también podemos utilizar otras tecnologías, como gifs de un solo píxel (también conocidos como web beacons), en nuestros sitios web y en los mensajes de correo electrónico o boletines promocionales. Estas imágenes electrónicas nos ayudan a determinar la cantidad de usuarios que han visitado ciertas páginas o han abierto mensajes o boletines. No utilizamos estos gifs de un solo píxel para recopilar información personal.
                </p>

                <p>
                    Usted tiene la opción de aceptar o rechazar las cookies. La mayoría de los navegadores aceptan cookies automáticamente, pero puede ajustar la configuración del navegador para rechazarlas. Sin embargo, tenga en cuenta que nuestro sitio está optimizado para funcionar con cookies habilitadas en su navegador de Internet. Si decide rechazar las cookies, es posible que no pueda iniciar sesión o utilizar otras funciones interactivas de nuestros sitios que dependen de las cookies, lo que podría afectar negativamente su experiencia en el sitio web.
                </p>

                <h2>Menores de edad</h2>

                <p>
                    No tenemos la intención de solicitar ni recopilar información personal de personas menores de 18 años. Si usted es menor de 18 años, le pedimos que no utilice ni proporcione información en este sitio web.
                </p>

                <p>
                    Para poder utilizar la Página Web el Usuario debe de tener por lo menos 18 años o estar accediendo bajo la supervisión de un padre o tutor legal.
                </p>

                <p>
                    Los padres o tutores de menores de edad serán responsables por los actos por ellos realizados según lo dispuesto por estos Términos y Condiciones de Uso, incluyendo los daños causados a terceros, acciones realizadas por ellos y que estén prohibidas por ley y por las disposiciones de este acuerdo, sin perjuicio de la responsabilidad del Usuario, siempre que éste no fuese padre o representante legal del menor infractor.
                </p>

                <h2>Enlaces (links)</h2>

                <p>
                    Es posible que incluyamos enlaces a sitios web, incluidos los de nuestros proveedores de contenido de terceros, los cuales pueden tener políticas y prácticas de privacidad diferentes a las que se describen aquí. No nos hacemos responsables de las políticas o prácticas de privacidad de dichos sitios vinculados, y le recomendamos que se familiarice con ellas antes de utilizarlos.
                </p>

                <h2>Cambios al Aviso de Privacidad</h2>

                <p>
                    Nos reservamos el derecho de modificar los términos de esta Política de Privacidad en cualquier momento. En caso de cambios, actualizaremos la fecha de “última actualización” en la parte superior de la política. Si hay modificaciones sustanciales en esta declaración o en la forma en que DISTRIBUCIÓN MEDICA utilizará su información personal, se lo notificaremos mediante un aviso destacado aquí, en nuestra página de inicio o a través de correo electrónico. Le recomendamos que revise esta política cada vez que visite uno de nuestros sitios.
                </p>

                <p>
                    Al adquirir productos de DISTRIBUCIÓN MEDICA, el Cliente acepta nuestra política de privacidad. Para cualquier pregunta o aclaración, no dude en ponerse en contacto con nosotros.
                </p>

                <h2>Contacto</h2>

                <p>
                    <strong>Domicilio:</strong> Avenida Periférico Sur 4829, Interior 201 Piso 2, Colonia Parque Del Pedregal, Alcaldía Tlalpan, C.P. 14010.
                </p>

                <p>
                    <strong>Correo electrónico:</strong>
                    <a href="mailto:contacto@distribucionmedica.com">contacto@distribucionmedica.com</a>
                </p>

                <p>
                    <strong>Fecha de última actualización:</strong> abril 2026
                </p>


            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

            <section>


                <h1>Privacy Policy</h1>

                <p>
                    Pursuant to Articles 18 and 16 of the Federal Law on Protection of Personal Data Held by Private Parties, we hereby inform you that MEDECH SUMINISTROS, S.A. DE C.V. (hereinafter DISTRIBUCIÓN MEDICA), located at Avenida Periférico Sur 4829, Interior 201 Piso 2, Colonia Parque Del Pedregal, Alcaldía Tlalpan, C.P. 14010, Mexico City, is responsible for the processing of the personal data you provide to us.
                </p>

                <p>
                    We collect your personal data in order to carry out various activities, including providing the products you have contracted, responding to your inquiries and offering information about our services, maintaining records for future transactions, and managing financial matters such as billing and collection.
                </p>

                <p>
                    Additionally, we use your personal information to improve your experience with us, which includes evaluating the quality of our service, informing you about promotions and new products related to those you have already purchased, conducting consumer habit analyses, carrying out periodic evaluations of our products to ensure their quality, and in general, fulfilling our obligations toward you.
                </p>

                <h2>Personal Data Collected</h2>

                <p>
                    For the purpose of carrying out the actions mentioned above, the following personal information may be required:
                </p>

                <ul>
                    <li>Contact information: Name, email address, mobile phone number, social media profiles, and physical address.</li>
                    <li>Official identification: Documents such as voter ID, passport, or driver’s license.</li>
                    <li>Financial details (payment methods): Information associated with credit or debit cards.</li>
                    <li>Billing information: Federal Taxpayer Registry (RFC), business name, and tax address.</li>
                </ul>

                <h2>Transfer of Personal Data</h2>

                <p>
                    We would like to emphasize that no transfers of data requiring your consent will be carried out, except for those necessary to comply with requests for information from a competent authority, duly justified and legally supported.
                </p>

                <h2>ARCO Rights</h2>

                <p>
                    We would like to emphasize that you have the right to access, correct, and cancel your personal data, as well as to object to its processing or revoke the consent you have granted us for such purposes. To exercise these rights, it is necessary to submit a request in accordance with the terms established by law in Article 29, either by email to:
                    <a href="mailto:contacto@distribucionmedica.com">contacto@distribucionmedica.com</a>,
                    or by visiting our offices located at Avenida Periférico Sur 4829, Interior 201 Piso 2, Colonia Parque Del Pedregal, Alcaldía Tlalpan, C.P. 14010.
                </p>

                <h2>Data Security</h2>

                <p>
                    Physical, electronic, and administrative security measures have been implemented in order to protect your personal data against unauthorized access, loss, misuse, or disclosure.
                </p>

                <p>
                    We adhere to widely recognized industry standards to safeguard your personal information. For example, when entering sensitive information (such as your credit card number) into our registration or order forms, we encrypt such information.
                </p>

                <p>
                    It is important to note that no method of Internet transmission or electronic storage is completely infallible. Consequently, despite our efforts to protect your personal information, we cannot guarantee its absolute security.
                </p>

                <p>
                    If you use a password to protect your account and personal information, it is your responsibility to maintain the confidentiality of that password.
                </p>

                <h2>Use of Cookies and Other Technologies</h2>

                <p>
                    At DISTRIBUCIÓN MEDICA, we use “cookies” to facilitate your login to our website and to improve your online experience in a personalized manner. A cookie is a small text file stored on your hard drive or device that contains information, including personal data, which can be read by a web server in the domain that issued the cookie.
                </p>

                <p>
                    Cookies provide several benefits, including:
                </p>

                <ul>
                    <li>Identification of registered users upon returning to the site to access previous search results, lightboxes, shopping carts, and previous invoices.</li>
                    <li>Saving time by avoiding the need to repeatedly enter the same information.</li>
                    <li>Delivery of personalized content, such as search results and targeted advertising.</li>
                    <li>Improved security by verifying login information and preventing fraud.</li>
                    <li>Remembering site usage preferences.</li>
                    <li>Identification of specific customers to provide real-time assistance through our online customer service.</li>
                </ul>

                <p>
                    Our goal is to make your experience on our site user-friendly and relevant.
                </p>

                <p>
                    To achieve these goals, DISTRIBUCIÓN MEDICA collaborates with partners and third parties that use cookies on our site in order to:
                </p>

                <ul>
                    <li>Measure and analyze the general use and statistical volume of information from our users on the website, including browser activity, user navigation paths, and site access times.</li>
                    <li>Remember previous product searches from our users and dynamically display more relevant content.</li>
                    <li>Record user behavior on the site, such as pages visited, email clicks, completed forms, and purchased products, in order to create personalized advertisements and communications that better meet their needs.</li>
                    <li>Evaluate traffic and user behavior on the site to compile activity reports for internal use only.</li>
                    <li>Conduct research and diagnostics to improve our products.</li>
                    <li>Identify users who access the site through referrals from affiliate websites or sponsored links.</li>
                </ul>

                <p>
                    It is important to note that this privacy policy applies solely to the use of cookies by DISTRIBUCIÓN MEDICA and does not cover the use of cookies by third parties.
                </p>

                <p>
                    In addition to cookies, we may also use other technologies, such as single-pixel gifs (also known as web beacons), on our websites and in promotional email messages or newsletters. These electronic images help us determine the number of users who have visited certain pages or opened messages or newsletters. We do not use these single-pixel gifs to collect personal information.
                </p>

                <p>
                    You have the option to accept or reject cookies. Most browsers automatically accept cookies, but you may adjust your browser settings to reject them. However, please note that our site is optimized to function with cookies enabled in your Internet browser. If you choose to reject cookies, you may not be able to log in or use other interactive features of our sites that depend on cookies, which could negatively affect your experience on the website.
                </p>

                <h2>Minors</h2>

                <p>
                    We do not intend to request or collect personal information from individuals under 18 years of age. If you are under 18 years old, we ask that you do not use or provide information on this website.
                </p>

                <p>
                    In order to use the Website, the User must be at least 18 years old or be accessing it under the supervision of a parent or legal guardian.
                </p>

                <p>
                    Parents or guardians of minors shall be responsible for the acts carried out by them as provided in these Terms and Conditions of Use, including damages caused to third parties, actions carried out by them that are prohibited by law and by the provisions of this agreement, without prejudice to the responsibility of the User, provided that the latter is not the parent or legal representative of the minor offender.
                </p>

                <h2>Links</h2>

                <p>
                    We may include links to websites, including those of our third-party content providers, which may have privacy policies and practices different from those described herein. We are not responsible for the privacy policies or practices of such linked sites, and we recommend that you familiarize yourself with them before using them.
                </p>

                <h2>Changes to the Privacy Notice</h2>

                <p>
                    We reserve the right to modify the terms of this Privacy Policy at any time. In the event of changes, we will update the “last updated” date at the top of the policy. If there are substantial modifications to this statement or to the way DISTRIBUCIÓN MEDICA will use your personal information, we will notify you through a prominent notice here, on our homepage, or via email. We recommend that you review this policy each time you visit one of our sites.
                </p>

                <p>
                    By purchasing products from DISTRIBUCIÓN MEDICA, the Customer accepts our privacy policy. For any questions or clarifications, please do not hesitate to contact us.
                </p>

                <h2>Contact</h2>

                <p>
                    <strong>Address:</strong> Avenida Periférico Sur 4829, Interior 201 Piso 2, Colonia Parque Del Pedregal, Alcaldía Tlalpan, C.P. 14010.
                </p>

                <p>
                    <strong>Email:</strong>
                    <a href="mailto:contacto@distribucionmedica.com">contacto@distribucionmedica.com</a>
                </p>

                <p>
                    <strong>Last updated:</strong> April 2026
                </p>

            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}