# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React business services website built with Vite, TypeScript, and Tailwind CSS using shadcn/ui components.

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Bezaleel brand colors
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router v6
- **State Management**: React Query for server state, Context API for theme
- **Animations**: Framer Motion + custom Tailwind animations

### Key Architecture Patterns

**Component Structure**:
- `src/components/` - Reusable UI components
- `src/components/ui/` - shadcn/ui components (auto-generated, avoid manual edits)
- `src/components/admin/` - Admin dashboard components
- `src/components/gallery/` - Gallery-specific components
- `src/pages/` - Page components with routing
- `src/pages/services/` - Service-specific pages

**Routing**: All routes defined in `src/App.tsx` with catch-all 404 handling. Add new routes above the `*` route.

**Styling**: 
- Custom Bezaleel brand colors defined in `tailwind.config.ts` (bezaleel-red, bezaleel-dark, etc.)
- CSS variables in `src/index.css`
- Custom animations: fade-in-up, bounce-in, pulse-glow

**Theme Management**: 
- Theme context in `src/contexts/ThemeContext.tsx` (currently locked to light mode)
- Theme toggle component available but inactive

### Important Configuration

**Path Aliases**: `@/` maps to `src/` directory (configured in `vite.config.ts`)

**Server Config**: Development server runs on `::` (IPv6) port 8080

**Build Optimization**: Uses React SWC plugin and includes development-only component tagger from Lovable

### Component Conventions

- Use TypeScript interfaces for props
- Import components from `@/` alias paths
- Follow existing naming patterns (PascalCase for components)
- Use shadcn/ui components when available before creating custom ones
- Maintain consistent spacing and layout patterns from existing components