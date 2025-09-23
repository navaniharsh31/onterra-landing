import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface LogoData {
  src: string;
  alt: string;
}

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Create transporter based on environment variables
function createTransporter(): nodemailer.Transporter {
  const config: EmailConfig = {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  };

  // Validate required environment variables
  if (!config.auth.user) {
    throw new Error("SMTP_USER environment variable is required");
  }

  if (!config.auth.pass) {
    throw new Error("SMTP_PASS environment variable is required");
  }

  return nodemailer.createTransport(config);
}

// Generate HTML email template
function generateContactEmailHTML(
  data: ContactFormData,
  logoData?: LogoData
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .container {
          background: white;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 10px;
        }
        .logo img {
          max-height: 40px;
          width: auto;
        }
        .subtitle {
          color: #6b7280;
          font-size: 16px;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 6px;
          border-left: 4px solid #3b82f6;
        }
        .field-label {
          font-weight: 600;
          color: #374151;
          margin-bottom: 5px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          color: #1f2937;
          font-size: 16px;
          word-wrap: break-word;
        }
        .message-field {
          white-space: pre-wrap;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
          color: #6b7280;
          font-size: 14px;
          text-align: center;
        }
        .timestamp {
          background: #e0f2fe;
          color: #0277bd;
          padding: 10px;
          border-radius: 4px;
          font-weight: 500;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">
            ${logoData ? `<img src="${logoData.src}" alt="${logoData.alt}" />` : "Onterra Capital"}
          </div>
          <div class="subtitle">New Contact Form Submission</div>
        </div>

        <div class="field">
          <div class="field-label">Name</div>
          <div class="field-value">${data.name}</div>
        </div>

        <div class="field">
          <div class="field-label">Email</div>
          <div class="field-value">${data.email}</div>
        </div>

        ${
          data.phone
            ? `
        <div class="field">
          <div class="field-label">Phone</div>
          <div class="field-value">${data.phone}</div>
        </div>
        `
            : ""
        }

        <div class="field">
          <div class="field-label">Message</div>
          <div class="field-value message-field">${data.message}</div>
        </div>

        <div class="footer">
          <div class="timestamp">
            Submitted on ${new Date().toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short",
            })}
          </div>
          <p>This message was sent from the Onterra Capital contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Generate plain text email
function generateContactEmailText(data: ContactFormData): string {
  return `
New Contact Form Submission - Onterra Capital

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}

Message:
${data.message}

Submitted on: ${new Date().toLocaleString()}

---
This message was sent from the Onterra Capital contact form.
  `.trim();
}

// Send contact form email
export async function sendContactEmail(
  data: ContactFormData,
  logoData?: LogoData
): Promise<void> {
  try {
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
    const toEmail = process.env.TO_EMAIL || "info@onterra.in";

    if (!fromEmail) {
      throw new Error("FROM_EMAIL environment variable is required");
    }

    const mailOptions = {
      from: `"Onterra Capital Contact Form" <${fromEmail}>`,
      to: toEmail,
      subject: `New Contact Form Submission from ${data.name}`,
      text: generateContactEmailText(data),
      html: generateContactEmailHTML(data, logoData),
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Failed to send email. Please try again later.");
  }
}

// Send auto-reply email to user
export async function sendAutoReplyEmail(
  userEmail: string,
  userName: string,
  logoData?: LogoData
): Promise<void> {
  try {
    const transporter = createTransporter();

    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;

    if (!fromEmail) {
      throw new Error("FROM_EMAIL environment variable is required");
    }

    const mailOptions = {
      from: `"Onterra Capital" <${fromEmail}>`,
      to: userEmail,
      subject: "Thank you for contacting Onterra Capital",
      text: `
Dear ${userName},

Thank you for reaching out to Onterra Capital. We have received your message and will get back to you within 24 hours.

Best regards,
The Onterra Capital Team

---
Onterra Capital
Real Estate Investment Solutions
      `.trim(),
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Onterra Capital</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8f9fa;
            }
            .container {
              background: white;
              border-radius: 8px;
              padding: 30px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo {
              font-size: 28px;
              font-weight: bold;
              color: #1e40af;
              margin-bottom: 10px;
            }
            .logo img {
              max-height: 50px;
              width: auto;
            }
            .message {
              font-size: 16px;
              line-height: 1.8;
              margin-bottom: 30px;
            }
            .footer {
              border-top: 1px solid #e9ecef;
              padding-top: 20px;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                ${logoData ? `<img src="${logoData.src}" alt="${logoData.alt}" />` : "Onterra Capital"}
              </div>
            </div>
            
            <div class="message">
              <p>Dear ${userName},</p>
              
              <p>Thank you for reaching out to Onterra Capital. We have received your message and will get back to you shortly.</p>
              
              <p>Best regards,<br>
              The Onterra Capital Team</p>
            </div>
            
            <div class="footer">
              <p><strong>Onterra Capital</strong><br>
              Real Estate Investment Solutions</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    // Don't throw error for auto-reply failures - we don't want to break the main flow
  }
}
