
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MapPin } from "lucide-react";
import { useState } from "react";

export interface PropertyProps {
  id: number;
  title: string;
  location: string;
  price: string;
  pricePerSqFt?: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  propertyType: string;
  isNew?: boolean;
  isVerified?: boolean;
}

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="h-48 w-full object-cover"
        />
        <Button 
          variant="ghost" 
          size="icon"
          className={`absolute top-2 right-2 bg-white/90 hover:bg-white ${liked ? 'text-red-500' : 'text-gray-500'}`}
          onClick={() => setLiked(!liked)}
        >
          <Heart className={liked ? 'fill-current' : ''} size={18} />
        </Button>
        
        {property.isNew && (
          <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">New</Badge>
        )}
        
        {property.isVerified && (
          <Badge className="absolute bottom-2 left-2 bg-blue-500 hover:bg-blue-600">Verified</Badge>
        )}
      </div>
      
      <CardHeader className="py-3 px-4">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-900">{property.price}</p>
            {property.pricePerSqFt && (
              <p className="text-xs text-gray-500">₹{property.pricePerSqFt}/sq.ft</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{property.size}</p>
            <p className="text-xs text-gray-500">{property.propertyType}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-4 py-2">
        <h3 className="text-base font-medium mb-1 line-clamp-1">{property.title}</h3>
        <p className="text-sm text-gray-500 flex items-center mb-3">
          <MapPin size={14} className="mr-1 text-gray-400" />
          <span className="line-clamp-1">{property.location}</span>
        </p>
        
        <div className="flex mt-2">
          <div className="flex items-center mr-4">
            <span className="text-sm font-medium">{property.bedrooms}</span>
            <span className="text-xs text-gray-500 ml-1">Beds</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium">{property.bathrooms}</span>
            <span className="text-xs text-gray-500 ml-1">Baths</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between px-4 py-3 border-t">
        <Button variant="outline" size="sm" className="text-xs">
          Contact Owner
        </Button>
        <Button variant="outline" size="sm" className="text-xs">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
