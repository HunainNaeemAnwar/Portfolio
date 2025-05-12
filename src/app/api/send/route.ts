import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    // recruiter message to me
    const internalMail = await resend.emails.send({
      from: "Hunain Portfolio <onboarding@resend.dev>",
      to: "arhaamkhan125@gmail.com",
      subject: `New message from ${email} — ${subject}`,
      html: `
        <h3>You got a new message from your portfolio form.</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, internalMail });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Email sending failed. Please try again later.",
      },
      { status: 500 }
    );
  }
}
