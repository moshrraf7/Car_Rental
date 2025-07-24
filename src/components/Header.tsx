import { Button } from "@/components/ui/button";
import { Car, Menu, Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-automotive-orange" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-automotive-orange" />
              <span>123 Rental Street, City, ST 12345</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-automotive-orange" />
              <span>Mon-Sun: 7:00 AM - 10:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Login</Button>
            <Button variant="hero" size="sm">Sign Up</Button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Car className="h-8 w-8 text-automotive-orange" />
            <span className="text-2xl font-bold text-primary">AutoRent</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-automotive-orange transition-colors">Home</a>
            <a href="#cars" className="hover:text-automotive-orange transition-colors">Our Cars</a>
            <a href="#services" className="hover:text-automotive-orange transition-colors">Services</a>
            <a href="#about" className="hover:text-automotive-orange transition-colors">About</a>
            <a href="#contact" className="hover:text-automotive-orange transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="premium" className="hidden md:inline-flex">
              Book Now
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;