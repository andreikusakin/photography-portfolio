import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Collapse newlines so user input can't inject extra email headers via the subject
const oneLine = (s) => String(s ?? "").replace(/[\r\n]+/g, " ").trim();

// Escape user input before it goes into the HTML email body
const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s));

export async function POST(request) {
  try {
    const {
      fullName,
      partnerName,
      email,
      phone,
      interestedIn,
      eventDate,
      location,
      guestCount,
      socialMedia,
      referralSource,
      message,
      company, // honeypot
    } = await request.json();

    // Honeypot: real users never fill this. Pretend success so bots don't learn.
    if (company) {
      return NextResponse.json({ message: "Email sent successfully" });
    }

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Guard against oversized/abusive payloads
    if (String(message).length > 5000 || String(fullName).length > 200) {
      return NextResponse.json(
        { message: "Submission is too long" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Photography Contact Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      // Lets you reply straight to the couple from your inbox
      replyTo: email,
      subject: `New ${oneLine(interestedIn) || "General"} Inquiry: ${oneLine(fullName)}`,
      text: `
        Name: ${fullName}
        Partner's Name: ${partnerName || "Not provided"}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Interested In: ${interestedIn || "Not provided"}
        Event Date: ${eventDate || "Not provided"}
        Location: ${location || "Not provided"}
        Guest Count: ${guestCount || "Not provided"}
        Social Media: ${socialMedia || "Not provided"}
        Referral Source: ${referralSource || "Not provided"}

        Message:
        ${message}
      `,
      html: `
        <h2>New ${esc(interestedIn) || "General"} Inquiry</h2>
        <p><strong>Name:</strong> ${esc(fullName)}</p>
        <p><strong>Partner's Name:</strong> ${esc(partnerName) || "Not provided"}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone) || "Not provided"}</p>
        <p><strong>Interested In:</strong> ${esc(interestedIn) || "Not provided"}</p>
        <p><strong>Event Date:</strong> ${esc(eventDate) || "Not provided"}</p>
        <p><strong>Location:</strong> ${esc(location) || "Not provided"}</p>
        <p><strong>Guest Count:</strong> ${esc(guestCount) || "Not provided"}</p>
        <p><strong>Social Media:</strong> ${esc(socialMedia) || "Not provided"}</p>
        <p><strong>Referral Source:</strong> ${esc(referralSource) || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${esc(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
