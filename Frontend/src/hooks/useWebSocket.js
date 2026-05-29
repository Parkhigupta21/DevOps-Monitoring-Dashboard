import { useEffect, useState } from 'react';

const useWebSocket = (url) => {
  const [metrics, setMetrics] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => setConnected(true);
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'METRICS_UPDATE') setMetrics(msg.data);
    };
    ws.onclose = () => setConnected(false);

    // Cleanup: close socket when component unmounts
    return () => ws.close();
  }, [url]);

  return { metrics, connected };
};

export default useWebSocket;