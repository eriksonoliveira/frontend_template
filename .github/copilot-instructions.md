# Copilot Instructions for This Codebase

## Overview
- This is a Next.js (TypeScript) frontend template with authentication, user posts, follow, post reactions, and profile pages.
- Main app code is under `src/app/` (routing, layouts, auth pages) and `src/components/` (UI, posts, navigation, etc).
- Data types are defined in `src/types/`. Mock and fetch logic is in `src/data/`.

## Key Patterns & Structure
- **Authentication**: Handled in `src/app/(auth)` and `src/components/auth/`.
- **Posts**: Post display and creation in `src/components/posts/`.
- **UI Components**: Shared UI in `src/components/ui/`.
- **Navigation**: Modular nav items in `src/components/nav/`.
- **Data**: Use `src/data/fetchData.ts` for data fetching and `src/data/mockPost.ts` for mock data.
- **Types**: Always import types from `src/types/`.
- **Routing**: Next.js app router structure; pages are colocated in `src/app/`.

## Developer Workflows
- **Start Dev Server**: `npm run dev` (see README)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Tailwind**: Configured via `tailwind.config.ts` and `postcss.config.mjs`.
- **TypeScript**: Configured via `tsconfig.json`.

## Project Conventions
- Use functional React components and hooks.
- Use Tailwind CSS for styling; avoid inline styles.
- Prefer named exports for components.
- Keep business logic in data or utility files, not in UI components.
- Use descriptive prop types and always type props.
- Use Next.js `Image` and `Link` for images and navigation.
- Keep mock data and fetch logic separate from UI.

## Examples
- See `src/components/posts/PostItem.tsx` for a typical post component.
- See `src/components/auth/signin-form.tsx` for authentication form patterns.
- See `src/data/fetchData.ts` for data fetching conventions.

## Integration Points
- No backend integration by default; uses mock data.
- To add backend, update fetch logic in `src/data/` and types in `src/types/`.

---
_If you are unsure about a pattern, check for similar usage in the relevant `src/components/` or `src/data/` subfolder._
