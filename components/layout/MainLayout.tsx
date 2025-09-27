'use client';

/**
 * Main layout component for E-Track
 * Combines sidebar, navbar, and content area
 */

import { useState } from 'react';
import { User, UserRole } from '@/lib/auth';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  user: User;
  className?: string;
}

export function MainLayout({ children, user, className }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out...');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={cn(
          'hidden lg:flex flex-col transition-all duration-300',
          mobileMenuOpen ? 'lg:flex' : 'lg:flex'
        )}
      >
        <Sidebar
          userRole={user.role}
          collapsed={sidebarCollapsed}
          onToggle={handleSidebarToggle}
        />
      </div>

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative flex w-64 flex-col bg-white">
            <Sidebar
              userRole={user.role}
              collapsed={false}
              onToggle={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar
          user={user}
          onMenuToggle={handleMobileMenuToggle}
          onLogout={handleLogout}
        />

        {/* Page content */}
        <main className={cn('flex-1 overflow-y-auto', className)}>
          <div className="h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
