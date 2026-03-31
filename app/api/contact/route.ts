import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, organization, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Morpho Technologies Website <onboarding@resend.dev>',
    to: 'Caden@morphotechnologies.com',
    replyTo: email,
    subject: `New Contact: ${name}${organization ? ` (${organization})` : ''}`,
    text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || 'N/A'}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
