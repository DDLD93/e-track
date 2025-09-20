/**
 * CONTRACTOR - PROJECT STATUS TRACKING
 * 
 * Expected Implementation (from PRD):
 * - Track submission status and approval workflow
 * - View milestone submission history
 * - Payment milestone tracking
 * - Project timeline and deadlines
 * - Communication with project managers
 * - Document access and downloads
 * 
 * User Role: Contractor
 * Permissions: View status for assigned projects only
 * Security: Verify project belongs to contractor
 * 
 * Key Features:
 * - Submission status tracking
 * - Payment status monitoring
 * - Timeline visualization
 * - Document repository
 * - Communication history
 */

export default function ProjectStatus({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 space-y-6">
      {/* Project Header */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Road Construction Phase 1</h1>
              <p className="text-gray-600 mt-1">Infrastructure Development • Ministry of Works</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="inline-flex px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                  In Progress
                </span>
                <span className="text-sm text-gray-500">Contract Value: ₦500M</span>
                <span className="text-sm text-gray-500">Due: Dec 15, 2024</span>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              ← Back to Projects
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Overview */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Progress Overview</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="font-medium text-gray-900">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">4 of 6 milestones completed</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">4</p>
                  <p className="text-sm text-green-700">Approved</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">1</p>
                  <p className="text-sm text-yellow-700">Pending</p>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Timeline */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Milestone Timeline</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* Completed Milestone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Pre-Construction</h4>
                        <p className="text-sm text-gray-600">Site preparation and permits</p>
                        <p className="text-xs text-green-600 mt-1">Approved: Jan 30, 2024</p>
                      </div>
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Approved
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Completed Milestone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Foundation</h4>
                        <p className="text-sm text-gray-600">Road base and foundation work</p>
                        <p className="text-xs text-green-600 mt-1">Approved: Mar 15, 2024</p>
                      </div>
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Approved
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Pending Milestone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Superstructure</h4>
                        <p className="text-sm text-gray-600">Asphalt laying and road surface</p>
                        <p className="text-xs text-yellow-600 mt-1">Submitted: Sep 15, 2024 • Pending Review</p>
                      </div>
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Future Milestone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Finishing</h4>
                        <p className="text-sm text-gray-600">Street lighting and signage</p>
                        <p className="text-xs text-gray-500 mt-1">Not started</p>
                      </div>
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Tracking */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Payment Status</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Milestone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Pre-Construction</td>
                    <td className="px-6 py-4 text-sm text-gray-900">₦50M</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">Feb 5, 2024</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Foundation</td>
                    <td className="px-6 py-4 text-sm text-gray-900">₦150M</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">Mar 20, 2024</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Superstructure</td>
                    <td className="px-6 py-4 text-sm text-gray-900">₦200M</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Processing
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">Pending approval</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                Submit New Progress
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                Upload Documents
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                Contact Project Manager
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                Download Contract
              </button>
            </div>
          </div>

          {/* Project Team */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Project Team</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">JD</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Project Manager</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-green-600">MW</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Ministry of Works</p>
                  <p className="text-xs text-gray-500">Supervising MDA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-4">
                <p className="text-sm text-gray-900">Superstructure milestone submitted</p>
                <p className="text-xs text-gray-500">Sep 15, 2024 at 2:30 PM</p>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-gray-900">Foundation milestone approved</p>
                <p className="text-xs text-gray-500">Mar 16, 2024 at 10:15 AM</p>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-gray-900">Payment processed for Foundation</p>
                <p className="text-xs text-gray-500">Mar 20, 2024 at 3:45 PM</p>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Project Documents</h3>
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
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-900">Drawings.dwg</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
