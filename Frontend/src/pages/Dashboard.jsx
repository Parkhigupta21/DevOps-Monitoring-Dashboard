import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6">

      <h1 className="text-5xl font-bold mb-8">
        DevOps Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">CPU Usage</h2>
          <p className="text-4xl font-bold mt-2">45%</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">RAM Usage</h2>
          <p className="text-4xl font-bold mt-2">67%</p>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Containers</h2>
          <p className="text-4xl font-bold mt-2">5</p>
        </div>

        <div className="bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">System Status</h2>
          <p className="text-2xl font-bold mt-2">
            Healthy
          </p>
        </div>

      </div>

      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Monitoring Overview
        </h2>
        <div className="mt-6 bg-white rounded-xl shadow-md p-6">
  <h2 className="text-2xl font-semibold mb-4">
    Project Information
  </h2>

  <p><strong>Project:</strong> DevOps Monitoring Dashboard</p>
  <p><strong>Version:</strong> 1.0</p>
  <p><strong>Technology Stack:</strong> React, Node.js, Docker, MongoDB, Prometheus, Grafana</p>
</div>

        <p>
          Prometheus and Grafana are actively monitoring
          application performance and system metrics.
        </p>
      </div>

    </div>
  );
}