/**
 * PROCUREMENT OFFICER - PROCUREMENT DASHBOARD
 * 
 * Expected Implementation (from PRD):
 * - Procurement cycle overview for user's MDA
 * - Tender management and tracking
 * - Vendor participation analytics
 * - Cost savings from competitive bidding
 * - Award processing and contract management
 * - Procurement compliance monitoring
 * 
 * User Role: Procurement Officer (MDA-Specific)
 * Permissions: Manage procurement for their MDA only
 * Security: All data filtered by user's MDA
 * 
 * Key Features:
 * - Tender lifecycle tracking
 * - Vendor performance metrics
 * - Cost analysis and savings
 * - Compliance monitoring
 */

export default function ProcurementDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Procurement Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Ministry of Works • Procurement management and vendor oversight
        </p>
      </div>

      {/* Key Procurement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Active Tenders</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">12</p>
          <p className="text-sm text-blue-600 mt-1">Currently open</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Bids Received</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">89</p>
          <p className="text-sm text-green-600 mt-1">This quarter</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Cost Savings</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">₦450M</p>
          <p className="text-sm text-purple-600 mt-1">15% below estimates</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Contracts Awarded</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">28</p>
          <p className="text-sm text-orange-600 mt-1">This year</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tender Status Overview */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Tender Status Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Open for Bidding</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-sm font-medium">12</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Under Evaluation</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <span className="text-sm font-medium">8</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Awarded</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <span className="text-sm font-medium">16</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vendor Participation */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Vendor Participation</h3>
          <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Vendor participation chart</p>
          </div>
        </div>
      </div>

      {/* Recent Tenders */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Recent Tenders</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create New Tender
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tender Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estimated Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bids Received</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Closing Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Road Maintenance Equipment</p>
                    <p className="text-sm text-gray-500">Heavy machinery procurement</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">₦150M</td>
                <td className="px-6 py-4 text-sm text-gray-900">7 bids</td>
                <td className="px-6 py-4 text-sm text-gray-900">Oct 30, 2024</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Open
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-800">Manage</button>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Office Supplies</p>
                    <p className="text-sm text-gray-500">Stationery and consumables</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">₦25M</td>
                <td className="px-6 py-4 text-sm text-gray-900">12 bids</td>
                <td className="px-6 py-4 text-sm text-gray-900">Sep 20, 2024</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Evaluating
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-800">Evaluate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Create Tender</h3>
          <p className="text-gray-600 mb-4">Start a new procurement process</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            New Tender
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Evaluate Bids</h3>
          <p className="text-gray-600 mb-4">Review and score vendor proposals</p>
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Start Evaluation
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Generate Reports</h3>
          <p className="text-gray-600 mb-4">Procurement analytics and compliance</p>
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
