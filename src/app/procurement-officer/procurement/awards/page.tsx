/**
 * PROCUREMENT OFFICER - AWARDS MANAGEMENT
 * 
 * Expected Implementation (from PRD):
 * - Contract award processing and management
 * - Award notifications and documentation
 * - Contract finalization and signing
 * - Vendor performance tracking
 * - Award compliance monitoring
 * 
 * User Role: Procurement Officer (MDA-Specific)
 * Permissions: Manage awards for their MDA only
 * Security: Filter awards by user's MDA
 * 
 * Key Features:
 * - Award listing and management
 * - Contract documentation
 * - Vendor notification system
 * - Performance monitoring
 */

export default function AwardsManagement() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Contract Awards</h1>
        <p className="text-gray-600 mt-2">
          Manage contract awards and vendor performance for your MDA
        </p>
      </div>

      {/* Awards Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Awards</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">28</p>
          <p className="text-sm text-blue-600 mt-1">This year</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Active Contracts</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">18</p>
          <p className="text-sm text-green-600 mt-1">In progress</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">₦3.2B</p>
          <p className="text-sm text-purple-600 mt-1">Awarded contracts</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Cost Savings</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">₦480M</p>
          <p className="text-sm text-orange-600 mt-1">15% below estimates</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Awards
            </label>
            <input
              type="text"
              placeholder="Search by tender or vendor..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contract Status
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Status</option>
              <option value="Awarded">Awarded</option>
              <option value="Signed">Contract Signed</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Terminated">Terminated</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Award Period
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Time</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Awards List */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Contract Awards</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tender/Contract</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Winning Vendor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Award Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Award Date</th>
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
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">MegaEquip Ltd</p>
                    <p className="text-sm text-gray-500">15 years experience</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">₦135M</p>
                    <p className="text-sm text-green-600">₦15M saved (10%)</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Sep 10, 2024</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Contract Signed
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-800">Contract</button>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Office Supplies & Stationery</p>
                    <p className="text-sm text-gray-500">Annual supplies contract</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">OfficeMax Solutions</p>
                    <p className="text-sm text-gray-500">8 years experience</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">₦22M</p>
                    <p className="text-sm text-green-600">₦3M saved (12%)</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Sep 5, 2024</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Awarded
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                  <button className="text-green-600 hover:text-green-800">Sign Contract</button>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">IT Infrastructure Upgrade</p>
                    <p className="text-sm text-gray-500">Servers and networking</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">TechSolutions Ltd</p>
                    <p className="text-sm text-gray-500">12 years experience</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">₦85M</p>
                    <p className="text-sm text-green-600">₦15M saved (15%)</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Aug 15, 2024</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                  <button className="text-purple-600 hover:text-purple-800">Monitor</button>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Vehicle Maintenance Services</p>
                    <p className="text-sm text-gray-500">Fleet maintenance contract</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">AutoCare Services</p>
                    <p className="text-sm text-gray-500">10 years experience</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">₦45M</p>
                    <p className="text-sm text-green-600">₦8M saved (18%)</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Jul 20, 2024</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-800">Report</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Award Value Distribution</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Award value distribution chart</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Cost Savings Trend</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Cost savings trend chart</p>
          </div>
        </div>
      </div>

      {/* Top Performing Vendors */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Top Performing Vendors</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900">TechSolutions Ltd</h4>
              <p className="text-sm text-gray-600 mt-1">IT & Technology</p>
              <div className="mt-3">
                <p className="text-2xl font-bold text-green-600">98%</p>
                <p className="text-xs text-green-700">Performance Score</p>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                5 contracts • ₦450M total value
              </div>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900">MegaEquip Ltd</h4>
              <p className="text-sm text-gray-600 mt-1">Equipment & Machinery</p>
              <div className="mt-3">
                <p className="text-2xl font-bold text-blue-600">95%</p>
                <p className="text-xs text-blue-700">Performance Score</p>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                3 contracts • ₦380M total value
              </div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-gray-900">BuildCorp Nigeria</h4>
              <p className="text-sm text-gray-600 mt-1">Construction & Works</p>
              <div className="mt-3">
                <p className="text-2xl font-bold text-purple-600">92%</p>
                <p className="text-xs text-purple-700">Performance Score</p>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                4 contracts • ₦720M total value
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">28</span> awards
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-300 text-gray-500 rounded-lg hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
