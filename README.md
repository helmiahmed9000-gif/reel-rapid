# Reel Rapid Agency Website

A premium video marketing agency website built with Next.js 16, Tailwind CSS 4, and shadcn/ui. Features a clean, Stripe-inspired design with a vibrant orange color scheme and a boxed 1080px layout.

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#f5a042` - The signature brand color
- **Complete Orange Scale**: From light tints (`orange-50`) to deep shades (`orange-950`)
- **Neutral Grays**: Carefully selected for optimal text contrast and backgrounds
- **WCAG AA Compliant**: All color combinations meet accessibility standards

### Layout System
- **Boxed Layout**: Maximum width of 1080px
- **Centered Content**: All content constrained and centered with `margin: 0 auto`
- **Responsive Padding**: 
  - Mobile (< 640px): `16px`
  - Tablet (640px - 1024px): `24px`
  - Desktop (> 1024px): `32px`

### Typography
- Modern font stack using Geist Sans and Geist Mono
- Clear hierarchy with smooth scaling
- Optimized for readability

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **TypeScript**: Full type safety
- **CMS**: Contentful (for blog functionality)
- **Icons**: Lucide React

## 📁 Project Structure

```
reel-rapid-agency/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx          # Services overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual service pages
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── blog/
│   │       ├── page.tsx          # Blog listing
│   │       └── [slug]/
│   │           └── page.tsx      # Individual blog posts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Container.tsx         # 1080px boxed container
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/                 # Homepage sections
│   ├── forms/                    # Form components
│   ├── blog/                     # Blog-specific components
│   └── ui/                       # shadcn/ui components
├── lib/
│   ├── contentful.ts             # Contentful client & utilities
│   └── utils.ts
└── public/
    └── images/
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 20+ 
- npm or yarn
- Contentful account (for blog functionality)

### Installation

1. **Clone the repository**
   ```bash
   cd reel-rapid-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   # Copy from env.example.txt
   CONTENTFUL_SPACE_ID=your_space_id_here
   CONTENTFUL_ACCESS_TOKEN=your_access_token_here
   CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

### Static Pages
- **Homepage** (`/`): Hero, services overview, value proposition, testimonials, CTA
- **About** (`/about`): Company story, mission, team, values
- **Services Overview** (`/services`): Grid of all 6 services
- **Individual Services** (`/services/[slug]`):
  - Viral Short Videos
  - Product Videos
  - Explainer Videos
  - Tutorial Videos
  - Storytelling Videos
  - Video Ads
- **Contact** (`/contact`): Contact form with validation

### Dynamic Pages (Contentful)
- **Blog Listing** (`/blog`): All blog posts with pagination/filtering
- **Blog Post** (`/blog/[slug]`): Individual post with rich text, author info, related posts

## 🎯 Key Features

### Design Features
- ✅ Stripe-inspired minimalist design
- ✅ 1080px boxed layout for focused content
- ✅ Orange (`#f5a042`) color scheme with complete palette
- ✅ Subtle gradients and smooth transitions
- ✅ Micro-animations on hover and scroll
- ✅ Glassmorphism effects
- ✅ Premium typography and iconography
- ✅ Dark mode support

### Technical Features
- ✅ Server-side rendering (SSR)
- ✅ Incremental Static Regeneration (ISR) for blog
- ✅ TypeScript for type safety
- ✅ Responsive, mobile-first design
- ✅ SEO optimized with meta tags
- ✅ Accessibility (WCAG AA compliant)
- ✅ Performance optimized

## 🎨 Using the Container Component

The `Container` component ensures consistent 1080px boxed layout:

```tsx
import { Container } from '@/components/layout/Container';

// Basic usage
<Container>
  <h1>Your content here</h1>
</Container>

// As a section with custom styles
<Container as="section" className="py-16">
  <h2>Section content</h2>
</Container>

// Full-width background with boxed content
<section className="w-full bg-gradient-to-br from-orange-50 to-white">
  <Container className="py-16">
    {/* Content constrained to 1080px */}
  </Container>
</section>
```

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Color Usage Examples

```tsx
// Primary orange button
<button className="bg-primary text-primary-foreground hover:bg-orange-600">
  Get Started
</button>

// Gradient background
<div className="bg-gradient-to-br from-orange-50 to-white">
  Content
</div>

// Border accent
<div className="border-l-4 border-primary">
  Highlighted content
</div>
```

## 🔧 Customization

### Updating Colors
Modify the color variables in `app/globals.css` under the `:root` and `.dark` selectors.

### Changing Container Width
Update the max-width in `components/layout/Container.tsx` or modify the Tailwind configuration.

### Adding shadcn/ui Components
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

## 📝 Development Phases

- [x] **Phase 1**: Setup & Foundation
  - [x] Initialize Next.js 16 with TypeScript
  - [x] Configure Tailwind CSS 4
  - [x] Set up shadcn/ui
  - [x] Create color scheme
  - [x] Build Container component
  - [x] Set up project structure

- [ ] **Phase 2**: Static Pages
  - [ ] Build layout components (Header, Footer)
  - [ ] Create Homepage
  - [ ] Create About page
  - [ ] Create Services pages
  - [ ] Create Contact page

- [ ] **Phase 3**: Contentful Integration
  - [ ] Set up Contentful client
  - [ ] Build Blog listing
  - [ ] Build Blog post page
  - [ ] Implement ISR

- [ ] **Phase 4**: Polish & Optimization
  - [ ] Add animations
  - [ ] Optimize performance
  - [ ] SEO implementation
  - [ ] Accessibility audit
  - [ ] Cross-browser testing

## 📞 Support

For questions or issues, please contact the development team.

## 📄 License

Copyright © 2025 Reel Rapid Agency. All rights reserved.
