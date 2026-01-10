# Email Integration Setup Instructions

Your contact form is now ready to send emails! Follow these steps to complete the setup:

## 1. Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

## 2. Configure Environment Variables

Create a `.env.local` file in the `web` directory with:

```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=your-email@example.com
```

Replace:
- `re_your_actual_api_key_here` with your actual Resend API key
- `your-email@example.com` with the email where you want to receive contact form submissions

## 3. Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In Resend dashboard, go to Domains
2. Add your domain
3. Add the DNS records they provide
4. Once verified, update the API route (`src/app/api/contact/route.ts`) line 17:
   ```typescript
   from: 'Portfolio Contact <contact@yourdomain.com>',
   ```

## 4. Restart Your Development Server

After adding the `.env.local` file:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## 5. Test the Contact Form

1. Go to http://localhost:3000/#contact
2. Fill out the form
3. Click "Send Message"
4. Check your email inbox for the message

## Features Implemented

✅ Real email sending via Resend API
✅ Form validation
✅ Loading states
✅ Success message
✅ Error handling with user-friendly messages
✅ Orange/gold theme styling for form
✅ Automatic form reset after successful submission

## Troubleshooting

- **"Failed to send message"**: Check that your `.env.local` file exists and has the correct API key
- **No email received**: Verify your CONTACT_EMAIL is correct and check spam folder
- **API errors**: Check the browser console and terminal for detailed error messages

## Free Tier Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month

This should be more than enough for a portfolio contact form!
