/**
 * MEETING USER - MEETINGS DASHBOARD
 * 
 * Expected Implementation (from PRD):
 * - Meeting dashboard showing upcoming and past meetings
 * - Meeting scheduling and management
 * - Participant management and notifications
 * - Agenda and document management
 * - Meeting minutes recording and access
 * 
 * User Role: Meeting User (Facilitator + Officials)
 * Permissions: Schedule meetings, record minutes, manage participants
 * Security: Can be MDA-specific or cross-government meetings
 * 
 * Key Features:
 * - Meeting calendar view
 * - Participant management
 * - Document sharing
 * - Minutes recording
 * - Action item tracking
 */

export default function MeetingsDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meetings Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage meetings, participants, and documentation
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Schedule New Meeting
        </button>
      </div>

      {/* Meeting Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Upcoming Meetings</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">8</p>
          <p className="text-sm text-blue-600 mt-1">Next 30 days</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">This Month</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">15</p>
          <p className="text-sm text-green-600 mt-1">Meetings held</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Action Items</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">23</p>
          <p className="text-sm text-orange-600 mt-1">Pending completion</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-500">Attendance Rate</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">87%</p>
          <p className="text-sm text-purple-600 mt-1">Average this quarter</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Meetings */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Today's Meetings</h3>
              <p className="text-sm text-gray-600 mt-1">September 20, 2024</p>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-medium text-gray-900">Budget Review Meeting</h4>
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        Upcoming
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Quarterly budget review and allocation discussion
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        10:00 AM - 11:30 AM
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Conference Room A
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                        8 participants
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      Join Meeting
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-medium text-gray-900">Project Status Update</h4>
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Completed
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Weekly project progress review with contractors
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        8:00 AM - 9:00 AM
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Virtual Meeting
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                        12 participants
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                      View Minutes
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                      Action Items
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-left">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Schedule New Meeting
                </div>
              </button>
              
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-left">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Record Minutes
                </div>
              </button>
              
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-left">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  View Action Items
                </div>
              </button>
              
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-left">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 13a2 2 0 002 2h8a2 2 0 002-2L16 7" />
                  </svg>
                  Meeting Archive
                </div>
              </button>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Upcoming Deadlines</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Prepare Q4 Budget Review</p>
                    <p className="text-xs text-gray-500">Action item from last meeting</p>
                  </div>
                  <span className="text-xs text-orange-600">Due: Oct 5</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Submit Project Reports</p>
                    <p className="text-xs text-gray-500">Monthly reporting deadline</p>
                  </div>
                  <span className="text-xs text-red-600">Due: Sep 30</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Vendor Performance Review</p>
                    <p className="text-xs text-gray-500">Quarterly assessment</p>
                  </div>
                  <span className="text-xs text-green-600">Due: Nov 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Upcoming Meetings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Meeting</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Participants</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Monthly Performance Review</p>
                    <p className="text-sm text-gray-500">Cross-MDA performance discussion</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  Sep 25, 2024<br />
                  <span className="text-gray-500">2:00 PM - 4:00 PM</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Conference Room B</td>
                <td className="px-6 py-4 text-sm text-gray-900">15 invited</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Scheduled
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                  <button className="text-gray-600 hover:text-gray-800">Details</button>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Procurement Committee Meeting</p>
                    <p className="text-sm text-gray-500">Tender evaluation and awards</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  Oct 2, 2024<br />
                  <span className="text-gray-500">10:00 AM - 12:00 PM</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Virtual Meeting</td>
                <td className="px-6 py-4 text-sm text-gray-900">8 invited</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Pending Confirmation
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                  <button className="text-gray-600 hover:text-gray-800">Details</button>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Budget Planning Workshop</p>
                    <p className="text-sm text-gray-500">2025 budget preparation</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  Oct 10, 2024<br />
                  <span className="text-gray-500">9:00 AM - 5:00 PM</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Training Center</td>
                <td className="px-6 py-4 text-sm text-gray-900">25 invited</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Confirmed
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                  <button className="text-gray-600 hover:text-gray-800">Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Meeting Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Meeting Frequency</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Meeting frequency chart</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Attendance Trends</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Attendance trends chart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
