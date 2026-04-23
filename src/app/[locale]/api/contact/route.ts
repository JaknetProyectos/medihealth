import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    // 1. Email para el Administrador
    await resend.emails.send({
      from: 'Prime Health <contacto@vivamytrip.com>',
      to: email,
      subject: `Nuevo Mensaje de Contacto: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee;">
          <div style="background-color: #102f67; padding: 20px; text-align: center;">
            <h1 style="color: #fbbf24; margin: 0;">Nuevo Lead de Contacto</h1>
          </div>
          <div style="padding: 30px; color: #333;">
            <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Mensaje:</strong></p>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
          </div>
        </div>
      `,
    });

    // 2. Email de Confirmación para el Usuario
    await resend.emails.send({
      from: 'Prime Health <contacto@vivamytrip.com>',
      to: email,
      subject: 'Recibimos tu mensaje - Prime Health',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #102f67; padding: 30px; text-align: center;">
            <h1 style="color: #fbbf24; margin: 0; font-size: 24px;">¡Hola, ${firstName}!</h1>
          </div>
          <div style="padding: 40px; text-align: center; color: #102f67;">
            <h2 style="margin-top: 0;">Gracias por contactarnos</h2>
            <p style="font-size: 16px; line-height: 1.6;">Hemos recibido tu mensaje correctamente. Uno de nuestros asesores médicos se pondrá en contacto contigo en breve.</p>
            <div style="margin-top: 30px; padding: 20px; border-top: 2px solid #fbbf24; display: inline-block;">
              <p style="margin: 0; font-weight: bold;">Equipo Prime Health</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}