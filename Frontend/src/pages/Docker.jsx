import React from 'react';

const containers = [
  { name: 'frontend', status: 'Running' },
  { name: 'backend', status: 'Running' },
  { name: 'mongo', status: 'Running' },
  { name: 'prometheus', status: 'Running' },
  { name: 'grafana', status: 'Running' }
];

export default function Docker() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">
        Docker Management
      </h1>

      <div className="bg-white rounded-xl shadow-md p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Container</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {containers.map((container) => (
              <tr key={container.name} className="border-b">
                <td className="py-3">{container.name}</td>

                <td className="py-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {container.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}