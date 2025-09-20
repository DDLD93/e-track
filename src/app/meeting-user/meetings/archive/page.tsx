/**
 * MEETING USER - MEETING ARCHIVE
 * 
 * Expected Implementation (from PRD):
 * - Archive of past meetings with search functionality
 * - Meeting minutes and documentation access
 * - Action item tracking and follow-up
 * - Meeting analytics and reporting
 * - Historical meeting data management
 * 
 * User Role: Meeting User (Facilitator + Officials)
 * Permissions: Access meeting archives and documentation
 * Security: Filter based on user's meeting access permissions
 * 
 * Key Features:
 * - Meeting search and filtering
 * - Document repository
 * - Action item tracking
 * - Meeting analytics
 * - Export capabilities
 */

export default function MeetingArchive() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Meeting Archive</h1>
        <p className="text-gray-600 mt-2">
          Access past meetings, minutes, and track action items
        </p>
      </div>

      {/* Archive Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Total Meetings</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">156</p>
          <p className="text-sm text-blue-600 mt-1">This year</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Action Items</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">89</p>
          <p className="text-sm text-green-600 mt-1">Completed this quarter</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Documents</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">342</p>
          <p className="text-sm text-purple-600 mt-1">Files archived</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Avg Attendance</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">85%</p>
          <p className="text-sm text-orange-600 mt-1">This year</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Meetings
            </label>
            <input
              type="text"
              placeholder="Search by title, participants, topics..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meeting Type
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Types</option>
              <option value="Budget Review">Budget Review</option>
              <option value="Project Update">Project Update</option>
              <option value="Procurement Committee">Procurement Committee</option>
              <option value="Performance Review">Performance Review</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Time</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">This Year</option>
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
              <option value="cross-mda">Cross-MDA</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Search Archive
            </button>
          </div>
        </div>
      </div>

      {/* Meeting Archive List */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Meeting History</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
              Export List
            </button>
            <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
              Bulk Actions
            </button>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {/* Meeting Item 1 */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">Quarterly Budget Review</h4>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Minutes Available
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <span className="font-medium">Date:</span> Sep 15, 2024
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> 2h 30min
                  </div>
                  <div>
                    <span className="font-medium">Participants:</span> 12 attendees
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> Conference Room A
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Comprehensive review of Q3 budget performance across all MDAs, discussion of Q4 
                  allocations, and planning for 2025 budget preparation process.
                </p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    5 decisions made
                  </div>
                  <div className="flex items-center text-orange-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    8 action items (3 pending)
                  </div>
                  <div className="flex items-center text-blue-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    6 documents
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 ml-4">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  View Minutes
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  Action Items
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  Documents
                </button>
              </div>
            </div>
          </div>

          {/* Meeting Item 2 */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">Project Status Review</h4>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Action Items Pending
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <span className="font-medium">Date:</span> Sep 10, 2024
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> 1h 45min
                  </div>
                  <div>
                    <span className="font-medium">Participants:</span> 8 attendees
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> Virtual Meeting
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Weekly review of ongoing infrastructure projects, contractor performance assessment, 
                  and discussion of timeline adjustments for delayed projects.
                </p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    3 decisions made
                  </div>
                  <div className="flex items-center text-red-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    5 action items (5 pending)
                  </div>
                  <div className="flex items-center text-blue-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    4 documents
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 ml-4">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  View Minutes
                </button>
                <button className="px-4 py-2 bg-orange-600 text-white text-sm rounded hover:bg-orange-700">
                  Follow Up
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  Documents
                </button>
              </div>
            </div>
          </div>

          {/* Meeting Item 3 */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">Procurement Committee Meeting</h4>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    All Items Closed
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <span className="font-medium">Date:</span> Sep 5, 2024
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> 3h 15min
                  </div>
                  <div>
                    <span className="font-medium">Participants:</span> 6 attendees
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> Committee Room
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Evaluation of tender submissions for office supplies procurement, vendor assessment, 
                  and contract award decisions. Review of procurement policies and procedures.
                </p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    4 awards made
                  </div>
                  <div className="flex items-center text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All action items completed
                  </div>
                  <div className="flex items-center text-blue-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    12 documents
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 ml-4">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  View Minutes
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  Award Details
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  Documents
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Items Summary */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Outstanding Action Items</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Meeting</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">
                  Prepare Q4 budget allocation proposal
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Finance Team</td>
                <td className="px-6 py-4 text-sm text-gray-500">Budget Review - Sep 15</td>
                <td className="px-6 py-4 text-sm text-orange-600">Oct 5, 2024</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    In Progress
                  </span>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">
                  Submit contractor performance reports
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Project Managers</td>
                <td className="px-6 py-4 text-sm text-gray-500">Project Review - Sep 10</td>
                <td className="px-6 py-4 text-sm text-red-600">Sep 25, 2024</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                    Overdue
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Archive Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Meeting Frequency by Type</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Meeting type distribution chart</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Action Item Completion Rate</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Action item completion trends</p>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">156</span> meetings
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
