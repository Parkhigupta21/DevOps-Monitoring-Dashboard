import React from 'react';

export default function CICD() {
  return (
    <div className="p-6">

      <h1 className="text-5xl font-bold mb-8">
        CI/CD Pipeline
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Build Number</h2>
          <p className="text-4xl font-bold mt-2">#101</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Pipeline Status</h2>
          <p className="text-2xl font-bold mt-2">Success</p>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Branch</h2>
          <p className="text-2xl font-bold mt-2">main</p>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Deployment Information
        </h2>

        <p><strong>Last Deployment:</strong> Today</p>
        <p><strong>Environment:</strong> Production</p>
        <p><strong>Status:</strong> Successful</p>
      </div>

    </div>
  );
}