# Sanity Webhook Setup for Vercel

This guide explains how to set up Sanity webhooks to automatically revalidate your Vercel deployment when content changes.

## 1. Environment Variables

Add these environment variables to your Vercel project:

```bash
# In Vercel Dashboard > Settings > Environment Variables
SANITY_REVALIDATE_SECRET=your_super_secret_key_here
```

**Important**: 
- ✅ **Correct**: `SANITY_REVALIDATE_SECRET` (server-side only)
- ❌ **Wrong**: `NEXT_PUBLIC_SANITY_REVALIDATE_SECRET` (would expose secret to client)
- Use a strong, random secret key. You can generate one with:

```bash
openssl rand -base64 32
```

## 2. Sanity Studio Webhook Configuration

1. Go to your Sanity project dashboard
2. Navigate to **API** > **Webhooks**
3. Click **Create Webhook**
4. Configure the webhook:
   - **Name**: `Vercel Revalidation`
   - **URL**: `https://your-domain.vercel.app/api/revalidate`
   - **Dataset**: `production` (or your dataset name)
   - **Trigger on**: `Create`, `Update`, `Delete`
   - **Filter**: Leave empty (or add specific document types)
   - **Secret**: Use the same secret from step 1
   - **API Version**: `v2024-01-01` (or latest)

## 3. Document Type Filters (Optional)

For more granular control, you can add filters:

```groq
_type in ["siteSettings", "navigation", "heroSection", "homeIntroSection", "investmentStrategies", "onterraStandards", "overviewPage", "approachPage", "teamPage", "contactPage", "legalPage", "insightPdf"]
```

## 4. Test the Webhook

1. Make a change in Sanity Studio
2. Check your Vercel function logs:
   - Go to Vercel Dashboard > Functions
   - Look for `/api/revalidate` function logs
   - You should see revalidation messages

## 5. Expected Behavior

After setup:

- ✅ Content updates appear within 30-60 seconds
- ✅ No manual revalidation needed
- ✅ Automatic cache invalidation
- ✅ Real-time updates for critical content

## 6. Troubleshooting

### Webhook Not Working?

- Check Vercel function logs for errors
- Verify the secret key matches
- Ensure the webhook URL is correct
- Check Sanity webhook delivery status

### Still Slow Updates?

- Verify `useCdn: false` in Sanity client
- Check ISR revalidation is set to 60 seconds
- Ensure webhook is triggering successfully

### Debug Mode

Add this to your revalidation API route for debugging:

```typescript
console.log("Webhook payload:", body);
console.log("Revalidation triggered for:", type, slug);
```

## 7. Performance Monitoring

Monitor your revalidation performance:

- Vercel Analytics > Functions
- Check revalidation frequency
- Monitor response times
- Watch for failed webhook deliveries

## 8. Security Notes

- Keep your `SANITY_REVALIDATE_SECRET` secure
- Don't commit secrets to version control
- Use different secrets for different environments
- Regularly rotate your secret keys
