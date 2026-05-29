# ── Stage 1: Build dependencies ─────────────────────────────
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy only package files first (Docker layer caching optimization)
# If package.json hasn't changed, this layer is cached — faster rebuilds
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# ── Stage 2: Runtime image ───────────────────────────────────
FROM node:18-alpine

WORKDIR /app

# Copy installed node_modules from builder stage (not from host)
COPY --from=builder /app/node_modules ./node_modules

# Copy application source code
COPY src/ ./src/

# Expose port 5000 (documentation only — doesn't actually publish port)
EXPOSE 5000

# Run as non-root user for security
USER node

# Start the server
CMD ["node", "src/server.js"]