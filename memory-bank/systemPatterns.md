# System Patterns: Onterra Landing Page

## Architecture Patterns

### Sanity CMS Integration Pattern

- **Embedded Studio**: Studio runs at /studio route within Next.js app
- **Client-Side Integration**: Using next-sanity package for seamless integration
- **TypeScript First**: All Sanity operations are type-safe
- **Environment-Based Configuration**: Different configs for dev/prod environments

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
