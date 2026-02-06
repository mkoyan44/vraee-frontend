# Deployment checklist – changes not showing

If you pushed to the cluster but **not all changes appear** on frontend.vraee.com, check the following.

## 1. Rebuild from latest code (no cache)

The image must be built from the **latest commit** that contains your changes. Docker layer cache can reuse old `COPY . .` and serve stale assets.

- In CI: trigger a **new pipeline run** after your push (no cached build).
- Optional: build with `--no-cache` once to force a full rebuild:
  ```bash
  docker build --no-cache -f docker/dockerfiles/Dockerfile.frontend .
  ```

## 2. Set `NEXT_PUBLIC_APP_URL` at **build time**

`NEXT_PUBLIC_*` variables are inlined at **build time**, not at runtime. If the cluster build does not set `NEXT_PUBLIC_APP_URL`, the app falls back to `http://localhost:3001`, so:

- **Sign In** would open localhost instead of your production app URL.
- Set `NEXT_PUBLIC_APP_URL` in the **build** environment (e.g. CI env, Docker `ARG`/`ENV`, or build secrets) to your production app URL (e.g. `https://app.vraee.com`).

## 3. Invalidate CDN / cache after deploy

Browsers and CDNs may still serve old HTML/JS after a new deploy.

- Invalidate or purge the CDN cache for `frontend.vraee.com` after each deploy (e.g. purge “all” or paths like `/`, `/services/*`).
- Users can hard-refresh (Ctrl+Shift+R / Cmd+Shift+R) or clear site data to see the new version.

## 4. Confirm what’s deployed

- Check that the **image tag** used by the cluster is the one built from the commit that has your changes.
- Check build logs to ensure `npm run build` ran **after** `COPY . .` and that no old layers were reused for the app code.

## Summary

| Change                      | If it doesn’t show |
|----------------------------|---------------------|
| Logo, favicon, copy, URLs  | New build from latest code; CDN invalidation. |
| Sign In → app URL / new tab| Set `NEXT_PUBLIC_APP_URL` at **build** time. |
| Page titles, redirects     | New build; cache revalidation for HTML. |

Custom cache-control headers were removed from `next.config.ts` because they caused the Next.js 15 build to hang. Rely on CDN invalidation after deploy so updates appear.
