/**
 * PROCUREMENT OFFICER - CREATE NEW TENDER
 * 
 * Expected Implementation (from PRD):
 * - Tender creation form with comprehensive details
 * - Document upload for tender specifications
 * - Evaluation criteria definition
 * - Timeline and deadline management
 * - Vendor eligibility requirements
 * - Budget and cost estimation
 * 
 * User Role: Procurement Officer (MDA-Specific)
 * Permissions: Create tenders for their MDA only
 * Security: Auto-assign mdaId from user's MDA
 * 
 * Key Features:
 * - Comprehensive tender form
 * - Document management
 * - Evaluation criteria setup
 * - Timeline configuration
 */

export default function CreateTender() {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Create New Tender</h1>
        <p className="text-gray-600 mt-2">
          Initiate a new procurement process for your MDA
        </p>
      </div>

      <div className="bg-white rounded-lg shadow border">
        <div className="p-6">
          <form className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Tender Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tender Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter descriptive tender title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Procurement Category *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Category</option>
                    <option value="Goods">Goods</option>
                    <option value="Services">Services</option>
                    <option value="Works">Works</option>
                    <option value="Consultancy">Consultancy</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Provide comprehensive description of requirements, specifications, and scope of work"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Financial Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Financial Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Cost (₦) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Source
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select Budget Source</option>
                    <option value="Capital">Capital Budget</option>
                    <option value="Recurrent">Recurrent Budget</option>
                    <option value="Special">Special Allocation</option>
                    <option value="Donor">Donor Funding</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bid Security Required
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="bidSecurity" value="yes" className="mr-2" />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="bidSecurity" value="no" className="mr-2" />
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bid Security Amount (₦)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Timeline & Deadlines
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Publication Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bid Submission Deadline *
                  </label>
                  <input
                    type="datetime-local"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bid Opening Date *
                  </label>
                  <input
                    type="datetime-local"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contract Duration
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      placeholder="Duration"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                      <option value="days">Days</option>
                      <option value="weeks">Weeks</option>
                      <option value="months">Months</option>
                      <option value="years">Years</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery/Completion Location
                  </label>
                  <input
                    type="text"
                    placeholder="Specify location or address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Vendor Eligibility & Requirements
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Experience (Years)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Annual Turnover (₦)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Required Certifications/Licenses
                </label>
                <textarea
                  rows={3}
                  placeholder="List required certifications, licenses, or qualifications"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Evaluation Criteria */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Evaluation Criteria
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price Weight (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="70"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Technical Weight (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="30"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Evaluation Criteria
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify any additional evaluation criteria (experience, past performance, etc.)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Tender Documents
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Tender Documents *
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
                    Specifications, drawings, BOQ, terms & conditions
                  </p>
                  <p className="text-xs text-gray-400">
                    PDF, DOC, DOCX, XLS, XLSX, DWG up to 50MB per file
                  </p>
                </div>
              </div>
            </div>

            {/* MDA Information (Read-only) */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Administrative Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Procuring MDA
                </label>
                <input
                  type="text"
                  value="Ministry of Works and Infrastructure"
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Automatically assigned based on your role
                </p>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
              >
                Publish Tender
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

      {/* Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Tender Creation Guidelines</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Ensure all mandatory fields are completed before publication</li>
          <li>• Upload comprehensive tender documents including specifications and terms</li>
          <li>• Set realistic timelines allowing adequate time for bid preparation</li>
          <li>• Define clear and objective evaluation criteria</li>
          <li>• Verify budget availability before creating the tender</li>
          <li>• Review all information for accuracy before publishing</li>
        </ul>
      </div>
    </div>
  );
}
