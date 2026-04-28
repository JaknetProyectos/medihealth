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
                <p><a href="https://prime-health.mx/shop/">Tienda</a>Este sitio web es operado por MEDECH SUMINISTROS, S.A. DE C.V. (en adelante PRIME HEALTH).</p>
                <p>Al hacer una compra con nosotros usted acepta cumplir con esta política.</p>
                <p>Esta política se aplica a todos los usuarios del sitio, incluyendo navegadores, vendedores, clientes, comerciantes y contribuyentes de contenido.</p>
                <p>Las partes acuerdan que por “Usuario” se entenderá a cualquier persona de cualquier naturaleza que ingrese al sitio web de PRIME HEALTH y/o a cualquiera de las subpáginas que desplieguen su contenido y/o a la persona de cualquier naturaleza que se dé de alta y/o use cualquiera de los servicios que se ofrecen a través de dicha página.</p>
                <p>En caso de que el Usuario haga una compra, se considerará como una absoluta y expresa aceptación de la Política aquí estipulada, los demás documentos incorporados a los mismos por referencia, así como a las leyes y reglamento aplicables de conformidad a la legislación vigente para el uso del Sitio Web.</p>
                <p>PRIME HEALTH no guardará una copia individualizada del presente convenio celebrado entre el Usuario y la Empresa, por lo que se le recomienda al Usuario que guarde una copia de la presente Política para su propio expediente.</p>
                <p><strong>Garantía</strong></p>
                <p>Todos los productos vendidos a través de PRIME HEALTH cuentan con una garantía de 7 días hábiles contra defectos de fabricación contados a partir de la fecha de entrega.</p>
                <p>La Garantía de PRIME HEALTH consiste en el cambio del producto por uno igual al adquirido y en caso de no contar con existencias en el momento procede el reembolso total del valor pagado por el producto excluyendo los gastos de envío en caso de haberse incurrido.</p>
                <p>Para hacer efectiva la Garantía de PRIME HEALTH, el Cliente primero debe ponerse en contacto dentro de los primeros 5 días hábiles a través de los medios indicados.</p>
                <p>PRIME HEALTH no se hace responsable por daños ocasionados al producto por el manejo por parte de terceros encargados de entregar el producto.</p>
                <p><strong>Cancelaciones</strong></p>
                <p>El Usuario podrá cancelar la compra de Productos realizada a través del Sitio Web, siempre y cuando no se haya facturado ni surtido.</p>
                <p>No se podrán cancelar pedidos que se paguen por anticipado o en productos que se requiere anticipo.</p>
                <p>En caso de que los Productos ya hayan sido enviados por PRIME HEALTH el Usuario no podrá cancelar la compra realizada, y tendrá que seguir el procedimiento presentado en el apartado “Devoluciones”</p>
                <p><strong>Devoluciones</strong></p>
                <p>En PRIME HEALTH, nos esforzamos por brindar productos médicos de alta calidad y satisfacción del cliente. Sin embargo, entendemos que en algunas ocasiones puede ser necesario realizar devoluciones.</p>
                <p>Las Devoluciones serán válidas bajo las siguientes condiciones:</p>
                <p>Si recibe un producto defectuoso o si el pedido que ha recibido difiere de su intención de compra, aceptaremos devoluciones dentro de los 7 días hábiles siguientes a la fecha de recepción de su paquete.</p>
                <p>Para tener derecho a una devolución, su artículo debe estar sin usar y en las mismas condiciones en que lo recibió. También debe estar en el embalaje original en el que fue recibido.</p>
                <p>Los productos deben tener todos los accesorios y manuales incluidos.</p>
                <p>Los gastos de envío de la devolución correrán a cargo del cliente, a menos que la devolución sea el resultado de un error nuestro o un producto defectuoso.</p>
                <p>No se aceptarán devoluciones de productos que hayan sido personalizados o modificados según las especificaciones del cliente.</p>
                <p>Para completar su devolución, requerimos un recibo o prueba de compra. También exigimos que todas las devoluciones vayan acompañadas de una declaración escrita que detalle el motivo.</p>
                <p>Por favor, no envíe su compra de vuelta al fabricante. En su lugar, por favor contacte con nuestro departamento de atención al cliente y envíe su paquete a la siguiente dirección: Av. Ejército Nacional 453, Colonia Granada, Alcaldía Miguel Hidalgo, CDMX, CP. 11520.</p>
                <p><strong>Reembolsos</strong></p>
                <p>Una vez que su devolución sea recibida e inspeccionada, le enviaremos un correo electrónico para notificarle que hemos recibido su artículo devuelto. También le notificaremos la aprobación o el rechazo de su devolución.</p>
                <p>Si se aprueba, se procesará su reembolso y se aplicará automáticamente un crédito a su tarjeta de crédito o al método de pago original, dentro de los 30 días hábiles siguientes a la aprobación de su reembolso.</p>
                <p><strong>Intercambios</strong></p>
                <p>Se aceptarán intercambios de productos médicos no utilizados y en su embalaje original dentro de los 7 días hábiles posteriores a la recepción del pedido.</p>
                <p>Los productos deben estar en condiciones nuevas y sin usar, con todos los accesorios y manuales incluidos.</p>
                <p><strong>Envíos</strong></p>
                <p>En caso de devolución, usted será responsable de pagar sus propios gastos de envío.</p>
                <p>Los gastos de envío no son reembolsables.</p>
                <p>Si recibe un reembolso, los gastos de envío de la devolución se deducirán de su reembolso.</p>
                <p>Dependiendo del lugar donde viva, el tiempo que puede tardar en llegarle el producto cambiado puede variar.</p>
                <p>Si envía un artículo de más de $50 dólares americanos, debería considerar la posibilidad de utilizar un servicio de envío con rastreo o de adquirir un seguro de envío.</p>
                <p>No garantizamos que recibamos su artículo devuelto.</p>
                <p><strong>Modificaciones a las Políticas</strong></p>
                <p>PRIME HEALTH, así como el Usuario, reconocen que esta Política es de vigencia ilimitada, y entrarán en vigor a partir de su publicación en el Sitio.</p>
                <p>PRIME HEALTH se reserva el derecho de efectuar alteraciones al presente documento sin necesidad de previo aviso.</p>
                <p>Por lo anterior PRIME HEALTH recomienda al Usuario que vuelva a leer con regularidad este documento, de forma que se mantenga siempre informado sobre eventuales modificaciones.</p>
                <p>Las alteraciones al contrato se volverán efectivas inmediatamente después de su publicación en el Sitio.</p>
                <p>La terminación del presente documento no implicará en ningún caso para PRIME HEALTH que debe de indemnizar al Usuario.</p>
                <p>Nos reservamos el derecho de modificar esta política en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.</p>
                <p><strong>Contacto</strong></p>
                <p>Domicilio: Av. Ejército Nacional 453, Colonia Granada, Alcaldía Miguel Hidalgo, CDMX, CP. 11520.</p>
                <p>Correo electrónico: contacto@prime-health.mx</p>
                <p>Fecha de última actualización: junio 2024</p>

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
                <p><a href="https://prime-health.mx/shop/">Store</a>This website is operated by MEDECH SUMINISTROS, SA DE CV (hereinafter PRIME HEALTH).</p>
                <p>By making a purchase with us, you agree to comply with this policy.</p>
                <p>This policy applies to all users of the site, including browsers, vendors, customers, merchants, and content contributors.</p>
                <p>The parties agree that “User” shall mean any person of any nature who enters the PRIME HEALTH website and/or any of the subpages that display its content and/or any person of any nature who registers and/or uses any of the services offered through said page.</p>
                <p>In the event that the User makes a purchase, it will be considered as an absolute and express acceptance of the Policy stipulated herein, the other documents incorporated herein by reference, as well as the applicable laws and regulations in accordance with current legislation for the use of the Website.</p>
                <p>PRIME HEALTH will not keep an individualized copy of this agreement between the User and the Company, so the User is advised to keep a copy of this Policy for their own records.</p>
                <p><strong>Warranty</strong></p>
                <p>All products sold through PRIME HEALTH have a 7 business day warranty against manufacturing defects starting from the date of delivery.</p>
                <p>The PRIME HEALTH Guarantee consists of replacing the product with one identical to the one purchased, and if there is no stock available at the time, a full refund of the value paid for the product will be issued, excluding shipping costs if incurred.</p>
                <p>To make the PRIME HEALTH Guarantee effective, the Customer must first make contact within the first 5 business days through the indicated means.</p>
                <p>PRIME HEALTH is not responsible for damage caused to the product by handling by third parties responsible for delivering the product.</p>
                <p><strong>Cancellations</strong></p>
                <p>The User may cancel the purchase of Products made through the Website, provided that it has not been invoiced or shipped.</p>
                <p>Orders that are paid in advance or for products that require a deposit cannot be cancelled.</p>
                <p>If the Products have already been shipped by PRIME HEALTH, the User will not be able to cancel the purchase and will have to follow the procedure outlined in the “Returns” section.</p>
                <p><strong>Returns</strong></p>
                <p>At PRIME HEALTH, we strive to provide high-quality medical products and customer satisfaction. However, we understand that returns may sometimes be necessary.</p>
                <p>Returns will be valid under the following conditions:</p>
                <p>If you receive a defective product or if the order you received differs from your purchase intention, we will accept returns within 7 business days of receiving your package.</p>
                <p>To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging in which it was received.</p>
                <p>The products must include all accessories and manuals.</p>
                <p>The customer will be responsible for return shipping costs, unless the return is the result of an error on our part or a defective product.</p>
                <p>No returns will be accepted for products that have been customized or modified according to the customer&#39;s specifications.</p>
                <p>To complete your return, we require a receipt or proof of purchase. We also require that all returns be accompanied by a written statement detailing the reason.</p>
                <p>Please do not return your purchase to the manufacturer. Instead, please contact our customer service department and send your package to the following address: Av. Ejército Nacional 453, Colonia Granada, Alcaldía Miguel Hidalgo, CDMX, CP. 11520.</p>
                <p><strong>Refunds</strong></p>
                <p>Once your return has been received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your return.</p>
                <p>If approved, your refund will be processed and a credit will automatically be applied to your credit card or original payment method within 30 business days of your refund approval.</p>
                <p><strong>Exchanges</strong></p>
                <p>Exchanges of unused medical products in their original packaging will be accepted within 7 business days of receiving the order.</p>
                <p>The products must be in new and unused condition, with all accessories and manuals included.</p>
                <p><strong>Shipping</strong></p>
                <p>In case of return, you will be responsible for paying your own shipping costs.</p>
                <p>Shipping costs are non-refundable.</p>
                <p>If you receive a refund, the return shipping costs will be deducted from your refund.</p>
                <p>Depending on where you live, the time it may take for the exchanged product to arrive may vary.</p>
                <p>If you are shipping an item worth more than $50 USD, you should consider using a trackable shipping service or purchasing shipping insurance.</p>
                <p>We do not guarantee that we will receive your returned item.</p>
                <p><strong>Policy Modifications</strong></p>
                <p>PRIME HEALTH, as well as the User, acknowledge that this Policy is of unlimited duration, and will come into effect upon its publication on the Site.</p>
                <p>PRIME HEALTH reserves the right to make changes to this document without prior notice.</p>
                <p>Therefore, PRIME HEALTH recommends that the User regularly review this document to stay informed about any changes.</p>
                <p>Changes to the contract will become effective immediately upon their publication on the Site.</p>
                <p>The termination of this document will not in any case imply that PRIME HEALTH must compensate the User.</p>
                <p>We reserve the right to modify this policy at any time. Modifications will take effect immediately upon their posting on our website.</p>
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