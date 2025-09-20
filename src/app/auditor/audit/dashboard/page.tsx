/**
 * AUDITOR - AUDIT DASHBOARD
 * 
 * Expected Implementation (from PRD):
 * - Cross-MDA analytics and compliance monitoring
 * - Discrepancy detection and flagging
 * - Independent oversight across all modules
 * - Compliance reports and audit trails
 * - Financial irregularities detection
 * - Procurement compliance monitoring
 * 
 * User Role: Auditor
 * Permissions: Read-only access across all MDAs
 * Security: Independent cross-MDA access
 * 
 * Key Features:
 * - Cross-MDA performance comparison
 * - Discrepancy alerts and tracking
 * - Compliance scoring dashboard
 * - Audit trail visualization
 */

export default function AuditorDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Audit & Compliance Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Independent oversight and compliance monitoring across all MDAs
        </p>
      </div>

      {/* Compliance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Open Discrepancies</h3>
          <p className="text-2xl font-bold text-red-600 mt-2">23</p>
          <p className="text-sm text-red-600 mt-1">Requires attention</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Compliance Score</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">87.5%</p>
          <p className="text-sm text-green-600 mt-1">Above target</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Audits This Month</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">15</p>
          <p className="text-sm text-blue-600 mt-1">Completed</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Risk Level</h3>
          <p className="text-2xl font-bold text-yellow-600 mt-2">Medium</p>
          <p className="text-sm text-yellow-600 mt-1">Monitor closely</p>
        </div>
      </div>

      {/* MDA Compliance Overview */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">MDA Compliance Overview</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">MDA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Projects</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Budget Compliance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discrepancies</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Ministry of Works</td>
                <td className="px-6 py-4 text-sm text-gray-900">45 Active</td>
                <td className="px-6 py-4 text-sm text-green-600">92%</td>
                <td className="px-6 py-4 text-sm text-yellow-600">3 Open</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Low
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Flag Discrepancy</h3>
          <p className="text-gray-600 mb-4">Report compliance issues or irregularities</p>
          <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Report Issue
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Generate Report</h3>
          <p className="text-gray-600 mb-4">Create comprehensive audit reports</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Report
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">View Analytics</h3>
          <p className="text-gray-600 mb-4">Access detailed compliance analytics</p>
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
