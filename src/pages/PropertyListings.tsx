
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import CitySelector from "@/components/CitySelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Building, Grid3X3, LayoutGrid, MapPin, Search, SlidersHorizontal } from "lucide-react";

// Sample property data
const properties = Array(12).fill(null).map((_, index) => ({
  id: index + 5,
  title: `${index % 3 + 2} BHK ${["Apartment", "Villa", "House", "Penthouse"][index % 4]} in ${["Bandra", "Andheri", "Powai", "Worli"][index % 4]}`,
  location: `${["Bandra West", "Andheri East", "Powai", "Worli"][index % 4]}, Mumbai, Maharashtra`,
  price: `₹${(Math.floor(Math.random() * 10) + 1).toFixed(2)} Cr`,
  pricePerSqFt: `${(Math.floor(Math.random() * 15000) + 10000)}`,
  size: `${(Math.floor(Math.random() * 1000) + 800)} sq.ft`,
  bedrooms: index % 3 + 2,
  bathrooms: Math.floor((index % 3 + 2) * 0.7) + 1,
  propertyType: ["Apartment", "Villa", "House", "Penthouse"][index % 4],
  image: `https://images.unsplash.com/photo-${["1460574283810-2aab119d8511", "1486718448742-163732cd1544", "1493962853295-0fd70327578a", "1498936178812-4b2e558d2937", "1486312338219-ce68d2c6f44d", "1487958449943-2429e8be8625"][index % 6]}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
  isNew: index % 5 === 0,
  isVerified: index % 3 === 0
}));

const PropertyListings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Find Your Dream Property in Mumbai
            </h1>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row items-center gap-3">
              <div className="w-full md:w-1/4">
                <CitySelector />
              </div>
              <div className="w-full md:w-1/4">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Properties</SelectItem>
                    <SelectItem value="apartment">Apartments</SelectItem>
                    <SelectItem value="house">Houses</SelectItem>
                    <SelectItem value="villa">Villas</SelectItem>
                    <SelectItem value="plot">Plots</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-1/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input placeholder="Search by locality, landmark, project..." className="pl-10" />
              </div>
              <div className="w-full md:w-auto">
                <Button>Search</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">2,438 Properties</h2>
              <span className="text-sm text-gray-500">in Mumbai</span>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1"
              >
                <SlidersHorizontal size={16} />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
              <div className="border rounded-md flex">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  className="rounded-none rounded-l-md h-9 w-9"
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid size={18} />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  className="rounded-none rounded-r-md h-9 w-9"
                  onClick={() => setViewMode("list")}
                >
                  <Grid3X3 size={18} />
                </Button>
              </div>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[150px] h-9">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {showFilters && <PropertyFilters />}

          <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-6 my-8`}>
            {properties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
              />
            ))}
          </div>

          <Pagination className="my-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyListings;
