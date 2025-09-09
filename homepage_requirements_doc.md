
bu# Real Estate Investment Firm - Homepage Requirements Document

## Project Overview
**Framework**: Next.js  
**Styling**: Tailwind CSS + shadcn/ui (customized)  
**CMS**: Sanity (all content manageable without code changes)  
**Design Philosophy**: Professional, trustworthy, modern real estate investment aesthetic

---

## Section 1: Hero Section

### Design Requirements
- **Background**: Multiple looping background videos (ensure smooth transitions between videos)
- **Text Layout**: Left-aligned, vertically centered
- **Typography**: Static introductory text with one rotating word/phrase
- **Visual Element**: Single vertical line design element positioned to the left of the text block

### Content Structure (Sanity Schema)
```
heroSection: {
  backgroundVideos: [
    {
      videoUrl: string,
      alt: string,
      duration?: number
    }
  ],
  staticText: {
    beforeRotatingWord: string, // e.g., "Building wealth through"
    rotatingWords: [string], // e.g., ["strategic", "innovative", "proven"]
    afterRotatingWord: string // e.g., "real estate investments"
  },
  lineDesign: {
    enabled: boolean,
    color: string,
    height: string
  }
}
```

### Technical Considerations
- Video optimization for web (WebM/MP4 formats)
- Fallback static image for slow connections
- Accessibility: proper alt text and reduced motion preferences
- Mobile responsiveness: consider static background on mobile devices

---

## Section 2: Statistics Bar

### Design Requirements
- **Layout**: 5 statistics displayed horizontally across the page
- **Visual Hierarchy**: Large numerical value (e.g., "20+") positioned above descriptive text
- **Spacing**: Equal distribution with proper visual separation
- **Responsive**: Stack vertically on mobile, 2-3 per row on tablet

### Content Structure (Sanity Schema)
```
statisticsSection: {
  title?: string, // Optional section title
  statistics: [
    {
      value: string, // e.g., "20+"
      label: string, // e.g., "Years of Real Estate Experience"
      suffix?: string, // e.g., "%", "M+", "K+"
    }
  ] // Array of exactly 5 items
}
```

### Design Recommendations
- Use large, bold typography for numerical values (text-4xl or larger)
- Subtle dividers between statistics (vertical lines or spacing)
- Consider animated counters on scroll for engagement
- Background: subtle contrast from main page background

---

## Section 3: Onterra Standards

### Design Requirements
- **Section Header**: "Onterra Standards" with subtitle "Rooted in Discipline"
- **Layout**: 6 main principles in a grid format (3x2 or 2x3 depending on screen size)
- **Card Design**: Each principle as a distinct card with title and 2-3 supporting points
- **Visual Style**: Professional cards with subtle shadows/borders

### Content Structure (Sanity Schema)
```
onterraStandards: {
  sectionTitle: string, // "Onterra Standards"
  subtitle: string, // "Rooted in Discipline"
  principles: [
    {
      title: string, // e.g., "Due Diligence Excellence"
      description?: string, // Optional brief description
      points: [string], // 2-3 supporting points
      icon?: {
        type: 'image' | 'iconify',
        value: string
      }
    }
  ] // Array of 6 items
}
```

### Layout Recommendations
**Desktop**: 3 columns x 2 rows grid
**Tablet**: 2 columns x 3 rows grid  
**Mobile**: Single column stack

### Card Design Elements
- Clean white/light background with subtle border
- Icon/visual element at top of each card
- Title in medium-large font weight
- Bullet points or numbered list for supporting points
- Consistent height across all cards
- Hover effects for interactivity

---

## Section 4: Investment Strategies

### Design Requirements
- **Main Categories**: Residential and Commercial (two primary sections)
- **Interaction Model**: Expandable FAQ-style or tabbed interface
- **Content Structure**: Each strategy has title + detailed paragraph
- **Layout**: Side-by-side on desktop, stacked on mobile

### Content Structure (Sanity Schema)
```
investmentStrategies: {
  sectionTitle: string, // "Investment Strategies"
  sectionDescription?: string,
  categories: [
    {
      categoryName: string, // "Residential" or "Commercial"
      categoryDescription?: string,
      strategies: [
        {
          title: string, // e.g., "Single Family Rentals"
          description: string, // Detailed paragraph
          highlights?: [string], // Key bullet points
          isExpandedByDefault?: boolean
        }
      ] // 3-4 strategies per category
    }
  ]
}
```

### Interaction Design Options

**Option A: Accordion/FAQ Style**
- Collapsed by default with expand/collapse functionality
- Clean typography with clear visual hierarchy
- Smooth animations for expand/collapse

**Option B: Tabbed Interface**
- Main tabs for Residential/Commercial
- Sub-content shows strategies within each category
- More compact, traditional approach

**Recommended: Option A (Accordion)**
- Better for mobile experience
- Allows users to focus on specific strategies
- More engaging interaction pattern

### Component Structure
- Use shadcn/ui Accordion component as base
- Custom styling to match brand aesthetics
- Proper focus management for accessibility
- Icons to indicate expand/collapse state

---

## Global Design System Requirements

### Typography Hierarchy
- **H1**: Section titles (text-4xl, font-bold)
- **H2**: Subsection titles (text-2xl, font-semibold)  
- **H3**: Card/item titles (text-xl, font-medium)
- **Body**: Descriptive text (text-base, leading-relaxed)
- **Small**: Supporting text (text-sm, text-gray-600)

### Color Palette Considerations
- Primary brand colors for CTAs and accents
- Neutral grays for text and backgrounds
- Professional blues/greens often work well for real estate
- High contrast ratios for accessibility

### Spacing System
- Consistent vertical rhythm between sections (py-16 to py-24)
- Proper content max-width (max-w-7xl) with center alignment
- Adequate padding for mobile devices (px-4 to px-8)

### Animation & Interactions
- Subtle scroll animations for section reveals
- Smooth hover states on interactive elements
- Loading states for video content
- Reduced motion respect for accessibility

---

## CMS Integration Notes

### Sanity Studio Considerations
1. **Rich Text Fields**: Use Portable Text for longer descriptions
2. **Media Management**: Proper video compression and optimization
3. **Preview Functionality**: Real-time preview of content changes
4. **SEO Fields**: Meta titles, descriptions for each section
5. **Conditional Fields**: Show/hide options based on content type

### Developer Handoff Requirements
1. **Environment Setup**: Sanity project ID and dataset configuration
2. **Content Modeling**: Complete schema definitions matching current GROQ queries
3. **Image Optimization**: Next.js Image component integration
4. **Performance**: Lazy loading for videos and images
5. **Animation Library**: Framer Motion setup and configuration
6. **Motion Optimization**: Hardware acceleration for smooth animations
7. **Analytics**: Proper event tracking for user interactions and animation completions

---

## Success Metrics & Considerations

### Performance Targets
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Video Loading**: Progressive loading with fallbacks

### Accessibility Requirements
- **WCAG 2.1 AA compliance**
- **Keyboard navigation** for all interactive elements
- **Screen reader compatibility**
- **Color contrast ratios** meeting standards

### Mobile-First Approach
- Touch-friendly interaction targets (minimum 44px)
- Readable typography without zooming
- Optimized video delivery for mobile networks
- Progressive enhancement for advanced features