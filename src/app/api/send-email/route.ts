import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { format, toZonedTime } from 'date-fns-tz';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone,email, message } = await req.json();

    if (!firstName || !lastName || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Get current time in Asia/Kolkata timezone
    const timeZone = 'Asia/Kolkata';
    const now = new Date();
    const kolkataTime = toZonedTime(now, timeZone);
    const formattedDate = format(kolkataTime, "dd-MM-yyyy hh:mm:ss a", { timeZone });

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App Password (not your actual password)
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'iamsumandal@gmail.com', // Change this to the email where you want to receive enquiries
      subject: `New Enquiry Received - ${formattedDate}`,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
