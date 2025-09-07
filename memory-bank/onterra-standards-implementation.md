# Onterra Standards Section Implementation

## Overview

The Onterra Standards section has been completely redesigned with a modern split-screen layout featuring a left informational panel and a right interactive orbital display. This implementation represents a significant departure from the original grid-based design.

## Design Specifications

### Layout Structure

- **Split-Screen Design**: Left panel (2/5 width) + Right orbital display (3/5 width)
- **Left Panel**: Dynamic content that changes based on hover interactions
- **Right Panel**: Central hub with logo + 6 orbital principles in perfect circle
- **Responsive**: Adapts to mobile with stacked layout

### Central Hub Design

- **Image**: Uses logo.png instead of text
- **Size**: 224px × 112px (w-56 h-28)
- **Positioning**: Exact center of 600×600px orbital container
- **Styling**: White background, rounded corners, shadow, border
- **Animation**: Subtle scale and opacity pulsing with Framer Motion

### Orbital Principles Design

- **Count**: 6 principles arranged in perfect circle
- **Size**: 176px × 128px (w-44 h-32) each
- **Content**: Icon + full principle title (not abbreviated)
- **Positioning**: Calculated circular distribution around central hub
- **Animation**: Static positioning (no revolving animation)
- **Hover**: Scale and lift effects with Framer Motion

## Technical Implementation

### Component Architecture

```
src/components/content/
├── OnterraStandardsSectionNew.tsx    # Main section component
├── OrbitalDisplay.tsx                # Orbital container and logic
├── CentralHub.tsx                    # Central logo element
├── PrincipleOrbital.tsx              # Individual orbital elements
└── PrincipleDetailPanel.tsx          # Hover detail display
```

### Key Components

#### OnterraStandardsSectionNew.tsx

- **Purpose**: Main section orchestrator
- **Features**: Split-screen layout, hover state management
- **State**: Manages activePrinciple for hover interactions
- **Responsive**: Mobile-first design with breakpoint adjustments

#### OrbitalDisplay.tsx

- **Purpose**: Orbital container and positioning logic
- **Features**: Perfect circular positioning, hover event handling
- **Positioning**: Mathematical calculation for 6-point circle
- **Container**: 600×600px with relative positioning

#### CentralHub.tsx

- **Purpose**: Central logo element
- **Features**: Framer Motion animations, responsive sizing
- **Image**: Next.js Image component with logo.png
- **Styling**: Professional white card design

#### PrincipleOrbital.tsx

- **Purpose**: Individual orbital principle elements
- **Features**: Hover effects, click handling, icon display
- **Content**: Full principle titles (not abbreviated)
- **Animation**: Scale and lift on hover

### Positioning Logic

#### Circular Distribution Algorithm

```typescript
const getOrbitalPosition = (
  index: number,
  totalItems: number,
  radius: number = 240
) => {
  // Container dimensions
  const containerWidth = 600;
  const containerHeight = 600;

  // Orbital element dimensions (for centering)
  const orbitalWidth = 176; // w-44 = 11rem = 176px
  const orbitalHeight = 128; // h-32 = 8rem = 128px

  // Center point of the container
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  // Distribute evenly around the circle, starting from top (12 o'clock)
  const angleStep = (2 * Math.PI) / totalItems;
  const angle = index * angleStep - Math.PI / 2; // Start from top

  // Calculate position on circle
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  // Convert to absolute positioning (top-left corner of orbital element)
  return {
    x: centerX + x - orbitalWidth / 2,
    y: centerY + y - orbitalHeight / 2,
  };
};
```

#### Central Hub Positioning

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

## Current Challenges

### Centering Issues

**Problem**: Central hub not perfectly centered within orbital display
**Status**: Active debugging and refinement
**User Feedback**: "Central Hub is not exactly in the center", "still not proper see the image"

#### Centering Attempts Made:

1. **Absolute Positioning with Transform**: `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`
2. **Flexbox Centering**: `flex items-center justify-center` on container
3. **Explicit Pixel Positioning**: Manual calculation of center coordinates
4. **Separated Positioning Logic**: Moved centering to parent container

#### Current Approach:

- **Orbital Container**: 600×600px with relative positioning
- **Central Hub Wrapper**: Absolute positioning with explicit center coordinates
- **Central Hub Component**: Simplified styling without positioning logic
- **Orbital Elements**: Calculated positions around perfect circle

## Data Structure

### Dummy Data (Current Implementation)

```typescript
const dummyData = {
  sectionTitle: "Our Standards",
  description: "Rooted in discipline and built on decades of institutional experience...",
  principles: [
    {
      id: "alignment",
      title: "Alignment Without Conflicts",
      shortTitle: "Alignment Without Conflicts",
      description: "We ensure complete alignment between our interests...",
      points: ["No hidden fees or conflicts of interest", ...],
      icon: Target,
      position: 0,
    },
    // ... 5 more principles
  ],
};
```

### Sanity Schema Requirements (Future)

The current schema needs updates to support:

- **centralHub**: Image field for logo
- **principles**: Full titles, descriptions, points arrays
- **icons**: Icon selection or reference
- **hoverContent**: Detailed information for hover states

## Animation Details

### Framer Motion Animations

#### Central Hub

```typescript
animate={{
  scale: [1, 1.02, 1],
  opacity: [0.95, 1, 0.95],
}}
transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
}}
```

#### Orbital Elements

```typescript
whileHover={{
  scale: 1.05,
  opacity: 1,
  y: -2,
}}
whileTap={{
  scale: 0.98,
}}
```

## Responsive Design

### Breakpoint Strategy

- **Desktop (lg+)**: Split-screen layout (2/5 + 3/5)
- **Tablet (md)**: Stacked layout with full-width orbital display
- **Mobile (sm)**: Single column with compact orbital display

### Mobile Adaptations

- **Orbital Size**: Reduced container and element sizes
- **Text Sizing**: Smaller fonts for mobile readability
- **Spacing**: Adjusted padding and margins
- **Touch Targets**: Larger touch areas for mobile interaction

## Future Enhancements

### Sanity Integration

- Update schema for orbital design structure
- Add centralHub field with image support
- Create useOnterraStandardsContent hook
- Replace dummy data with Sanity integration

### Performance Optimizations

- Image optimization for logo
- Animation performance tuning
- Lazy loading for orbital elements
- Reduced motion support

### Accessibility Improvements

- Keyboard navigation for orbital elements
- Screen reader support for hover states
- Focus management
- ARIA labels and descriptions

## Success Metrics

- **Visual Alignment**: Perfect centering of central hub
- **Circular Distribution**: Even spacing of orbital elements
- **Hover Interactions**: Smooth content switching
- **Responsive Design**: Consistent experience across devices
- **Performance**: Smooth animations without jank
- **Accessibility**: Full keyboard and screen reader support
