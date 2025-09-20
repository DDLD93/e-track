/**
 * FINANCE OFFICER - FINANCE DASHBOARD
 * 
 * Expected Implementation (from PRD):
 * - Budget vs expenditure overview for user's MDA
 * - Financial performance analytics
 * - Year-on-year budget trends
 * - Expenditure tracking by projects
 * - Revenue collection monitoring
 * - Discrepancy alerts and notifications
 * 
 * User Role: Finance Officer (MDA-Specific)
 * Permissions: View/upload finance data for their MDA only
 * Security: All data filtered by user's MDA
 * 
 * Key Features:
 * - Real-time financial KPIs
 * - Budget utilization charts
 * - Project expenditure breakdown
 * - Revenue vs target tracking
 */

export default function FinanceDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Finance Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Ministry of Works • Financial performance and budget tracking
        </p>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Budget (2024)</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">₦5.2B</p>
          <p className="text-sm text-blue-600 mt-1">↗ 15% from 2023</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Budget Utilized</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">78.5%</p>
          <p className="text-sm text-green-600 mt-1">₦4.08B spent</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Revenue Collected</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">₦1.8B</p>
          <p className="text-sm text-purple-600 mt-1">120% of target</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Pending Payments</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">₦450M</p>
          <p className="text-sm text-orange-600 mt-1">12 contractors</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget vs Expenditure Chart */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Budget vs Expenditure (2024)</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Budget vs Expenditure Chart</p>
          </div>
        </div>
        
        {/* Revenue Trends */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Revenue Collection Trends</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Revenue Trends Chart</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Upload Budget</h3>
          <p className="text-gray-600 mb-4">Add quarterly budget allocations</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Upload Budget Data
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Record Expenditure</h3>
          <p className="text-gray-600 mb-4">Log project expenditures and payments</p>
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Add Expenditure
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Record Revenue</h3>
          <p className="text-gray-600 mb-4">Track revenue collection and sources</p>
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Add Revenue
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Recent Financial Activities</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Sep 15, 2024</td>
                <td className="px-6 py-4 text-sm text-gray-600">Expenditure</td>
                <td className="px-6 py-4 text-sm text-gray-900">Road Construction Payment</td>
                <td className="px-6 py-4 text-sm text-red-600">-₦150M</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Processed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
