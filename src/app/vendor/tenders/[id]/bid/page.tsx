/**
 * VENDOR - SUBMIT BID FORM
 * 
 * Expected Implementation (from PRD):
 * - Comprehensive bid submission form
 * - Technical and financial proposal upload
 * - Compliance document management
 * - Bid validation and verification
 * - Terms and conditions acceptance
 * 
 * User Role: Vendor
 * Permissions: Submit bids for published tenders
 * Security: Verify tender is open for bidding
 * 
 * Key Features:
 * - Multi-section bid form
 * - Document upload and validation
 * - Price calculation and verification
 * - Compliance checklist
 * - Bid submission confirmation
 */

export default function SubmitBid({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Submit Bid</h1>
        <p className="text-gray-600 mt-2">
          Road Maintenance Equipment • Ministry of Works
        </p>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-sm text-gray-500">Deadline: Oct 30, 2024 at 5:00 PM</span>
          <span className="text-sm text-red-600">15 days remaining</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border">
        <div className="p-6">
          <form className="space-y-8">
            {/* Tender Information (Read-only) */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tender Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Tender Title</label>
                  <p className="mt-1 text-gray-900">Road Maintenance Equipment</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Procuring MDA</label>
                  <p className="mt-1 text-gray-900">Ministry of Works and Infrastructure</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Estimated Value</label>
                  <p className="mt-1 text-gray-900">₦150,000,000</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <p className="mt-1 text-gray-900">Goods - Heavy Machinery</p>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Company Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value="MegaEquip Limited"
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    value="RC 123456"
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter contact person name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Financial Proposal */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Financial Proposal</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Bid Amount (₦) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter your total bid amount including all costs</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    VAT Amount (₦)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Period (Days) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="Number of days"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Warranty Period (Months)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Warranty period"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Breakdown/Justification
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide detailed breakdown of your pricing including major cost components"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Technical Proposal */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Technical Proposal</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Technical Approach & Methodology *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your technical approach, methodology, and how you will meet the tender requirements"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="Number of years"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Similar Projects Completed
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Number of similar projects"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Personnel & Qualifications
                </label>
                <textarea
                  rows={4}
                  placeholder="List key personnel who will work on this project and their qualifications"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Document Upload */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Required Documents</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technical Proposal Documents *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                    <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                    </svg>
                    <p className="text-sm text-gray-600">
                      <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                        Upload technical documents
                      </button>
                    </p>
                    <p className="text-xs text-gray-400">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Financial Proposal Documents *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                    <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                    </svg>
                    <p className="text-sm text-gray-600">
                      <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                        Upload financial documents
                      </button>
                    </p>
                    <p className="text-xs text-gray-400">PDF, XLS, XLSX up to 10MB</p>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Compliance Documents *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                  </svg>
                  <p className="text-lg text-gray-600 mb-2">
                    <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                      Upload compliance documents
                    </button>
                    {' '}or drag and drop
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Tax clearance, CAC certificate, audited accounts, insurance, etc.
                  </p>
                  <p className="text-xs text-gray-400">
                    Multiple files supported. PDF, DOC, DOCX, JPG, PNG up to 10MB each
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance Checklist */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Compliance Checklist</h3>
              
              <div className="space-y-4">
                <label className="flex items-start">
                  <input type="checkbox" required className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">
                    I confirm that our company meets the minimum experience requirements (5+ years in heavy equipment supply)
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input type="checkbox" required className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">
                    Our annual turnover meets the minimum requirement of ₦100M
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input type="checkbox" required className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">
                    All required certifications and licenses are valid and uploaded
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input type="checkbox" required className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">
                    We have the technical capacity to deliver within the specified timeline
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input type="checkbox" required className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">
                    All information provided in this bid is accurate and complete
                  </span>
                </label>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Terms and Conditions</h3>
              
              <div className="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto">
                <p className="text-sm text-gray-700 mb-3">
                  By submitting this bid, I/we agree to the following terms and conditions:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>This bid shall remain valid for 90 days from the submission deadline</li>
                  <li>We accept the evaluation criteria as specified in the tender document</li>
                  <li>We will provide the required performance guarantee if awarded</li>
                  <li>We agree to the payment terms as outlined in the tender</li>
                  <li>We understand that the lowest bid may not necessarily be accepted</li>
                  <li>We agree to comply with all applicable laws and regulations</li>
                </ul>
              </div>
              
              <label className="flex items-start">
                <input type="checkbox" required className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <span className="text-sm text-gray-700">
                  I have read, understood, and agree to all terms and conditions *
                </span>
              </label>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
              >
                Submit Bid
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

      {/* Important Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-900 mb-2">Important Submission Guidelines</h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Ensure all required documents are uploaded before submission</li>
          <li>• Double-check all financial calculations and pricing</li>
          <li>• Verify that your company meets all eligibility criteria</li>
          <li>• Submit your bid well before the deadline to avoid last-minute issues</li>
          <li>• Once submitted, bids cannot be modified or withdrawn</li>
          <li>• You will receive a confirmation email upon successful submission</li>
        </ul>
      </div>
    </div>
  );
}
