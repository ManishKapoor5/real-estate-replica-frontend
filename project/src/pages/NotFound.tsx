
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

const NotFound = () => {
  const { user } = useAuthStore();
  
  // Determine the dashboard link based on user role
  const getDashboardLink = () => {
    if (!user) return '/';
    
    switch (user.role) {
      case 'buyer':
        return '/buyer-dashboard';
      case 'seller':
        return '/seller-dashboard';
      case 'agent':
        return '/agent-dashboard';
      case 'admin':
        return '/admin-dashboard';
      default:
        return '/user-dashboard';
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="rounded-md px-6 py-2">Return Home</Button>
          </Link>
          {user && (
            <Link to={getDashboardLink()}>
              <Button variant="outline" className="rounded-md px-6 py-2">Go to Dashboard</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
