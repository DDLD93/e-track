/**
 * MEETING USER - SCHEDULE MEETING
 * 
 * Expected Implementation (from PRD):
 * - Comprehensive meeting scheduling form
 * - Participant selection and invitation
 * - Agenda and document management
 * - Meeting logistics (location/virtual)
 * - Notification and reminder system
 * 
 * User Role: Meeting User (Facilitator + Officials)
 * Permissions: Schedule meetings, manage participants
 * Security: Can schedule MDA-specific or cross-government meetings
 * 
 * Key Features:
 * - Meeting details form
 * - Participant management
 * - Agenda builder
 * - Document upload
 * - Meeting logistics
 */

export default function ScheduleMeeting() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Schedule New Meeting</h1>
        <p className="text-gray-600 mt-2">
          Create and organize meetings with participants and agenda
        </p>
      </div>

      <div className="bg-white rounded-lg shadow border">
        <div className="p-6">
          <form className="space-y-8">
            {/* Basic Meeting Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Meeting Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter meeting title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Type *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Meeting Type</option>
                    <option value="Budget Review">Budget Review</option>
                    <option value="Project Update">Project Update</option>
                    <option value="Procurement Committee">Procurement Committee</option>
                    <option value="Performance Review">Performance Review</option>
                    <option value="Planning Session">Planning Session</option>
                    <option value="Training Workshop">Training Workshop</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meeting Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide a brief description of the meeting purpose and objectives"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Date and Time */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Date & Time
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Time *
                  </label>
                  <input
                    type="time"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Zone
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <option value="WAT">West Africa Time (WAT)</option>
                    <option value="GMT">Greenwich Mean Time (GMT)</option>
                    <option value="UTC">Coordinated Universal Time (UTC)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    min="15"
                    step="15"
                    placeholder="90"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Location/Virtual Settings */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Meeting Location
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Meeting Format *
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="radio" name="meetingFormat" value="physical" className="mr-3" />
                    <span className="text-sm text-gray-700">Physical Meeting</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="meetingFormat" value="virtual" className="mr-3" />
                    <span className="text-sm text-gray-700">Virtual Meeting</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="meetingFormat" value="hybrid" className="mr-3" />
                    <span className="text-sm text-gray-700">Hybrid (Physical + Virtual)</span>
                  </label>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Physical Location
                  </label>
                  <input
                    type="text"
                    placeholder="Conference Room A, Building B, Address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Virtual Meeting Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://meet.google.com/xxx-xxxx-xxx"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Participants
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add Participants
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select from MDA Staff
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select MDA</option>
                    <option value="works">Ministry of Works</option>
                    <option value="health">Ministry of Health</option>
                    <option value="education">Ministry of Education</option>
                    <option value="finance">Ministry of Finance</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Invited Participants
                </label>
                <div className="border border-gray-200 rounded-lg p-4 min-h-[100px]">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-blue-600">JD</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">John Doe</p>
                          <p className="text-xs text-gray-500">john.doe@works.gov.ng</p>
                        </div>
                      </div>
                      <button className="text-red-600 hover:text-red-800 text-sm">Remove</button>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-green-600">AS</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Alice Smith</p>
                          <p className="text-xs text-gray-500">alice.smith@finance.gov.ng</p>
                        </div>
                      </div>
                      <button className="text-red-600 hover:text-red-800 text-sm">Remove</button>
                    </div>
                  </div>
                  
                  {/* Empty state when no participants */}
                  <div className="text-center text-gray-500 text-sm py-4 hidden">
                    No participants added yet
                  </div>
                </div>
              </div>
            </div>

            {/* Agenda */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Meeting Agenda
              </h3>
              
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Agenda Items
                  </label>
                  <button
                    type="button"
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    Add Item
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <span className="text-sm font-medium text-gray-500">1.</span>
                    <input
                      type="text"
                      placeholder="Agenda item title"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Duration (min)"
                      className="w-24 px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="text-red-600 hover:text-red-800">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <span className="text-sm font-medium text-gray-500">2.</span>
                    <input
                      type="text"
                      placeholder="Agenda item title"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Duration (min)"
                      className="w-24 px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="text-red-600 hover:text-red-800">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Meeting Documents
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Agenda Documents
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                  </svg>
                  <p className="text-lg text-gray-600 mb-2">
                    <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                      Click to upload documents
                    </button>
                    {' '}or drag and drop
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Agenda, reports, presentations, supporting materials
                  </p>
                  <p className="text-xs text-gray-400">
                    PDF, DOC, DOCX, PPT, PPTX up to 10MB each
                  </p>
                </div>
              </div>
            </div>

            {/* Meeting Settings */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Meeting Settings
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Notifications
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-sm text-gray-700">Send meeting invitations</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-sm text-gray-700">Send reminder 1 day before</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-sm text-gray-700">Send reminder 1 hour before</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Meeting Options
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-sm text-gray-700">Allow participants to join before host</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-sm text-gray-700">Require meeting password</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-sm text-gray-700">Record meeting automatically</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
              >
                Schedule Meeting
              </button>
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Save as Draft
              </button>
              <button
                type="button"
                className="px-6 py-2 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Meeting Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Meeting Scheduling Guidelines</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Schedule meetings at least 24 hours in advance for better attendance</li>
          <li>• Include clear agenda items with time allocations</li>
          <li>• Upload relevant documents before the meeting</li>
          <li>• Consider time zones when scheduling cross-regional meetings</li>
          <li>• Test virtual meeting links before the scheduled time</li>
          <li>• Send meeting invitations to all required participants</li>
        </ul>
      </div>
    </div>
  );
}
