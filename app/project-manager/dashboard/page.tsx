/**
 * Project Manager Dashboard Page
 * Project management overview and statistics
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function ProjectManagerDashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Project Manager Dashboard</h1>
        <p className="text-gray-600">Overview of your projects, submissions, and team performance</p>
      </div>

      <div className="space-y-6">
        {/* Project Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">24</div>
              <p className="text-xs text-muted-foreground">Under your supervision</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">On Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">18</div>
              <p className="text-xs text-muted-foreground">75% on track</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Delayed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">4</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">8</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Status Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-card-foreground">Project Status Distribution</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">In Progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">18</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">6</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Delayed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: '17%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">4</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Planned</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Budget vs Expenditure</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Budget</span>
                  <span className="text-sm font-medium text-gray-900">₦45.2M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Expended</span>
                  <span className="text-sm font-medium text-gray-900">₦32.8M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Remaining</span>
                  <span className="text-sm font-medium text-gray-900">₦12.4M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '72%' }}></div>
                </div>
                <p className="text-xs text-gray-500 text-center">72% budget utilization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">New submission received for "Road Construction Phase 1"</p>
                  <p className="text-xs text-gray-500">Contractor: ABC Construction Ltd • 2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Project "Hospital Equipment Upgrade" approved for funding</p>
                  <p className="text-xs text-gray-500">Budget: ₦3.2M • 1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Milestone deadline approaching for "School Renovation"</p>
                  <p className="text-xs text-gray-500">Due in 3 days • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Project "Water Treatment Plant" delayed by 2 weeks</p>
                  <p className="text-xs text-gray-500">Reason: Weather conditions • 4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Monthly progress report generated successfully</p>
                  <p className="text-xs text-gray-500">Report ID: PMR-2024-10 • 1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-medium mb-2">Create New Project</h4>
              <p className="text-sm text-muted-foreground mb-4">Start a new project and assign contractors</p>
              <Button className="w-full">Create Project</Button>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-medium mb-2">Review Submissions</h4>
              <p className="text-sm text-muted-foreground mb-4">Review and approve contractor submissions</p>
              <Button variant="outline" className="w-full">Review Submissions</Button>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-medium mb-2">Generate Report</h4>
              <p className="text-sm text-muted-foreground mb-4">Create project performance reports</p>
              <Button variant="secondary" className="w-full">Generate Report</Button>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Projects */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Projects</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Road Construction Phase 1</h4>
                    <p className="text-sm text-gray-500">ABC Construction Ltd • 65% complete</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-green-600">On Track</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Hospital Equipment Upgrade</h4>
                    <p className="text-sm text-gray-500">MedTech Solutions • 90% complete</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-blue-600">Near Completion</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">School Renovation</h4>
                    <p className="text-sm text-gray-500">XYZ Builders • 30% complete</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">Delayed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-red-200 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Foundation Milestone - Road Project</h4>
                  <p className="text-sm text-gray-500">Contractor: ABC Construction Ltd</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-red-600">Due Today</p>
                  <p className="text-xs text-gray-500">High Priority</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Equipment Installation - Hospital Project</h4>
                  <p className="text-sm text-gray-500">Contractor: MedTech Solutions</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-yellow-600">Due in 3 days</p>
                  <p className="text-xs text-gray-500">Medium Priority</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-blue-200 bg-blue-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Monthly Progress Report</h4>
                  <p className="text-sm text-gray-500">All projects summary</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600">Due in 5 days</p>
                  <p className="text-xs text-gray-500">Administrative</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Budget Review Meeting</h4>
                  <p className="text-sm text-gray-500">Q4 2024 budget assessment</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-600">Due in 1 week</p>
                  <p className="text-xs text-gray-500">Planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
