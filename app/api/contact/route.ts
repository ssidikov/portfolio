import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message, tariff } = body

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const messageContent = message?.trim() || 'No message provided.'

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const senderFullName = [firstName, lastName].filter(Boolean).join(' ')

    const mailOptions = {
      from: `"${senderFullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${senderFullName}`,
      text: `
Name: ${senderFullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
${tariff ? `Selected Tariff: ${tariff}\n` : ''}
Message:
${messageContent}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #111;">${senderFullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #111;">${phone || 'Not provided'}</td>
            </tr>
            ${
              tariff
                ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Selected Tariff:</td>
              <td style="padding: 8px 0; color: #111;"><strong>${tariff}</strong></td>
            </tr>`
                : ''
            }
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #4f46e5;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #333;">Message:</p>
            <p style="margin: 0; color: #444; white-space: pre-wrap; line-height: 1.5;">${messageContent}</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email with nodemailer:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
