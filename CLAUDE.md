# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15 and TypeScript. The site showcases career history, projects, and blog posts with interactive components. It's deployed on Vercel and accessible at yanggoon.dev.

## Development Commands

```bash
# Development server (runs on port 4109)
npm run dev

# Production build
npm run build

# Production server
npm start

# Update commit activity data
npm run update-commits
```

## Architecture

### Core Technologies
- **Next.js 15** with App Router
- **TypeScript** (strict mode disabled)
- **Styled Components** for styling
- **MDX** for blog posts with interactive components
- **@reactleaf/modal** for modal system
- **@reactleaf/theme** for theming

### Project Structure

```
app/                    # Next.js app directory
├── home/              # Main page sections (Intro, AboutMe, History)
├── showcase/          # Blog posts and portfolio showcase
├── projects/          # Interactive project demos
├── activity/          # GitHub activity visualization
└── dev/               # Development utilities

components/            # Reusable UI components
├── Header/           # Navigation header
├── Providers/        # Context providers (client/server split)
├── modals/           # Modal components using @reactleaf/modal
└── icons/            # Custom SVG icons

lib/                   # Utilities and configuration
├── constants/        # Career history, Medium posts, etc.
├── hooks/            # Custom React hooks
├── styles/           # Theme and styling utilities
└── thirdParties/     # External service integrations

posts/                # MDX blog posts with metadata
├── [post-name]/      # Each post has its own directory
├── metadata.json     # Post metadata (title, date, keywords)
└── post.mdx          # MDX content with interactive components
```

### Key Patterns

**Path Aliases**: Use TypeScript path mapping:
- `@/lib/*` → `lib/*`
- `@/components/*` → `components/*`
- `@/posts/*` → `posts/*`

**Styling**: Styled Components with `.style.ts` files co-located with components

**MDX Posts**: Each post directory contains:
- `metadata.json` - Post metadata
- `post.mdx` - MDX content
- `components/` - Post-specific interactive components
- `Thumbnail.tsx` - Post preview thumbnail

**Modal System**: Uses `@reactleaf/modal` with centralized modal registration in `components/modals/register.ts`

**Responsive Design**: Uses `react-responsive` with adaptive breakpoints defined in `lib/styles/adaptive.ts`

## Data Sources

- **Career History**: Defined in `lib/constants/career.ts` with detailed product information
- **GitHub Activity**: Fetched via API routes in `app/activity/`
- **Blog Posts**: MDX files in `posts/` with metadata-driven rendering
- **Projects**: Interactive demos in `app/projects/` (e.g., rest-area map visualization)

## Development Notes

- The site uses Korean language (`lang="ko"`) in the HTML root
- Google Analytics integration via `lib/thirdParties/GA.tsx`
- Sitemap generation with `next-sitemap` runs after build
- No linting or type checking scripts defined - manual verification required
- Career data includes detailed product descriptions and status tracking
- Interactive components are embedded directly in MDX posts for "working examples"