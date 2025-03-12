// app/api/contact/route.js (App Router) or pages/api/contact.js (Pages Router)
import { NextResponse } from "next/server"; // Use for App Router
import nodemailer from "nodemailer";

// For App Router
export async function POST(request) {
  try {
    const {
      fullName,
      partnerName,
      email,
      phone,
      interestedIn,
      eventDate,
      eventLocation,
      weddingVenue,
      referralSource,
      message,
    } = await request.json();

    // Validate required fields
    if (!fullName || !email || !interestedIn || !eventDate || !eventLocation || !referralSource || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format the date for display
    const formattedDate = new Date(eventDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Photography Contact Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `New ${interestedIn} Inquiry: ${fullName}`,
      text: `
        Name: ${fullName}
        Partner's Name: ${partnerName || "Not provided"}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Interested In: ${interestedIn}
        Event Date: ${formattedDate}
        Event Location: ${eventLocation}
        Wedding Venue: ${weddingVenue || "Not provided"}
        Referral Source: ${referralSource}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New ${interestedIn} Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Partner's Name:</strong> ${partnerName || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Interested In:</strong> ${interestedIn}</p>
        <p><strong>Event Date:</strong> ${formattedDate}</p>
        <p><strong>Event Location:</strong> ${eventLocation}</p>
        <p><strong>Wedding Venue:</strong> ${weddingVenue || "Not provided"}</p>
        <p><strong>Referral Source:</strong> ${referralSource}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
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
