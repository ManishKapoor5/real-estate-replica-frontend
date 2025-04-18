
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Building, Facebook, Square} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await axios.post('http://localhost:3000/api/v1/RealEstateUser/login', {
        email,
        password,
      });
      const data = res.data;
      setUser({
        fullName: data.user.fullName,
        email: data.user.email,
        contactNumber: data.user.contactNumber,
        role: data.user.role,
        token: data.token,
        userId: data.user._id,
        isVerified: data.user.isVerified
      });
      
      // Redirect based on user role
      switch(data.user.role) {
        case 'buyer':
          navigate('/buyer-dashboard');
          break;
        case 'seller':
          navigate('/seller-dashboard');
          break;
        case 'agent':
          navigate('/agent-dashboard');
          break;
        case 'admin':
          navigate('/admin-dashboard');
          break;
        default:
          navigate('/user-dashboard');
      }
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${data.user.fullName}!`,
      });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
      toast({
        title: "Login Failed",
        description: err.response?.data?.message || "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <a href="/" className="inline-flex items-center mb-4">
            <Building className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary">Legacy land Real Estate</span>
          </a>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-gray-600">Log in to your account to continue</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <a href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="rounded text-primary" />
                <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
            </form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Square className="w-4 h-4 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
