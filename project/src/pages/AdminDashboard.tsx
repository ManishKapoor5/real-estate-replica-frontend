
// src/pages/AdminDashboard.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { Link } from "react-router-dom";
import { 
  BarChart, 
  Users, 
  Home, 
  Settings, 
  LogOut, 
  UserCheck,
  FileText,
  Building
} from "lucide-react";

const AdminDashboard = () => {
  const { user, logout } = useAuthStore();
  const [stats] = useState({
    totalUsers: 245,
    verifiedUsers: 198,
    buyers: 165,
    sellers: 58,
    agents: 18,
    admin: 4,
    pendingVerifications: 22,
  });
  
  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Admin Sidebar */}
      <div className="w-64 bg-white border-r shadow-sm">
        <div className="flex items-center justify-center h-16 border-b">
          <Building className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold text-primary">Admin Panel</span>
        </div>
        <nav className="mt-4">
          <Link to="/admin-dashboard">
            <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
              <Home className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
          </Link>
          <Link to="/admin/users">
            <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
              <Users className="mr-2 h-5 w-5" />
              User Management
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
            <FileText className="mr-2 h-5 w-5" />
            Reports
          </Button>
          <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
            <Building className="mr-2 h-5 w-5" />
            Properties
          </Button>
          <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start px-4 py-2 text-left text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.fullName}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Users</p>
                  <p className="text-3xl font-bold">{stats.totalUsers}</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                  <Users size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Verified Users</p>
                  <p className="text-3xl font-bold">{stats.verifiedUsers}</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                  <UserCheck size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Pending Verifications</p>
                  <p className="text-3xl font-bold">{stats.pendingVerifications}</p>
                </div>
                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500">
                  <Users size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Properties</p>
                  <p className="text-3xl font-bold">487</p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
                  <Building size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for User Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Users</TabsTrigger>
                <TabsTrigger value="buyers">Buyers</TabsTrigger>
                <TabsTrigger value="sellers">Sellers</TabsTrigger>
                <TabsTrigger value="agents">Agents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="h-72 flex items-center justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-xl font-bold text-blue-600">{stats.buyers}</p>
                      <p className="text-sm text-gray-600">Buyers</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-xl font-bold text-green-600">{stats.sellers}</p>
                      <p className="text-sm text-gray-600">Sellers</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-xl font-bold text-purple-600">{stats.agents}</p>
                      <p className="text-sm text-gray-600">Agents</p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <p className="text-xl font-bold text-red-600">{stats.admin}</p>
                      <p className="text-sm text-gray-600">Admins</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="buyers">
                <div className="h-72 flex items-center justify-center">
                  <BarChart size={280} className="text-blue-500" />
                </div>
              </TabsContent>
              
              <TabsContent value="sellers">
                <div className="h-72 flex items-center justify-center">
                  <BarChart size={280} className="text-green-500" />
                </div>
              </TabsContent>
              
              <TabsContent value="agents">
                <div className="h-72 flex items-center justify-center">
                  <BarChart size={280} className="text-purple-500" />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 pb-4 border-b">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                  <Users size={20} />
                </div>
                <div>
                  <p className="font-medium">New user registration</p>
                  <p className="text-sm text-gray-500">Rahul Mehta registered as a buyer</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pb-4 border-b">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                  <UserCheck size={20} />
                </div>
                <div>
                  <p className="font-medium">User verification</p>
                  <p className="text-sm text-gray-500">Priya Singh (seller) was verified</p>
                  <p className="text-xs text-gray-400 mt-1">4 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pb-4 border-b">
                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
                  <Building size={20} />
                </div>
                <div>
                  <p className="font-medium">New property listing</p>
                  <p className="text-sm text-gray-500">3 BHK Apartment in Mumbai was added</p>
                  <p className="text-xs text-gray-400 mt-1">6 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                  <Settings size={20} />
                </div>
                <div>
                  <p className="font-medium">System update</p>
                  <p className="text-sm text-gray-500">System maintenance completed</p>
                  <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
