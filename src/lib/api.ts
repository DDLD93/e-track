/**
 * API UTILITIES
 * 
 * Centralized API client with type safety and error handling
 */

import { ApiResponse, PaginatedResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // GET request
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // POST request
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PATCH request
  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // Paginated GET request
  async getPaginated<T>(
    endpoint: string,
    params?: Record<string, string | number>
  ): Promise<ApiResponse<PaginatedResponse<T>>> {
    const searchParams = new URLSearchParams();
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, String(value));
      });
    }
    
    const url = searchParams.toString() 
      ? `${endpoint}?${searchParams.toString()}`
      : endpoint;
    
    return this.get<PaginatedResponse<T>>(url);
  }
}

// Create singleton instance
export const api = new ApiClient();

// Specific API endpoints
export const endpoints = {
  // Authentication
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    me: '/api/auth/me',
    refresh: '/api/auth/refresh',
  },

  // Users
  users: '/api/users',
  
  // MDAs
  mdas: '/api/mdas',

  // Projects
  projects: '/api/projects',
  milestones: '/api/milestones',

  // Finance
  finance: {
    budgets: '/api/finance/budgets',
    expenditures: '/api/finance/expenditures',
    revenues: '/api/finance/revenues',
  },

  // Procurement
  procurement: {
    tenders: '/api/procurement/tenders',
    bids: '/api/procurement/bids',
    awards: '/api/procurement/awards',
  },

  // Meetings
  meetings: '/api/meetings',
  minutes: '/api/meetings/minutes',

  // Audit
  audit: {
    discrepancies: '/api/audit/discrepancies',
  },

  // Dashboards
  dashboards: {
    governor: '/api/dashboards/governor',
    mda: '/api/dashboards/mda',
  },

  // File uploads
  uploads: {
    presign: '/api/uploads/presign',
  },
} as const;
