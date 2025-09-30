import { Factory, Wheat, Store, UtensilsCrossed, Building2, Home } from "lucide-react";
import { SelectionCard } from "./SelectionCard";
import { StepIndicator } from "./StepIndicator";
import { Button } from "./ui/button";

interface BusinessTypeSelectionProps {
  onSelect: (type: string) => void;
  onContinue: () => void;
  onBack: () => void;
  selectedType?: string;
}

export const BusinessTypeSelection = ({ onSelect, onContinue, onBack, selectedType }: BusinessTypeSelectionProps) => {
  const businessTypes = [
    { id: "industria", icon: Factory, title: "Indústria/Empresa", description: "Soluções para processos industriais" },
    { id: "agronegocio", icon: Wheat, title: "Agronegócio", description: "Energia para o campo produtivo" },
    { id: "comercio", icon: Store, title: "Comércio/Serviços", description: "Eficiência para seu estabelecimento" },
    { id: "restaurante", icon: UtensilsCrossed, title: "Restaurante/Hotel/Padaria", description: "Performance gastronômica garantida" },
    { id: "condominio", icon: Building2, title: "Condomínio", description: "Gestão centralizada de energia" },
    { id: "residencia", icon: Home, title: "Residência", description: "Conforto e economia em casa" },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <StepIndicator currentStep={1} totalSteps={5} />
        
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Para qual tipo de negócio você busca soluções energéticas com GLP?
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Selecione a opção que melhor representa sua necessidade
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {businessTypes.map((type) => (
            <SelectionCard
              key={type.id}
              icon={type.icon}
              title={type.title}
              description={type.description}
              onClick={() => onSelect(type.id)}
              selected={selectedType === type.id}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button 
            onClick={onBack}
            variant="outline"
            size="lg"
            className="border-2"
          >
            Voltar
          </Button>
          <Button 
            onClick={onContinue}
            size="lg"
            disabled={!selectedType}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-w-[200px]"
          >
            Continuar
          </Button>
        </div>
      </div>
    </section>
  );
};