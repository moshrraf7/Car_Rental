import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-automotive-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Car className="h-8 w-8 text-automotive-orange" />
              <span className="text-2xl font-bold">AutoRent</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for premium car rentals. Experience the freedom of the road with our exceptional fleet and service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-automotive-orange">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-automotive-orange">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-automotive-orange">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-automotive-orange">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-automotive-orange transition-colors">Home</a></li>
              <li><a href="#cars" className="text-gray-300 hover:text-automotive-orange transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-automotive-orange transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-automotive-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-automotive-orange transition-colors">Locations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-automotive-orange transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Car Categories */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Car Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-automotive-orange transition-colors">Economy Cars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-automotive-orange transition-colors">Luxury Vehicles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-automotive-orange transition-colors">SUVs & Trucks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-automotive-orange transition-colors">Sports Cars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-automotive-orange transition-colors">Electric Vehicles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-automotive-orange transition-colors">Commercial Vehicles</a></li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-automotive-orange" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-automotive-orange" />
                <span className="text-gray-300">info@autorent.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-automotive-orange" />
                <span className="text-gray-300">123 Rental Street, City, ST 12345</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Newsletter</h4>
              <p className="text-sm text-gray-400">Subscribe for special offers and updates</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button variant="hero">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AutoRent. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-automotive-orange text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-automotive-orange text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-automotive-orange text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;