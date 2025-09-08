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
│   │   ├── globals.css             # Global styles with OKLCH colors
│   │   ├── layout.tsx              # Root layout with providers
│   │   └── page.tsx                # Homepage with 4 premium sections
│   ├── components/
│   │   ├── ui/                     # Shadcn UI components (DO NOT EDIT)
│   │   ├── content/                # Premium content sections
│   │   │   ├── HeroSection.tsx     # Hero with rotating text
│   │   │   ├── StatisticsSection.tsx # Animated statistics bar
│   │   │   ├── OnterraStandardsNew.tsx # Orbital principle display
│   │   │   ├── InvestmentStrategiesNew.tsx # Premium flow chart
│   │   │   ├── InvestmentFlowChart.tsx # Hierarchical tree
│   │   │   ├── FlowChartNode.tsx   # Interactive tree nodes
│   │   │   ├── StrategyDetailPanel.tsx # Dark theme content panel
│   │   │   └── [20+ other components]
│   │   ├── layout/                 # Layout components
│   │   └── providers/              # React context providers
│   ├── hooks/                      # Custom React hooks with TanStack Query
│   │   ├── useHeroContent.ts
│   │   ├── useStatisticsContent.ts
│   │   ├── useOnterraStandardsContentNew.ts
│   │   └── useInvestmentStrategiesContentNew.ts
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   └── sanity/                     # Sanity configuration
│       ├── env.ts                  # Environment config
│       ├── lib/
│       │   ├── client.ts           # Sanity client
│       │   ├── image.ts            # Image URL builder
│       │   └── live.ts             # Live preview
│       ├── schemaTypes/
│       │   ├── heroSection.ts      # Hero schema
│       │   ├── statisticsSection.ts # Statistics schema
│       │   ├── onterraStandardsNew.ts # Orbital display schema
│       │   ├── investmentStrategiesNew.ts # Flow chart schema
│       │   └── index.ts            # Schema exports
│       └── structure.ts            # Studio structure
├── memory-bank/                    # AI memory bank for project continuity
├── scripts/                        # Utility scripts
│   └── seed-content.js            # Content seeding script
├── sanity.config.ts               # Sanity Studio config
├── sanity.cli.ts                  # Sanity CLI config
└── package.json                   # Dependencies and scripts
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
- **Framer Motion**: 11.15.0 (advanced animations and interactions)
- **Lucide React**: 0.468.0 (professional icons for investment firm aesthetic)

## Premium Design Implementation

### Advanced Component Architecture

- **Glass Morphism Effects**: backdrop-blur-xl with sophisticated gradient combinations
- **Multi-Layer Backgrounds**: Professional grid patterns, radial overlays, corner accents
- **Institutional Typography**: Light-on-dark optimization for premium content panels
- **Height-Constrained Layouts**: min-h-screen/max-h-screen for optimal viewport usage

### Current Schemas

- **heroSection**: Hero content with rotating text and multiple videos
- **statisticsSection**: 5-metric statistics bar with animation support
- **onterraStandardsNew**: Orbital principle display with central hub logo
- **investmentStrategiesNew**: Hierarchical tree structure with strategy details and flow configuration

## Current Status

- ✅ **Sanity CMS**: Complete integration with embedded Studio at /studio
- ✅ **Homepage Sections**: All 4 sections complete with premium institutional design
- ✅ **Premium Design System**: Sophisticated light/dark contrast with glass morphism
- ✅ **Full Sanity Integration**: New schemas, hooks, and CMS-driven content
- ✅ **Production Quality**: Zero TypeScript errors, ESLint compliance
- ✅ **Performance Optimized**: Height constraints, responsive design, optimized animations
- ✅ **Development Workflow**: Hot reload working for both Next.js and Sanity
- ✅ **Advanced Components**: 20+ premium components with institutional aesthetics
