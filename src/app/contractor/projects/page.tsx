/**
 * CONTRACTOR - ASSIGNED PROJECTS
 * 
 * Expected Implementation (from PRD):
 * - View only assigned projects (filtered by contractorId)
 * - Project details and milestone requirements
 * - Current progress tracking
 * - Submission deadlines and schedules
 * - Contract terms and payment milestones
 * 
 * User Role: Contractor
 * Permissions: View only projects assigned to them
 * Security: Filter by contractor's user ID
 * 
 * Key Features:
 * - Project timeline view
 * - Milestone submission status
 * - Payment tracking
 * - Document access
 * - Progress visualization
 */

export default function ContractorProjects() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
        <p className="text-gray-600 mt-2">
          View and manage your assigned construction projects
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">3</p>
          <p className="text-sm text-blue-600 mt-1">Currently working</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Pending Submissions</h3>
          <p className="text-2xl font-bold text-yellow-600 mt-2">2</p>
          <p className="text-sm text-yellow-600 mt-1">Due this week</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Completed Projects</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">8</p>
          <p className="text-sm text-green-600 mt-1">Successfully delivered</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Contract Value</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">₦1.2B</p>
          <p className="text-sm text-gray-600 mt-1">Current portfolio</p>
        </div>
      </div>

      {/* Project Filters */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Status
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Projects</option>
              <option value="InProgress">In Progress</option>
              <option value="Planned">Planned</option>
              <option value="Completed">Completed</option>
              <option value="Delayed">Delayed</option>
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
              <option value="Housing">Housing</option>
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
          
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Road Construction Phase 1</h3>
                <p className="text-sm text-gray-600">Infrastructure • Ministry of Works</p>
              </div>
              <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                In Progress
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Contract Value:</span>
                <span className="font-medium text-gray-900">₦500M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Start Date:</span>
                <span className="text-gray-900">Jan 15, 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">End Date:</span>
                <span className="text-gray-900">Dec 15, 2024</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                Submit Progress
              </button>
              <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Hospital Equipment Building</h3>
                <p className="text-sm text-gray-600">Healthcare • Ministry of Health</p>
              </div>
              <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                Delayed
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Contract Value:</span>
                <span className="font-medium text-gray-900">₦200M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Start Date:</span>
                <span className="text-gray-900">Mar 1, 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">End Date:</span>
                <span className="text-red-600">Oct 30, 2024 (Overdue)</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                Submit Progress
              </button>
              <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Primary School Block</h3>
                <p className="text-sm text-gray-600">Education • Ministry of Education</p>
              </div>
              <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Completed
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Contract Value:</span>
                <span className="font-medium text-gray-900">₦150M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Start Date:</span>
                <span className="text-gray-900">Jan 1, 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Completed:</span>
                <span className="text-green-600">Aug 15, 2024</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                View Certificate
              </button>
              <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Water Treatment Plant</h3>
                <p className="text-sm text-gray-600">Infrastructure • Ministry of Water Resources</p>
              </div>
              <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                Planned
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Contract Value:</span>
                <span className="font-medium text-gray-900">₦800M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Planned Start:</span>
                <span className="text-gray-900">Jan 1, 2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Expected End:</span>
                <span className="text-gray-900">Dec 31, 2026</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900">0%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-400 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                View Contract
              </button>
              <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h4 className="font-medium text-gray-900">Submit Progress Report</h4>
            <p className="text-sm text-gray-600 mt-1">Update project milestones</p>
          </button>
          
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <svg className="w-8 h-8 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            <h4 className="font-medium text-gray-900">Payment Status</h4>
            <p className="text-sm text-gray-600 mt-1">Track milestone payments</p>
          </button>
          
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 13a2 2 0 002 2h8a2 2 0 002-2L16 7" />
            </svg>
            <h4 className="font-medium text-gray-900">Document Center</h4>
            <p className="text-sm text-gray-600 mt-1">Access project documents</p>
          </button>
        </div>
      </div>
    </div>
  );
}
