# System Patterns: Onterra Landing Page

## Architecture Patterns

### Sanity CMS Integration Pattern

- **Embedded Studio**: Studio runs at /studio route within Next.js app
- **Client-Side Integration**: Using next-sanity package for seamless integration
- **TypeScript First**: All Sanity operations are type-safe
- **Environment-Based Configuration**: Different configs for dev/prod environments
- **Schema-First Development**: New schemas (onterraStandardsNew, investmentStrategiesNew) with comprehensive field validation
- **Custom Hook Pattern**: Dedicated data fetching hooks (useInvestmentStrategiesContentNew) with TanStack Query integration

### Next.js App Router Pattern

- **App Directory Structure**: Using Next.js 15 App Router
- **Dynamic Routes**: Studio uses catch-all route [[...tool]]
- **Static Generation**: Studio configured with force-static
- **Metadata API**: Using Next.js metadata for SEO

### State Management Pattern

- **Jotai Atoms**: For global UI state management
- **TanStack Query**: For server state and caching
- **Local State**: React useState for component-level state
- **Server State**: Sanity client for CMS data

## Code Organization Patterns

### File Structure Pattern

```
src/
├── app/                    # Next.js App Router pages
├── components/            # Reusable UI components
│   └── ui/               # Shadcn UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
└── sanity/              # Sanity-specific code
    ├── lib/             # Sanity utilities
    └── schemaTypes/     # Content schemas
```

### Component Pattern

- **Shadcn UI Base**: All UI components built on Shadcn/Radix UI
- **Composition Pattern**: Complex components composed of smaller ones
- **Props Interface**: TypeScript interfaces for all component props
- **Forward Refs**: Proper ref forwarding for accessibility
- **Premium Design System**: Institutional-grade components with sophisticated styling patterns

### Premium Design Patterns

#### Glass Morphism Pattern

- **Backdrop Blur**: Advanced backdrop-blur-xl effects for premium depth
- **Multi-Layer Backgrounds**: Complex gradient combinations (slate-900/800 with opacity layers)
- **Sophisticated Borders**: Multiple border treatments (main border + ring-inset for depth)
- **Premium Shadows**: Multi-level shadow systems with precise opacity control

#### Light/Dark Contrast Pattern

- **Strategic Visual Hierarchy**: Light clean backgrounds with dramatic dark focal points
- **Content Separation**: Clean minimal sections (flow charts) vs premium content panels
- **Typography Optimization**: Light text (white/slate-100) optimized for dark backgrounds
- **Professional Color Palette**: Institutional investment firm aesthetic (slate-900/800, blue-400 accents)

#### Enhanced Animation Pattern

- **Sophisticated Transitions**: Professional easing with staggered entrance animations
- **Interactive States**: Advanced hover effects with scale/transform combinations
- **Loading States**: Premium skeleton loading with branded styling
- **Error States**: Professional error containers matching overall design system

### Data Fetching Pattern

- **Custom Hooks**: Data fetching logic encapsulated in custom hooks
- **TanStack Query**: Server state management and caching
- **Error Boundaries**: Proper error handling for data fetching
- **Loading States**: Consistent loading state management

## Sanity-Specific Patterns

### Schema Definition Pattern

- **TypeScript Types**: Generated types from schemas
- **Validation Rules**: Proper validation for all fields
- **Reference Fields**: Proper relationship handling
- **Image Handling**: Optimized image processing

### Client Configuration Pattern

- **Environment Variables**: Secure credential management
- **CDN Configuration**: Optimized content delivery
- **API Versioning**: Proper API version management
- **Error Handling**: Comprehensive error handling

### Studio Configuration Pattern

- **Plugin Architecture**: Modular plugin system
- **Custom Tools**: Custom studio tools for specific needs
- **User Permissions**: Role-based access control
- **Preview Configuration**: Live preview setup

## Development Patterns

### TypeScript Patterns

- **Strict Mode**: Enabled strict TypeScript configuration
- **Type Generation**: Automated type generation from schemas
- **Interface Segregation**: Small, focused interfaces
- **Generic Types**: Reusable generic type definitions

### Testing Patterns

- **Unit Tests**: Component-level testing
- **Integration Tests**: Data fetching and state management
- **E2E Tests**: Critical user flow testing
- **Type Testing**: TypeScript type checking

### Performance Patterns

- **Image Optimization**: Next.js Image component with Sanity
- **Code Splitting**: Dynamic imports for large components
- **Caching Strategy**: Multi-level caching (CDN, TanStack Query, browser)
- **Bundle Optimization**: Tree shaking and dead code elimination
- **Height Optimization**: min-h-screen/max-h-screen constraints for optimal viewport usage
- **Content Distribution**: Perfect vertical centering with responsive layout distribution

### Layout Patterns

#### Full-Screen Section Pattern

- **Height Constraints**: min-h-screen/max-h-screen for optimal viewport utilization
- **Content Centering**: flex items-center justify-center for perfect vertical distribution
- **Responsive Grid**: 12-column grid system with optimized breakpoints (lg:grid-cols-12)
- **Professional Spacing**: Consistent gap systems (gap-16, gap-24, gap-32) for institutional look

#### Premium Background Pattern

- **Multi-Layer System**: Base gradients + grid patterns + radial overlays + corner accents
- **Professional Grid**: Subtle grid patterns with precise opacity and sizing (60px 60px)
- **Sophisticated Overlays**: Multiple radial gradients for depth and visual interest
- **Texture Integration**: Mix-blend-overlay for subtle professional texture effects

#### Premium Animated Background System Pattern

- **Floating Gradient Orbs**: 3 large gradient orbs (384px, 320px, 448px) with subtle opacity (5-8%)
- **Full Viewport Movement**: Edge-to-edge floating using viewport units (vw/vh) with calc() for precise positioning
- **Diversified Animation Patterns**:
  - **Rectangular Path**: Clean geometric movement (24s cycle)
  - **Figure-8 Pattern**: Smooth infinity movement (28s cycle)
  - **Wave Pattern**: Organic horizontal wave motion (32s cycle)
- **Professional Color System**: Blue (rgba(59, 130, 246)), Slate (rgba(100, 116, 139)), Purple (rgba(139, 92, 246))
- **Framer Motion Integration**: Sophisticated easing (easeInOut) with proper timing distribution
- **Brand Signature System**: Consistent orb pattern across sections creates institutional visual identity
- **Performance Optimized**: pointer-events-none, efficient transform calculations, single render layer

#### Interactive Component Pattern

- **Auto-Selection System**: Timed cycling through content (10-second intervals)
- **Visual Feedback**: Clear active states with sophisticated hover transitions
- **Professional States**: Loading, error, and empty states matching premium design
- **Accessibility First**: Proper ARIA labels and keyboard navigation support
