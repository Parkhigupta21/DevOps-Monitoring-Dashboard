# ── Stage 1: Build React app ─────────────────────────────────
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Build optimized production bundle (outputs to /app/dist)
RUN npm run build

# ── Stage 2: Serve with NGINX ────────────────────────────────
FROM nginx:alpine

# Copy built React files to NGINX web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom NGINX config (handles React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]