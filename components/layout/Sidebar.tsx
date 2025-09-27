'use client';

/**
 * Sidebar component for E-Track
 * Role-based navigation with collapsible design
 */

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { getRoleDisplayName } from '@/lib/auth';
import { UserRole } from '@/types';   
import {
  LayoutDashboard,
  FileText,
  Building2,
  Users,
  DollarSign,
  ShoppingCart,
  Shield,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  BarChart3,
  FileSpreadsheet,
  FolderOpen,
  PlusCircle,
  CheckSquare,
  Upload,
  TrendingUp,
  Award,
  Search,
  Archive,
  Settings,
} from 'lucide-react';

interface SidebarProps {
  userRole: UserRole;
  collapsed?: boolean;
  onToggle?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
  permission?: string;
}

const navigationItems: Record<UserRole, NavItem[]> = {
  [UserRole.SuperAdmin]: [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'System Admin', href: '/admin', icon: Settings },
    { label: 'Governor', href: '/governor', icon: Building2 },
    { label: 'Project Manager', href: '/project-manager', icon: Users },
    { label: 'Contractor', href: '/contractor', icon: Building2 },
    { label: 'Finance Officer', href: '/finance-officer', icon: DollarSign },
    { label: 'Procurement', href: '/procurement-officer', icon: ShoppingCart },
    { label: 'Auditor', href: '/auditor', icon: Shield },
    { label: 'Meetings', href: '/meeting-user', icon: Calendar },
  ],
  [UserRole.Admin]: [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Users', href: '/admin/users', icon: Users },
    { label: 'MDAs', href: '/admin/mdas', icon: Building2 },
  ],
  [UserRole.GovernorAdmin]: [
    { label: 'Dashboard', href: '/governor/dashboard', icon: LayoutDashboard },
    { label: 'Reports', href: '/governor/reports', icon: FileSpreadsheet },
  ],
  [UserRole.ProjectManager]: [
    { label: 'Dashboard', href: '/project-manager/dashboard', icon: LayoutDashboard },
    { label: 'Projects', href: '/project-manager/projects', icon: FolderOpen },
    { label: 'Add Project', href: '/project-manager/projects/add', icon: PlusCircle },
    { label: 'Submissions', href: '/project-manager/submissions', icon: CheckSquare },
  ],
  [UserRole.Contractor]: [
    { label: 'My Projects', href: '/contractor/projects', icon: FolderOpen },
  ],
  [UserRole.FinanceOfficer]: [
    { label: 'Dashboard', href: '/finance-officer/finance/dashboard', icon: LayoutDashboard },
    { label: 'Budget', href: '/finance-officer/finance/budget', icon: Upload },
    { label: 'Expenditure', href: '/finance-officer/finance/expenditure', icon: TrendingUp },
    { label: 'Revenue', href: '/finance-officer/finance/revenue', icon: DollarSign },
  ],
  [UserRole.ProcurementOfficer]: [
    { label: 'Dashboard', href: '/procurement-officer/procurement/dashboard', icon: LayoutDashboard },
    { label: 'Tenders', href: '/procurement-officer/procurement/tenders', icon: FileText },
    { label: 'Add Tender', href: '/procurement-officer/procurement/tenders/add', icon: PlusCircle },
    { label: 'Awards', href: '/procurement-officer/procurement/awards', icon: Award },
  ],
  [UserRole.Auditor]: [
    { label: 'Dashboard', href: '/auditor/audit/dashboard', icon: LayoutDashboard },
    { label: 'Discrepancies', href: '/auditor/audit/discrepancies', icon: Search },
  ],
  [UserRole.MeetingUser]: [
    { label: 'Meetings', href: '/meeting-user/meetings', icon: Calendar },
    { label: 'Schedule', href: '/meeting-user/meetings/schedule', icon: PlusCircle },
    { label: 'Archive', href: '/meeting-user/meetings/archive', icon: Archive },
  ],
  [UserRole.Vendor]: [
    { label: 'Tenders', href: '/vendor/tenders', icon: FileText },
    { label: 'Awards', href: '/vendor/awards', icon: Award },
  ],
};

export function Sidebar({ userRole, collapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const navItems = navigationItems[userRole] || [];

  const toggleExpanded = (itemLabel: string) => {
    setExpandedItems(prev =>
      prev.includes(itemLabel)
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <div
      className={cn(
        'flex h-full flex-col bg-white border-r border-gray-200 transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
        {!collapsed && (
          <div>
            <h1 className="text-lg font-semibold text-gray-900">E-Track</h1>
            <p className="text-xs text-gray-500">{getRoleDisplayName(userRole)}</p>
          </div>
        )}
        <button
          onClick={onToggle}
          className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedItems.includes(item.label);

          return (
            <div key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                  collapsed && 'justify-center'
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>

              {hasChildren && !collapsed && (
                <div className="ml-6 mt-1 space-y-1">
                  {isExpanded &&
                    item.children?.map((child) => {
                      const ChildIcon = child.icon;
                      const childActive = isActive(child.href);

                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={cn(
                            'flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors',
                            childActive
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          )}
                        >
                          <ChildIcon className="h-4 w-4 flex-shrink-0" />
                          <span>{child.label}</span>
                        </Link>
                      );
                    })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4">
        <Link
          href="/settings"
          className={cn(
            'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900',
            collapsed && 'justify-center'
          )}
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
}
