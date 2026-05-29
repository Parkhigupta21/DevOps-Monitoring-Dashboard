import React from 'react';

const logs = [
  '[INFO] Backend running successfully',
  '[INFO] MongoDB connected',
  '[INFO] Prometheus active',
  '[INFO] Grafana active',
  '[INFO] Docker containers healthy',
  '[INFO] Health check passed',
  '[INFO] Metrics collected successfully'
];

export default function Logs() {
  return (
    <div className="p-6">

      <h1 className="text-5xl font-bold mb-8">
        System Logs
      </h1>

      <div className="bg-gray-900 rounded-xl shadow-lg p-6">
        {logs.map((log, index) => (
          <p
            key={index}
            className="text-green-400 font-mono text-lg mb-3"
          >
            {log}
          </p>
        ))}
      </div>

    </div>
  );
}