import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Fuel, Settings } from "lucide-react";
import sedanImage from "@/assets/sedan-car.jpg";
import suvImage from "@/assets/suv-car.jpg";
import sportsImage from "@/assets/sports-car.jpg";

const cars = [
  {
    id: 1,
    name: "Toyota Camry",
    category: "Economy",
    image: sedanImage,
    price: 45,
    rating: 4.8,
    features: ["5 Seats", "Automatic", "Air Conditioning", "Bluetooth"],
    fuel: "Petrol",
    year: 2023,
    popular: true
  },
  {
    id: 2,
    name: "Honda CR-V",
    category: "SUV", 
    image: suvImage,
    price: 65,
    rating: 4.9,
    features: ["7 Seats", "4WD", "GPS Navigation", "Premium Audio"],
    fuel: "Hybrid",
    year: 2023,
    popular: false
  },
  {
    id: 3,
    name: "BMW M4",
    category: "Luxury",
    image: sportsImage,
    price: 120,
    rating: 4.7,
    features: ["2 Seats", "Manual", "Sports Package", "Premium Interior"],
    fuel: "Petrol",
    year: 2024,
    popular: true
  }
];

const CarCategories = () => {
  return (
    <section id="cars" className="py-20 bg-automotive-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Choose Your Perfect Ride
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From economy cars to luxury vehicles, we have the perfect car for every journey and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden shadow-card-automotive hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-64 object-cover"
                />
                {car.popular && (
                  <Badge className="absolute top-4 left-4 bg-automotive-orange text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{car.name}</h3>
                    <p className="text-automotive-orange font-medium">{car.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">${car.price}</div>
                    <div className="text-sm text-muted-foreground">per day</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-automotive-blue" />
                    <span>{car.features[0]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-automotive-blue" />
                    <span>{car.features[1]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-4 w-4 text-automotive-blue" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-automotive-blue">📅</span>
                    <span>{car.year}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {car.features.slice(2).map((feature, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      ✓ {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="premium" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="automotive" size="lg">
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarCategories;