<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Business context

Before writing or changing any site copy, positioning, or client-facing content, read [`docs/business-context.md`](docs/business-context.md) for who Restrovate is, who it serves, and the real client portfolio. Read [`docs/design.md`](docs/design.md) before touching visual design.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # static export -> out/ (output: "export" in next.config.ts)
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals + next/typescript configs)
npx tsc --noEmit -p .   # typecheck; run this after edits, there is no test suite
```

There is no test framework configured in this repo (no jest/vitest/playwright) — verify changes with `npx tsc --noEmit -p .`, `npm run lint`, and `npm run build`.

## Architecture

**Routing is a thin shell over feature components.** Every file under `src/app/**/page.tsx` only exports `metadata`/`generateMetadata`, and for dynamic routes `generateStaticParams`, then renders a component from `src/features/<name>/`. All actual markup, layout, and logic live in the feature component, not the route file. When adding a page or changing its content, edit the feature component in `src/features/`; only touch `src/app/` for routing/metadata concerns. Dynamic routes (`products/[slug]`, `services/[slug]`, `case-studies/[slug]`, `blogs/[slug]`) statically export every entry via `generateStaticParams` reading from the corresponding array in `src/core/site.ts`, and call `notFound()` for unmatched slugs — this is required because the app builds as a static export (`output: "export"`, no server).

**`src/core/site.ts` is the single source of truth for site content** (~1800 lines): `siteConfig`, nav items, `servicePillars`, `services`, `products`, `caseStudies`, `blogPosts`, FAQ/segment/positioning data, etc. Page components read from these typed arrays rather than hardcoding copy inline. When changing copy, pricing, features, or FAQs for a service/product/case-study/blog, edit the matching entry here, not the component that renders it.

**Shared UI lives in `src/features/shared/components/`** (`button-link`, `faq-accordion`, `step-flow`, `site-header`, `site-footer`, `site-shell`, animation helpers like `fade-in`/`parallax-floating`/`split-text`). Reuse these instead of re-implementing card/section patterns per feature.

**`src/core/paths.ts`** exposes `publicAsset()`, which prefixes a `NEXT_PUBLIC_BASE_PATH` env var onto public asset URLs — this was for the now-removed GitHub Pages basePath deploy; Netlify (the current deploy target, custom domain at root) doesn't set this env var, so it resolves to `""`.

**Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`).

## Deployment

Static export deployed to Netlify (build command `npm run build`, publish directory `out` — set manually in Netlify's dashboard, there is no `netlify.toml`). The GitHub Pages workflow and its basePath handling have been removed; Netlify serves the export at the domain root.

## Content and design guardrails

`docs/business-context.md` tracks known content gaps (no measured client outcomes yet, no testimonial quotes on file, no product demo videos yet) — don't invent metrics or quotes to fill these gaps.
