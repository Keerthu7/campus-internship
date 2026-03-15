import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, collegeName, yearOfStudy, preferredDomain, experienceLevel } = data;

    // Email sender setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content format
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hello.hynox@gmail.com', // Intha mail ku thaan varum
      subject: `New Internship Application from ${fullName}`,
      text: `
Hello Hynox Team,

You have received a new internship application. Here are the details:

Full Name: ${fullName}
Email Address: ${email}
Phone Number: ${phone}
College Name: ${collegeName}
Year of Study: ${yearOfStudy}
Preferred Domain: ${preferredDomain}
Experience Level: ${experienceLevel}

Best Regards,
Hynox Campus Website
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}