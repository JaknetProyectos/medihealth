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
                <p><br />Con fundamento en los artículos 18 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares hacemos de su conocimiento que MEDECH SUMINISTROS, S.A. DE C.V. (en adelante DISTRIBUCIÓN MEDICA) con domicilio en Av. Ejército Nacional 453, Colonia Granada, Alcaldía Miguel Hidalgo, CDMX, CP. 11520, es el responsable del tratamiento de los datos personales que nos proporcione.<br />Recopilamos sus datos personales con el fin de llevar a cabo diversas actividades, entre las que se incluyen proporcionar los productos que ha contratado, atender sus consultas y ofrecer información sobre nuestros servicios, mantener registros para futuras transacciones, gestionar aspectos financieros como la facturación y el cobro.<br />Además, utilizamos su información personal para mejorar su experiencia con nosotros, lo que implica evaluar la calidad de nuestro servicio, informarle sobre promociones y nuevos productos relacionados con los que ya ha adquirido, llevar a cabo análisis de hábitos de consumo, realizar evaluaciones periódicas de nuestros productos para garantizar su calidad, y en general, cumplir con nuestras obligaciones hacia usted.<br /><strong>Datos personales recabados</strong><br />Con el propósito de llevar a cabo las acciones mencionadas anteriormente, se podría requerir la siguiente información personal:  </p>
                <ul>
                    <li>Datos de contacto: Nombre, dirección de correo electrónico, número de teléfono móvil, perfiles en redes sociales y dirección física.  </li>
                    <li>Identificación oficial: Documentos como credencial para votar, pasaporte o licencia de conducir.  </li>
                    <li>Detalles financieros (métodos de pago): Información asociada a tarjetas de crédito o débito.  </li>
                    <li>Información de facturación: Registro Federal de Contribuyentes (RFC), razón social y dirección fiscal.<br /><strong>Transferencia de datos personales</strong><br />Queremos destacar que no se efectuarán transferencias de datos que requieran su consentimiento, a menos que se trate de aquellas indispensables para cumplir con solicitudes de información de una autoridad competente, debidamente justificadas y fundamentadas.<br /><strong>Derechos ARCO</strong><br />Queremos hacer hincapié en que usted tiene derecho a acceder, corregir y cancelar sus datos personales, así como a oponerse al tratamiento de los mismos o a renovar el consentimiento que nos haya otorgado para dicho fin. Para ejercer estos derechos, es necesario que envíe una solicitud conforme a los términos estipulados por la ley en su Artículo 29, ya sea por correo electrónico a: contacto@distribucionmedica.com, o en su defecto acudir a nuestras oficinas ubicadas en Av. Ejército Nacional 453, Colonia Granada, Alcaldía Miguel Hidalgo, CDMX, CP. 11520<br /><strong>Seguridad de los datos</strong><br />Se han implementado medidas de seguridad físicas, electrónicas y administrativas con el fin de resguardar sus datos personales contra accesos no autorizados, pérdida, uso indebido o divulgación.<br />Nos adherimos a los estándares ampliamente reconocidos por la industria para salvaguardar su información personal. Por ejemplo, al ingresar información delicada (como el número de su tarjeta de crédito) en nuestros formularios de registro o pedido, encriptamos dicha información.<br />Es importante tener en cuenta que ningún método de transmisión por Internet o almacenamiento electrónico es completamente infalible. Por consiguiente, a pesar de nuestros esfuerzos por proteger su información personal, no podemos garantizar su seguridad absoluta.<br />Si utiliza una contraseña para proteger su cuenta e información personal, es su responsabilidad mantener la confidencialidad de dicha contraseña.<br /><strong>Uso de cookies y otras tecnologías</strong><br />En DISTRIBUCIÓN MEDICA utilizamos “cookies” para facilitar su inicio de sesión en nuestro sitio web y para mejorar su experiencia en línea de manera personalizada. Una cookie es un pequeño archivo de texto que se almacena en su disco duro o dispositivo y que contiene información, incluyendo datos personales, que puede ser leída por un servidor web en el dominio que emitió la cookie.<br />Las cookies proporcionan varios beneficios, entre ellos:  </li>
                    <li>Identificación de usuarios registrados al retornar al sitio para acceder a resultados de búsqueda anteriores, cajas de luz, carritos de compra y facturas anteriores.  </li>
                    <li>Ahorro de tiempo al evitar la necesidad de ingresar repetidamente la misma información.  </li>
                    <li>Entrega de contenido personalizado, como resultados de búsqueda y publicidad dirigida.  </li>
                    <li>Mejora de la seguridad al verificar datos de acceso y prevenir fraudes.  </li>
                    <li>Recordatorio de preferencias de uso del sitio.  </li>
                    <li>Identificación de clientes específicos para ofrecer asistencia en tiempo real a través de nuestro servicio de atención al cliente en línea.<br />Nuestro objetivo es hacer que su experiencia en nuestro sitio sea fácil de usar y relevante.<br />Para lograr estos objetivos, en DISTRIBUCIÓN MEDICA colaboramos con socios y terceros que utilizan cookies en nuestro sitio con el fin de:  </li>
                    <li>Medir y analizar el uso general y el volumen estadístico de información de nuestros usuarios en el sitio web, lo cual incluye la actividad del navegador, la ruta de navegación de los usuarios y la hora de acceso al sitio.  </li>
                    <li>Recordar búsquedas previas de productos de nuestros usuarios y mostrarles contenido más relevante dinámicamente.  </li>
                    <li>Registrar el comportamiento de los usuarios en el sitio, como páginas visitadas, clics en correos electrónicos, formularios completados y productos adquiridos, con el fin de crear anuncios y comunicaciones personalizadas que satisfagan mejor sus necesidades.  </li>
                    <li>Evaluar el tráfico y el comportamiento de los usuarios en el sitio para recopilar informes de actividad para uso interno únicamente.  </li>
                    <li>Realizar investigaciones y diagnósticos para mejorar nuestros productos.  </li>
                    <li>Identificar a los usuarios que acceden al sitio a través de referencias de sitios web afiliados o enlaces patrocinados.<br />Es importante destacar que esta política de privacidad se aplica únicamente al uso de cookies por parte de DISTRIBUCIÓN MEDICA y no cubre el uso de cookies por parte de terceros.<br />Además de las cookies, también podemos utilizar otras tecnologías, como gifs de un solo píxel (también conocidos como web beacons), en nuestros sitios web y en los mensajes de correo electrónico o boletines promocionales. Estas imágenes electrónicas nos ayudan a determinar la cantidad de usuarios que han visitado ciertas páginas o han abierto mensajes o boletines. No utilizamos estos gifs de un solo píxel para recopilar información personal.<br />Usted tiene la opción de aceptar o rechazar las cookies. La mayoría de los navegadores aceptan cookies automáticamente, pero puede ajustar la configuración del navegador para rechazarlas. Sin embargo, tenga en cuenta que nuestro sitio está optimizado para funcionar con cookies habilitadas en su navegador de Internet. Si decide rechazar las cookies, es posible que no pueda iniciar sesión o utilizar otras funciones interactivas de nuestros sitios que dependen de las cookies, lo que podría afectar negativamente su experiencia en el sitio web.<br /><strong>Menores de edad</strong><br />No tenemos la intención de solicitar ni recopilar información personal de personas menores de 18 años. Si usted es menor de 18 años, le pedimos que no utilice ni proporcione información en este sitio web.<br />Para poder utilizar la Página Web el Usuario debe de tener por lo menos 18 años o estar accediendo bajo la supervisión de un padre o tutor legal.<br />Los padres o tutores de menores de edad serán responsables por los actos por ellos realizados según lo dispuesto por estos Términos y Condiciones de Uso, incluyendo los daños causados a terceros, acciones realizadas por ellos y que estén prohibidas por ley y por las disposiciones de este acuerdo, sin perjuicio de la responsabilidad del Usuario, siempre que éste no fuese padre o representante legal del menor infractor.<br /><strong>Enlaces (links)</strong><br />Es posible que incluyamos enlaces a sitios web, incluidos los de nuestros proveedores de contenido de terceros, los cuales pueden tener políticas y prácticas de privacidad diferentes a las que se describen aquí. No nos hacemos responsables de las políticas o prácticas de privacidad de dichos sitios vinculados, y le recomendamos que se familiarice con ellas antes de utilizarlos.<br /><strong>Cambios al Aviso de Privacidad</strong><br />Nos reservamos el derecho de modificar los términos de esta Política de Privacidad en cualquier momento. En caso de cambios, actualizaremos la fecha de “última actualización” en la parte superior de la política. Si hay modificaciones sustanciales en esta declaración o en la forma en que DISTRIBUCIÓN MEDICA utilizará su información personal, se lo notificaremos mediante un aviso destacado aquí, en nuestra página de inicio o a través de correo electrónico. Le recomendamos que revise esta política cada vez que visite uno de nuestros sitios.<br />Al adquirir productos de DISTRIBUCIÓN MEDICA, el Cliente acepta nuestra política de privacidad. Para cualquier pregunta o aclaración, no dude en ponerse en contacto con nosotros.<br /><strong>Contacto</strong><br />Domicilio: Av. Ejército Nacional 453, Colonia Granada, Alcaldía Miguel Hidalgo, CDMX, CP. 11520.<br />Correo electrónico: contacto@distribucionmedica.com<br />Fecha de última actualización: abril 2026  </li>
                </ul>

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
                <p><br />Pursuant to Articles 18 and 16 of the Federal Law on Protection of Personal Data Held by Private Parties, we inform you that MEDECH SUMINISTROS, S.A. DE C.V. (hereinafter DISTRIBUCIÓN MEDICA), with address at Av. Ejército Nacional 453, Colonia Granada, Miguel Hidalgo Borough, Mexico City, ZIP Code 11520, is responsible for the processing of the personal data you provide to us.<br />We collect your personal data in order to carry out various activities, including providing the products you have contracted, responding to your inquiries and offering information about our services, maintaining records for future transactions, and managing financial aspects such as invoicing and billing.<br />Additionally, we use your personal information to improve your experience with us, which includes evaluating the quality of our service, informing you about promotions and new products related to those you have already acquired, analyzing consumption habits, conducting periodic evaluations of our products to ensure their quality, and, in general, fulfilling our obligations to you.<br /><strong>Personal data collected</strong><br />In order to carry out the actions mentioned above, the following personal information may be required: </p>
                <ul>
                    <li>Contact information: Name, email address, mobile phone number, social media profiles, and physical address. </li>
                    <li>Official identification: Documents such as voter ID, passport, or driver’s license. </li>
                    <li>Financial details (payment methods): Information associated with credit or debit cards. </li>
                    <li>Billing information: Federal Taxpayer Registry (RFC), business name, and tax address.<br /><strong>Transfer of personal data</strong><br />We would like to emphasize that no data transfers requiring your consent will be carried out, except those necessary to comply with information requests from a competent authority, duly justified and grounded.<br /><strong>ARCO Rights</strong><br />We emphasize that you have the right to access, correct, and cancel your personal data, as well as to object to its processing or revoke the consent you have granted for such purposes. To exercise these rights, you must submit a request in accordance with the terms established by law in Article 29, either by email to: contacto@distribucionmedica.com, or alternatively by visiting our offices located at Av. Ejército Nacional 453, Colonia Granada, Miguel Hidalgo Borough, Mexico City, ZIP Code 11520<br /><strong>Data security</strong><br />Physical, electronic, and administrative security measures have been implemented to safeguard your personal data against unauthorized access, loss, misuse, or disclosure.<br />We adhere to widely recognized industry standards to protect your personal information. For example, when entering sensitive information (such as your credit card number) in our registration or order forms, we encrypt such information.<br />It is important to note that no method of transmission over the Internet or electronic storage is completely secure. Therefore, despite our efforts to protect your personal information, we cannot guarantee its absolute security.<br />If you use a password to protect your account and personal information, it is your responsibility to maintain the confidentiality of that password.<br /><strong>Use of cookies and other technologies</strong><br />At DISTRIBUCIÓN MEDICA we use “cookies” to facilitate your login to our website and to enhance your online experience in a personalized way. A cookie is a small text file that is stored on your hard drive or device and contains information, including personal data, that can be read by a web server in the domain that issued the cookie.<br />Cookies provide several benefits, including: </li>
                    <li>Identification of registered users when returning to the site to access previous search results, lightboxes, shopping carts, and previous invoices. </li>
                    <li>Time savings by avoiding the need to repeatedly enter the same information. </li>
                    <li>Delivery of personalized content, such as search results and targeted advertising. </li>
                    <li>Improved security by verifying login data and preventing fraud. </li>
                    <li>Remembering site usage preferences. </li>
                    <li>Identification of specific customers to offer real-time assistance through our online customer service.<br />Our goal is to make your experience on our site easy to use and relevant.<br />To achieve these objectives, at DISTRIBUCIÓN MEDICA we collaborate with partners and third parties who use cookies on our site in order to: </li>
                    <li>Measure and analyze overall usage and statistical volume of user information on the website, including browser activity, navigation paths, and access times. </li>
                    <li>Remember previous product searches and dynamically display more relevant content. </li>
                    <li>Track user behavior on the site, such as pages visited, email clicks, completed forms, and purchased products, in order to create personalized advertisements and communications that better meet your needs. </li>
                    <li>Evaluate traffic and user behavior on the site to compile activity reports for internal use only. </li>
                    <li>Conduct research and diagnostics to improve our products. </li>
                    <li>Identify users accessing the site through referrals from affiliate websites or sponsored links.<br />It is important to note that this privacy policy applies only to the use of cookies by DISTRIBUCIÓN MEDICA and does not cover the use of cookies by third parties.<br />In addition to cookies, we may also use other technologies, such as single-pixel gifs (also known as web beacons), on our websites and in email messages or promotional newsletters. These electronic images help us determine how many users have visited certain pages or opened messages or newsletters. We do not use these single-pixel gifs to collect personal information.<br />You have the option to accept or reject cookies. Most browsers automatically accept cookies, but you can modify your browser settings to reject them. However, please note that our site is optimized to function with cookies enabled in your internet browser. If you choose to reject cookies, you may not be able to log in or use other interactive features of our sites that depend on cookies, which may negatively affect your experience on the website.<br /><strong>Minors</strong><br />We do not intend to request or collect personal information from individuals under 18 years of age. If you are under 18, we ask that you do not use or provide information on this website.<br />To use the Website, the User must be at least 18 years old or accessing it under the supervision of a parent or legal guardian.<br />Parents or guardians of minors will be responsible for actions carried out by them as provided in these Terms and Conditions of Use, including damages caused to third parties, actions performed by them that are prohibited by law and by the provisions of this agreement, without prejudice to the responsibility of the User, provided that the User is not the parent or legal representative of the minor offender.<br /><strong>Links</strong><br />We may include links to websites, including those of our third-party content providers, which may have privacy policies and practices different from those described here. We are not responsible for the privacy policies or practices of such linked sites, and we recommend that you familiarize yourself with them before using them.<br /><strong>Changes to the Privacy Notice</strong><br />We reserve the right to modify the terms of this Privacy Policy at any time. In the event of changes, we will update the “last updated” date at the top of the policy. If there are material changes to this statement or to how DISTRIBUCIÓN MEDICA will use your personal information, we will notify you through a prominent notice here, on our homepage, or via email. We recommend that you review this policy each time you visit one of our sites.<br />By purchasing products from DISTRIBUCIÓN MEDICA, the Client accepts our privacy policy. For any questions or clarifications, please do not hesitate to contact us.<br /><strong>Contact</strong><br />Address: Av. Ejército Nacional 453, Colonia Granada, Miguel Hidalgo Borough, Mexico City, ZIP Code 11520.<br />Email: contacto@distribucionmedica.com<br />Last updated: April 2026 </li>
                </ul>


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