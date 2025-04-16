
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';

const Index = () => {
  const { user } = useAuthStore();
  
  // Helper function to get dashboard link based on user role
  const getDashboardLink = () => {
    if (!user) return '/login';
    
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Legacy Land Real Estate</h1>
          <p className="text-xl mb-8">Find your dream property with us</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {user ? (
              <Link to={getDashboardLink()}>
                <Button className="px-6 py-2">Go to Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/property-listings">
                  <Button className="px-6 py-2">Browse Properties</Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="px-6 py-2">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" className="px-6 py-2">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Buy Property</h3>
            <p className="text-gray-600 mb-4">Find your dream home from our extensive listings</p>
            <Link to="/property-listings">
              <Button variant="outline" size="sm">Explore</Button>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Sell Property</h3>
            <p className="text-gray-600 mb-4">List your property and connect with potential buyers</p>
            <Link to={user && user.role === 'seller' ? '/seller-dashboard' : '/login'}>
              <Button variant="outline" size="sm">Get Started</Button>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Expert Advice</h3>
            <p className="text-gray-600 mb-4">Get guidance from our real estate professionals</p>
            <Link to="/contact">
              <Button variant="outline" size="sm">Contact Us</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
