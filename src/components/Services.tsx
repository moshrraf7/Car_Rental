import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, MapPin, Headphones, Car, CreditCard } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock customer support and roadside assistance whenever you need it."
  },
  {
    icon: Shield,
    title: "Full Insurance",
    description: "Comprehensive coverage included with every rental for your peace of mind."
  },
  {
    icon: MapPin,
    title: "GPS Navigation",
    description: "Latest GPS technology in all vehicles to help you navigate with confidence."
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated support team ready to assist you throughout your rental experience."
  },
  {
    icon: Car,
    title: "Quality Vehicles",
    description: "Well-maintained, clean vehicles that are regularly inspected for safety."
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Multiple payment options with secure, fast, and convenient booking process."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose AutoRent?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide exceptional service and premium vehicles to make your journey unforgettable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 shadow-card-automotive hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-gradient-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-automotive-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-automotive-orange" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of satisfied customers who trust AutoRent for their travel needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm opacity-80">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Premium Vehicles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-80">Locations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;