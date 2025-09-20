/**
 * AUTHENTICATION UTILITIES
 * 
 * Role-based authentication helpers and session management
 */

import { UserRole, User, ROLE_PERMISSIONS } from '@/types';

/**
 * Check if user has specific permission
 */
export function hasPermission(
  user: User, 
  permission: keyof typeof ROLE_PERMISSIONS[UserRole]
): boolean {
  const rolePermissions = ROLE_PERMISSIONS[user.role];
  return rolePermissions[permission];
}

/**
 * Check if user can access MDA-specific resource
 */
export function canAccessMDA(user: User, resourceMdaId: string): boolean {
  // SuperAdmin and GovernorAdmin can access all MDAs
  if (user.role === UserRole.SuperAdmin || user.role === UserRole.GovernorAdmin) {
    return true;
  }
  
  // Auditor has cross-MDA access
  if (user.role === UserRole.Auditor) {
    return true;
  }
  
  // Other roles are restricted to their MDA
  return user.mdaId === resourceMdaId;
}

/**
 * Get user's accessible routes based on role
 */
export function getAccessibleRoutes(role: UserRole): string[] {
  switch (role) {
    case UserRole.SuperAdmin:
      return ['/governor', '/project-manager', '/finance-officer', '/procurement-officer', '/auditor', '/admin'];
    
    case UserRole.GovernorAdmin:
      return ['/governor'];
    
    case UserRole.ProjectManager:
      return ['/project-manager'];
    
    case UserRole.Contractor:
      return ['/contractor'];
    
    case UserRole.FinanceOfficer:
      return ['/finance-officer'];
    
    case UserRole.ProcurementOfficer:
      return ['/procurement-officer'];
    
    case UserRole.Vendor:
      return ['/vendor'];
    
    case UserRole.Auditor:
      return ['/auditor'];
    
    case UserRole.MeetingUser:
      return ['/meeting-user'];
    
    default:
      return [];
  }
}

/**
 * Validate route access for user
 */
export function canAccessRoute(user: User, route: string): boolean {
  const accessibleRoutes = getAccessibleRoutes(user.role);
  return accessibleRoutes.some(allowedRoute => route.startsWith(allowedRoute));
}

/**
 * Get default redirect path for user role
 */
export function getDefaultRedirectPath(role: UserRole): string {
  switch (role) {
    case UserRole.SuperAdmin:
    case UserRole.GovernorAdmin:
      return '/governor/dashboard';
    case UserRole.ProjectManager:
      return '/project-manager/projects';
    case UserRole.Contractor:
      return '/contractor/projects';
    case UserRole.FinanceOfficer:
      return '/finance-officer/finance/dashboard';
    case UserRole.ProcurementOfficer:
      return '/procurement-officer/procurement/dashboard';
    case UserRole.Vendor:
      return '/vendor/tenders';
    case UserRole.Auditor:
      return '/auditor/audit/dashboard';
    case UserRole.MeetingUser:
      return '/meeting-user/meetings';
    default:
      return '/';
  }
}
