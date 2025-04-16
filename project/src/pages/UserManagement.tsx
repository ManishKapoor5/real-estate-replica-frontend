
// src/pages/UserManagement.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";
import { 
  Building, 
  Home, 
  Users, 
  Settings, 
  LogOut,
  Search,
  FileText,
  Filter,
  Check,
  X,
  MoreHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for users
const mockUsers = [
  {
    id: 1,
    fullName: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    contactNumber: "9876543210",
    role: "buyer",
    isVerified: true,
    createdAt: "2025-02-15"
  },
  {
    id: 2,
    fullName: "Priya Singh",
    email: "priya.singh@example.com",
    contactNumber: "9876543211",
    role: "seller",
    isVerified: true,
    createdAt: "2025-03-01"
  },
  {
    id: 3,
    fullName: "Amit Kumar",
    email: "amit.kumar@example.com",
    contactNumber: "9876543212",
    role: "agent",
    isVerified: true,
    createdAt: "2025-01-10"
  },
  {
    id: 4,
    fullName: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    contactNumber: "9876543213",
    role: "buyer",
    isVerified: false,
    createdAt: "2025-04-05"
  },
  {
    id: 5,
    fullName: "Deepak Sharma",
    email: "deepak.sharma@example.com",
    contactNumber: "9876543214",
    role: "seller",
    isVerified: false,
    createdAt: "2025-04-12"
  }
];

const UserManagement = () => {
  const { logout } = useAuthStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  
  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  // Filter users based on search term and filters
  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = 
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.contactNumber.includes(searchTerm);
      
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    
    const matchesVerification = 
      verificationFilter === "all" || 
      (verificationFilter === "verified" && user.isVerified) ||
      (verificationFilter === "unverified" && !user.isVerified);
      
    return matchesSearch && matchesRole && matchesVerification;
  });

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
            <Button variant="secondary" className="w-full justify-start px-4 py-2 text-left">
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
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-gray-600">Manage all users of the platform</p>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search by name, email, or phone..." 
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <div className="w-40">
                  <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="buyer">Buyers</SelectItem>
                      <SelectItem value="seller">Sellers</SelectItem>
                      <SelectItem value="agent">Agents</SelectItem>
                      <SelectItem value="admin">Admins</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="w-40">
                  <Select value={verificationFilter} onValueChange={setVerificationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Verification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="unverified">Unverified</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>User List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Verified</TableHead>
                  <TableHead>Joined Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.fullName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.contactNumber}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.role === 'buyer' 
                          ? 'bg-blue-100 text-blue-800' 
                          : user.role === 'seller'
                          ? 'bg-green-100 text-green-800'
                          : user.role === 'agent' 
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      {user.isVerified ? (
                        <span className="inline-flex items-center text-green-600">
                          <Check className="h-4 w-4 mr-1" />
                          Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-red-600">
                          <X className="h-4 w-4 mr-1" />
                          No
                        </span>
                      )}
                    </TableCell>
                    <TableCell>{user.createdAt}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          {!user.isVerified && (
                            <DropdownMenuItem className="text-green-600">
                              Verify User
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600">
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
