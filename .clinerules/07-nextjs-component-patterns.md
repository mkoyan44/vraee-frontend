# Next.js Component Patterns - Best Practices

## Overview
This guide outlines the correct patterns for creating components in Next.js App Router (versions 13+), focusing on proper separation between Server and Client Components to optimize performance and maintainability.

## Component Types

### Server Components (Default)
- **Location**: All components in `app/` directory are Server Components by default
- **Capabilities**: Data fetching, direct database access, file system operations
- **Limitations**: Cannot handle user interactions, cannot use browser APIs
- **Best For**: Layout components, static content, data-heavy sections

### Client Components (Interactive)
- **Declaration**: Must include `'use client'` directive at top of file
- **Capabilities**: Event handlers, browser APIs, interactive features
- **Use Case**: Components with buttons, forms, animations, user interactions

## Implementation Guidelines

### ⚡ Performance Optimization

#### 1. Minimize Client Components
```typescript
// ❌ Avoid: Making entire component client when only one part needs it
'use client';
<FullComponent>...</FullComponent>

// ✅ Better: Isolate interactivity to child component
<ClientChildComponent onClick={handleClick} />
```

#### 2. Tree Splitting Principle
```typescript
// Pattern: Server Component (parent) wraps Client Component (child)
<Page>
  <StaticContent />
  <ClientInteractiveComponent />
</Page>
```

#### 3. Component Naming Convention
```typescript
// Clear indication of client-side nature
components/
├── page-content.tsx          // Server Component
├── interactive-form.tsx      // Client Component
├── static-card.tsx           // Server Component
```

### 🎯 Recommended Patterns

#### Interactive Button Groups
```typescript
// ✅ HowItWorksCTA component pattern
'use client';
const HowItWorksCTA: React.FC = () => {
  return (
    <button onClick={handleScroll}>Contact Us</button>
  );
};
```

#### Static Content with Interactive Elements
```typescript
// ✅ Parent: Server Component (HowItWorks)
const HowItWorks: React.FC = () => {
  return (
    <section>
      <StaticStepsContent />
      <HowItWorksCTA /> {/* Client Component */}
    </section>
  );
};
```

### 🚫 Anti-Patterns to Avoid

#### 1. Over-Client Components
```typescript
// ❌ Don't make entire page interactive
'use client';
const EntireHomePage = () => { ... };
```

#### 2. Nested Event Handlers in Props
```typescript
// ❌ This will fail
<ClientComponent
  onSubmit={(e) => {}} // Event handlers can't be passed as props
>
```

#### 3. Mixing Server and Client Logic
```typescript
// ❌ Don't access browser APIs in Server Components
const ServerComp = async () => {
  const result = await fetch('/api/data');
  window.location.href = result.url; // ❌ window undefined
};
```

## Refactoring Steps

### When Converting to Follow These Patterns:

1. **Identify Interactive Elements**
   - Buttons, links with onClick
   - Forms with handlers
   - Components using useState/useEffect

2. **Extract to Client Components**
   ```bash
   # Before: how-it-works.tsx (mixed)
   # After:
   ├── how-it-works.tsx (Server)
   └── how-it-works-cta.tsx (Client)
   ```

3. **Pass Data as Props**
   ```typescript
   // Server -> Client communication
   <ClientComponent data={staticDataFromServer} />
   ```

4. **Use Server Actions** (when applicable)
   ```typescript
   // For data mutations in Next.js 13+
   'use server';
   export async function createPost(data: FormData) { ... }
   ```

## Component Architecture

### Directory Structure
```
components/
├── ui/                    # Always Client Components (Radix UI)
├── static/               # Server Components only
├── interactive/          # Client Components with interactivity
├── layout/              # Mix of server/client layouts
└── sections/            # Page sections (usually Server with Client children)
```

### Performance Checklist
- [ ] Minimize 'use client' usage
- [ ] Split interactive and static content
- [ ] Use Suspense for loading states
- [ ] Implement proper error boundaries
- [ ] Optimize bundle sizes with tree shaking

### Validation Commands
```bash
# Check for proper client/server separation
cd frontend
npm run build              # Validates component boundaries
npm run type-check         # TypeScript validation
npm run lint               # ESLint client/server rules
```

## Migration Examples

### From Mixed Component to Split Pattern

**❌ Before (Monolithic):**
```typescript
'use client';
const HowItWorks = () => {
  const [state, setState] = useState();
  return (
    <div>
      <StaticSteps />
      <button onClick={handleClick}>Contact</button>
    </div>
  );
};
```

**✅ After (Split Architecture):**
```typescript
// how-it-works.tsx (Server)
const HowItWorks = () => {
  return (
    <section>
      <HowItWorksContent />
      <HowItWorksCTA />
    </section>
  );
};

// how-it-works-cta.tsx (Client)
'use client';
const HowItWorksCTA = () => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return <button onClick={handleClick}>Contact Us</button>;
};
```

This approach ensures optimal performance while maintaining clean, maintainable code architecture.
