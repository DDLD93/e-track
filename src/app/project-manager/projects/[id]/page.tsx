/**
 * PROJECT MANAGER - PROJECT DETAILS
 * 
 * Expected Implementation (from PRD):
 * - Detailed project view with milestones
 * - Timeline visualization (Gantt chart style)
 * - Milestone submission history
 * - Project status management
 * - Evidence document gallery
 * - Contractor performance tracking
 * 
 * User Role: Project Manager (MDA-Specific)
 * Permissions: View/edit projects in their MDA only
 * Security: Verify project belongs to user's MDA
 * 
 * Key Features:
 * - Real-time progress tracking
 * - Milestone approval workflow
 * - Document management
 * - Status updates and notifications
 */

export default function ProjectDetails({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 space-y-6">
      {/* Project Header */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Road Construction Phase 1</h1>
              <p className="text-gray-600 mt-1">Infrastructure Development Project</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="inline-flex px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                  In Progress
                </span>
                <span className="text-sm text-gray-500">Started: Jan 15, 2024</span>
                <span className="text-sm text-gray-500">Due: Dec 15, 2024</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Edit Project
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Contract Value</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">₦500M</p>
          <p className="text-sm text-gray-600 mt-1">Total allocated</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Progress</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">65%</p>
          <p className="text-sm text-blue-600 mt-1">On schedule</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Milestones</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">4/6</p>
          <p className="text-sm text-green-600 mt-1">Completed</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Days Remaining</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">89</p>
          <p className="text-sm text-orange-600 mt-1">Until deadline</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Information */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Project Information</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700">Description</h4>
                <p className="text-gray-600 mt-1">
                  Construction of 15km dual carriageway road connecting the city center to the new industrial district. 
                  Includes drainage systems, street lighting, and pedestrian walkways.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Contractor</h4>
                  <p className="text-gray-900 mt-1">ABC Construction Ltd</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Category</h4>
                  <p className="text-gray-900 mt-1">Infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Timeline */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Milestone Progress</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Pre-Construction</h4>
                    <p className="text-sm text-gray-600">Site preparation and permits</p>
                    <p className="text-xs text-green-600 mt-1">Completed: Jan 30, 2024</p>
                  </div>
                  <span className="text-sm text-gray-500">100%</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Foundation</h4>
                    <p className="text-sm text-gray-600">Road base and foundation work</p>
                    <p className="text-xs text-green-600 mt-1">Completed: Mar 15, 2024</p>
                  </div>
                  <span className="text-sm text-gray-500">100%</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Superstructure</h4>
                    <p className="text-sm text-gray-600">Asphalt laying and road surface</p>
                    <p className="text-xs text-blue-600 mt-1">In Progress: 65% complete</p>
                  </div>
                  <span className="text-sm text-gray-500">65%</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Finishing</h4>
                    <p className="text-sm text-gray-600">Street lighting and signage</p>
                    <p className="text-xs text-gray-500 mt-1">Pending</p>
                  </div>
                  <span className="text-sm text-gray-500">0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Submissions */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Recent Submissions</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Superstructure Progress - 65%</h4>
                    <p className="text-sm text-gray-600 mt-1">Submitted by ABC Construction Ltd</p>
                    <p className="text-xs text-gray-500 mt-1">Sep 15, 2024 at 2:30 PM</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                      Pending Review
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700">
                    Reject
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded hover:bg-gray-50">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Team */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Project Team</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">PM</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Project Manager</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-green-600">CT</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">ABC Construction</p>
                  <p className="text-xs text-gray-500">Contractor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Documents</h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-900">Contract.pdf</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-900">Specifications.docx</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                Update Project Status
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                Send Notification
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                Schedule Meeting
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                View Financial Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
