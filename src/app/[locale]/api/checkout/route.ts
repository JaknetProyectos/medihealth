import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { orderId, items, total, customer } = await req.json();

    const itemsHtml = items.map((item: any) => `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px dashed #ddd;">
          <div style="font-weight: bold; color: #102f67;">${item.product.name}</div>
          <div style="font-size: 12px; color: #666;">Cant: ${item.quantity} x $${item.product.price.toFixed(2)}</div>
        </td>
        <td style="padding: 10px 0; border-bottom: 1px dashed #ddd; text-align: right; font-weight: bold; color: #102f67;">
          $${(item.product.price * item.quantity).toFixed(2)}
        </td>
      </tr>
    `).join('');

    const ticketTemplate = `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 450px; margin: auto; border: 1px solid #eee; padding: 20px; color: #333;">
        <div style="text-align: center; background-color: #102f67; padding: 20px; margin: -20px -20px 20px -20px;">
          <h2 style="color: #fbbf24; margin: 0; text-transform: uppercase;">Distribución Médica</h2>
          <p style="color: white; font-size: 12px; margin: 5px 0 0 0;">COMPROBANTE DE ORDEN</p>
        </div>
        
        <div style="text-align: center; margin-bottom: 20px;">
          <p style="margin: 0; font-weight: bold;">ID: ${orderId}</p>
          <p style="margin: 0; font-size: 12px;">${new Date().toLocaleString()}</p>
        </div>

        <div style="border-top: 2px dashed #102f67; border-bottom: 2px dashed #102f67; padding: 15px 0; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            ${itemsHtml}
          </table>
        </div>

        <table style="width: 100%; margin-bottom: 20px;">
          <tr>
            <td style="font-weight: bold; text-transform: uppercase;">Total Pagado:</td>
            <td style="text-align: right; font-size: 20px; font-weight: bold; color: #102f67;">$${total.toFixed(2)} MXN</td>
          </tr>
        </table>

        <div style="background-color: #f9f9f9; padding: 15px; font-size: 12px; border-radius: 8px;">
          <p style="margin: 0 0 5px 0; font-weight: bold; color: #102f67; text-transform: uppercase;">Enviar a:</p>
          <p style="margin: 0;">${customer.firstName} ${customer.lastName}</p>
          <p style="margin: 0;">${customer.direccion}, ${customer.city}</p>
          <p style="margin: 0;">Tel: ${customer.telefono}</p>
        </div>

        <div style="text-align: center; margin-top: 30px; font-size: 10px; color: #999;">
          <p>Gracias por su confianza en Distribución Médica.</p>
          <p>Este es un recibo automático de su transacción.</p>
        </div>
      </div>
    `;

    // Envío a ambos: Admin y Cliente
    await resend.emails.send({
      from: 'Distribución Médica <contacto@distribucionmedica.com>',
      to: [customer.email, 'contacto@distribucionmedica.com'],
      subject: `Ticket de Compra: ${orderId}`,
      html: ticketTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar ticket' }, { status: 500 });
  }
}