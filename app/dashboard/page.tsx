/**
 * Shared dashboard entry point
 * Redirects to role-specific dashboard
 */

import { redirect } from 'next/navigation';
import { mockUser } from '@/lib/auth';
import { getRoleRoutes } from '@/lib/auth';

export default function DashboardPage() {
  // Get the first available route for the user's role
  const userRoutes = getRoleRoutes(mockUser.role);
  const defaultRoute = userRoutes[0] || '/governor/dashboard';
  
  // Redirect to the appropriate dashboard
  redirect(defaultRoute);
}
