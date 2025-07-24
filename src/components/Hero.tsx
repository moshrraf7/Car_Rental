import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Search } from "lucide-react";
import heroImage from "@/assets/hero-cars.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Car Rental
            <span className="block text-automotive-orange">Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover the freedom of the road with our premium fleet of vehicles. 
            Book your perfect ride today.
          </p>
          
          {/* Booking Form */}
          <Card className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pick-up Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Enter location" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pick-up Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input type="date" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pick-up Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input type="time" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Car Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="midsize">Midsize</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button variant="hero" size="lg" className="h-12">
                <Search className="mr-2 h-5 w-5" />
                Search Cars
              </Button>
            </div>
          </Card>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="automotive" size="lg">
              View All Cars
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;