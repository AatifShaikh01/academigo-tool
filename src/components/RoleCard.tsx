import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  onSelect: () => void;
}

export const RoleCard = ({ title, description, icon: Icon, features, onSelect }: RoleCardProps) => {
  return (
    <Card className="group bg-gradient-card border-border/50 shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 cursor-pointer">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-button group-hover:scale-110 transition-bounce">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground text-lg">{description}</p>
          </div>

          <div className="w-full space-y-3">
            <h4 className="font-semibold text-foreground">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-muted-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <Button 
            onClick={onSelect}
            className="w-full bg-gradient-primary hover:shadow-button transition-smooth"
          >
            Select {title}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};