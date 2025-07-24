import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  MapPin, 
  Clock, 
  Shield, 
  Heart,
  Car,
  Star,
  CheckCircle
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "100+", label: "Locations Worldwide", icon: MapPin },
    { number: "24/7", label: "Customer Support", icon: Clock }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All our vehicles undergo rigorous safety inspections and maintenance checks to ensure your peace of mind on every journey."
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description: "We put our customers at the heart of everything we do, providing personalized service and exceptional experiences."
    },
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Our diverse fleet features the latest models from top manufacturers, regularly updated to meet modern standards."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from booking to return, ensuring memorable experiences."
    }
  ];

  const achievements = [
    "Best Car Rental Service 2023",
    "Customer Choice Award",
    "Green Business Certification",
    "ISO 9001 Quality Management",
    "5-Star Safety Rating",
    "Digital Innovation Award"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-automotive-orange/10 text-automotive-orange border-automotive-orange/20">
            About AutoRent
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Your Trusted Car Rental Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2008, AutoRent has been revolutionizing the car rental industry with premium vehicles, 
            exceptional service, and innovative solutions. We're not just about cars – we're about creating 
            unforgettable journeys and connecting people to their destinations with comfort and style.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 shadow-card-automotive border-0 bg-gradient-card">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-automotive-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-automotive-blue" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AutoRent was founded with a simple vision: to make premium car rentals accessible to everyone. 
                What started as a small family business with just five vehicles has grown into one of the most 
                trusted names in the car rental industry.
              </p>
              <p>
                Our journey began when our founder, passionate about automotive excellence, noticed a gap in 
                the market for truly customer-focused car rental services. Today, we operate across multiple 
                cities and countries, but our core values remain unchanged.
              </p>
              <p>
                We believe that every journey should be comfortable, safe, and memorable. That's why we've 
                invested heavily in our fleet, technology, and most importantly, our people who make the 
                AutoRent experience exceptional.
              </p>
            </div>
            <Button variant="automotive" className="mt-6">
              Learn More About Our Journey
            </Button>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-automotive-blue/5 border-automotive-blue/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-automotive-blue/10 rounded-full flex items-center justify-center">
                  <Car className="h-6 w-6 text-automotive-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Premium Vehicle Portfolio</h4>
                  <p className="text-sm text-muted-foreground">
                    From economy cars to luxury SUVs, our carefully curated fleet ensures the perfect 
                    vehicle for every occasion and budget.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-automotive-orange/5 border-automotive-orange/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-automotive-orange/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-automotive-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Exceptional Customer Service</h4>
                  <p className="text-sm text-muted-foreground">
                    Our dedicated team of professionals is committed to providing personalized service 
                    that exceeds expectations at every touchpoint.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 shadow-card-automotive hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-automotive-blue" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Awards & Recognition</h3>
          <p className="text-xl mb-8 opacity-90">
            Our commitment to excellence has been recognized by industry leaders and customers alike.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-automotive-orange flex-shrink-0" />
                <span className="text-sm font-medium">{achievement}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button variant="hero" size="lg">
              View All Certifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;