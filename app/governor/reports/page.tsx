/**
 * Governor Reports Page
 * Export reports (PDF, Excel, CSV)
 */

export default function GovernorReportsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports & Exports</h1>
        <p className="text-gray-600">Generate and export comprehensive performance reports</p>
      </div>

      <div className="space-y-6">
        {/* Report Generation */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Generate New Report</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Report Type</h4>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Performance Summary</option>
                  <option>Budget Analysis</option>
                  <option>Project Status</option>
                  <option>MDA Comparison</option>
                  <option>Financial Overview</option>
                </select>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Date Range</h4>
                <div className="grid grid-cols-2 gap-2">
                  <input type="date" className="p-3 border border-gray-300 rounded-lg" />
                  <input type="date" className="p-3 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Format</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="format" value="pdf" className="mr-2" defaultChecked />
                    PDF
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="format" value="excel" className="mr-2" />
                    Excel
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="format" value="csv" className="mr-2" />
                    CSV
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Q3 Performance Summary</h4>
                  <p className="text-sm text-gray-500">Generated on Oct 15, 2024</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Download PDF</button>
                  <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">Download Excel</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Budget Analysis Report</h4>
                  <p className="text-sm text-gray-500">Generated on Oct 10, 2024</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Download PDF</button>
                  <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">Download Excel</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">MDA Comparison Report</h4>
                  <p className="text-sm text-gray-500">Generated on Oct 5, 2024</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Download PDF</button>
                  <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">Download Excel</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduled Reports */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Scheduled Reports</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Monthly Performance Report</h4>
                  <p className="text-sm text-gray-500">Scheduled for 1st of every month</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded">Edit</button>
                  <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded">Disable</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Quarterly Budget Review</h4>
                  <p className="text-sm text-gray-500">Scheduled for 1st of every quarter</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded">Edit</button>
                  <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded">Disable</button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Schedule New Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
