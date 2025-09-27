'use client';

/**
 * App Layout using shadcn/ui components
 * Modern layout with sidebar and header
 */

import { User } from '@/types';
import { AppSidebar } from './AppSidebar';
import { AppHeader } from './AppHeader';
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
  user: User;
  className?: string;
}

export function AppLayout({ children, user, className }: AppLayoutProps) {
  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out...');
  };

  return (
    <SidebarProvider>
      <AppSidebar userRole={user.role} />
      <SidebarInset className="bg-gradient-to-br from-background via-background to-muted/20">
        <AppHeader user={user} onLogout={handleLogout} />
        <main className={`flex-1 overflow-y-auto p-6 relative ${className || ''}`}>
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
