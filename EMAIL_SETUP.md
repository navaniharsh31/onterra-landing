# Email Setup Guide for Contact Form

## Gmail + Nodemailer Configuration

The contact form is now configured to use Gmail with Nodemailer for sending emails. Follow these steps to complete the setup:

### 1. Gmail Account Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password (you'll need this)

### 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Gmail SMTP Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
FROM_EMAIL=your-gmail@gmail.com
TO_EMAIL=info@onterra.in
```

### 3. Configuration Details

- **SMTP_USER**: Your Gmail address
- **SMTP_PASS**: The 16-character app password (not your regular password)
- **FROM_EMAIL**: The sender email (usually same as SMTP_USER)
- **TO_EMAIL**: Where contact form submissions will be sent

### 4. Testing

1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the contact form
4. Check your email for the notification
5. Check the sender's email for the auto-reply

### 5. Production Considerations

- **Domain Verification**: For production, consider verifying your domain with Gmail
- **Sending Limits**: Gmail free accounts have a 500 emails/day limit
- **Professional Email**: Consider using a professional email address like `noreply@onterra.in`

### 6. Troubleshooting

**Common Issues:**

- "Invalid login" error: Make sure you're using the App Password, not your regular password
- "Less secure app" error: Enable 2FA and use App Password
- "Connection timeout": Check your internet connection and firewall settings

**Debugging Steps:**

1. Check the console logs for detailed error messages
2. Verify environment variables are set correctly
3. Test SMTP connection with a simple email client
4. Check Gmail account security settings

**Error Logs:**
All errors include detailed information about:

- What operation failed
- Error message and stack trace
- Form data (sanitized)
- Timestamp and context

### 7. Email Templates

The system includes:

- **Professional HTML email** for form submissions
- **Auto-reply email** to users
- **Responsive design** that works on all devices
- **Formatted content** with proper styling

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- Consider using environment-specific configurations for production
