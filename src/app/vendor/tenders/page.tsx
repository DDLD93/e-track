/**
 * VENDOR - AVAILABLE TENDERS
 * 
 * Expected Implementation (from PRD):
 * - View published tenders across all MDAs
 * - Tender search and filtering capabilities
 * - Bid submission interface
 * - Document download and access
 * - Tender timeline and deadline tracking
 * 
 * User Role: Vendor
 * Permissions: View public tenders and submit bids
 * Security: Access limited to procurement module
 * 
 * Key Features:
 * - Tender discovery and search
 * - Eligibility checking
 * - Bid preparation interface
 * - Document management
 * - Deadline tracking
 */

export default function AvailableTenders() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Available Tenders</h1>
        <p className="text-gray-600 mt-2">
          Discover and bid on government procurement opportunities
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Open Tenders</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">45</p>
          <p className="text-sm text-blue-600 mt-1">Currently accepting bids</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">My Bids</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">12</p>
          <p className="text-sm text-green-600 mt-1">Submitted this quarter</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Win Rate</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">25%</p>
          <p className="text-sm text-purple-600 mt-1">3 of 12 bids won</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Value Won</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">₦180M</p>
          <p className="text-sm text-orange-600 mt-1">This year</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Tenders
            </label>
            <input
              type="text"
              placeholder="Search by title, description, MDA..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
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
              MDA
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All MDAs</option>
              <option value="works">Ministry of Works</option>
              <option value="health">Ministry of Health</option>
              <option value="education">Ministry of Education</option>
              <option value="agriculture">Ministry of Agriculture</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Value Range
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Values</option>
              <option value="0-10M">₦0 - ₦10M</option>
              <option value="10-50M">₦10M - ₦50M</option>
              <option value="50-100M">₦50M - ₦100M</option>
              <option value="100M+">₦100M+</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Search Tenders
            </button>
          </div>
        </div>
      </div>

      {/* Tender Listings */}
      <div className="space-y-6">
        {/* Tender Card 1 */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">Road Maintenance Equipment</h3>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Open
                  </span>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Goods
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Ministry of Works and Infrastructure</p>
                <p className="text-gray-700 mb-4">
                  Procurement of heavy machinery and equipment for road maintenance operations including 
                  excavators, compactors, asphalt laying equipment, and related accessories.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Estimated Value</span>
                <p className="text-lg font-semibold text-gray-900">₦150M</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Submission Deadline</span>
                <p className="text-lg font-semibold text-orange-600">Oct 30, 2024</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Days Remaining</span>
                <p className="text-lg font-semibold text-red-600">15 days</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Bids Submitted</span>
                <p className="text-lg font-semibold text-gray-900">7 vendors</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Submit Bid
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    Download Documents
                  </button>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Published: Sep 15, 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tender Card 2 */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">Hospital Medical Equipment</h3>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Open
                  </span>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Goods
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Ministry of Health</p>
                <p className="text-gray-700 mb-4">
                  Supply and installation of medical equipment for general hospital including 
                  X-ray machines, ultrasound equipment, patient monitors, and laboratory equipment.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Estimated Value</span>
                <p className="text-lg font-semibold text-gray-900">₦200M</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Submission Deadline</span>
                <p className="text-lg font-semibold text-orange-600">Nov 15, 2024</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Days Remaining</span>
                <p className="text-lg font-semibold text-green-600">31 days</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Bids Submitted</span>
                <p className="text-lg font-semibold text-gray-900">3 vendors</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Submit Bid
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    Download Documents
                  </button>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Published: Sep 20, 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tender Card 3 */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">School Building Construction</h3>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Open
                  </span>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                    Works
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Ministry of Education</p>
                <p className="text-gray-700 mb-4">
                  Construction of 12-classroom block with administrative offices, library, 
                  and laboratory facilities for secondary school in rural community.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Estimated Value</span>
                <p className="text-lg font-semibold text-gray-900">₦350M</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Submission Deadline</span>
                <p className="text-lg font-semibold text-orange-600">Dec 5, 2024</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Days Remaining</span>
                <p className="text-lg font-semibold text-green-600">51 days</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Bids Submitted</span>
                <p className="text-lg font-semibold text-gray-900">1 vendor</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Submit Bid
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    Download Documents
                  </button>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Published: Sep 25, 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Vendor Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left">
            <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h4 className="font-medium text-gray-900">Bidding Guidelines</h4>
            <p className="text-sm text-gray-600 mt-1">Learn how to prepare winning bids</p>
          </button>
          
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left">
            <svg className="w-8 h-8 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h4 className="font-medium text-gray-900">Registration Status</h4>
            <p className="text-sm text-gray-600 mt-1">Check vendor registration details</p>
          </button>
          
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left">
            <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="font-medium text-gray-900">Support Center</h4>
            <p className="text-sm text-gray-600 mt-1">Get help with bidding process</p>
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">45</span> tenders
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
