/**
 * VENDOR - AWARDS AND CONTRACTS
 * 
 * Expected Implementation (from PRD):
 * - View awarded contracts and results
 * - Contract status tracking
 * - Performance monitoring
 * - Payment tracking and invoicing
 * - Contract documentation access
 * 
 * User Role: Vendor
 * Permissions: View own awards and contract status
 * Security: Filter by vendor's user ID
 * 
 * Key Features:
 * - Award notifications and results
 * - Contract management
 * - Performance tracking
 * - Payment status monitoring
 * - Document access
 */

export default function VendorAwards() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">My Awards & Contracts</h1>
        <p className="text-gray-600 mt-2">
          Track your awarded contracts and performance status
        </p>
      </div>

      {/* Awards Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Awards</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">8</p>
          <p className="text-sm text-green-600 mt-1">Lifetime contracts</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Active Contracts</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">3</p>
          <p className="text-sm text-blue-600 mt-1">Currently executing</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Contract Value</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">₦450M</p>
          <p className="text-sm text-purple-600 mt-1">Active contracts</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Performance Score</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">94%</p>
          <p className="text-sm text-orange-600 mt-1">Excellent rating</p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              MDA
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All MDAs</option>
              <option value="works">Ministry of Works</option>
              <option value="health">Ministry of Health</option>
              <option value="education">Ministry of Education</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
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
      <div className="space-y-6">
        {/* Active Contract */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">Road Maintenance Equipment</h3>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Active
                  </span>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    On Schedule
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Ministry of Works and Infrastructure</p>
                <p className="text-gray-700 mb-4">
                  Supply and delivery of heavy machinery including excavators, compactors, 
                  and asphalt laying equipment for road maintenance operations.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <span className="text-sm font-medium text-gray-600">Contract Value</span>
                <p className="text-lg font-semibold text-gray-900">₦135M</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Award Date</span>
                <p className="text-lg font-semibold text-gray-900">Sep 10, 2024</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Delivery Deadline</span>
                <p className="text-lg font-semibold text-orange-600">Dec 10, 2024</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Progress</span>
                <p className="text-lg font-semibold text-green-600">65% Complete</p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Delivery Progress</span>
                <span className="text-gray-900">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-gray-600">Payment Received</p>
                <p className="text-lg font-semibold text-green-600">₦67.5M</p>
                <p className="text-xs text-gray-500">50% advance payment</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Pending Payment</p>
                <p className="text-lg font-semibold text-orange-600">₦67.5M</p>
                <p className="text-xs text-gray-500">On delivery completion</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Performance Score</p>
                <p className="text-lg font-semibold text-blue-600">98%</p>
                <p className="text-xs text-gray-500">Excellent performance</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Contract
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Submit Progress
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Request Payment
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Upload Documents
              </button>
            </div>
          </div>
        </div>

        {/* Recently Awarded */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">Office Supplies & Stationery</h3>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Contract Pending
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Ministry of Works and Infrastructure</p>
                <p className="text-gray-700 mb-4">
                  Annual supply of office stationery, consumables, and office equipment 
                  for all MDA departments and field offices.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Award Value</span>
                <p className="text-lg font-semibold text-gray-900">₦22M</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Award Date</span>
                <p className="text-lg font-semibold text-gray-900">Sep 5, 2024</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Contract Duration</span>
                <p className="text-lg font-semibold text-gray-900">12 months</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Savings</span>
                <p className="text-lg font-semibold text-green-600">₦3M (12%)</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-yellow-900">Action Required</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Please review and sign the contract documents. Contract signing deadline: Sep 20, 2024
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Sign Contract
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                View Award Letter
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Download Contract
              </button>
            </div>
          </div>
        </div>

        {/* Completed Contract */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">IT Infrastructure Upgrade</h3>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    Completed
                  </span>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Excellent Performance
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Ministry of Health</p>
                <p className="text-gray-700 mb-4">
                  Complete IT infrastructure upgrade including servers, networking equipment, 
                  and software licensing for improved operational efficiency.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Contract Value</span>
                <p className="text-lg font-semibold text-gray-900">₦85M</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Completed</span>
                <p className="text-lg font-semibold text-gray-900">Aug 15, 2024</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Duration</span>
                <p className="text-lg font-semibold text-gray-900">6 months</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Final Score</span>
                <p className="text-lg font-semibold text-green-600">96%</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-green-50 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-gray-600">Total Payments</p>
                <p className="text-lg font-semibold text-green-600">₦85M</p>
                <p className="text-xs text-gray-500">100% received</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Delivery</p>
                <p className="text-lg font-semibold text-green-600">On Time</p>
                <p className="text-xs text-gray-500">2 days early</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Quality Rating</p>
                <p className="text-lg font-semibold text-green-600">Excellent</p>
                <p className="text-xs text-gray-500">Client satisfaction: 98%</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                View Certificate
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Performance Report
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Client Feedback
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Performance Summary</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="text-2xl font-bold text-green-600">94%</h4>
              <p className="text-sm text-green-700 mt-1">Overall Performance Score</p>
              <p className="text-xs text-gray-500 mt-2">Based on 8 completed contracts</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="text-2xl font-bold text-blue-600">100%</h4>
              <p className="text-sm text-blue-700 mt-1">On-Time Delivery Rate</p>
              <p className="text-xs text-gray-500 mt-2">All contracts delivered on schedule</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h4 className="text-2xl font-bold text-purple-600">₺850M</h4>
              <p className="text-sm text-purple-700 mt-1">Total Contract Value</p>
              <p className="text-xs text-gray-500 mt-2">Lifetime earnings from platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
          <span className="font-medium">8</span> awards
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-300 text-gray-500 rounded-lg hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 border border-gray-300 text-gray-500 rounded-lg hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
