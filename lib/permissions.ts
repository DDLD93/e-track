/**
 * Permission utilities for E-Track
 * Centralized permission checking and role-based access control
 */

import { UserRole } from '@/types';
import { hasPermission, ROLE_PERMISSIONS } from './auth';

export interface Permission {
  resource: string;
  action: string;
}

export function checkPermission(userRole: UserRole, permission: Permission): boolean {
  const permissionString = `${permission.resource}.${permission.action}`;
  return hasPermission(userRole, permissionString);
}

export function getResourcePermissions(userRole: UserRole, resource: string): string[] {
  const permissions = ROLE_PERMISSIONS[userRole];
  if (permissions.includes('*')) {
    return ['view', 'create', 'edit', 'delete', 'approve', 'reject', 'export'];
  }
  
  return permissions
    .filter(permission => permission.startsWith(`${resource}.`))
    .map(permission => permission.split('.')[1]);
}

// Common permission checks
export const PERMISSIONS = {
  DASHBOARD: { resource: 'dashboard', action: 'view' },
  PROJECTS_VIEW: { resource: 'projects', action: 'view' },
  PROJECTS_CREATE: { resource: 'projects', action: 'create' },
  PROJECTS_EDIT: { resource: 'projects', action: 'edit' },
  SUBMISSIONS_VIEW: { resource: 'submissions', action: 'view' },
  SUBMISSIONS_APPROVE: { resource: 'submissions', action: 'approve' },
  FINANCE_VIEW: { resource: 'finance', action: 'view' },
  FINANCE_CREATE: { resource: 'finance', action: 'create' },
  REPORTS_VIEW: { resource: 'reports', action: 'view' },
  REPORTS_EXPORT: { resource: 'reports', action: 'export' },
  AUDIT_VIEW: { resource: 'audit', action: 'view' },
  MEETINGS_VIEW: { resource: 'meetings', action: 'view' },
  MEETINGS_CREATE: { resource: 'meetings', action: 'create' },
} as const;

export function canAccessRoute(userRole: UserRole, route: string): boolean {
  const roleRoutes = {
    [UserRole.SuperAdmin]: true, // Can access all routes
    [UserRole.Admin]: route.startsWith('/admin'),
    [UserRole.GovernorAdmin]: route.startsWith('/governor'),
    [UserRole.ProjectManager]: route.startsWith('/project-manager'),
    [UserRole.Contractor]: route.startsWith('/contractor'),
    [UserRole.FinanceOfficer]: route.startsWith('/finance-officer'),
    [UserRole.ProcurementOfficer]: route.startsWith('/procurement-officer'),
    [UserRole.Auditor]: route.startsWith('/auditor'),
    [UserRole.MeetingUser]: route.startsWith('/meeting-user'),
    [UserRole.Vendor]: route.startsWith('/vendor'),
  };
  
  return roleRoutes[userRole] || false;
}
