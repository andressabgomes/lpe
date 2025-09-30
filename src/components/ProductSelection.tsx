import { Package, Boxes, Container, Fuel, HelpCircle } from "lucide-react";
import { SelectionCard } from "./SelectionCard";
import { StepIndicator } from "./StepIndicator";
import { Button } from "./ui/button";

interface ProductSelectionProps {
  onSelect: (product: string) => void;
  onContinue: () => void;
  onBack: () => void;
  selectedProduct?: string;
}

export const ProductSelection = ({ onSelect, onContinue, onBack, selectedProduct }: ProductSelectionProps) => {
  const products = [
    { 
      id: "p20", 
      icon: Package, 
      title: "P20 (20kg)", 
      description: "Versátil e ideal para demandas menores" 
    },
    { 
      id: "p45", 
      icon: Boxes, 
      title: "P45 (45kg)", 
      description: "Mais autonomia para empresas de médio porte" 
    },
    { 
      id: "p190", 
      icon: Container, 
      title: "P190 (190kg)", 
      description: "Força industrial para alto consumo" 
    },
    { 
      id: "granel", 
      icon: Fuel, 
      title: "Gás a Granel", 
      description: "Abastecimento contínuo com máxima eficiência" 
    },
    { 
      id: "orientacao", 
      icon: HelpCircle, 
      title: "Preciso de orientação", 
      description: "Nossos consultores ajudam você a decidir" 
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <StepIndicator currentStep={2} totalSteps={5} />
        
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          O GLP certo para o porte e as necessidades da sua operação
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Escolha o formato que melhor atende seu consumo
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <SelectionCard
              key={product.id}
              icon={product.icon}
              title={product.title}
              description={product.description}
              onClick={() => onSelect(product.id)}
              selected={selectedProduct === product.id}
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
            disabled={!selectedProduct}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-w-[200px]"
          >
            Continuar
          </Button>
        </div>
      </div>
    </section>
  );
};