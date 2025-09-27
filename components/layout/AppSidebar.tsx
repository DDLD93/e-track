'use client';

/**
 * App Sidebar using shadcn/ui components
 * Role-based navigation with modern design
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserRole, getRoleDisplayName } from '@/lib/auth';
import { UserRole as UserRoleType } from '@/types';
import {
  LayoutDashboard,
  FileText,
  Building2,
  Users,
  DollarSign,
  ShoppingCart,
  Shield,
  Calendar,
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
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
} from '@/components/ui/sidebar';

interface AppSidebarProps {
  userRole: UserRoleType;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

const navigationItems: Record<UserRoleType, NavItem[]> = {
  [UserRoleType.SuperAdmin]: [
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
  [UserRoleType.Admin]: [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Users', href: '/admin/users', icon: Users },
    { label: 'MDAs', href: '/admin/mdas', icon: Building2 },
  ],
  [UserRoleType.GovernorAdmin]: [
    { label: 'Dashboard', href: '/governor/dashboard', icon: LayoutDashboard },
    { label: 'Reports', href: '/governor/reports', icon: FileSpreadsheet },
  ],
  [UserRoleType.ProjectManager]: [
    { label: 'Dashboard', href: '/project-manager/dashboard', icon: LayoutDashboard },
    { label: 'Projects', href: '/project-manager/projects', icon: FolderOpen },
    { label: 'Add Project', href: '/project-manager/projects/add', icon: PlusCircle },
    { label: 'Submissions', href: '/project-manager/submissions', icon: CheckSquare },
  ],
  [UserRoleType.Contractor]: [
    { label: 'My Projects', href: '/contractor/projects', icon: FolderOpen },
  ],
  [UserRoleType.FinanceOfficer]: [
    { label: 'Dashboard', href: '/finance-officer/finance/dashboard', icon: LayoutDashboard },
    { label: 'Budget', href: '/finance-officer/finance/budget', icon: Upload },
    { label: 'Expenditure', href: '/finance-officer/finance/expenditure', icon: TrendingUp },
    { label: 'Revenue', href: '/finance-officer/finance/revenue', icon: DollarSign },
  ],
  [UserRoleType.ProcurementOfficer]: [
    { label: 'Dashboard', href: '/procurement-officer/procurement/dashboard', icon: LayoutDashboard },
    { label: 'Tenders', href: '/procurement-officer/procurement/tenders', icon: FileText },
    { label: 'Add Tender', href: '/procurement-officer/procurement/tenders/add', icon: PlusCircle },
    { label: 'Awards', href: '/procurement-officer/procurement/awards', icon: Award },
  ],
  [UserRoleType.Auditor]: [
    { label: 'Dashboard', href: '/auditor/audit/dashboard', icon: LayoutDashboard },
    { label: 'Discrepancies', href: '/auditor/audit/discrepancies', icon: Search },
  ],
  [UserRoleType.MeetingUser]: [
    { label: 'Meetings', href: '/meeting-user/meetings', icon: Calendar },
    { label: 'Schedule', href: '/meeting-user/meetings/schedule', icon: PlusCircle },
    { label: 'Archive', href: '/meeting-user/meetings/archive', icon: Archive },
  ],
  [UserRoleType.Vendor]: [
    { label: 'Tenders', href: '/vendor/tenders', icon: FileText },
    { label: 'Awards', href: '/vendor/awards', icon: Award },
  ],
};

export function AppSidebar({ userRole }: AppSidebarProps) {
  const pathname = usePathname();
  const navItems = navigationItems[userRole] || [];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  // Mock data for badges and status
  const getBadgeCount = (href: string) => {
    if (href.includes('submissions')) return 8;
    if (href.includes('projects')) return 3;
    if (href.includes('tenders')) return 5;
    return 0;
  };

  return (
    <Sidebar className="border-r-0 shadow-lg backdrop-blur-sm bg-gradient-to-b from-background to-background/95">
      <SidebarHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25">
              <Home className="h-5 w-5" />
            </div>
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-background shadow-sm"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              E-Track
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              {getRoleDisplayName(userRole)}
            </span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-2 text-xs font-semibold text-muted-foreground/80 uppercase tracking-wider">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                const badgeCount = getBadgeCount(item.href);

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={active}
                      className={`
                        relative group h-11 rounded-xl transition-all duration-200 ease-out
                        hover:shadow-md hover:shadow-primary/10
                        ${active 
                          ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/25' 
                          : 'hover:bg-gradient-to-r hover:from-accent/50 hover:to-accent/30'
                        }
                      `}
                    >
                      <Link href={item.href} className="flex items-center gap-3 px-3">
                        <div className={`
                          relative flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200
                          ${active 
                            ? 'bg-primary-foreground/20 text-primary-foreground' 
                            : 'bg-muted/50 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                          }
                        `}>
                          <Icon className="h-4 w-4" />
                          {active && (
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent"></div>
                          )}
                        </div>
                        <span className={`
                          font-medium transition-colors duration-200
                          ${active ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary'}
                        `}>
                          {item.label}
                        </span>
                        {badgeCount > 0 && !active && (
                          <SidebarMenuBadge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-sm">
                            {badgeCount}
                          </SidebarMenuBadge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Stats Section */}
        <div className="mt-6 px-3">
          <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 p-4 border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Quick Stats</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Active Projects</span>
                <span className="text-sm font-bold text-primary">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Pending Reviews</span>
                <span className="text-sm font-bold text-orange-600">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">This Month</span>
                <span className="text-sm font-bold text-green-600">12</span>
              </div>
            </div>
          </div>
        </div>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-border/50 bg-gradient-to-r from-muted/20 to-muted/10 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild
              className="h-11 rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-primary/10 hover:bg-gradient-to-r hover:from-accent/50 hover:to-accent/30"
            >
              <Link href="/settings" className="flex items-center gap-3 px-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all duration-200">
                  <Settings className="h-4 w-4" />
                </div>
                <span className="font-medium">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
