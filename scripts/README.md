# Content Seeding Scripts

This directory contains scripts to automatically populate your Sanity database with initial content for the Onterra Real Estate Investment Firm homepage.

## 🚀 Quick Start

### 1. Get Your Sanity API Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project (jkbyd2en)
3. Go to "API" tab
4. Click "Add API token"
5. Give it a name like "Content Seeding"
6. Select "Editor" permissions
7. Copy the token

### 2. Add Token to Environment

Add your API token to your `.env.local` file:

```bash
# Add this line to your .env.local file
SANITY_API_TOKEN=your_token_here
```

### 3. Run the Seeding Script

```bash
# Seed content (skips if content already exists)
npm run seed

# Force seed content (overwrites existing content)
npm run seed:force
```

## 📋 What Gets Created

The script will create the following content in your Sanity database:

### Hero Section

- **Static Text**: "Building wealth through [rotating words] real estate investments"
- **Rotating Words**: strategic, innovative, proven, sustainable
- **Line Design**: Blue vertical line (enabled)
- **CTA Buttons**: "Get Started" and "Learn More"
- **Text Alignment**: Left-aligned

### Statistics Section

- **Title**: "Our Track Record"
- **5 Statistics**:
  - 20+ Years of Real Estate Experience
  - $2.5B Total Assets Under Management
  - 500+ Successful Property Acquisitions
  - 15% Average Annual Returns
  - 98% Client Satisfaction Rate

### Onterra Standards Section

- **Title**: "Onterra Standards"
- **Subtitle**: "Rooted in Discipline"
- **6 Principles**:
  1. Due Diligence
  2. Transparency
  3. Risk Management
  4. Long-term Vision
  5. Innovation
  6. Partnership

### Investment Strategies Section

- **Title**: "Investment Strategies"
- **Description**: Comprehensive approach to real estate investment
- **2 Categories**:
  - **Residential**: Single-Family Rentals, Multi-Family Properties, Residential Development
  - **Commercial**: Office Buildings, Retail Properties, Industrial Properties

## 🔧 Troubleshooting

### Error: "No API token provided"

- Make sure you've added `SANITY_API_TOKEN` to your `.env.local` file
- Restart your development server after adding the token

### Error: "Insufficient permissions"

- Make sure your API token has "Editor" permissions
- Check that the token is for the correct project

### Error: "Content already exists"

- This is normal! The script skips existing content to prevent duplicates
- Use `npm run seed:force` to overwrite existing content

### Content not showing on homepage

- Make sure your development server is running (`npm run dev`)
- Check that your Sanity project ID and dataset are correct in `.env.local`
- Verify the content was created in Sanity Studio

## 📝 Customizing Content

After seeding, you can:

1. **Edit in Sanity Studio**: Visit `http://localhost:3000/studio` to modify content
2. **Update via API**: Use the Sanity client to programmatically update content
3. **Modify the script**: Edit `seed-content.js` to change the default content

## 🎯 Next Steps

1. Run the seeding script
2. Visit your homepage at `http://localhost:3000`
3. Check Sanity Studio at `http://localhost:3000/studio`
4. Customize the content to match your specific needs
5. Add your own images and videos to the hero section

## 📞 Support

If you encounter any issues:

1. Check the console output for error messages
2. Verify your Sanity configuration
3. Ensure all environment variables are set correctly
4. Check the Sanity Studio to see if content was created
