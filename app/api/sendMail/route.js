import nodemailer from "nodemailer";
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

export async function POST(req) {
  const { firstName, lastName, userEmail, jobTitle, phone, message, page } =
    await req.json();
  const imageUrl =
    "https://ik.imagekit.io/webibee/VBCC_email_logo.png?updatedAt=1751531750900";

  const capitalized = page.charAt(0).toUpperCase() + page.slice(1);

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
    to: "sales@vbccinstruments.com",
    subject: `New Customer Form Submitted - ${capitalized} Page`,
    html: `
            <div className="block space-y-10 font-merriWeather">
            <h4 className="!text-lg !capitalize">Hi,</h4>
            <p>You have a new Message from VBCC</p>
            <p>Choose VBCC for your furnace needs</p>
            <p className="!flex !items-center !justify-center !gap-3">
            <span className="!capitalize !font-bold">Name:</span> 
            ${firstName} ${lastName}
            <p>Email: ${userEmail}</p>
            ${jobTitle ? `<p>Job Title: ${jobTitle}</p>` : ""}
            <p>Phone Number: ${phone}</p>
            <p>Message: ${message}</p>
            </p>
            <br/>
            <br/>
            <div>Thanks & Regards,<br>
                    <br>
              <div style="margin-bottom: 10px;">
                <img src=${imageUrl} alt="VBCC Logo" style="width: 90px; height: auto;">
              </div>
           <p>VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD<br>
           207, 3rd Link Road, Nehru Nagar Industrial Estate,<br>
           Kottivakkam, Chennai, Tamil Nadu 600041<br>
           +91- 9600478315<br>
           </p>
           </div>
            </div> 
            `,
  };

  const userMailOptions = {
    from: `VBCC <${"support@webibee.com"}>`,
    to: userEmail,
    subject: "Acknowledgment: We received your Submission",
    html: `<p>Dear ${firstName} ${lastName},</p>
             <p>Greetings from VBCC High Temperature Instruments!</p>
             <p>We appreciate your interest in our products and acknowledge the receipt of your submission.Our team will get in touch with you shortly.</p>
              <div>Thanks & Regards,<br>
                    <br>
              <div style="margin-bottom: 10px;">
                <img src=${imageUrl} alt="VBCC Logo" style="width: 90px; height: auto;">
              </div>
           <p>VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD<br>
           207, 3rd Link Road, Nehru Nagar Industrial Estate,<br>
           Kottivakkam, Chennai, Tamil Nadu 600041<br>
           +91- 9600478315<br>
           </p>
           </div>`,
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
