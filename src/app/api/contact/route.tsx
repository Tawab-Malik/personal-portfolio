const nodemailer = require("nodemailer");

export async function POST(req: any) {
    try {
        const { name, email, phone, subject, message } = await req.json();

        if (!name || !email || !phone || !subject || !message) {
            return new Response("All fields are required.", { status: 400 });
        }

        // Set up transporter with correct configuration
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // Gmail's SMTP server
            port: 465, // Port for SSL connection
            secure: true, // Use SSL
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address from .env
                pass: process.env.GMAIL_PASS, // Your Gmail App password from .env
            },
        });

        const mailOptions = {
            from: email, // Sender's email address
            to: process.env.GMAIL_USER, // Your Gmail address (receiver)
            subject: `Contact Form Submission: ${subject}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        return new Response("Email sent successfully.", { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response("Failed to send email.", { status: 500 });
    }
}
