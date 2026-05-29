import React from 'react';

export default function Kubernetes() {
  return (
    <div className="p-6">

      <h1 className="text-5xl font-bold mb-8">
        Kubernetes Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Nodes</h2>
          <p className="text-4xl font-bold mt-2">1</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Pods</h2>
          <p className="text-4xl font-bold mt-2">5</p>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Services</h2>
          <p className="text-4xl font-bold mt-2">3</p>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Cluster Information
        </h2>

        <p><strong>Status:</strong> Ready</p>
        <p><strong>Namespace:</strong> default</p>
        <p><strong>Kubernetes Version:</strong> v1.30</p>
      </div>

    </div>
  );
}