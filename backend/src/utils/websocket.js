const WebSocket = require('ws');
const { getMetrics } = require('./systemMetrics');

exports.initWebSocket = (server) => {
  const wss = new WebSocket.Server({ server, path: '/ws' });

  wss.on('connection', (ws) => {
    console.log('WebSocket client connected');

    // Push live metrics every 3 seconds
    const interval = setInterval(async () => {
      if (ws.readyState === WebSocket.OPEN) {
        const metrics = await getMetrics();
        ws.send(JSON.stringify({ type: 'METRICS_UPDATE', data: metrics }));
      }
    }, 3000);

    ws.on('close', () => {
      clearInterval(interval);   // Stop sending when client disconnects
      console.log('WebSocket client disconnected');
    });
  });
};