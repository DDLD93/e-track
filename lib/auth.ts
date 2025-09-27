/**
 * Authentication utilities for E-Track
 * Role-based authentication and session management
 */

import { User, UserRole, Session } from '@/types';

// Mock authentication - replace with real auth implementation
export const mockUser: User = {
  id: '1',
  email: 'project.manager@etrack.gov',
  name: 'Project Manager',
  role: UserRole.ProjectManager,
  mdaId: 'mda-1',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockSession: Session = {
  user: mockUser,
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
};

// Role-based permissions
export const ROLE_PERMISSIONS = {
  [UserRole.SuperAdmin]: ['*'], // All permissions
  [UserRole.Admin]: [
    'dashboard.view',
    'users.view',
    'users.create',
    'users.edit',
    'users.delete',
    'mdas.view',
    'mdas.create',
    'mdas.edit',
    'mdas.delete',
    'system.view',
    'system.manage',
  ],
  [UserRole.GovernorAdmin]: [
    'dashboard.view',
    'reports.view',
    'reports.export',
    'projects.view',
    'finance.view',
    'audit.view',
  ],
  [UserRole.ProjectManager]: [
    'dashboard.view',
    'projects.view',
    'projects.create',
    'projects.edit',
    'submissions.view',
    'submissions.approve',
  ],
  [UserRole.Contractor]: [
    'dashboard.view',
    'projects.view',
    'submissions.create',
    'submissions.view',
  ],
  [UserRole.FinanceOfficer]: [
    'dashboard.view',
    'finance.view',
    'finance.create',
    'finance.edit',
    'budget.upload',
    'expenditure.upload',
    'revenue.upload',
  ],
  [UserRole.ProcurementOfficer]: [
    'dashboard.view',
    'procurement.view',
    'tenders.view',
    'tenders.create',
    'tenders.manage',
    'awards.view',
  ],
  [UserRole.Auditor]: [
    'dashboard.view',
    'audit.view',
    'discrepancies.view',
    'discrepancies.create',
  ],
  [UserRole.MeetingUser]: [
    'dashboard.view',
    'meetings.view',
    'meetings.create',
    'meetings.schedule',
  ],
  [UserRole.Vendor]: [
    'tenders.view',
    'bids.create',
    'awards.view',
  ],
};

export function hasPermission(userRole: UserRole, permission: string): boolean {
  const permissions = ROLE_PERMISSIONS[userRole];
  return permissions.includes('*') || permissions.includes(permission);
}

export function getRoleDisplayName(role: UserRole): string {
  const displayNames: Record<UserRole, string> = {
    [UserRole.SuperAdmin]: 'Super Administrator',
    [UserRole.Admin]: 'System Administrator',
    [UserRole.GovernorAdmin]: 'Governor Administrator',
    [UserRole.ProjectManager]: 'Project Manager',
    [UserRole.Contractor]: 'Contractor',
    [UserRole.FinanceOfficer]: 'Finance Officer',
    [UserRole.ProcurementOfficer]: 'Procurement Officer',
    [UserRole.Auditor]: 'Auditor',
    [UserRole.MeetingUser]: 'Meeting User',
    [UserRole.Vendor]: 'Vendor',
  };
  return displayNames[role];
}

export function getRoleRoutes(role: UserRole): string[] {
  const roleRoutes: Record<UserRole, string[]> = {
    [UserRole.SuperAdmin]: ['/dashboard', '/admin', '/governor', '/project-manager', '/contractor', '/finance-officer', '/procurement-officer', '/auditor', '/meeting-user'],
    [UserRole.Admin]: ['/admin/dashboard', '/admin/users', '/admin/mdas'],
    [UserRole.GovernorAdmin]: ['/governor/dashboard', '/governor/reports'],
    [UserRole.ProjectManager]: ['/project-manager/dashboard', '/project-manager/projects', '/project-manager/submissions'],
    [UserRole.Contractor]: ['/contractor/projects'],
    [UserRole.FinanceOfficer]: ['/finance-officer/finance'],
    [UserRole.ProcurementOfficer]: ['/procurement-officer/procurement'],
    [UserRole.Auditor]: ['/auditor/audit'],
    [UserRole.MeetingUser]: ['/meeting-user/meetings'],
    [UserRole.Vendor]: ['/vendor/tenders', '/vendor/awards'],
  };
  return roleRoutes[role] || [];
}
