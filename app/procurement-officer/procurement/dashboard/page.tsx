/**
 * Procurement Officer Dashboard Page
 * Procurement cycle overview
 */

export default function ProcurementOfficerDashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Procurement Dashboard</h1>
        <p className="text-gray-600">Overview of procurement activities and tender management</p>
      </div>

      <div className="space-y-6">
        {/* Procurement KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Active Tenders</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-500">Currently open</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Total Value</h3>
            <p className="text-3xl font-bold text-green-600">₦8.5M</p>
            <p className="text-sm text-gray-500">Tender value</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Awards Made</h3>
            <p className="text-3xl font-bold text-purple-600">8</p>
            <p className="text-sm text-gray-500">This quarter</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Pending Review</h3>
            <p className="text-3xl font-bold text-yellow-600">4</p>
            <p className="text-sm text-gray-500">Awaiting evaluation</p>
          </div>
        </div>

        {/* Recent Tenders */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Tenders</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Road Construction Equipment</h4>
                  <p className="text-sm text-gray-500">Heavy machinery and construction equipment</p>
                  <p className="text-xs text-gray-400">Closes: Oct 30, 2024</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Open
                  </span>
                  <p className="text-sm font-medium text-gray-900 mt-1">₦2.5M</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Office Supplies</h4>
                  <p className="text-sm text-gray-500">Stationery and office equipment</p>
                  <p className="text-xs text-gray-400">Closes: Nov 5, 2024</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Bidding
                  </span>
                  <p className="text-sm font-medium text-gray-900 mt-1">₦500K</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">IT Services</h4>
                  <p className="text-sm text-gray-500">Software development and maintenance</p>
                  <p className="text-xs text-gray-400">Awarded: Oct 10, 2024</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                    Awarded
                  </span>
                  <p className="text-sm font-medium text-gray-900 mt-1">₦1.2M</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Create New Tender</h4>
            <p className="text-sm text-gray-500">Start a new procurement process</p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Review Bids</h4>
            <p className="text-sm text-gray-500">Evaluate submitted proposals</p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Manage Awards</h4>
            <p className="text-sm text-gray-500">Track awarded contracts</p>
          </button>
        </div>
      </div>
    </div>
  );
}
