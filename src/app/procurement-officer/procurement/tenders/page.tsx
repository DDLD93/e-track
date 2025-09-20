/**
 * PROCUREMENT OFFICER - TENDERS MANAGEMENT
 * 
 * Expected Implementation (from PRD):
 * - List and manage procurement tenders for user's MDA
 * - Tender lifecycle management (Open, Bidding, Awarded, Closed)
 * - Bid evaluation and vendor management
 * - Document management and compliance
 * - Award processing and contract finalization
 * 
 * User Role: Procurement Officer (MDA-Specific)
 * Permissions: Manage procurement for their MDA only
 * Security: Filter tenders by user's MDA
 * 
 * Key Features:
 * - Tender status tracking
 * - Bid evaluation workflow
 * - Vendor communication
 * - Document repository
 */

export default function TendersManagement() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tender Management</h1>
          <p className="text-gray-600 mt-2">
            Manage procurement tenders and vendor bids for your MDA
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create New Tender
        </button>
      </div>

      {/* Tender Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Open Tenders</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">12</p>
          <p className="text-sm text-blue-600 mt-1">Accepting bids</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Under Evaluation</h3>
          <p className="text-2xl font-bold text-yellow-600 mt-2">8</p>
          <p className="text-sm text-yellow-600 mt-1">Being reviewed</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Awarded</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">16</p>
          <p className="text-sm text-green-600 mt-1">This quarter</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">₦2.1B</p>
          <p className="text-sm text-purple-600 mt-1">Active tenders</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Tenders
            </label>
            <input
              type="text"
              placeholder="Search by title or description..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Status</option>
              <option value="Open">Open</option>
              <option value="Bidding">Bidding</option>
              <option value="Awarded">Awarded</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Categories</option>
              <option value="Goods">Goods</option>
              <option value="Services">Services</option>
              <option value="Works">Works</option>
              <option value="Consultancy">Consultancy</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Time</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Tenders List */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Active Tenders</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {/* Tender Item 1 */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">Road Maintenance Equipment</h4>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Open
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Procurement of heavy machinery and equipment for road maintenance operations 
                  including excavators, compactors, and asphalt laying equipment.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Estimated Cost:</span>
                    <p className="text-gray-900">₦150,000,000</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Bids Received:</span>
                    <p className="text-gray-900">7 vendors</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Closing Date:</span>
                    <p className="text-gray-900">Oct 30, 2024</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Days Remaining:</span>
                    <p className="text-orange-600">15 days</p>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-3">
                  <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                    View Details
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    View Bids (7)
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    Documents
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tender Item 2 */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">Office Supplies & Stationery</h4>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Evaluating
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Annual procurement of office supplies including stationery, consumables, 
                  and office equipment for all MDA departments.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Estimated Cost:</span>
                    <p className="text-gray-900">₦25,000,000</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Bids Received:</span>
                    <p className="text-gray-900">12 vendors</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Closed Date:</span>
                    <p className="text-gray-900">Sep 20, 2024</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Evaluation:</span>
                    <p className="text-yellow-600">In progress</p>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-3">
                  <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                    Start Evaluation
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    View Bids (12)
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    Evaluation Matrix
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    Documents
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tender Item 3 */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">IT Infrastructure Upgrade</h4>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Awarded
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Comprehensive IT infrastructure upgrade including servers, networking equipment, 
                  and software licensing for improved operational efficiency.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Contract Value:</span>
                    <p className="text-gray-900">₦85,000,000</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Winning Vendor:</span>
                    <p className="text-gray-900">TechSolutions Ltd</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Award Date:</span>
                    <p className="text-gray-900">Aug 15, 2024</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Savings:</span>
                    <p className="text-green-600">₦15M (15%)</p>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-3">
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    View Award
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    Contract Details
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    All Bids (9)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">36</span> tenders
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
