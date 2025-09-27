/**
 * Admin - MDAs Management Page
 * Create, edit, and manage MDA information
 */

export default function AdminMDAsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">MDA Management</h1>
            <p className="text-gray-600">Create, edit, and manage Ministries, Departments, and Agencies</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add New MDA
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* MDA Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Total MDAs</h3>
            <p className="text-3xl font-bold text-blue-600">23</p>
            <p className="text-sm text-gray-500">All registered entities</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Active MDAs</h3>
            <p className="text-3xl font-bold text-green-600">21</p>
            <p className="text-sm text-gray-500">Currently operational</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Ministries</h3>
            <p className="text-3xl font-bold text-purple-600">8</p>
            <p className="text-sm text-gray-500">Government ministries</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Departments</h3>
            <p className="text-3xl font-bold text-orange-600">7</p>
            <p className="text-sm text-gray-500">Government departments</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search MDAs by name..."
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              <select className="p-3 border border-gray-300 rounded-lg">
                <option>All Categories</option>
                <option>Ministry</option>
                <option>Department</option>
                <option>Agency</option>
                <option>Commission</option>
              </select>
              <select className="p-3 border border-gray-300 rounded-lg">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* MDAs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">M</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Ministry of Health</h3>
                    <p className="text-sm text-gray-500">Ministry</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-gray-600 mb-4">Responsible for health policies and healthcare delivery</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Head of MDA</span>
                  <span className="font-medium">Dr. Sarah Johnson</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">health@gov.ng</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Users</span>
                  <span className="font-medium">45 active users</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Edit
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                  View Users
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-semibold">M</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Ministry of Education</h3>
                    <p className="text-sm text-gray-500">Ministry</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-gray-600 mb-4">Overseeing education policies and school management</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Head of MDA</span>
                  <span className="font-medium">Prof. Michael Brown</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">education@gov.ng</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Users</span>
                  <span className="font-medium">38 active users</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Edit
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                  View Users
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">M</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Ministry of Works</h3>
                    <p className="text-sm text-gray-500">Ministry</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-gray-600 mb-4">Infrastructure development and public works</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Head of MDA</span>
                  <span className="font-medium">Engr. David Wilson</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">works@gov.ng</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Users</span>
                  <span className="font-medium">52 active users</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Edit
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                  View Users
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 font-semibold">D</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Department of Agriculture</h3>
                    <p className="text-sm text-gray-500">Department</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-gray-600 mb-4">Agricultural policies and rural development</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Head of MDA</span>
                  <span className="font-medium">Dr. Emily Davis</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">agriculture@gov.ng</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Users</span>
                  <span className="font-medium">29 active users</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Edit
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                  View Users
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-semibold">A</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Nigerian Ports Authority</h3>
                    <p className="text-sm text-gray-500">Agency</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Inactive
                </span>
              </div>
              <p className="text-gray-600 mb-4">Port management and maritime operations</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Head of MDA</span>
                  <span className="font-medium">Capt. Robert Taylor</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">ports@gov.ng</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Users</span>
                  <span className="font-medium">15 inactive users</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Edit
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                  Activate
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold">C</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Federal Civil Service Commission</h3>
                    <p className="text-sm text-gray-500">Commission</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-gray-600 mb-4">Civil service recruitment and management</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Head of MDA</span>
                  <span className="font-medium">Hon. Patricia Moore</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">civilservice@gov.ng</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Users</span>
                  <span className="font-medium">33 active users</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Edit
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                  View Users
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing 1-6 of 23 MDAs
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
              <h4 className="font-medium text-gray-900">Import MDAs</h4>
              <p className="text-sm text-gray-500">Bulk import from CSV</p>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
              <h4 className="font-medium text-gray-900">Export Data</h4>
              <p className="text-sm text-gray-500">Export MDA information</p>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
              <h4 className="font-medium text-gray-900">Generate Report</h4>
              <p className="text-sm text-gray-500">MDA performance report</p>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
              <h4 className="font-medium text-gray-900">System Backup</h4>
              <p className="text-sm text-gray-500">Backup MDA data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
