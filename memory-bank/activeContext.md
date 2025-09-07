# Active Context: Onterra Landing Page

## Current Work Focus

**Phase**: Investment Strategies Sanity Integration  
**Status**: Ready for Next Phase - CMS Integration  
**Priority**: High

## Recent Achievements

1. **Sanity Project Initialization** ✅
   - Successfully created Sanity project "Onterra" (ID: jkbyd2en)
   - Configured production dataset
   - Set up embedded Studio at /studio route
   - Enabled TypeScript support
   - Generated clean project template (no predefined schemas)

2. **Environment Configuration** ✅
   - Environment variables added to .env.local
   - CORS origins configured for localhost:3000
   - Project ID and dataset properly set

3. **File Structure Created** ✅
   - Sanity configuration files in root directory
   - Studio route in src/app/studio/[[...tool]]/
   - Sanity client and utilities in src/sanity/
   - Proper TypeScript integration

4. **Cursor Rules Established** ✅
   - Comprehensive development rules created
   - Mobile-first methodology enforced
   - Production quality standards defined
   - Sanity integration patterns established

5. **Hero Section Implementation Complete** ✅
   - Rotating text animation with static headline + rotating words
   - Multiple background videos with auto-switching
   - Mobile-first responsive design
   - Full Sanity integration with custom schema
   - Performance optimized with error handling

6. **Typography Enhancement Complete** ✅
   - Inter font installed and configured
   - Font weights: 400, 500, 600, 700
   - Global CSS updated with Inter font family
   - Typography improvements with responsive scaling
   - Font loading optimized with display: swap

7. **Homepage Requirements Analysis Complete** ✅
   - Comprehensive requirements document analyzed
   - 4-section homepage plan created (Hero, Statistics, Onterra Standards, Investment Strategies)
   - Complete development roadmap established
   - Schema designs for all sections defined
   - Component architecture planned

8. **Onterra Standards Section Redesign Complete** ✅
   - Complete redesign with split-screen layout (left panel + right orbital display)
   - Central hub with logo image instead of text
   - Static circular orbital layout (no revolving animation)
   - Hover interactions showing detailed principle information
   - Framer Motion animations for scaling and positioning
   - Mobile-first responsive design implementation

9. **Statistics Section Implementation Complete** ✅
   - Statistics bar with 5 key metrics
   - Responsive grid layout (horizontal desktop, stacked mobile)
   - Animated counters and hover effects
   - Full Sanity integration with custom schema
   - Scroll-triggered animations

10. **Investment Strategies Section Redesign Complete** ✅
    - Complete redesign with split-screen layout (left flow chart tree + right content panel)
    - Professional hierarchical tree structure with dotted SVG connectors
    - Interactive node selection with auto-selection functionality (10-second intervals)
    - Main category nodes (Residential/Commercial) as visual connectors only
    - Selectable investment nodes with detailed strategy information
    - Min-height screen layout with centered content distribution
    - Professional styling matching Onterra Standards section design system
    - Full dummy data implementation ready for Sanity integration

## Current Implementation: Complete Homepage

### Homepage Sections Implemented

#### 1. Hero Section ✅

- **Rotating Text Animation**: Static headline + rotating words (Independent, Transparent, Profitable)
- **Multiple Background Videos**: Up to 5 videos with 10-second auto-switching
- **No Static Images**: Pure video background with smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Sanity Integration**: Fully editable content through Studio
- **Performance Optimized**: Lazy loading and video optimization

#### 2. Statistics Section ✅

- **5 Key Metrics**: Displayed in horizontal bar (desktop) and responsive grid (mobile)
- **Animated Counters**: Smooth number animations on scroll
- **Hover Effects**: Enhanced interactivity on statistic cards
- **Sanity Integration**: Fully editable through Studio
- **Scroll Animations**: Reveal animations using IntersectionObserver

#### 3. Onterra Standards Section 🔄

- **Split-Screen Layout**: Left informational panel + right orbital display
- **Central Hub**: Logo image (logo.png) positioned at exact center
- **Orbital Principles**: 6 principles arranged in perfect circle around central hub
- **Hover Interactions**: Left panel shows detailed principle info on hover
- **Static Layout**: No revolving animation, clean circular positioning
- **Framer Motion**: Smooth scaling and positioning animations
- **Mobile Responsive**: Adapts to different screen sizes
- **⚠️ Pending**: Central hub centering fixes and Sanity integration

#### 4. Investment Strategies Section ✅

**COMPLETED REDESIGN**:

- **Split-Screen Layout**: Left flow chart tree + right content panel (matching Standards section design)
- **Professional Tree Structure**: Multi-Family/Single-Family/Student Housing → Residential → Commercial → Office Buildings/Retail Spaces
- **SVG Dotted Connectors**: Clean, precise dotted lines connecting all levels
- **Interactive Node System**: Selectable investment strategies with hover effects and auto-selection
- **Main Category Nodes**: Residential/Commercial as static visual connectors (non-selectable)
- **Content Display**: Dynamic right panel with strategy details, metrics, and categorization
- **Min-Height Screen Layout**: Full-screen height with centered content distribution
- **Auto-Selection**: 10-second intervals cycling through selectable strategies
- **Professional Styling**: Clean, modern design following established design system
- **Responsive Design**: Mobile-first approach with proper breakpoint handling
- **Dummy Data Complete**: Ready for Sanity integration

## Current Status: Complete Homepage with Full-Screen Layouts

### Homepage Sections Status

**All 4 Homepage Sections Complete** ✅:

1. **Hero Section**: Complete with rotating text, multi-video background, Sanity integration
2. **Statistics Section**: Complete with animated counters, responsive grid, Sanity integration
3. **Onterra Standards Section**: Complete with orbital display, hover interactions, min-h-screen layout
4. **Investment Strategies Section**: Complete with flow chart tree, interactive selection, min-h-screen layout

**Next Phase**: Ready for Sanity integration completion and content population

#### Centering Attempts Made:

1. **Absolute Positioning with Transform**: `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`
2. **Flexbox Centering**: `flex items-center justify-center` on container
3. **Explicit Pixel Positioning**: Manual calculation of center coordinates
4. **Separated Positioning Logic**: Moved centering to parent container

#### Current Implementation:

- **Orbital Container**: 600x600px with relative positioning
- **Central Hub Wrapper**: Absolute positioning with explicit center coordinates
- **Central Hub Component**: Simplified styling without positioning logic
- **Orbital Elements**: Calculated positions around perfect circle

#### Technical Details:

```typescript
// Current centering approach
<div className="relative w-[600px] h-[600px]">
  <div
    className="absolute z-30"
    style={{
      left: 300 - 112, // containerWidth/2 - hubWidth/2
      top: 300 - 56,   // containerHeight/2 - hubHeight/2
    }}
  >
    <CentralHub />
  </div>
  {/* Orbital elements positioned around center */}
</div>
```

#### User Feedback:

- "Central Hub is not exactly in the center"
- "still not proper see the image"
- Multiple iterations of centering fixes applied

### Component Architecture

```
src/components/content/
├── HeroSection.tsx           # Main hero component
├── MultiVideoBackground.tsx  # Multiple video background with auto-switching
├── HeroContent.tsx          # Text content with rotating words
├── HeroCTA.tsx              # Call-to-action buttons
├── HeroOverlay.tsx          # Video overlay styling
└── RotatingText.tsx         # Animated text rotation component
```

## Immediate Next Steps

1. **Investment Strategies Sanity Integration** (Current Priority)
   - Create Sanity schema for new tree structure
   - Build useInvestmentStrategiesContent hook
   - Replace dummy data with CMS integration
   - Test content editing workflow in Studio

2. **Homepage Content Population** (Future Priority)
   - Add all homepage content in Sanity Studio
   - Test complete content editing workflow
   - Performance and accessibility optimization

## Technical Decisions Made

- **Embedded Studio**: Chose embedded Studio over separate deployment
- **Clean Template**: Started with clean project (no predefined schemas)
- **TypeScript**: Enabled TypeScript for better development experience
- **Production Dataset**: Using production dataset for development
- **Mobile-First**: All components follow Tailwind mobile-first methodology
- **Shadcn UI Only**: Using only Shadcn UI components for consistency
- **Rotating Text**: Implemented smooth text animation for hero section
- **Multi-Video Background**: Multiple videos with auto-switching for dynamic content

## Global Design System Requirements

### Typography Hierarchy

- **H1**: `text-4xl font-bold` (Section titles)
- **H2**: `text-2xl font-semibold` (Subsection titles)
- **H3**: `text-xl font-medium` (Card/item titles)
- **Body**: `text-base leading-relaxed` (Descriptive text)
- **Small**: `text-sm text-gray-600` (Supporting text)

### Spacing System

- Section spacing: `py-16` to `py-24`
- Content max-width: `max-w-7xl` with center alignment
- Mobile padding: `px-4` to `px-8`

### Color Palette

- Professional blues/greens for real estate
- Neutral grays for text and backgrounds
- High contrast ratios for accessibility

### Animations & Interactions

- Subtle scroll animations for section reveals
- Smooth hover states on interactive elements
- Loading states for video content
- Reduced motion respect for accessibility

## Next Phase Preview

After completing complete homepage:

- Property listing components
- Team member components
- Blog and news sections
- Contact and inquiry forms
