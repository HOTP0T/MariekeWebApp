import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { selectedOption, name, email, message } = req.body;

    if (!selectedOption || !name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Configure Nodemailer with Postmark SMTP settings using environment variables
    const transporter = nodemailer.createTransport({
      host: "smtp.postmarkapp.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.POSTMARK_USER,
        pass: process.env.POSTMARK_PASS,
      },
    });

    try {
      // Send email using Postmark's SMTP server
      await transporter.sendMail({
        from: '"Marieke Ceelaert" max@jtibingo.com', // Must be a verified sender in Postmark
        to: "max@jtibingo.com", // Your email address to receive the form data
        subject: `New Message from ${name}`,
        text: `
          Option Selected: ${selectedOption}
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
        html: `
          <p><strong>Option Selected:</strong> ${selectedOption}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email: ", error);  // Log the error for debugging
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}