/**
 * Landing page for E-Track
 * Role-based redirect to appropriate dashboard
 */

import { redirect } from 'next/navigation';
import { mockUser } from '@/lib/auth';
import { getRoleRoutes } from '@/lib/auth';

export default function HomePage() {
  // Get the first available route for the user's role
  const userRoutes = getRoleRoutes(mockUser.role);
  const defaultRoute = userRoutes[0] || '/dashboard';
  
  // Redirect to the appropriate dashboard
  redirect(defaultRoute);
}