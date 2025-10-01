import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        
        return (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`
                flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all
                ${isCompleted ? 'bg-primary border-primary' : ''}
                ${isCurrent ? 'border-primary bg-red-light' : ''}
                ${!isCompleted && !isCurrent ? 'border-muted bg-background' : ''}
              `}
            >
              {isCompleted ? (
                <Check className="w-4 h-4 text-primary-foreground" />
              ) : (
                <span className={`text-sm font-medium ${isCurrent ? 'text-primary' : 'text-muted-foreground'}`}>
                  {stepNumber}
                </span>
              )}
            </div>
            {stepNumber < totalSteps && (
              <div className={`w-8 h-0.5 mx-1 ${isCompleted ? 'bg-primary' : 'bg-border'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};