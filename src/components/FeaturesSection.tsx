import { Search, Users, Bell } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Discover events",
      description: "Browse local community events, workshops, and gatherings happening near you.",
    },
    {
      icon: Users,
      title: "Follow organizations",
      description: "Connect with mosques, cultural centers, and community groups you care about.",
    },
    {
      icon: Bell,
      title: "Save & get reminders",
      description: "Never miss an event with personalized reminders and calendar sync.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
