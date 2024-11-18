import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Path to the default PDF file in the public directory
const defaultPdfPath = path.join(
  process.cwd(),
  "public",
  "Denkiro_Dental_Brochure_Digital.pdf"
);
const defaultPdfContent = fs.readFileSync(defaultPdfPath);

export async function POST(req) {
  const { firstName, lastName, userEmail, phone, message } = await req.json();

  // !clientEmail
  if (!userEmail && !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  // Email options for the client (all user data and attachments)
  const clientMailOptions = {
    from: `"${userEmail}" <${"support@webibee.com"}>`,
    to: "info@vbccinstruments.com",
    subject: "New Customer Form Submitted",
    html: `
            <div className="block space-y-10 font-merriWeather">
            <h4 className="!text-lg !capitalize">Hi,</h4>
            <p>You have a new Message from VBCC Dental</p>
            <p>Choose VBCC for Your Dental Furnace Needs</p>
            <p className="!flex !items-center !justify-center !gap-3">
            <span className="!capitalize !font-bold">Name:</span> 
            ${firstName} ${lastName}
            <p>Email: ${userEmail}</p>
            <p>Phone Number: ${phone}</p>
            <p>Message: ${message}</p>
            </p>
            <br/>
            <br/>
            <p>Thanks</p>
            </div> 
            `,
    bcc: [process.env.EMAIL_ID],
  };

  const userMailOptions = {
    from: `VBCC "${process.env.EMAIL_ID}" <${"support@webibee.com"}>`,
    to: userEmail,
    subject: "Acknowledgment: We received your Submission",
    html: `<p>Dear ${firstName} ${lastName} Customer,</p>
             <p>Greetings from VBCC Dental Furnaces!</p>
             <p>We appreciate your interest in our VBCC Dental Furnaces products and acknowledge receipt of your submission.</p>
                   <p>Thanks & Regards,<br>
                    <br>
           VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD<br>
           207, 3rd Link Road, Nehru Nagar Industrial Estate,<br>
           Kottivakkam, Chennai, Tamil Nadu 600041<br>
           +91- 9600478315<br></p>`,
    attachments: [
      // Default PDF attachment
      {
        filename: "Denkiro_Dental_Brochure_Digital.pdf",
        content: defaultPdfContent,
        contentType: "application/pdf",
      },
    ],
    bcc: ["info@vbccinstruments.com"],
  };

  try {
    // Send acknowledgment email to the customer
    await transporter.sendMail(userMailOptions);

    // Send detailed email to the client
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error sending emails" },
      { status: 500 }
    );
  }
}
