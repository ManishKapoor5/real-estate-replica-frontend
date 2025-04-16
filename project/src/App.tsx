
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PropertyListings from "./pages/PropertyListings";
import PropertyDetails from "./pages/PropertyDetails";
import UserDashboard from "./pages/UserDashboard";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import SellerProperties from "./pages/SellerProperties";
import ProtectedRoute from "./routes/ProtectedRoute";
import BuyerRoute from "./routes/BuyerRoute";
import SellerRoute from "./routes/SellerRoute";

// Add new imports for the admin dashboard
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./routes/AdminRoute";
import UserManagement from "./pages/UserManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/property-listings" element={<PropertyListings />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Role-specific routes */}
          <Route path="/buyer-dashboard" element={<BuyerRoute><BuyerDashboard /></BuyerRoute>} />
          <Route path="/seller-dashboard" element={<SellerRoute><SellerDashboard /></SellerRoute>} />
          <Route path="/seller/properties" element={<SellerRoute><SellerProperties /></SellerRoute>} />
          
          {/* Admin routes */}
          <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/users" element={<AdminRoute><UserManagement /></AdminRoute>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
