import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Sidebar from './components/common/Sidebar';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Docker from './pages/Docker';
import Kubernetes from './pages/Kubernetes';
import Logs from './pages/Logs';
import CICD from './pages/CICD';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/docker"
            element={
              <ProtectedRoute>
                <Layout>
                  <Docker />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/kubernetes"
            element={
              <ProtectedRoute>
                <Layout>
                  <Kubernetes />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/cicd"
            element={
              <ProtectedRoute>
                <Layout>
                  <CICD />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/logs"
            element={
              <ProtectedRoute>
                <Layout>
                  <Logs />
                </Layout>
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}