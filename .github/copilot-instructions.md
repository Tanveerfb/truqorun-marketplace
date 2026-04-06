# truqorun-marketplace — Copilot Instructions

## Project Context

E-commerce marketplace. The developer is actively building this while mastering Next.js and TypeScript — explain patterns when introducing new concepts.

## Stack

- **Next.js 16.2.2** (App Router) — non-standard version. ALWAYS read `node_modules/next/dist/docs/` before writing Next.js-specific code. APIs differ from training data.
- **React 19.2.4**
- **TypeScript 5** — `strict: true`. No implicit `any`, strict null checks enforced.
- **Tailwind CSS v4** — CSS-first config via `@theme {}` in CSS files. No `tailwind.config.js`. Breaking changes from v3.
- **Sass** — available; use for complex style logic alongside Tailwind.
- **Firebase 12.x** — backend (auth, Firestore, storage). Not yet wired up.

## Project Structure

app/ # App Router pages
components/ # React components (.tsx)
hooks/ # Custom hooks including AuthProvider
types/ # Shared TypeScript interfaces (Item, ListItem)
utils/ # Utility functions (empty — add here)
public/ # Static assets: icons/, images/, videos/

## Conventions

- Path alias `@/*` → workspace root (e.g., `@/types/item`)
- Component files: `.tsx`; pure logic/types: `.ts`
- Fonts: CSS vars `--font-geist-sans` / `--font-geist-mono` on `<html>`
- Prefer small, focused files under ~500 lines
- Prefer dynamic/token-driven sizing — avoid hardcoded px values

## Current Status

Very early stage. Most files are stubs. Implement incrementally.
