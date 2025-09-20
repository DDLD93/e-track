/**
 * PROJECT MANAGER - SUBMISSIONS REVIEW
 * 
 * Expected Implementation (from PRD):
 * - Review contractor milestone submissions
 * - Approve/reject submission workflow
 * - Evidence document verification
 * - Geo-tagged location validation
 * - Progress percentage validation
 * - Submission history and audit trail
 * 
 * User Role: Project Manager (MDA-Specific)
 * Permissions: Review submissions for projects in their MDA only
 * Security: Filter submissions by user's MDA projects
 * 
 * Key Features:
 * - Bulk approval/rejection
 * - Evidence gallery view
 * - GPS location verification
 * - Comments and feedback system
 */

export default function SubmissionsReview() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Milestone Submissions</h1>
        <p className="text-gray-600 mt-2">
          Review and approve contractor progress submissions
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Pending Review</h3>
          <p className="text-2xl font-bold text-yellow-600 mt-2">8</p>
          <p className="text-sm text-yellow-600 mt-1">Awaiting your action</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Approved Today</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">5</p>
          <p className="text-sm text-green-600 mt-1">Processed</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Rejected</h3>
          <p className="text-2xl font-bold text-red-600 mt-2">2</p>
          <p className="text-sm text-red-600 mt-1">Need revision</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total This Month</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">45</p>
          <p className="text-sm text-gray-600 mt-1">All submissions</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Status</option>
              <option value="Pending">Pending Review</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Projects</option>
              <option value="project1">Road Construction Phase 1</option>
              <option value="project2">Hospital Equipment</option>
              <option value="project3">School Building</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Milestone Stage
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Stages</option>
              <option value="PreConstruction">Pre-Construction</option>
              <option value="Foundation">Foundation</option>
              <option value="Superstructure">Superstructure</option>
              <option value="Finishing">Finishing</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Submissions List */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Submission Queue</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
              Bulk Approve
            </button>
            <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
              Bulk Reject
            </button>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {/* Submission Item 1 */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">Superstructure Progress</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                      Pending Review
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Project:</span> Road Construction Phase 1
                    </div>
                    <div>
                      <span className="font-medium">Contractor:</span> ABC Construction Ltd
                    </div>
                    <div>
                      <span className="font-medium">Progress:</span> 65% Complete
                    </div>
                    <div>
                      <span className="font-medium">Submitted:</span> Sep 15, 2024 at 2:30 PM
                    </div>
                    <div>
                      <span className="font-medium">Location:</span> GPS Verified ✓
                    </div>
                    <div>
                      <span className="font-medium">Documents:</span> 4 files attached
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Notes:</span> Asphalt laying completed for section A-C. 
                      Road markings in progress. Weather conditions favorable for continued work.
                    </p>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      View Evidence
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                      View Location
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                      Download Files
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 ml-4">
                <button className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                  Reject
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  Request Info
                </button>
              </div>
            </div>
          </div>

          {/* Submission Item 2 */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">Foundation Completion</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      Approved
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Project:</span> Hospital Equipment Building
                    </div>
                    <div>
                      <span className="font-medium">Contractor:</span> MedTech Solutions
                    </div>
                    <div>
                      <span className="font-medium">Progress:</span> 100% Complete
                    </div>
                    <div>
                      <span className="font-medium">Approved:</span> Sep 14, 2024 at 10:15 AM
                    </div>
                    <div>
                      <span className="font-medium">Location:</span> GPS Verified ✓
                    </div>
                    <div>
                      <span className="font-medium">Documents:</span> 6 files attached
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Approval Notes:</span> Foundation work completed according to specifications. 
                      Quality inspection passed. Ready for next phase.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 ml-4">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">45</span> submissions
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
