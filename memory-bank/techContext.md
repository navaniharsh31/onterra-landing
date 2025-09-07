# Technical Context: Onterra Landing Page

## Technology Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with OKLCH color format
- **UI Components**: Shadcn UI (Radix UI primitives)
- **State Management**: Jotai 2.13.1
- **Data Fetching**: TanStack Query 5.87.1
- **CMS**: Sanity 4.6.1 (headless CMS)
- **Package Manager**: npm

## Current Project Structure

```
onterra-landing/
├── src/
│   ├── app/
│   │   ├── studio/[[...tool]]/     # Sanity Studio route
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/ui/              # Shadcn UI components
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility functions
│   └── sanity/                     # Sanity configuration
│       ├── env.ts
│       ├── lib/
│       │   ├── client.ts
│       │   ├── image.ts
│       │   └── live.ts
│       ├── schemaTypes/
│       └── structure.ts
├── sanity.config.ts                # Sanity Studio config
├── sanity.cli.ts                   # Sanity CLI config
└── package.json
```

## Sanity Configuration

- **Project ID**: jkbyd2en
- **Dataset**: production
- **Studio Route**: /studio
- **API Version**: 2025-09-06
- **Client**: next-sanity (v10.0.16)

## Development Environment

- **Node.js**: Latest LTS
- **Package Manager**: npm
- **Development Server**: Next.js dev server with Turbopack
- **Environment Files**: .env.local (contains Sanity credentials)

## Key Dependencies

- **Sanity**: 4.6.1 (latest stable)
- **next-sanity**: 10.0.16 (Next.js integration)
- **@sanity/vision**: 4.6.1 (GROQ query tool)
- **@sanity/image-url**: 1.2.0 (image optimization)
- **styled-components**: 6.1.19 (Sanity Studio styling)

## Current Status

- ✅ Sanity project initialized
- ✅ Environment variables configured
- ✅ Studio route set up at /studio
- ✅ TypeScript configuration complete
- ⚠️ React 19 compatibility warning (needs addressing)
- 🔄 Development server testing in progress
