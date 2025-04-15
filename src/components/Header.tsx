
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Home, 
  Info,
  Mail,
  Menu, 
  Plus, 
  Search, 
  User
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Building className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary">Legacy land Real Estate</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          <NavItem title="Buy" icon={<Home size={18} />} href="/property-listings" active />
          <NavItem title="Rent" icon={<Building size={18} />} href="/property-listings" />
          <NavItem title="Sell" icon={<Plus size={18} />} href="/property-listings" />
          <NavItem title="About Us" icon={<Info size={18} />} href="/about-us" />
          <NavItem title="Contact" icon={<Mail size={18} />} href="/contact" />
        </div>
        
        <div className="flex items-center">
          <Button variant="outline" size="sm" className="mr-2 hidden md:flex" asChild>
            <a href="/property-listings">
              <Search size={16} className="mr-1" />
              Search
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
            <a href="/login">
              <User size={16} className="mr-1" />
              Login
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <MobileNavItem title="Buy" icon={<Home size={18} />} href="/property-listings" active />
            <MobileNavItem title="Rent" icon={<Building size={18} />} href="/property-listings" />
            <MobileNavItem title="Sell" icon={<Plus size={18} />} href="/property-listings" />
            <MobileNavItem title="About Us" icon={<Info size={18} />} href="/about-us" />
            <MobileNavItem title="Contact" icon={<Mail size={18} />} href="/contact" />
            <MobileNavItem title="Login" icon={<User size={18} />} href="/login" />
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ title, icon, href = "#", active = false }: { title: string; icon?: React.ReactNode; href?: string; active?: boolean }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
      active ? "text-primary" : "text-gray-700 hover:text-primary"
    }`}
  >
    {icon && <span className="mr-1.5">{icon}</span>}
    {title}
    {active && <div className="h-1 w-full bg-primary absolute bottom-0 left-0 rounded-t-md"></div>}
  </a>
);

const MobileNavItem = ({ title, icon, href = "#", active = false }: { title: string; icon?: React.ReactNode; href?: string; active?: boolean }) => (
  <a
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
      active ? "text-primary bg-accent" : "text-gray-700 hover:bg-gray-50 hover:text-primary"
    }`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {title}
  </a>
);

export default Header;
