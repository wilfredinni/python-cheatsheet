# Python Cheatsheet - AI Coding Assistant Instructions

## Project Overview

This is a Vue 3 + Vite-based documentation website for Python programming reference, featuring a comprehensive cheatsheet, blog posts, and built-in function documentation. The site uses Vue-SSG for static generation and is deployed on Netlify.

## Architecture & Key Patterns

### Content Structure

- **Cheatsheet pages**: Markdown files in `docs/cheatsheet/` (e.g., `basics.md`, `control-flow.md`)
- **Built-in functions**: Individual pages in `docs/builtin/` (e.g., `abs.md`, `print.md`)
- **Blog posts**: Markdown files in `docs/blog/` with frontmatter metadata
- **Modules documentation**: Standard library references in `docs/modules/`

### Routing & Layout System

- Uses `vite-plugin-pages` for file-based routing with multiple layouts:
  - `default.vue`: Main layout with sidebar + TOC
  - `article.vue`: Blog post layout
  - `fullPage.vue`: Full-width pages
  - `blog.vue`: Blog index layout
- Route metadata defined in `<route lang="yaml">` blocks
- Navigation structure centralized in `src/store/navigation.ts`

### Content Rendering

- Markdown files auto-converted to Vue components via `unplugin-vue-markdown`
- Prism.js for syntax highlighting with custom theme
- Custom Vue components available in markdown (e.g., `<base-title>`, `<base-disclaimer>`)
- Automatic TOC generation from headings using `markdown-it-anchor`

### Key Features Implementation

- **Reader Mode**: Full-screen reading with font size controls (`src/store/reader.ts`)
- **Dark Mode**: Theme toggle with system preference detection
- **Search**: Algolia DocSearch integration (`src/components/AlgoliaDocSearch.vue`)
- **Contributors**: Auto-fetched from GitHub API (`scripts/fetch-contributors.ts`)

## Development Workflows

### Essential Commands

```bash
pnpm dev                    # Development server
pnpm build                  # Production build (Vue-SSG)
pnpm fetch-contributors     # Update contributors list
pnpm lint                   # ESLint check
pnpm typecheck              # TypeScript validation
```

### Content Creation Patterns

**New Cheatsheet Page:**

```markdown
---
title: Topic Name - Python Cheatsheet
description: Brief description of the topic
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Topic Name
</base-title>

<!-- Content with proper heading structure -->
```

**New Blog Post:**

```markdown
---
title: Post Title - Python Cheatsheet
description: Post description
date: MMM DD, YYYY
updated: MMM DD, YYYY
tags: python, topic, level
socialImage: /blog/image.jpg
---

<route lang="yaml">
meta:
    layout: article
    # duplicate frontmatter here
</route>

<blog-title-header :frontmatter="frontmatter" title="Display Title" />
```

### Navigation Updates

- Add new routes to `src/store/navigation.ts` in appropriate section
- Use `updated: true` flag for highlighting new content
- Internal links use `<router-link>` for SPA navigation

## Project-Specific Conventions

### Component Organization

- **UI Components**: `src/components/ui/` - reusable base components
- **Layout Components**: `src/components/layout/` - navigation, sidebars, footers
- **Icons**: `src/components/icons/` - SVG icon components
- **Auto-imports**: Components auto-registered via `unplugin-vue-components`

### Styling Approach

- **Tailwind CSS** for utility-first styling
- **Prose classes** for markdown content styling
- **CSS custom properties** for theme variables
- **Dark mode** via CSS classes, not Tailwind's dark variant

### State Management

- **Pinia stores** for global state (navigation, reader mode, newsletter)
- **VueUse composables** for reactive utilities
- **Auto-imports** for composables and Vue APIs

### Build & Deployment

- **SSG mode**: Pre-generates all routes for static hosting
- **PWA enabled**: Service worker + offline support
- **Sitemap generation**: Auto-generated in build process
- **Netlify deployment**: Build command `pnpm build`, publish `dist/`

## Integration Points

### External Services

- **Algolia Search**: App ID, API key, index name via env vars
- **Newsletter**: Beehiiv integration for subscriptions
- **Analytics**: Plausible analytics integration
- **Sponsors**: Carbon Ads + custom sponsor components

### GitHub Integration

- **Edit links**: Point to correct repo paths (`docs/` vs `src/pages/`)
- **Issue/discussion links**: Footer integration for feedback
- **Contributors**: GitHub API for automatic contributor fetching

## Common Pitfalls & Solutions

- **Route metadata**: Must duplicate frontmatter in `<route>` block for proper SSG
- **Component imports**: Use auto-imports, avoid manual imports when possible
- **Markdown components**: Register in `src/components.d.ts` for TypeScript
- **Static assets**: Reference from `public/` directory in production builds
- **TOC generation**: Requires proper heading hierarchy (h2, h3, etc.)

## Content Guidelines

- Use consistent frontmatter structure across similar content types
- Link internally with `<router-link>` for better SPA experience
- Include code examples in fenced blocks for proper syntax highlighting
- Add social images for blog posts to improve sharing
- Update navigation store when adding new major sections
