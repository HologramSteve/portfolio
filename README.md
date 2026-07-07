# HologramSteve Portfolio — Docker

## Image

Multi-stage build: `oven/bun:1` (build) → `nginx:alpine` (serve). Exposes port **80**.

## Build

```bash
docker build -t portfolio .
docker build -t portfolio:1.0.0 .
```

## Run

```bash
docker run -d -p 8080:80 --name portfolio portfolio
```

Then open `http://localhost:8080`.

## Stop & Remove

```bash
docker stop portfolio && docker rm portfolio
docker rm -f portfolio   # one-liner
```

## Rebuild after changes

```bash
docker build -t portfolio . && docker rm -f portfolio && docker run -d -p 8080:80 --name portfolio portfolio
```

## Logs

```bash
docker logs portfolio
docker logs -f portfolio   # live tail
```

## How it works

1. Install deps (`bun install --frozen-lockfile`)
2. Build (`bun run build` → `tsc -b && vite build`)
3. Copy `dist/` into `nginx:alpine`
4. Nginx serves with gzip, SPA fallback, and 1-year asset caching

## Custom nginx config

Edit the `RUN echo '...'` block in the `Dockerfile`.
