import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface SelectionCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onClick: () => void;
  selected?: boolean;
}

export const SelectionCard = ({ icon: Icon, title, description, onClick, selected }: SelectionCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={`
        p-6 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1
        ${selected ? 'border-primary border-2 bg-red-light' : 'border-border hover:border-primary/50'}
      `}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className={`p-3 rounded-full ${selected ? 'bg-primary' : 'bg-secondary'}`}>
          <Icon className={`w-6 h-6 ${selected ? 'text-primary-foreground' : 'text-primary'}`} />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </Card>
  );
};