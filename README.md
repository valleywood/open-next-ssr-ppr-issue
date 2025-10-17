# Open Next SSR Blank Page Reproduction

This is a minimal reproduction case for a blank page issue with SSR routes in OpenNext/Cloudflare environments.

## Issue Description

SSR pages become blank and links to them unresponsive after hard refresh or manual navigation in Cloudflare preview/deployed environments. The issue occurs specifically with:

- Next.js App Router with PPR enabled
- SSR pages with prefetching enabled
- OpenNext/Cloudflare deployment

## Reproduction Steps

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Enable corepack (required for yarn version):
   ```bash
   corepack enable
   ```

3. Run preview:
   ```bash
   yarn preview
   ```

4. Navigate to `http://localhost:8787/ssr/test`
5. Hard refresh the page (Cmd+Shift+R or Ctrl+Shift+R)
6. The page becomes blank
7. Going back to the start page the link to the SSR page is unresponsive

## Test Cases

- **PPR Page** (`/ppr/test`) - Works correctly
- **SSR Page** (`/ssr/test`) - Fails after hard refresh
- **Home Page** (`/`) - Works correctly

## Key Files

- `app/ssr/[...slug]/page.tsx` - The failing SSR page
- `next.config.ts` - Next.js configuration with PPR enabled

## Environment

- Next.js: 15.5.1-canary.23
- OpenNext Cloudflare: 1.9.2
- PPR: Enabled

## Notes

- The issue only occurs in Cloudflare preview/production environments
- `yarn dev` works fine (prefetching is disabled in dev mode)
- `yarn build + yarn start` works fine (Open Next out of the loop)
- Adding `export const revalidate = 0;` to the SSR page fixes the issue
- The issue appears to be related to RSC payload caching with prefetching
