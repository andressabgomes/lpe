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
        dashboard-card p-8 cursor-pointer transition-all duration-300 hover:shadow-lg border-2
        ${selected 
          ? 'border-brand-red bg-brand-red/5 shadow-card' 
          : 'border-neutral-200 hover:border-brand-red/30 hover:bg-neutral-0'
        }
      `}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className={`
          p-4 rounded-lg transition-all duration-300 shadow-soft
          ${selected 
            ? 'bg-brand-red' 
            : 'bg-neutral-100 hover:bg-brand-red/10'
          }
        `}>
          <Icon className={`
            w-8 h-8 transition-colors duration-300
            ${selected ? 'text-neutral-0' : 'text-brand-red'}
          `} />
        </div>
        <h3 className={`
          font-bold text-lg transition-colors duration-300
          ${selected ? 'text-brand-red' : 'text-neutral-900'}
        `}>
          {title}
        </h3>
        {description && (
          <p className={`
            text-sm leading-relaxed transition-colors duration-300
            ${selected ? 'text-brand-red/80' : 'text-neutral-700'}
          `}>
            {description}
          </p>
        )}
        {selected && (
          <div className="mt-2">
            <div className="w-8 h-1 bg-brand-red rounded-full mx-auto"></div>
          </div>
        )}
      </div>
    </Card>
  );
};