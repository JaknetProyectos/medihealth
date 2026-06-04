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

                <h1>Devoluciones, Reembolsos y Envíos</h1>

                <p>
                    Este sitio web es operado por MEDECH SUMINISTROS, S.A. DE C.V. (en adelante DISTRIBUCIÓN MEDICA).
                </p>

                <p>
                    Al hacer una compra con nosotros usted acepta cumplir con esta política.
                </p>

                <p>
                    Esta política se aplica a todos los usuarios del sitio, incluyendo navegadores, vendedores, clientes, comerciantes y contribuyentes de contenido.
                </p>

                <p>
                    Las partes acuerdan que por “Usuario” se entenderá a cualquier persona de cualquier naturaleza que ingrese al sitio web de DISTRIBUCIÓN MEDICA y/o a cualquiera de las subpáginas que desplieguen su contenido y/o a la persona de cualquier naturaleza que se dé de alta y/o use cualquiera de los servicios que se ofrecen a través de dicha página.
                </p>

                <p>
                    En caso de que el Usuario haga una compra, se considerará como una absoluta y expresa aceptación de la Política aquí estipulada, los demás documentos incorporados a los mismos por referencia, así como a las leyes y reglamento aplicables de conformidad a la legislación vigente para el uso del Sitio Web.
                </p>

                <p>
                    DISTRIBUCIÓN MEDICA no guardará una copia individualizada del presente convenio celebrado entre el Usuario y la Empresa, por lo que se le recomienda al Usuario que guarde una copia de la presente Política para su propio expediente.
                </p>

                <h2>Garantía</h2>

                <p>
                    Todos los productos vendidos a través de DISTRIBUCIÓN MEDICA cuentan con una garantía de 7 días hábiles contra defectos de fabricación contados a partir de la fecha de entrega.
                </p>

                <p>
                    La Garantía de DISTRIBUCIÓN MEDICA consiste en el cambio del producto por uno igual al adquirido y en caso de no contar con existencias en el momento procede el reembolso total del valor pagado por el producto excluyendo los gastos de envío en caso de haberse incurrido.
                </p>

                <p>
                    Para hacer efectiva la Garantía de DISTRIBUCIÓN MEDICA, el Cliente primero debe ponerse en contacto dentro de los primeros 5 días hábiles a través de los medios indicados.
                </p>

                <p>
                    DISTRIBUCIÓN MEDICA no se hace responsable por daños ocasionados al producto por el manejo por parte de terceros encargados de entregar el producto.
                </p>

                <h2>Cancelaciones</h2>

                <p>
                    El Usuario podrá cancelar la compra de Productos realizada a través del Sitio Web, siempre y cuando no se haya facturado ni surtido.
                </p>

                <p>
                    No se podrán cancelar pedidos que se paguen por anticipado o en productos que se requiere anticipo.
                </p>

                <p>
                    En caso de que los Productos ya hayan sido enviados por DISTRIBUCIÓN MEDICA el Usuario no podrá cancelar la compra realizada, y tendrá que seguir el procedimiento presentado en el apartado “Devoluciones”.
                </p>

                <h2>Devoluciones</h2>

                <p>
                    En DISTRIBUCIÓN MEDICA, nos esforzamos por brindar productos médicos de alta calidad y satisfacción del cliente. Sin embargo, entendemos que en algunas ocasiones puede ser necesario realizar devoluciones.
                </p>

                <p>
                    Las Devoluciones serán válidas bajo las siguientes condiciones:
                </p>

                <p>
                    Si recibe un producto defectuoso o si el pedido que ha recibido difiere de su intención de compra, aceptaremos devoluciones dentro de los 7 días hábiles siguientes a la fecha de recepción de su paquete.
                </p>

                <p>
                    Para tener derecho a una devolución, su artículo debe estar sin usar y en las mismas condiciones en que lo recibió. También debe estar en el embalaje original en el que fue recibido.
                </p>

                <p>
                    Los productos deben tener todos los accesorios y manuales incluidos.
                </p>

                <p>
                    Los gastos de envío de la devolución correrán a cargo del cliente, a menos que la devolución sea el resultado de un error nuestro o un producto defectuoso.
                </p>

                <p>
                    No se aceptarán devoluciones de productos que hayan sido personalizados o modificados según las especificaciones del cliente.
                </p>

                <p>
                    Para completar su devolución, requerimos un recibo o prueba de compra. También exigimos que todas las devoluciones vayan acompañadas de una declaración escrita que detalle el motivo.
                </p>

                <p>
                    Por favor, no envíe su compra de vuelta al fabricante. En su lugar, por favor contacte con nuestro departamento de atención al cliente y envíe su paquete a la siguiente dirección:
                    <em>Av Periférico Sur 4829, Piso 2, Col. Parque del Pedregal, Tlalpan, Ciudad de México, CP 14010</em>
                </p>

                <h2>Reembolsos</h2>

                <p>
                    Una vez que su devolución sea recibida e inspeccionada, le enviaremos un correo electrónico para notificarle que hemos recibido su artículo devuelto. También le notificaremos la aprobación o el rechazo de su devolución.
                </p>

                <p>
                    Si se aprueba, se procesará su reembolso y se aplicará automáticamente un crédito a su tarjeta de crédito o al método de pago original, dentro de los 30 días hábiles siguientes a la aprobación de su reembolso.
                </p>

                <h2>Intercambios</h2>

                <p>
                    Se aceptarán intercambios de productos médicos no utilizados y en su embalaje original dentro de los 7 días hábiles posteriores a la recepción del pedido.
                </p>

                <p>
                    Los productos deben estar en condiciones nuevas y sin usar, con todos los accesorios y manuales incluidos.
                </p>

                <h2>Envíos</h2>

                <p>
                    En caso de devolución, usted será responsable de pagar sus propios gastos de envío.
                </p>

                <p>
                    Los gastos de envío no son reembolsables.
                </p>

                <p>
                    Si recibe un reembolso, los gastos de envío de la devolución se deducirán de su reembolso.
                </p>

                <p>
                    Dependiendo del lugar donde viva, el tiempo que puede tardar en llegarle el producto cambiado puede variar.
                </p>

                <p>
                    Si envía un artículo de más de $50 dólares americanos, debería considerar la posibilidad de utilizar un servicio de envío con rastreo o de adquirir un seguro de envío.
                </p>

                <p>
                    No garantizamos que recibamos su artículo devuelto.
                </p>

                <h2>Modificaciones a las Políticas</h2>

                <p>
                    DISTRIBUCIÓN MEDICA, así como el Usuario, reconocen que esta Política es de vigencia ilimitada, y entrarán en vigor a partir de su publicación en el Sitio.
                </p>

                <p>
                    DISTRIBUCIÓN MEDICA se reserva el derecho de efectuar alteraciones al presente documento sin necesidad de previo aviso.
                </p>

                <p>
                    Por lo anterior DISTRIBUCIÓN MEDICA recomienda al Usuario que vuelva a leer con regularidad este documento, de forma que se mantenga siempre informado sobre eventuales modificaciones.
                </p>

                <p>
                    Las alteraciones al contrato se volverán efectivas inmediatamente después de su publicación en el Sitio.
                </p>

                <p>
                    La terminación del presente documento no implicará en ningún caso para DISTRIBUCIÓN MEDICA que debe de indemnizar al Usuario.
                </p>

                <p>
                    Nos reservamos el derecho de modificar esta política en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                </p>

                <h2>Contacto</h2>

                <p>
                    <strong>Domicilio:</strong>
                    <em>Av Periférico Sur 4829, Piso 2, Col. Parque del Pedregal, Tlalpan, Ciudad de México, CP 14010.</em>
                </p>

                <p>
                    <strong>Correo electrónico:</strong>
                    <a href="mailto:contacto@distribucionmedica.com">contacto@distribucionmedica.com</a>
                </p>

                <p>
                    <strong>Fecha de última actualización:</strong> ABRIL 2026
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

                <h1>Returns, Refunds and Shipping</h1>

                <p>
                    This website is operated by MEDECH SUMINISTROS, S.A. DE C.V. (hereinafter DISTRIBUCIÓN MEDICA).
                </p>

                <p>
                    By making a purchase with us, you agree to comply with this policy.
                </p>

                <p>
                    This policy applies to all users of the site, including browsers, vendors, customers, merchants, and content contributors.
                </p>

                <p>
                    The parties agree that “User” shall mean any person of any nature who enters the DISTRIBUCIÓN MEDICA website and/or any of the subpages displaying its content and/or any person of any nature who registers and/or uses any of the services offered through said website.
                </p>

                <p>
                    In the event that the User makes a purchase, it shall be considered as full and express acceptance of the Policy stipulated herein, the other documents incorporated herein by reference, as well as the applicable laws and regulations in accordance with current legislation governing the use of the Website.
                </p>

                <p>
                    DISTRIBUCIÓN MEDICA will not keep an individualized copy of this agreement entered into between the User and the Company; therefore, the User is advised to keep a copy of this Policy for their own records.
                </p>

                <h2>Warranty</h2>

                <p>
                    All products sold through DISTRIBUCIÓN MEDICA include a 7 business day warranty against manufacturing defects counted from the delivery date.
                </p>

                <p>
                    DISTRIBUCIÓN MEDICA’s Warranty consists of replacing the product with one identical to the purchased item, and if no stock is available at the time, a full refund of the amount paid for the product will be issued, excluding shipping costs if incurred.
                </p>

                <p>
                    To enforce the DISTRIBUCIÓN MEDICA Warranty, the Customer must first contact us within the first 5 business days through the indicated channels.
                </p>

                <p>
                    DISTRIBUCIÓN MEDICA is not responsible for damage caused to the product due to handling by third parties responsible for delivering the product.
                </p>

                <h2>Cancellations</h2>

                <p>
                    The User may cancel the purchase of Products made through the Website, provided that the order has not been invoiced or fulfilled.
                </p>

                <p>
                    Orders paid in advance or products requiring a deposit cannot be canceled.
                </p>

                <p>
                    In the event that the Products have already been shipped by DISTRIBUCIÓN MEDICA, the User may not cancel the completed purchase and must follow the procedure set forth in the “Returns” section.
                </p>

                <h2>Returns</h2>

                <p>
                    At DISTRIBUCIÓN MEDICA, we strive to provide high-quality medical products and customer satisfaction. However, we understand that in some cases returns may be necessary.
                </p>

                <p>
                    Returns will be valid under the following conditions:
                </p>

                <p>
                    If you receive a defective product or if the order received differs from your intended purchase, we will accept returns within 7 business days from the date you received your package.
                </p>

                <p>
                    To be eligible for a return, your item must be unused and in the same condition in which you received it. It must also be in the original packaging in which it was received.
                </p>

                <p>
                    Products must include all accessories and manuals.
                </p>

                <p>
                    Return shipping costs shall be borne by the customer unless the return is the result of our error or a defective product.
                </p>

                <p>
                    Returns of products that have been customized or modified according to customer specifications will not be accepted.
                </p>

                <p>
                    To complete your return, we require a receipt or proof of purchase. We also require that all returns be accompanied by a written statement detailing the reason for the return.
                </p>

                <p>
                    Please do not send your purchase back to the manufacturer. Instead, please contact our customer service department and send your package to the following address:
                    <em>Av Periférico Sur 4829, Piso 2, Col. Parque del Pedregal, Tlalpan, Mexico City, ZIP Code 14010</em>
                </p>

                <h2>Refunds</h2>

                <p>
                    Once your return has been received and inspected, we will send you an email notifying you that we have received your returned item. We will also notify you of the approval or rejection of your return.
                </p>

                <p>
                    If approved, your refund will be processed and a credit will automatically be applied to your credit card or original payment method within 30 business days following approval of your refund.
                </p>

                <h2>Exchanges</h2>

                <p>
                    Exchanges of unused medical products in their original packaging will be accepted within 7 business days after receipt of the order.
                </p>

                <p>
                    Products must be in new and unused condition, with all accessories and manuals included.
                </p>

                <h2>Shipping</h2>

                <p>
                    In the event of a return, you will be responsible for paying your own shipping costs.
                </p>

                <p>
                    Shipping costs are non-refundable.
                </p>

                <p>
                    If you receive a refund, the return shipping costs will be deducted from your refund.
                </p>

                <p>
                    Depending on where you live, the time it may take for your exchanged product to reach you may vary.
                </p>

                <p>
                    If you are shipping an item worth more than $50 USD, you should consider using a trackable shipping service or purchasing shipping insurance.
                </p>

                <p>
                    We do not guarantee that we will receive your returned item.
                </p>

                <h2>Policy Modifications</h2>

                <p>
                    DISTRIBUCIÓN MEDICA, as well as the User, acknowledge that this Policy has unlimited validity and shall become effective upon its publication on the Site.
                </p>

                <p>
                    DISTRIBUCIÓN MEDICA reserves the right to make changes to this document without prior notice.
                </p>

                <p>
                    Therefore, DISTRIBUCIÓN MEDICA recommends that the User regularly review this document in order to remain informed of any modifications.
                </p>

                <p>
                    Amendments to the agreement shall become effective immediately after their publication on the Site.
                </p>

                <p>
                    Termination of this document shall not imply under any circumstance that DISTRIBUCIÓN MEDICA must compensate the User.
                </p>

                <p>
                    We reserve the right to modify this policy at any time. Modifications will take effect immediately upon publication on our website.
                </p>

                <h2>Contact</h2>

                <p>
                    <strong>Address:</strong>
                    <em>Av Periférico Sur 4829, Piso 2, Col. Parque del Pedregal, Tlalpan, Mexico City, ZIP Code 14010.</em>
                </p>

                <p>
                    <strong>Email:</strong>
                    <a href="mailto:contacto@distribucionmedica.com">contacto@distribucionmedica.com</a>
                </p>

                <p>
                    <strong>Last updated:</strong> APRIL 2026
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