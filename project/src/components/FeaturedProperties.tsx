
import PropertyCard, { PropertyProps } from "./PropertyCard";

const properties: PropertyProps[] = [
  {
    id: 1,
    title: "3 BHK Apartment in DLF Phase 5",
    location: "DLF Phase 5, Gurugram, Haryana",
    price: "₹1.45 Cr",
    pricePerSqFt: "7,250",
    size: "2000 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "Apartment",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    isNew: true,
    isVerified: true
  },
  {
    id: 2,
    title: "4 BHK Independent House in Whitefield",
    location: "Whitefield, Bangalore, Karnataka",
    price: "₹2.8 Cr",
    pricePerSqFt: "9,800",
    size: "2850 sq.ft",
    bedrooms: 4,
    bathrooms: 3,
    propertyType: "Villa",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 3,
    title: "2 BHK Flat in Andheri West",
    location: "Andheri West, Mumbai, Maharashtra",
    price: "₹1.75 Cr",
    pricePerSqFt: "21,300",
    size: "820 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    propertyType: "Apartment",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    isVerified: true
  },
  {
    id: 4,
    title: "3 BHK Apartment in Powai",
    location: "Powai, Mumbai, Maharashtra",
    price: "₹3.1 Cr",
    pricePerSqFt: "18,200",
    size: "1700 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    propertyType: "Apartment",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    isNew: true
  }
];

const FeaturedProperties = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our handpicked premium properties in top locations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
