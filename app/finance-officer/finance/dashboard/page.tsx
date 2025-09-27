/**
 * Finance Officer Dashboard Page
 * Budget vs expenditure overview (MDA-specific)
 */

export default function FinanceOfficerDashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Finance Dashboard</h1>
        <p className="text-gray-600">Budget vs expenditure overview for your MDA</p>
      </div>

      <div className="space-y-6">
        {/* Financial KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Total Budget</h3>
            <p className="text-3xl font-bold text-blue-600">₦15.2M</p>
            <p className="text-sm text-gray-500">Allocated for Q4</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Expenditure</h3>
            <p className="text-3xl font-bold text-red-600">₦11.8M</p>
            <p className="text-sm text-gray-500">77% utilized</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Remaining</h3>
            <p className="text-3xl font-bold text-green-600">₦3.4M</p>
            <p className="text-sm text-gray-500">23% available</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
            <p className="text-3xl font-bold text-purple-600">₦2.1M</p>
            <p className="text-sm text-gray-500">Generated this month</p>
          </div>
        </div>

        {/* Budget vs Expenditure Chart */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Budget vs Expenditure Trend</h3>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Chart Component - Budget vs Expenditure Line Chart]
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Project Payment - Road Construction</h4>
                  <p className="text-sm text-gray-500">Payment to ABC Construction Ltd</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">-₦500,000</p>
                  <p className="text-xs text-gray-500">Oct 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Revenue - Service Fees</h4>
                  <p className="text-sm text-gray-500">Government service fees collected</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+₦150,000</p>
                  <p className="text-xs text-gray-500">Oct 14, 2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Equipment Purchase</h4>
                  <p className="text-sm text-gray-500">Office equipment and supplies</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">-₦75,000</p>
                  <p className="text-xs text-gray-500">Oct 13, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Upload Budget</h4>
            <p className="text-sm text-gray-500">Upload new budget allocation</p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Record Expenditure</h4>
            <p className="text-sm text-gray-500">Record new expenditure</p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Upload Revenue</h4>
            <p className="text-sm text-gray-500">Upload revenue data</p>
          </button>
        </div>
      </div>
    </div>
  );
}
