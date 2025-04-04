import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, subject, message, service, plan } = data

    // In a real implementation, you would use a service like SendGrid, Nodemailer, or Resend
    // to send the email. For now, we'll just log the data and return a success response.

    console.log("Email request received:", {
      name,
      email,
      subject,
      message,
      service,
      plan,
    })

    // This is where you would add your email sending logic
    // Example with a hypothetical email service:
    /*
    await sendEmail({
      to: "dikshasshirke@gmail.com",
      from: "website@example.com",
      subject: `New Service Request: ${subject || service}`,
      html: `
        <h1>New Service Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        ${plan ? `<p><strong>Plan:</strong> ${plan}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

