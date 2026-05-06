AI Agent Instructions – Follow these rules before editing any file in this repository.

1. Core Philosophy (Non-negotiable)
Routes are thin: src/app/ pages only import from features/. NO business logic inside app/.

Features are fat: A feature owns its components, data, types, and utilities.

Config is centralized: All site-wide constants live in src/config/. NO magic strings.

Generated files are sacred: src/__registry__/ is auto-generated. NEVER edit it manually.

Single source of truth: All personal data (name, bio, projects) comes from features/profile/data/. Update there, reflect everywhere.

2. Directory Rules (Where Code Goes)
Type of Code	Destination	Example
Page route component	src/app/(app)/(root)/page.tsx	Only imports, no logic
Domain-specific UI	src/features/[feature]/components/	profile-header.tsx
Domain data (static)	src/features/[feature]/data/	projects.ts, user.ts
Domain types	src/features/[feature]/types/	user.ts
Shared UI component (cross-feature)	src/components/	site-header.tsx
Raw shadcn primitive	src/components/ui/	button.tsx
Global React hook (cross-feature)	src/hooks/	use-media-query.ts
Third-party adapter wrapper	src/lib/	libphonenumber.ts
Pure function (zero deps)	src/utils/	string.ts, url.ts
App-wide constants	src/config/	site.ts
Build-time Node script	src/scripts/	build-registry.mts
Distributable component	src/registry/[name]/[name].tsx	Must match folder name
Static asset (fonts, etc.)	src/assets/	fonts, metadata JSON
Public static file	public/	r/registry.json
Publishable NPM package	packages/	ncdai/
If you don't know where to put code, stop and read PROJECT_STRUCTURE.md Section 3.

3. Import Rules (Strict)
Always use @/ alias: import { Button } from "@/components/ui/button"

NEVER use relative paths: ../../../ is forbidden.

Import order (enforced by ESLint):

External libraries (React, Next.js)
@/config/*
@/features/*
@/components/*
@/hooks/*
@/lib/*
@/utils/*
@/types/*
Local relative imports (only within same feature)
4. File Naming Convention (All files)
Type	Pattern	Example
React components	kebab-case.tsx	profile-header.tsx
Custom hooks	use-kebab-case.ts	use-media-query.ts
Types	kebab-case.ts	nav.ts
Data files	kebab-case.ts	user.ts
Utilities	kebab-case.ts	string.ts
Config	kebab-case.ts	site.ts
Scripts	kebab-case.mts	build-registry.mts
MDX blog	kebab-case.mdx	welcome.mdx
Rule: Every file uses kebab-case. No exceptions.

5. Export Naming Convention
What	Pattern	Example
React component	PascalCase (named export)	export function ProfileHeader()
Data constant	SCREAMING_SNAKE_CASE	export const USER, export const SITE_INFO
Custom hook	camelCase with use prefix	export function useMediaQuery()
Utility function	camelCase	export function copyToClipboard()
Type/Interface	PascalCase	export interface User, export type NavItem
6. Adding a New Feature (Step-by-Step)
Create src/features/[feature-name]/

Add types/ – define data shape

Add data/ – populate typed data (always from user.ts source of truth)

Add components/ – render the data

Import into src/app/(app)/(root)/page.tsx (or appropriate route)

Zero changes needed to existing features

7. Component Hierarchy Rules
Tier 1 (Primitives) : src/components/ui/ – shadcn components. No business logic.

Tier 2 (App components) : src/components/ – assembled from Tier 1. Feature-agnostic.

Tier 3 (Feature components) : src/features/*/components/ – business-logic-aware. Can import from data/.

8. State Management Rules
Jotai → Client UI state (theme, menu open/close)

SWR → Server data fetching (GitHub stats, dynamic content)

next-themes → Theme state (persists to localStorage)

NEVER use React Context for global state (Jotai is the provider)

9. Data Layer Rules
Static data is typed TypeScript constants – No runtime API for profile data.

Source of truth for personal info : features/profile/data/user.ts

Changing a field in user.ts updates: page title, OG image alt text, JSON-LD schema, Twitter card, and all components.

Base64 encoding for contact info – Not security, just obfuscation. Document with comment + decoder link.

10. MDX / Blog Rules
Blog posts live in src/features/blog/content/

Frontmatter REQUIRED:

mdx
---
title: "Post Title"
description: "Brief description for SEO"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
category: "blog" | "components"
---
category: "blog" → /blog/[slug]

category: "components" → /components/[slug]

Use ComponentPreview for live registry components inside MDX.

11. Registry System Rules (For Distributable Components)
Source: src/registry/[component-name]/[component-name].tsx

Metadata: src/registry/registry-components.ts

Build command: pnpm registry:build

Output: src/__registry__/ (auto-generated, DO NOT EDIT)

Public URL: https://shilok.dev/r/[component-name]

Installation: npx shadcn add https://shilok.dev/r/[component-name]

NEVER manually edit src/__registry__/ or public/r/registry.json

12. Configuration Rules
Central config file : src/config/site.ts

NO direct process.env access except inside src/config/site.ts

Required env vars: APP_URL, REGISTRY_URL

Site constants (nav, UTM params, URLs) go in site.ts, not scattered.

14. TypeScript Rules
Strict mode is ON – no any unless absolutely necessary.

tsconfig.json excludes src/__registry__/ (generated code).

tsconfig.scripts.json for Node scripts (uses different module resolution).

Path alias @/* resolves to ./src/* – use it everywhere.

15. CSS & Styling Rules
Tailwind CSS v4 – configure via @theme and @layer in src/styles/globals.css

NO tailwind.config.js – everything is in CSS.

Use cn() from @/lib/utils for conditional classes.

Global design tokens = CSS custom properties defined in globals.css.

16. Performance Rules
Static generation by default – All profile data is compile-time constant.

Client components require "use client" – Add only for interactive state, event handlers, browser APIs.

Lazy load registry previews – React.lazy() in __registry__/index.tsx

Bundle size matters – Trimmed libphonenumber.metadata.json (only needed country codes).

17. Adding a New Utility Function
Question: Does it depend on an external library?

YES → Put in src/lib/ (adapter)

NO → Put in src/utils/ (pure function)

Example: copyToClipboard() (pure, uses Clipboard API) → utils/copy.ts
Example: libphonenumber.format() (depends on library) → lib/libphonenumber.ts

18. Working with LLM Routes ((llms)/ route group)
Purpose: Machine-readable text for AI agents.

Files: about.md/, experience.md/, projects.md/, etc.

NO HTML shell – plain text or markdown only.

Update by changing src/features/profile/data/*.ts – the LLM routes read from there.

19. Open Graph (OG) Image Rules
Source: src/app/og/

Uses @vercel/og – React components to PNG.

Default, simple, and domain variants available.

Styling matches the site's design tokens (from globals.css).

20. When in Doubt…
Ask yourself these 5 questions before creating a new file:

Does this belong to a specific domain? → features/[domain]/

Is it shared across domains? → components/, hooks/, lib/, or utils/

Is it configuration? → config/

Is it a distributable component? → registry/

Is it a build-time script? → scripts/

If you still don't know, read PROJECT_STRUCTURE.md Sections 2-4 thoroughly.

Quick Reference: Most Important Don'ts
Don't	Do Instead
Put business logic in app/	Put logic in features/
Use relative imports (../../)	Use @/ alias
Hardcode site name, URL, nav	Put in src/config/site.ts
Edit src/__registry__/ manually	Run pnpm registry:build
Scatter personal data across files	Update features/profile/data/user.ts
Create components with PascalCase.tsx	Use kebab-case.tsx
Use React Context for global state	Use Jotai atoms
Import process.env directly	Import from @/config/site
Put library-dependent code in utils/	Put in lib/
Forget "use client" for interactive components	Add it explicitly
Final Instruction for the AI
Before editing any file:

Identify which feature or shared directory it belongs to (using Section 2 of this doc).

Check if a similar file exists (follow existing naming and export patterns).

Verify imports use @/ alias only.

Confirm you're not violating the "Don'ts" table above.

If adding a new feature, follow the 6-step process in Section 6.

If the task is unclear or doesn't fit these rules, ask for clarification before writing code.