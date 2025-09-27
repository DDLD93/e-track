/**
 * Admin - Add New MDA Page
 * Form to create new MDA entries
 */

export default function AddMDAPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Add New MDA</h1>
        <p className="text-gray-600">Create a new Ministry, Department, or Agency entry</p>
      </div>

      <div className="max-w-4xl">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">MDA Information</h3>
          </div>
          <div className="p-6 space-y-6">
            <form className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    MDA Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter MDA name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select category</option>
                    <option value="ministry">Ministry</option>
                    <option value="department">Department</option>
                    <option value="agency">Agency</option>
                    <option value="commission">Commission</option>
                    <option value="board">Board</option>
                    <option value="corporation">Corporation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe the MDA's purpose, responsibilities, and scope of work"
                />
              </div>

              {/* Leadership Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Head of MDA *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter name of head of MDA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Head's Title
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Minister, Director, Managing Director"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter official email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter complete address including city, state, and postal code"
                />
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter website URL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent Ministry/Department
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select parent organization</option>
                    <option value="ministry-of-health">Ministry of Health</option>
                    <option value="ministry-of-education">Ministry of Education</option>
                    <option value="ministry-of-works">Ministry of Works</option>
                    <option value="ministry-of-agriculture">Ministry of Agriculture</option>
                    <option value="ministry-of-finance">Ministry of Finance</option>
                    <option value="ministry-of-defence">Ministry of Defence</option>
                    <option value="none">None (Independent)</option>
                  </select>
                </div>
              </div>

              {/* Status and Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    MDA Status
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="status" value="active" className="mr-2" defaultChecked />
                      <span className="text-sm text-gray-700">Active - Operational and accepting projects</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="status" value="inactive" className="mr-2" />
                      <span className="text-sm text-gray-700">Inactive - Not currently operational</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="status" value="suspended" className="mr-2" />
                      <span className="text-sm text-gray-700">Suspended - Temporarily suspended</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Allocation (₦)
                  </label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter annual budget allocation"
                  />
                </div>
              </div>

              {/* Key Performance Indicators */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Performance Indicators
                </label>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Target Projects</label>
                      <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Annual target"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Completion Rate (%)</label>
                      <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Target %"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Budget Utilization (%)</label>
                      <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Target %"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create MDA
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
