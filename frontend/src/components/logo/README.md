# Vraree Studio Logo Component

This directory contains the Vraree Studio logo assets and React component.

## Files

### Static SVG Assets
- `public/vraree-studio-light.svg` - Dark text logo for light backgrounds
- `public/vraree-studio-dark.svg` - Light text logo for dark backgrounds

### React Component
- `vraree-studio-logo.tsx` - Theme-adaptive React component

## Usage

### Basic Usage (Theme-Adaptive)
```tsx
import VrareeStudioLogo from '@/components/logo/vraree-studio-logo';

// Uses theme store to automatically switch between light/dark modes
<VrareeStudioLogo />
```

### Custom Size
```tsx
<VrareeStudioLogo
  width={100}
  height={20}
  className="my-custom-class"
/>
```

### Static Logo (Manual Theme Selection)
```tsx
import Image from 'next/image';

// Light mode
<Image
  src="/vraree-studio-light.svg"
  alt="Vraree Studio"
  width={75}
  height={16}
/>

// Dark mode
<Image
  src="/vraree-studio-dark.svg"
  alt="Vraree Studio"
  width={75}
  height={16}
/>
```

## Design Notes
- "VRAREE" uses bold Arial font (weight: bold)
- "STUDIO" uses normal Arial font (weight: normal)
- Light version: Dark gray text (#161617)
- Dark version: White text (#FFFFFF)
- Both logos are SVG vector format for scalability
