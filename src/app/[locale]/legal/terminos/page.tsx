"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function LegalEs() {
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
                <h1>Términos y Condiciones</h1>
                <p><strong>Aceptación de los Términos</strong></p>
                <p>Los presentes términos y condiciones corresponden al sitio, propiedad de MEDECH SUMINISTROS, S.A. DE C.V. (en adelante PRIME HEALTH).</p>
                <p>Al acceder y utilizar nuestro sitio web para comprar suministros médicos, usted acepta cumplir con estos términos y condiciones, incluyendo aquellos términos y condiciones, y políticas adicionales a los que se hace referencia aquí.</p>
                <p>Estos términos de servicio se aplican a todos los usuarios del sitio, incluyendo navegadores, vendedores, clientes, comerciantes y contribuyentes de contenido.</p>
                <p>Las partes acuerdan que por “Usuario” se entenderá a cualquier persona de cualquier naturaleza que ingrese al sitio web de PRIME HEALTH y/o a cualquiera de las subpáginas que desplieguen su contenido y/o a la persona de cualquier naturaleza que se dé de alta y/o use cualquiera de los servicios que se ofrecen a través de dicha página.</p>
                <p>En caso de que el Usuario acceda, utilice y observe el Sitio, se considerará como una absoluta y expresa aceptación de los Términos y Condiciones de Uso aquí estipulados, los demás documentos incorporados a los mismos por referencia, así como a las leyes y reglamento aplicables de conformidad a la legislación vigente para el uso del Sitio Web.</p>
                <p>PRIME HEALTH no guardará una copia individualizada del presente convenio celebrado entre el Usuario y la Empresa, por lo que se le recomienda al Usuario que guarde una copia de los presentes Términos y Condiciones de Uso para su propio expediente.</p>
                <p>En caso de que el Usuario viole lo expresado en estos Términos y Condiciones de Uso, PRIME HEALTH podrá cancelar su uso, así como excluir al Usuario de futuras operaciones, y/o tomar la acción legal que juzgue conveniente para sus intereses.</p>
                <p>Si no está de acuerdo con alguna parte de estos términos, no utilice nuestro sitio web.</p>
                <p><strong>Uso del sitio web</strong></p>
                <p>El Usuario y PRIME HEALTH están de acuerdo en que:</p>
                <p>Para poder utilizar la Página Web el Usuario debe de tener por lo menos 18 años o estar accediendo bajo la supervisión de un padre o tutor legal.</p>
                <p>Los padres o tutores de menores de edad serán responsables por los actos por ellos realizados según lo dispuesto por estos Términos y Condiciones de Uso, incluyendo los daños causados a terceros, acciones realizadas por ellos y que estén prohibidas por ley y por las disposiciones de este acuerdo, sin perjuicio de la responsabilidad del Usuario, siempre que éste no fuese padre o representante legal del menor infractor.</p>
                <p>PRIME HEALTH concede una licencia no transferible y revocable para utilizar el Sitio Web, en virtud de los Términos y Condiciones de Uso descritos, con el propósito de la compra de artículos vendidos en la misma Página.</p>
                <p><strong>Productos y Precios</strong></p>
                <p>Nos esforzamos por mostrar con precisión los productos y sus precios en nuestro sitio web. Sin embargo, nos reservamos el derecho de corregir cualquier error en la información de precios o descripciones de productos.</p>
                <p>PRIME HEALTH proporcionará la información de precios más precisa para los Usuarios, sin embargo, aún pueden producirse ciertos errores, como los casos en que el precio de un artículo no se muestra correctamente en la Página Web. Como tal, la Empresa se reserva el derecho a denegar o cancelar cualquier orden.</p>
                <p>En el caso de que el precio de un artículo sea incorrecto, es posible que a discreción PRIME HEALTH se ponga en contacto con el Usuario para solicitar instrucciones o cancelar el pedido y le notificará de tal cancelación. Cabe mencionar que, PRIME HEALTH tendrá el derecho de cancelar tales pedidos, ya sea o no que el pedido haya sido confirmado y pago.</p>
                <p>La información dada sobre cada producto, así como las fotografías o vídeos relativos a los mismos y los nombres comerciales, marcas o signos distintivos de cualquier clase contenidos en el Sitio de PRIME HEALTH, son expuestos a modo exclusivamente orientativo.</p>
                <p>PRIME HEALTH no es responsable de ningún error o inexactitud en la información sobre producto.</p>
                <p><strong>Aceptación de pedidos</strong></p>
                <p>El Usuario debe de considerar que se dan caso en los cuales una orden no puede ser procesada por diversos motivos. En ese sentido, PRIME HEALTH se reserva el derecho a denegar o cancelar cualquier pedido por cualquier razón, en cualquier momento. Además, se tiene que tener claro, que se puede pedir al Usuario información adicional, inclusive antes de aceptar el pedido.</p>
                <p><strong>Pedidos y Pagos</strong></p>
                <p>Al realizar un pedido, usted se compromete a proporcionar información precisa y completa sobre su dirección de envío y pago.</p>
                <p>Los pedidos están sujetos a disponibilidad de stock. Nos reservamos el derecho de cancelar o rechazar cualquier pedido en cualquier momento.</p>
                <p><strong>Responsabilidad del usuario en relación con las transacciones</strong></p>
                <p>El Usuario asume la responsabilidad de todos los costes, tasas, impuestos y demandas que se derivaran del uso de este Sitio web. Los datos de acceso comunicados al Usuario para su perfil han sido concebidos exclusivamente para uso personal, y deberán tratarse con confidencialidad.</p>
                <p>Todas las transacciones realizadas mediante la cuenta de perfil serán imputadas al titular de la cuenta de perfil pertinente, y tendrán carácter vinculante.</p>
                <p>El Usuario se responsabiliza sin limitaciones de los daños directos e indirectos, así como los daños consecuentes, que pudiera ocasionar por negligencia grave o intención ilegal.</p>
                <p><strong>Propiedad Intelectual</strong></p>
                <p>Todos los derechos de propiedad intelectual, incluidos los derechos de autor y marcas comerciales, en nuestro sitio web y contenido pertenecen a nosotros o a nuestros licenciantes.</p>
                <p>Está prohibido el uso no autorizado de nuestro sitio web y contenido con fines comerciales o de otra índole.</p>
                <p>PRIME HEALTH reconoce ser la única propietaria de los derechos de propiedad intelectual, ya sean registrados o no registrados, incluyendo, pero no limitado a: proyectos, software, código fuente, gráficos, fotografías, videos, imágenes, músicas, sonido, textos, logos, marcas, y datos incluidos en la Página Web de PRIME HEALTH La totalidad del contenido de nuestra página también está protegido por derechos de autor como un trabajo colectivo bajo las leyes de derechos de autor en México y las convenciones internacionales. Todos los derechos reservados.</p>
                <p>Por lo anterior, el Usuario renuncia expresamente en este acto a llevar a cabo cualquier acción, demanda o reclamación en contra de PRIME HEALTH, sus afiliados o proveedores por cualquier actual o eventual violación de cualquier derecho de autor o propiedad intelectual derivado de la información, programas, aplicaciones, software, ideas y demás material que el propio Usuario envíe al sitio web de PRIME HEALTH.</p>
                <p><strong>Limitación de Responsabilidad</strong></p>
                <p>En la medida máxima permitida por la ley, no seremos responsables de daños directos, indirectos, incidentales, especiales, consecuentes o punitivos que surjan de su uso de nuestro sitio web o de los productos que adquiera a través de él.</p>
                <p><strong>Modificaciones de los Términos y Condiciones</strong></p>
                <p>PRIME HEALTH, así como el Usuario, reconocen que los Términos y Condiciones son de vigencia ilimitada, y entrarán en vigor a partir de su publicación en el Sitio.</p>
                <p>PRIME HEALTH se reserva el derecho de efectuar alteraciones al presente documento sin necesidad de previo aviso.</p>
                <p>Por lo anterior PRIME HEALTH recomienda al Usuario que vuelva a leer con regularidad este documento, de forma que se mantenga siempre informado sobre eventuales modificaciones.</p>
                <p>Las alteraciones al contrato se volverán efectivas inmediatamente después de su publicación en el Sitio. Una vez realizadas las modificaciones, se presumirá que el Usuario que continúe usando el Sitio tendrá pleno conocimiento, habrá leído y consentido los Términos y Condiciones reformados.</p>
                <p>En caso de que el Usuario no acepte los términos y condiciones modificados deberá dejar de utilizar el Sitio Web.</p>
                <p>PRIME HEALTH podrá en cualquier momento suspender el acceso al Sitio Web y/o terminar los presentes Términos y Condiciones.</p>
                <p>La terminación de los presentes Términos y Condiciones no implicará en ningún caso para PRIME HEALTH que debe de indemnizar al Usuario.</p>
                <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.</p>
                <p><strong>Contacto</strong></p>
                <p>Domicilio: Av. Ejército Nacional 453, Colonia Granada, Alcaldía Miguel Hidalgo, CDMX, CP. 11520.</p>
                <p>Correo electrónico: contacto@prime-health.mx</p>
                <p>Fecha de última actualización: junio 2024</p>

            </section>
        </div>
    );
}

export function LegalEn() {
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
                <h1>Terms and Conditions</h1>
                <p><strong>Acceptance of the Terms</strong></p>
                <p>These terms and conditions apply to the site, owned by MEDECH SUMINISTROS, SA DE CV (hereinafter PRIME HEALTH).</p>
                <p>By accessing and using our website to purchase medical supplies, you agree to comply with these terms and conditions, including those additional terms and conditions and policies referenced herein.</p>
                <p>These terms of service apply to all users of the site, including browsers, vendors, customers, merchants, and content contributors.</p>
                <p>The parties agree that “User” shall mean any person of any nature who enters the PRIME HEALTH website and/or any of the subpages that display its content and/or any person of any nature who registers and/or uses any of the services offered through said page.</p>
                <p>In the event that the User accesses, uses and views the Site, it will be considered as an absolute and express acceptance of the Terms and Conditions of Use stipulated herein, the other documents incorporated therein by reference, as well as the applicable laws and regulations in accordance with current legislation for the use of the Website.</p>
                <p>PRIME HEALTH will not keep an individualized copy of this agreement between the User and the Company, so the User is advised to keep a copy of these Terms and Conditions of Use for their own records.</p>
                <p>In the event that the User violates what is expressed in these Terms and Conditions of Use, PRIME HEALTH may cancel their use, as well as exclude the User from future operations, and/or take the legal action that it deems appropriate for its interests.</p>
                <p>If you do not agree with any part of these terms, do not use our website.</p>
                <p><strong>Website usage</strong></p>
                <p>The User and PRIME HEALTH agree that:</p>
                <p>To use the Website, the User must be at least 18 years old or be accessing it under the supervision of a parent or legal guardian.</p>
                <p>Parents or guardians of minors will be responsible for the acts carried out by them as provided by these Terms and Conditions of Use, including damages caused to third parties, actions carried out by them that are prohibited by law and by the provisions of this agreement, without prejudice to the responsibility of the User, provided that the latter is not the parent or legal representative of the minor offender.</p>
                <p>PRIME HEALTH grants a non-transferable and revocable license to use the Website, under the Terms and Conditions of Use described, for the purpose of purchasing items sold on the same Page.</p>
                <p><strong>Products and Prices</strong></p>
                <p>We strive to accurately display products and their prices on our website. However, we reserve the right to correct any errors in pricing information or product descriptions.</p>
                <p>PRIME HEALTH will provide the most accurate pricing information to Users; however, errors may still occur, such as when an item&#39;s price is not displayed correctly on the Website. Therefore, the Company reserves the right to refuse or cancel any order.</p>
                <p>In the event that the price of an item is incorrect, PRIME HEALTH may, at its discretion, contact the User for instructions or cancel the order and will notify the User of such cancellation. It should be noted that PRIME HEALTH will have the right to cancel such orders, whether or not the order has been confirmed and paid for.</p>
                <p>The information provided about each product, as well as the photographs or videos relating to them and the trade names, trademarks or distinctive signs of any kind contained on the PRIME HEALTH Site, are displayed for informational purposes only.</p>
                <p>PRIME HEALTH is not responsible for any errors or inaccuracies in product information.</p>
                <p><strong>Order acceptance</strong></p>
                <p>The User should be aware that there are instances where an order cannot be processed for various reasons. In this regard, PRIME HEALTH reserves the right to refuse or cancel any order for any reason, at any time. Furthermore, it should be understood that the User may be asked for additional information, even before the order is accepted.</p>
                <p><strong>Orders and Payments</strong></p>
                <p>By placing an order, you agree to provide accurate and complete information about your shipping and payment address.</p>
                <p>Orders are subject to stock availability. We reserve the right to cancel or refuse any order at any time.</p>
                <p><strong>User responsibility in relation to transactions</strong></p>
                <p>The User assumes responsibility for all costs, fees, taxes, and claims arising from the use of this Website. The login credentials provided to the User for their profile are intended solely for personal use and must be treated confidentially.</p>
                <p>All transactions made through the profile account will be charged to the relevant profile account holder and will be binding.</p>
                <p>The User shall be liable without limitation for direct and indirect damages, as well as consequential damages, that may be caused by gross negligence or illegal intent.</p>
                <p><strong>Intellectual Property</strong></p>
                <p>All intellectual property rights, including copyrights and trademarks, in our website and content belong to us or our licensors.</p>
                <p>Unauthorized use of our website and content for commercial or other purposes is prohibited.</p>
                <p>PRIME HEALTH acknowledges being the sole owner of all intellectual property rights, whether registered or unregistered, including, but not limited to: projects, software, source code, graphics, photographs, videos, images, music, sound, text, logos, trademarks, and data included on the PRIME HEALTH Website. All content on our website is also protected by copyright as a collective work under Mexican copyright law and international conventions. All rights reserved.</p>
                <p>Therefore, the User expressly waives in this act the right to carry out any action, demand or claim against PRIME HEALTH, its affiliates or suppliers for any current or future violation of any copyright or intellectual property right derived from the information, programs, applications, software, ideas and other material that the User sends to the PRIME HEALTH website.</p>
                <p><strong>Limitation of Liability</strong></p>
                <p>To the maximum extent permitted by law, we will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of our website or the products you purchase through it.</p>
                <p><strong>Modifications to the Terms and Conditions</strong></p>
                <p>PRIME HEALTH, as well as the User, acknowledge that the Terms and Conditions are of unlimited duration, and will come into effect upon their publication on the Site.</p>
                <p>PRIME HEALTH reserves the right to make changes to this document without prior notice.</p>
                <p>Therefore, PRIME HEALTH recommends that the User regularly review this document to stay informed about any changes.</p>
                <p>The changes to the contract will become effective immediately upon their publication on the Site. Once the modifications have been made, it will be presumed that any User who continues to use the Site has full knowledge of, has read, and consented to the revised Terms and Conditions.</p>
                <p>If the User does not accept the modified terms and conditions, they must stop using the Website.</p>
                <p>PRIME HEALTH may at any time suspend access to the Website and/or terminate these Terms and Conditions.</p>
                <p>The termination of these Terms and Conditions will not in any case imply that PRIME HEALTH must indemnify the User.</p>
                <p>We reserve the right to modify these terms and conditions at any time. Modifications will take effect immediately upon their posting on our website.</p>
                <p><strong>Contact</strong></p>
                <p>Address: Av. Ejército Nacional 453, Colonia Granada, Alcaldía Miguel Hidalgo, CDMX, CP. 11520.</p>
                <p>Email: contacto@prime-health.mx</p>
                <p>Last updated: June 2024</p>
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