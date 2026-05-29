import React from 'react';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          />

          <button
            type="submit"
            className="w-full p-3 bg-green-600 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}