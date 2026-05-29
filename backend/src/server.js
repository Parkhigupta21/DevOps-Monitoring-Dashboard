// server.js — Entry point of the Express application

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const http = require('http');
const connectDB = require('./config/db');
const { initWebSocket } = require('./utils/websocket');
const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/logger');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Create HTTP server (needed for WebSocket upgrade)
const server = http.createServer(app);

// Connect to MongoDB
connectDB();

// ── Middleware ──────────────────────────────────────────────
app.use(helmet());           // Sets secure HTTP headers
app.use(cors({               // Allows cross-origin requests from frontend
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());     // Parses incoming JSON request bodies
app.use(requestLogger);      // Logs every request to console/file

// ── Routes ──────────────────────────────────────────────────
app.use('/api/auth',     require('./routes/authRoutes'));
app.use('/api/monitor',  require('./routes/monitorRoutes'));
app.use('/api/docker',   require('./routes/dockerRoutes'));
app.use('/api/kube',     require('./routes/kubeRoutes'));
app.use('/api/logs',     require('./routes/logRoutes'));
app.use('/api/deploy',   require('./routes/deployRoutes'));

// Prometheus metrics endpoint (scraped by Prometheus server)
const client = require('prom-client');
client.collectDefaultMetrics();
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Health check endpoint (used by Kubernetes liveness probe)
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// Error handler must be LAST middleware
app.use(errorHandler);

// ── WebSocket Setup ─────────────────────────────────────────
initWebSocket(server);   // Attach WebSocket server to HTTP server

// ── Start Server ────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));