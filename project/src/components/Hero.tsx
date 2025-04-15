
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Home, MapPin, Search } from "lucide-react";
import CitySelector from "./CitySelector";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find Your Dream Property in India
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search from over 10 lakh properties for sale and rent across top cities in India
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-1">
          <Tabs defaultValue="buy">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="buy" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white">
                <Home className="mr-2 h-4 w-4" />
                Buy
              </TabsTrigger>
              <TabsTrigger value="rent" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white">
                <Building className="mr-2 h-4 w-4" />
                Rent
              </TabsTrigger>
              <TabsTrigger value="commercial" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white">
                Commercial
              </TabsTrigger>
              <TabsTrigger value="pg" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white">
                PG/Co-living
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="buy" className="px-4 pb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4">
                  <CitySelector />
                </div>
                <div className="relative w-full md:w-3/4">
                  <Input 
                    type="text" 
                    placeholder="Search for locality, landmark, project or builder" 
                    className="pr-10 h-12"
                  />
                  <Button className="absolute right-0 top-0 h-12 rounded-l-none">
                    <Search className="h-5 w-5" />
                    <span className="ml-2 hidden md:inline">Search</span>
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  Flat/Apartment
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Villa
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Builder Floor
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Plot
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Independent House
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="rent" className="px-4 pb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4">
                  <CitySelector />
                </div>
                <div className="relative w-full md:w-3/4">
                  <Input 
                    type="text" 
                    placeholder="Search for locality, landmark, project or builder" 
                    className="pr-10 h-12"
                  />
                  <Button className="absolute right-0 top-0 h-12 rounded-l-none">
                    <Search className="h-5 w-5" />
                    <span className="ml-2 hidden md:inline">Search</span>
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  Flat/Apartment
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Independent House
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  PG
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Villa
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="commercial" className="px-4 pb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4">
                  <CitySelector />
                </div>
                <div className="relative w-full md:w-3/4">
                  <Input 
                    type="text" 
                    placeholder="Search for commercial property" 
                    className="pr-10 h-12"
                  />
                  <Button className="absolute right-0 top-0 h-12 rounded-l-none">
                    <Search className="h-5 w-5" />
                    <span className="ml-2 hidden md:inline">Search</span>
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  Office Space
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Shop/Showroom
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Commercial Land
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="pg" className="px-4 pb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4">
                  <CitySelector />
                </div>
                <div className="relative w-full md:w-3/4">
                  <Input 
                    type="text" 
                    placeholder="Search for PG or Co-living space" 
                    className="pr-10 h-12"
                  />
                  <Button className="absolute right-0 top-0 h-12 rounded-l-none">
                    <Search className="h-5 w-5" />
                    <span className="ml-2 hidden md:inline">Search</span>
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  PG for Men
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  PG for Women
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Co-living Space
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Hero;
