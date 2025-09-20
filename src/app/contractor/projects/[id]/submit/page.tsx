/**
 * CONTRACTOR - MILESTONE SUBMISSION FORM
 * 
 * Expected Implementation (from PRD):
 * - Milestone progress submission with validation
 * - Geo-tagged evidence upload (photos/videos/docs)
 * - GPS location capture and verification
 * - Progress percentage input with constraints
 * - Notes and description fields
 * - Multiple file upload with preview
 * 
 * User Role: Contractor
 * Permissions: Submit progress for assigned projects only
 * Security: Verify project belongs to contractor
 * 
 * Key Features:
 * - Real-time GPS capture
 * - File upload with drag-and-drop
 * - Progress validation
 * - Evidence preview
 * - Submission confirmation
 */

export default function MilestoneSubmission({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Submit Milestone Progress</h1>
        <p className="text-gray-600 mt-2">
          Road Construction Phase 1 • Submit your current progress
        </p>
      </div>

      <div className="bg-white rounded-lg shadow border">
        <div className="p-6">
          <form className="space-y-8">
            {/* Project Information (Read-only) */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Project Title</label>
                  <p className="mt-1 text-gray-900">Road Construction Phase 1</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contract Value</label>
                  <p className="mt-1 text-gray-900">₦500,000,000</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Overall Progress</label>
                  <p className="mt-1 text-gray-900">60% Complete</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Project Manager</label>
                  <p className="mt-1 text-gray-900">John Doe (Ministry of Works)</p>
                </div>
              </div>
            </div>

            {/* Milestone Details */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Milestone Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Milestone Stage *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Milestone Stage</option>
                    <option value="PreConstruction">Pre-Construction</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Superstructure">Superstructure</option>
                    <option value="Finishing">Finishing</option>
                    <option value="TestingCommissioning">Testing & Commissioning</option>
                    <option value="Handover">Handover</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Completion Percentage *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    max="100"
                    placeholder="Enter percentage (0-100)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter the completion percentage for this milestone</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Progress Notes *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Provide detailed notes about the current progress, work completed, challenges faced, and next steps..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">Be specific about work completed and any issues encountered</p>
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Location Verification</h3>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-blue-900">GPS Location Required</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Your current location will be automatically captured to verify you are at the project site.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Location
                  </label>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Capture GPS Location
                  </button>
                  <p className="text-xs text-gray-500 mt-1">Click to get your current coordinates</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location Status
                  </label>
                  <div className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                    <span className="text-sm text-gray-500">Location not captured</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Evidence Upload */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Evidence Documentation</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Evidence Files *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                  </svg>
                  <p className="text-lg text-gray-600 mb-2">
                    <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                      Click to upload files
                    </button>
                    {' '}or drag and drop
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Photos, videos, documents (PDF, DOC, DOCX, JPG, PNG, MP4)
                  </p>
                  <p className="text-xs text-gray-400">
                    Maximum file size: 50MB per file. You can upload multiple files.
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  <strong>Required:</strong> At least one evidence file must be uploaded to support your progress claim.
                </p>
              </div>
              
              {/* File Preview Area */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700">Uploaded Files</h4>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm text-gray-500 text-center">No files uploaded yet</p>
                </div>
              </div>
            </div>

            {/* Submission Guidelines */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Submission Guidelines</h4>
              <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
                <li>Ensure all evidence files clearly show the work completed</li>
                <li>Include photos from multiple angles and close-up details</li>
                <li>GPS location must be captured at the project site</li>
                <li>Progress percentage should accurately reflect actual completion</li>
                <li>Provide detailed notes about work completed and any challenges</li>
                <li>All submissions are subject to review and verification</li>
              </ul>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
              >
                Submit Progress Report
              </button>
              <button
                type="button"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Save as Draft
              </button>
              <button
                type="button"
                className="px-6 py-3 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
