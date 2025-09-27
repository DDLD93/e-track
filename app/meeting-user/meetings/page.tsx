/**
 * Meeting User - Meetings Page
 * Meeting dashboard (upcoming/past)
 */

export default function MeetingUserMeetingsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Meetings</h1>
        <p className="text-gray-600">Manage and track meetings and discussions</p>
      </div>

      <div className="space-y-6">
        {/* Meeting Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming</h3>
            <p className="text-3xl font-bold text-blue-600">5</p>
            <p className="text-sm text-gray-500">This week</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">This Month</h3>
            <p className="text-3xl font-bold text-green-600">18</p>
            <p className="text-sm text-gray-500">Total meetings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Completed</h3>
            <p className="text-3xl font-bold text-purple-600">13</p>
            <p className="text-sm text-gray-500">With minutes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Cancelled</h3>
            <p className="text-3xl font-bold text-red-600">2</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Meetings</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Project Review Meeting</h4>
                  <p className="text-sm text-gray-500">Review progress of ongoing projects</p>
                  <p className="text-xs text-gray-400">Participants: 8 people</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Tomorrow, 2:00 PM</p>
                  <p className="text-xs text-gray-500">Conference Room A</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Budget Planning Session</h4>
                  <p className="text-sm text-gray-500">Q1 2025 budget allocation planning</p>
                  <p className="text-xs text-gray-400">Participants: 12 people</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Oct 25, 10:00 AM</p>
                  <p className="text-xs text-gray-500">Virtual Meeting</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Performance Review</h4>
                  <p className="text-sm text-gray-500">Monthly performance assessment</p>
                  <p className="text-xs text-gray-400">Participants: 6 people</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Oct 28, 3:00 PM</p>
                  <p className="text-xs text-gray-500">Board Room</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Meetings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Meetings</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Stakeholder Engagement</h4>
                  <p className="text-sm text-gray-500">Community engagement and feedback session</p>
                  <p className="text-xs text-gray-400">Oct 15, 2024 • 2 hours</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Minutes available</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Technical Review</h4>
                  <p className="text-sm text-gray-500">Technical specifications review</p>
                  <p className="text-xs text-gray-400">Oct 12, 2024 • 1.5 hours</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Minutes available</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Emergency Meeting</h4>
                  <p className="text-sm text-gray-500">Urgent project issue resolution</p>
                  <p className="text-xs text-gray-400">Oct 10, 2024 • 45 minutes</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Pending Minutes
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Draft in progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Schedule Meeting</h4>
            <p className="text-sm text-gray-500">Create a new meeting</p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 text-left">
            <h4 className="font-medium text-gray-900 mb-2">View Archive</h4>
            <p className="text-sm text-gray-500">Browse past meetings</p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Meeting Templates</h4>
            <p className="text-sm text-gray-500">Use meeting templates</p>
          </button>
        </div>
      </div>
    </div>
  );
}
