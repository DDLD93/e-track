/**
 * PROJECT MANAGER - PROJECTS LIST
 * 
 * Expected Implementation (from PRD):
 * - Project list filtered by user's MDA only
 * - CRUD operations on projects within MDA scope
 * - Project status tracking (Planned, InProgress, Delayed, Completed)
 * - Project categories and contract values
 * - Contractor assignment and management
 * - Evidence document management
 * 
 * User Role: Project Manager (MDA-Specific)
 * Permissions: 
 * - Add new projects under their MDA
 * - View/edit projects in their MDA
 * - Assign contractors to projects
 * - View finance allocations for their projects
 * 
 * Security: Restricted to assigned MDA only
 * 
 * Key Features:
 * - Filter by status, category, contractor
 * - Search functionality
 * - Project timeline visualization
 * - Milestone tracking overview
 */

export default function ProjectManagerProjects() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects Management</h1>
          <p className="text-gray-600 mt-2">
            Manage projects under your MDA supervision
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New Project
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Projects</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">24</p>
          <p className="text-sm text-gray-600 mt-1">Under your MDA</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">In Progress</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">18</p>
          <p className="text-sm text-blue-600 mt-1">75% of total</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Completed</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">5</p>
          <p className="text-sm text-green-600 mt-1">20.8% completion rate</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Delayed</h3>
          <p className="text-2xl font-bold text-red-600 mt-2">1</p>
          <p className="text-sm text-red-600 mt-1">Needs attention</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Projects
            </label>
            <input
              type="text"
              placeholder="Search by title, contractor..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Status</option>
              <option value="Planned">Planned</option>
              <option value="InProgress">In Progress</option>
              <option value="Delayed">Delayed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Categories</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Agriculture">Agriculture</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Your MDA Projects</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contractor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contract Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Road Construction Phase 1</p>
                    <p className="text-sm text-gray-500">Infrastructure • Started Jan 2024</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">ABC Construction Ltd</td>
                <td className="px-6 py-4 text-sm text-gray-900">₦500M</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    In Progress
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">65% Complete</span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-800">Edit</button>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Hospital Equipment Procurement</p>
                    <p className="text-sm text-gray-500">Healthcare • Started Mar 2024</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">MedTech Solutions</td>
                <td className="px-6 py-4 text-sm text-gray-900">₦200M</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                    Delayed
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">30% Complete</span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-800">Edit</button>
                </td>
              </tr>
              
              {/* More project rows would be populated from API */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">24</span> results
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
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
