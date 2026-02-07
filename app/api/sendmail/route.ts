import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  company?: string;
  message: string;
  enquiryFor: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, mobile, company, message, enquiryFor } = body;

    const userMail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: userMail,
    pass: userPass,
  },
});


    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "Support@avolvelabs.com",
      replyTo: email,
      subject: `Enquiry: ${enquiryFor}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #333;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${mobile || "N/A"}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      msg: "Form submitted successfully, we will reach you shortly...",
      flag: 1,
    });
  } catch (error: unknown) {

    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        msg: errorMessage,
        flag: 0,
      },
      { status: 500 }
    );
  }
}
