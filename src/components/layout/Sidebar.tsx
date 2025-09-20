/**
 * SIDEBAR COMPONENT
 * 
 * Role-based navigation sidebar with dynamic menu items
 * based on user permissions and role
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserRole } from '@/types';

interface SidebarProps {
  userRole: UserRole;
  userName: string;
  mdaName?: string;
}

export default function Sidebar({ userRole, userName, mdaName }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getMenuItems = (role: UserRole) => {
    switch (role) {
      case UserRole.SuperAdmin:
      case UserRole.GovernorAdmin:
        return [
          { name: 'Dashboard', href: '/governor/dashboard', icon: 'dashboard' },
          { name: 'Reports', href: '/governor/reports', icon: 'reports' },
          { name: 'All Projects', href: '/projects', icon: 'projects' },
          { name: 'Finance', href: '/finance', icon: 'finance' },
          { name: 'Procurement', href: '/procurement', icon: 'procurement' },
          { name: 'Meetings', href: '/meetings', icon: 'meetings' },
          ...(role === UserRole.SuperAdmin ? [
            { name: 'Users', href: '/admin/users', icon: 'users' },
            { name: 'MDAs', href: '/admin/mdas', icon: 'mdas' },
          ] : []),
        ];

      case UserRole.ProjectManager:
        return [
          { name: 'My Projects', href: '/project-manager/projects', icon: 'projects' },
          { name: 'Add Project', href: '/project-manager/projects/add', icon: 'add' },
          { name: 'Submissions', href: '/project-manager/submissions', icon: 'submissions' },
          { name: 'Finance View', href: '/project-manager/finance', icon: 'finance' },
          { name: 'Meetings', href: '/meetings', icon: 'meetings' },
        ];

      case UserRole.Contractor:
        return [
          { name: 'My Projects', href: '/contractor/projects', icon: 'projects' },
          { name: 'Submit Progress', href: '/contractor/submit', icon: 'submit' },
          { name: 'Payment Status', href: '/contractor/payments', icon: 'payments' },
          { name: 'Documents', href: '/contractor/documents', icon: 'documents' },
        ];

      case UserRole.FinanceOfficer:
        return [
          { name: 'Finance Dashboard', href: '/finance-officer/finance/dashboard', icon: 'dashboard' },
          { name: 'Budget', href: '/finance-officer/finance/budget', icon: 'budget' },
          { name: 'Expenditure', href: '/finance-officer/finance/expenditure', icon: 'expenditure' },
          { name: 'Revenue', href: '/finance-officer/finance/revenue', icon: 'revenue' },
          { name: 'Projects View', href: '/finance-officer/projects', icon: 'projects' },
        ];

      case UserRole.ProcurementOfficer:
        return [
          { name: 'Procurement Dashboard', href: '/procurement-officer/procurement/dashboard', icon: 'dashboard' },
          { name: 'Tenders', href: '/procurement-officer/procurement/tenders', icon: 'tenders' },
          { name: 'Create Tender', href: '/procurement-officer/procurement/tenders/add', icon: 'add' },
          { name: 'Awards', href: '/procurement-officer/procurement/awards', icon: 'awards' },
          { name: 'Vendors', href: '/procurement-officer/vendors', icon: 'vendors' },
        ];

      case UserRole.Vendor:
        return [
          { name: 'Available Tenders', href: '/vendor/tenders', icon: 'tenders' },
          { name: 'My Bids', href: '/vendor/bids', icon: 'bids' },
          { name: 'Awards', href: '/vendor/awards', icon: 'awards' },
          { name: 'Profile', href: '/vendor/profile', icon: 'profile' },
        ];

      case UserRole.Auditor:
        return [
          { name: 'Audit Dashboard', href: '/auditor/audit/dashboard', icon: 'dashboard' },
          { name: 'Discrepancies', href: '/auditor/audit/discrepancies', icon: 'discrepancies' },
          { name: 'All Projects', href: '/auditor/projects', icon: 'projects' },
          { name: 'Finance Review', href: '/auditor/finance', icon: 'finance' },
          { name: 'Procurement Review', href: '/auditor/procurement', icon: 'procurement' },
          { name: 'Reports', href: '/auditor/reports', icon: 'reports' },
        ];

      case UserRole.MeetingUser:
        return [
          { name: 'Meetings', href: '/meeting-user/meetings', icon: 'meetings' },
          { name: 'Schedule Meeting', href: '/meeting-user/meetings/schedule', icon: 'schedule' },
          { name: 'Minutes', href: '/meeting-user/minutes', icon: 'minutes' },
          { name: 'Archive', href: '/meeting-user/meetings/archive', icon: 'archive' },
        ];

      default:
        return [];
    }
  };

  const menuItems = getMenuItems(userRole);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const getIcon = (iconName: string) => {
    // Simple icon mapping - in production, use proper icon library
    const icons: Record<string, string> = {
      dashboard: '📊',
      projects: '🏗️',
      reports: '📋',
      finance: '💰',
      procurement: '📦',
      meetings: '👥',
      users: '👤',
      mdas: '🏛️',
      add: '➕',
      submissions: '📝',
      submit: '📤',
      payments: '💳',
      documents: '📄',
      budget: '📈',
      expenditure: '📉',
      revenue: '💹',
      tenders: '📋',
      awards: '🏆',
      vendors: '🏢',
      bids: '💼',
      profile: '⚙️',
      discrepancies: '⚠️',
      schedule: '📅',
      minutes: '📝',
      archive: '🗃️',
    };
    return icons[iconName] || '📄';
  };

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900">E-Track</h2>
                <p className="text-sm text-gray-600">{userName}</p>
                {mdaName && <p className="text-xs text-gray-500">{mdaName}</p>}
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isCollapsed ? '→' : '←'}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{getIcon(item.icon)}</span>
                  {!isCollapsed && (
                    <span className="ml-3 font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          <button className="w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <span className="text-lg">🚪</span>
            {!isCollapsed && <span className="ml-3">Sign Out</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
