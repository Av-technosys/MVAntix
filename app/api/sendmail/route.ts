import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let name, email, mobile, company, message, enquiryFor, role, location, project, otherRole, resume;

    // Avolvelabs logic: Handling both Career (multipart) and Contact (JSON/multipart)
    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      
      // Career page ke liye "fullName", contact ke liye "name"
      name = (formData.get("fullName") || formData.get("name")) as string;
      email = formData.get("email") as string;
      mobile = formData.get("mobile") as string;
      company = formData.get("company") as string;
      message = formData.get("message") as string;
      enquiryFor = formData.get("enquiryFor") as string;
      role = formData.get("role") as string;
      location = formData.get("location") as string;
      project = formData.get("project") as string;
      otherRole = formData.get("otherRole") as string;
      resume = formData.get("resume") as File | null;
    } 
    else {
      // Standard JSON fallback for Contact Page
      const body = await request.json();
      ({ name, email, mobile, company, message, enquiryFor } = body);
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions: Options;

    // Check if it's a Career application (if resume exists)
    if (resume && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: "hello@mvantix.com", // Mvantix receiver
        replyTo: email,
        subject: `Mvantix Career: ${role === 'Other' ? otherRole : role} - ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #3d52a1;">New Career Application (Mvantix)</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile || "Not Provided"}</p>
            <p><strong>Location:</strong> ${location || "Not Provided"}</p>
            <p><strong>Applied For Role:</strong> ${role === 'Other' ? otherRole : role}</p>
            <hr style="border: none; border-top: 1px solid #eee;" />
            <p><strong>Career Objective/Project:</strong></p>
            <p style="white-space: pre-line;">${project || "No details provided"}</p>
          </div>
        `,
        attachments: [{ filename: resume.name, content: buffer }],
      };
    } else {
      // Standard Contact Enquiry
      mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: "hello@mvantix.com", // Mvantix receiver
        replyTo: email,
        subject: `Mvantix Enquiry: ${enquiryFor || 'General Inquiry'}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #3d52a1;">New Website Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${mobile || "N/A"}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Enquiry Type:</strong> ${enquiryFor || "General"}</p>
            <hr style="border: none; border-top: 1px solid #eee;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        `,
      };
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ msg: "Form submitted successfully", flag: 1 });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Error occurred";
    console.error("Mvantix API ERROR:", error);
    return NextResponse.json({ msg: errorMessage, flag: 0 }, { status: 500 });
  }
}