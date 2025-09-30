import { CheckCircle2, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { StepIndicator } from "./StepIndicator";

export const ThankYou = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações", "_blank");
  };

  const handleWebsite = () => {
    window.open("https://nacionalgas.com.br", "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-light to-background py-20">
      <div className="container mx-auto px-4">
        <StepIndicator currentStep={5} totalSteps={5} />
        
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-8">
            <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Obrigado pelo seu interesse!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Em breve nossa equipe entrará em contato para apresentar a solução ideal em GLP para seu negócio.
          </p>

          <div className="bg-card p-8 rounded-2xl shadow-sm mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Precisa de atendimento imediato?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsApp}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale agora via WhatsApp
              </Button>
              
              <Button
                onClick={handleWebsite}
                variant="outline"
                className="flex-1 border-2"
                size="lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visite nosso site oficial
              </Button>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Horário de atendimento: Segunda a Sexta, 8h às 18h</p>
          </div>
        </div>
      </div>
    </section>
  );
};