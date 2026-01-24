import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group rounded-2xl bg-white border border-stone-200 p-8 md:p-10 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
      {/* Icon Circle */}
      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-stone-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-stone-600 leading-relaxed text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;
