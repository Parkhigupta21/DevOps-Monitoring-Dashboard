import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard, Container, Server, GitBranch,
  ScrollText, LogOut, Activity
} from 'lucide-react';


const navItems = [
  { to: '/',           icon: <LayoutDashboard size={18}/>, label: 'Dashboard' },
  { to: '/docker',     icon: <Container size={18}/>,       label: 'Docker' },
  { to: '/kubernetes', icon: <Server size={18}/>,          label: 'Kubernetes' },
  { to: '/cicd',       icon: <GitBranch size={18}/>,       label: 'CI/CD' },
  { to: '/logs',       icon: <ScrollText size={18}/>,      label: 'Logs' },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 p-5 border-b border-gray-700">
        <Activity size={22} className="text-blue-400"/>
        <div>
  <div className="font-bold text-xl">
    DevOps Hub
  </div>

  <div className="text-xs text-gray-400">
    Monitoring Dashboard
  </div>
</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
               ${isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`
            }
          >
            {item.icon} {item.label}
          </NavLink>
        ))}
      </nav>

      {/* User + Logout */}
      <div className="p-4 border-t border-gray-700">
        <p className="text-xs text-gray-400 mb-1">{user?.username}</p>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm transition-colors"
        >
          <LogOut size={16}/> Logout
        </button>
      </div>
      <div className="text-center text-xs text-gray-500 pb-4">
  Version 1.0
</div>
    </aside>
  );
}