/**
 * E-TRACK TYPES DEFINITIONS
 * 
 * Complete TypeScript interfaces for the E-Track government 
 * performance and accountability platform
 */

// =====================================================
// USER ROLES & AUTHENTICATION
// =====================================================

export enum UserRole {
  SuperAdmin = 'SuperAdmin',
  GovernorAdmin = 'GovernorAdmin', 
  ProjectManager = 'ProjectManager',
  Contractor = 'Contractor',
  FinanceOfficer = 'FinanceOfficer',
  ProcurementOfficer = 'ProcurementOfficer',
  Vendor = 'Vendor',
  Auditor = 'Auditor',
  MeetingUser = 'MeetingUser',
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  mdaId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  user: User;
  expires: string;
}

// =====================================================
// MDA (MINISTRIES, DEPARTMENTS & AGENCIES)
// =====================================================

export interface MDA {
  id: string;
  name: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

// =====================================================
// PROJECTS
// =====================================================

export enum ProjectStatus {
  Planned = 'Planned',
  InProgress = 'InProgress', 
  Delayed = 'Delayed',
  Completed = 'Completed',
}

export enum ProjectCategory {
  Infrastructure = 'Infrastructure',
  Healthcare = 'Healthcare',
  Education = 'Education',
  Agriculture = 'Agriculture',
  Technology = 'Technology',
  Environment = 'Environment',
  Housing = 'Housing',
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  supervisingMdaId: string;
  supervisingMda?: MDA;
  contractorId: string;
  contractor?: User;
  contractValue: number;
  startDate: Date;
  endDate: Date;
  status: ProjectStatus;
  evidenceDocs: string[];
  createdAt: Date;
  updatedAt: Date;
}

// =====================================================
// MILESTONES
// =====================================================

export enum MilestoneStage {
  PreConstruction = 'PreConstruction',
  Foundation = 'Foundation',
  Superstructure = 'Superstructure',
  Finishing = 'Finishing',
  TestingCommissioning = 'TestingCommissioning',
  Handover = 'Handover',
}

export enum SubmissionStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
}

export interface GeoLocation {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
}

export interface MilestoneSubmission {
  id: string;
  projectId: string;
  project?: Project;
  contractorId: string;
  contractor?: User;
  milestoneStage: MilestoneStage;
  percentComplete: number;
  notes?: string;
  geoTag?: GeoLocation;
  evidenceDocs: string[];
  status: SubmissionStatus;
  reviewedBy?: string;
  reviewer?: User;
  reviewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// =====================================================
// FINANCE
// =====================================================

export interface BudgetAllocation {
  id: string;
  mdaId: string;
  mda?: MDA;
  fiscalYear: number;
  quarter: 1 | 2 | 3 | 4;
  amount: number;
  source: string;
  supportingDocs: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Expenditure {
  id: string;
  projectId: string;
  project?: Project;
  amount: number;
  date: Date;
  recipient: string;
  supportingDocs: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Revenue {
  id: string;
  mdaId: string;
  mda?: MDA;
  type: string;
  amount: number;
  date: Date;
  supportingDocs: string[];
  createdAt: Date;
  updatedAt: Date;
}

// =====================================================
// PROCUREMENT
// =====================================================

export enum ProcurementStatus {
  Open = 'Open',
  Bidding = 'Bidding',
  Awarded = 'Awarded',
  Closed = 'Closed',
}

export enum BidStatus {
  Submitted = 'Submitted',
  Rejected = 'Rejected',
  Awarded = 'Awarded',
}

export interface ProcurementRequest {
  id: string;
  mdaId: string;
  mda?: MDA;
  title: string;
  description: string;
  estimatedCost: number;
  requestDate: Date;
  status: ProcurementStatus;
  documents: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Bid {
  id: string;
  procurementRequestId: string;
  procurementRequest?: ProcurementRequest;
  vendorId: string;
  vendor?: User;
  bidAmount: number;
  proposalDocs: string[];
  complianceDocs: string[];
  status: BidStatus;
  submittedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Award {
  id: string;
  procurementRequestId: string;
  procurementRequest?: ProcurementRequest;
  vendorId: string;
  vendor?: User;
  contractValue: number;
  awardDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

// =====================================================
// MEETINGS
// =====================================================

export interface Meeting {
  id: string;
  title: string;
  agendaDocs: string[];
  participants: string[];
  participantUsers?: User[];
  scheduledAt: Date;
  locationOrLink: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ActionItem {
  task: string;
  responsibleUserId?: string;
  responsibleUser?: User;
  dueDate?: Date;
}

export interface MeetingMinutes {
  id: string;
  meetingId: string;
  meeting?: Meeting;
  decisions: string[];
  actionItems: ActionItem[];
  attachments: string[];
  recordedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

// =====================================================
// AUDIT & DISCREPANCIES
// =====================================================

export enum AuditModule {
  Budget = 'budget',
  Expenditure = 'expenditure',
  Revenue = 'revenue',
  Procurement = 'procurement',
  Project = 'project',
}

export enum DiscrepancyStatus {
  Open = 'Open',
  Resolved = 'Resolved',
  Escalated = 'Escalated',
}

export interface DiscrepancyRemark {
  id: string;
  entityId: string; // references any document id
  module: AuditModule;
  auditorId: string;
  auditor?: User;
  comment: string;
  status: DiscrepancyStatus;
  resolvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// =====================================================
// API RESPONSES
// =====================================================

export interface ApiResponse<T = any> {
  ok: boolean;
  data?: T;
  message: string;
}

export interface PaginatedResponse<T = any> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

// =====================================================
// PERMISSIONS & RBAC
// =====================================================

export interface RolePermissions {
  // Dashboard & Reports
  canViewGovernorDashboard: boolean;
  canExportReports: boolean;
  
  // Projects
  canViewProjects: boolean;
  canAddProjects: boolean;
  canEditProjects: boolean;
  canDeleteProjects: boolean;
  canSubmitProgress: boolean;
  canApproveSubmissions: boolean;
  
  // Finance
  canViewFinance: boolean;
  canUploadFinance: boolean;
  canEditFinance: boolean;
  
  // Procurement
  canViewProcurement: boolean;
  canManageProcurement: boolean;
  canSubmitBids: boolean;
  canAwardContracts: boolean;
  
  // Meetings
  canViewMeetings: boolean;
  canScheduleMeetings: boolean;
  canRecordMinutes: boolean;
  
  // Audit
  canAudit: boolean;
  canFlagDiscrepancies: boolean;
  canResolveDiscrepancies: boolean;
  
  // Admin
  canManageUsers: boolean;
  canManageMDAs: boolean;
  canViewAllData: boolean;
}

export const ROLE_PERMISSIONS: Record<UserRole, RolePermissions> = {
  [UserRole.SuperAdmin]: {
    canViewGovernorDashboard: true,
    canExportReports: true,
    canViewProjects: true,
    canAddProjects: true,
    canEditProjects: true,
    canDeleteProjects: true,
    canSubmitProgress: false,
    canApproveSubmissions: true,
    canViewFinance: true,
    canUploadFinance: true,
    canEditFinance: true,
    canViewProcurement: true,
    canManageProcurement: true,
    canSubmitBids: false,
    canAwardContracts: true,
    canViewMeetings: true,
    canScheduleMeetings: true,
    canRecordMinutes: true,
    canAudit: true,
    canFlagDiscrepancies: true,
    canResolveDiscrepancies: true,
    canManageUsers: true,
    canManageMDAs: true,
    canViewAllData: true,
  },
  
  [UserRole.GovernorAdmin]: {
    canViewGovernorDashboard: true,
    canExportReports: true,
    canViewProjects: true,
    canAddProjects: false,
    canEditProjects: false,
    canDeleteProjects: false,
    canSubmitProgress: false,
    canApproveSubmissions: false,
    canViewFinance: true,
    canUploadFinance: false,
    canEditFinance: false,
    canViewProcurement: true,
    canManageProcurement: false,
    canSubmitBids: false,
    canAwardContracts: false,
    canViewMeetings: true,
    canScheduleMeetings: false,
    canRecordMinutes: false,
    canAudit: false,
    canFlagDiscrepancies: false,
    canResolveDiscrepancies: false,
    canManageUsers: false,
    canManageMDAs: false,
    canViewAllData: true,
  },
  
  [UserRole.ProjectManager]: {
    canViewGovernorDashboard: false,
    canExportReports: false,
    canViewProjects: true,
    canAddProjects: true,
    canEditProjects: true,
    canDeleteProjects: false,
    canSubmitProgress: false,
    canApproveSubmissions: true,
    canViewFinance: true,
    canUploadFinance: false,
    canEditFinance: false,
    canViewProcurement: true,
    canManageProcurement: false,
    canSubmitBids: false,
    canAwardContracts: false,
    canViewMeetings: true,
    canScheduleMeetings: true,
    canRecordMinutes: true,
    canAudit: false,
    canFlagDiscrepancies: false,
    canResolveDiscrepancies: false,
    canManageUsers: false,
    canManageMDAs: false,
    canViewAllData: false,
  },
  
  [UserRole.Contractor]: {
    canViewGovernorDashboard: false,
    canExportReports: false,
    canViewProjects: true,
    canAddProjects: false,
    canEditProjects: false,
    canDeleteProjects: false,
    canSubmitProgress: true,
    canApproveSubmissions: false,
    canViewFinance: false,
    canUploadFinance: false,
    canEditFinance: false,
    canViewProcurement: false,
    canManageProcurement: false,
    canSubmitBids: false,
    canAwardContracts: false,
    canViewMeetings: false,
    canScheduleMeetings: false,
    canRecordMinutes: false,
    canAudit: false,
    canFlagDiscrepancies: false,
    canResolveDiscrepancies: false,
    canManageUsers: false,
    canManageMDAs: false,
    canViewAllData: false,
  },
  
  [UserRole.FinanceOfficer]: {
    canViewGovernorDashboard: false,
    canExportReports: false,
    canViewProjects: true,
    canAddProjects: false,
    canEditProjects: false,
    canDeleteProjects: false,
    canSubmitProgress: false,
    canApproveSubmissions: false,
    canViewFinance: true,
    canUploadFinance: true,
    canEditFinance: true,
    canViewProcurement: false,
    canManageProcurement: false,
    canSubmitBids: false,
    canAwardContracts: false,
    canViewMeetings: true,
    canScheduleMeetings: false,
    canRecordMinutes: false,
    canAudit: false,
    canFlagDiscrepancies: false,
    canResolveDiscrepancies: false,
    canManageUsers: false,
    canManageMDAs: false,
    canViewAllData: false,
  },
  
  [UserRole.ProcurementOfficer]: {
    canViewGovernorDashboard: false,
    canExportReports: false,
    canViewProjects: true,
    canAddProjects: false,
    canEditProjects: false,
    canDeleteProjects: false,
    canSubmitProgress: false,
    canApproveSubmissions: false,
    canViewFinance: false,
    canUploadFinance: false,
    canEditFinance: false,
    canViewProcurement: true,
    canManageProcurement: true,
    canSubmitBids: false,
    canAwardContracts: true,
    canViewMeetings: true,
    canScheduleMeetings: false,
    canRecordMinutes: false,
    canAudit: false,
    canFlagDiscrepancies: false,
    canResolveDiscrepancies: false,
    canManageUsers: false,
    canManageMDAs: false,
    canViewAllData: false,
  },
  
  [UserRole.Vendor]: {
    canViewGovernorDashboard: false,
    canExportReports: false,
    canViewProjects: false,
    canAddProjects: false,
    canEditProjects: false,
    canDeleteProjects: false,
    canSubmitProgress: false,
    canApproveSubmissions: false,
    canViewFinance: false,
    canUploadFinance: false,
    canEditFinance: false,
    canViewProcurement: true,
    canManageProcurement: false,
    canSubmitBids: true,
    canAwardContracts: false,
    canViewMeetings: false,
    canScheduleMeetings: false,
    canRecordMinutes: false,
    canAudit: false,
    canFlagDiscrepancies: false,
    canResolveDiscrepancies: false,
    canManageUsers: false,
    canManageMDAs: false,
    canViewAllData: false,
  },
  
  [UserRole.Auditor]: {
    canViewGovernorDashboard: false,
    canExportReports: true,
    canViewProjects: true,
    canAddProjects: false,
    canEditProjects: false,
    canDeleteProjects: false,
    canSubmitProgress: false,
    canApproveSubmissions: false,
    canViewFinance: true,
    canUploadFinance: false,
    canEditFinance: false,
    canViewProcurement: true,
    canManageProcurement: false,
    canSubmitBids: false,
    canAwardContracts: false,
    canViewMeetings: true,
    canScheduleMeetings: false,
    canRecordMinutes: false,
    canAudit: true,
    canFlagDiscrepancies: true,
    canResolveDiscrepancies: false,
    canManageUsers: false,
    canManageMDAs: false,
    canViewAllData: true,
  },
  
  [UserRole.MeetingUser]: {
    canViewGovernorDashboard: false,
    canExportReports: false,
    canViewProjects: false,
    canAddProjects: false,
    canEditProjects: false,
    canDeleteProjects: false,
    canSubmitProgress: false,
    canApproveSubmissions: false,
    canViewFinance: false,
    canUploadFinance: false,
    canEditFinance: false,
    canViewProcurement: false,
    canManageProcurement: false,
    canSubmitBids: false,
    canAwardContracts: false,
    canViewMeetings: true,
    canScheduleMeetings: true,
    canRecordMinutes: true,
    canAudit: false,
    canFlagDiscrepancies: false,
    canResolveDiscrepancies: false,
    canManageUsers: false,
    canManageMDAs: false,
    canViewAllData: false,
  },
};

// =====================================================
// FORM TYPES
// =====================================================

export interface ProjectFormData {
  title: string;
  description: string;
  category: ProjectCategory;
  supervisingMdaId: string;
  contractorId: string;
  contractValue: number;
  startDate: string;
  endDate: string;
  evidenceDocs?: string[];
}

export interface MilestoneFormData {
  milestoneStage: MilestoneStage;
  percentComplete: number;
  notes?: string;
  geoTag?: { lat: number; lng: number };
  evidenceDocs: string[];
}

export interface BudgetFormData {
  mdaId: string;
  fiscalYear: number;
  quarter: 1 | 2 | 3 | 4;
  amount: number;
  source: string;
  supportingDocs?: string[];
}

export interface ExpenditureFormData {
  projectId: string;
  amount: number;
  date: string;
  recipient: string;
  supportingDocs?: string[];
}

export interface RevenueFormData {
  mdaId: string;
  type: string;
  amount: number;
  date: string;
  supportingDocs?: string[];
}

export interface TenderFormData {
  mdaId: string;
  title: string;
  description: string;
  estimatedCost: number;
  requestDate: string;
  documents?: string[];
}

export interface BidFormData {
  procurementRequestId: string;
  bidAmount: number;
  proposalDocs: string[];
  complianceDocs: string[];
}

export interface MeetingFormData {
  title: string;
  agendaDocs?: string[];
  participants: string[];
  scheduledAt: string;
  locationOrLink: string;
}

// =====================================================
// DASHBOARD & ANALYTICS
// =====================================================

export interface KPICard {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string;
  }[];
}

export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  delayedProjects: number;
  totalBudget: number;
  budgetUtilization: number;
  activeTenders: number;
  completionRate: number;
}

// =====================================================
// FILE UPLOAD
// =====================================================

export interface FileUpload {
  file: File;
  name: string;
  size: number;
  type: string;
  url?: string;
  key?: string;
}

export interface PresignedUpload {
  url: string;
  key: string;
}

// =====================================================
// SEARCH & FILTERS
// =====================================================

export interface SearchFilters {
  query?: string;
  status?: string;
  category?: string;
  mdaId?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
}

// =====================================================
// NOTIFICATIONS
// =====================================================

export enum NotificationType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}