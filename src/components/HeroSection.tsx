import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover local events that matter to you
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Connect with your community through events, workshops, and gatherings. 
              Find mosques, cultural centers, and organizations near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base">
                Get Early Access
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-6 text-base border-border hover:bg-muted"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
