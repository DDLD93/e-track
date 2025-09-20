/**
 * PROJECT MANAGER - SUBMISSION DETAIL & APPROVAL
 * 
 * Expected Implementation (from PRD):
 * - Detailed submission review interface
 * - Evidence document gallery with zoom/download
 * - GPS location map integration
 * - Approval/rejection workflow with comments
 * - Progress validation against milestones
 * - Audit trail and history
 * 
 * User Role: Project Manager (MDA-Specific)
 * Permissions: Review submissions for their MDA projects only
 * Security: Verify submission belongs to user's MDA project
 * 
 * Key Features:
 * - Interactive evidence gallery
 * - Location verification map
 * - Approval workflow with feedback
 * - Document download and printing
 */

export default function SubmissionDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Superstructure Progress Submission</h1>
              <p className="text-gray-600 mt-1">Road Construction Phase 1 • ABC Construction Ltd</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="inline-flex px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Pending Review
                </span>
                <span className="text-sm text-gray-500">Submitted: Sep 15, 2024 at 2:30 PM</span>
                <span className="text-sm text-gray-500">Progress: 65% Complete</span>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              ← Back to Submissions
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Submission Details */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Submission Details</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Milestone Stage</h4>
                  <p className="text-gray-900 mt-1">Superstructure</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Completion Percentage</h4>
                  <p className="text-gray-900 mt-1">65%</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Contractor</h4>
                  <p className="text-gray-900 mt-1">ABC Construction Ltd</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Submission Date</h4>
                  <p className="text-gray-900 mt-1">Sep 15, 2024 at 2:30 PM</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700">Contractor Notes</h4>
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    Asphalt laying has been completed for sections A through C of the road construction project. 
                    The surface quality meets specifications and has passed initial quality checks. Road markings 
                    are currently in progress and expected to be completed by end of week. Weather conditions 
                    have been favorable, allowing us to maintain the project timeline. Next phase will focus 
                    on sections D-F pending material delivery scheduled for next Monday.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Evidence Gallery */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Evidence Documents</h3>
              <p className="text-sm text-gray-600 mt-1">4 files uploaded by contractor</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="aspect-square bg-gray-200 rounded mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">section-a-complete.jpg</p>
                  <p className="text-xs text-gray-500">2.4 MB • Image</p>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="aspect-square bg-gray-200 rounded mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">asphalt-quality-test.jpg</p>
                  <p className="text-xs text-gray-500">1.8 MB • Image</p>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="aspect-square bg-gray-200 rounded mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">progress-report.pdf</p>
                  <p className="text-xs text-gray-500">856 KB • PDF</p>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="aspect-square bg-gray-200 rounded mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">site-walkthrough.mp4</p>
                  <p className="text-xs text-gray-500">15.2 MB • Video</p>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Gallery
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Download All
                </button>
              </div>
            </div>
          </div>

          {/* Location Verification */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Location Verification</h3>
              <div className="flex items-center gap-2 mt-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-green-600">GPS coordinates verified</span>
              </div>
            </div>
            <div className="p-6">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <svg className="mx-auto w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600">Interactive map would be displayed here</p>
                  <p className="text-sm text-gray-500 mt-1">Lat: 9.0765, Lng: 7.3986</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Coordinates:</span>
                  <p className="text-gray-600">9.0765°N, 7.3986°E</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Accuracy:</span>
                  <p className="text-gray-600">±3 meters</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Timestamp:</span>
                  <p className="text-gray-600">Sep 15, 2024 at 2:28 PM</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Distance from Project Site:</span>
                  <p className="text-gray-600">Within boundaries ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Review Actions */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Review Actions</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Review Comments
                </label>
                <textarea
                  rows={4}
                  placeholder="Add your review comments here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Approve Submission
                </button>
                <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  Reject Submission
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Request More Information
                </button>
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Project Information</h3>
            </div>
            <div className="p-6 space-y-3 text-sm">
              <div>
                <span className="font-medium text-gray-700">Project:</span>
                <p className="text-gray-900">Road Construction Phase 1</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Total Progress:</span>
                <p className="text-gray-900">65% Complete</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Contract Value:</span>
                <p className="text-gray-900">₦500M</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Expected Completion:</span>
                <p className="text-gray-900">Dec 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Submission History */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Previous Submissions</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Foundation - 100%</p>
                    <p className="text-xs text-gray-500">Aug 30, 2024</p>
                  </div>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Approved
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Pre-Construction - 100%</p>
                    <p className="text-xs text-gray-500">Jul 20, 2024</p>
                  </div>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Approved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
