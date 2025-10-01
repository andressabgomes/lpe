import { Button } from "./ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Energia que impulsiona sua 
            <span className="text-brand-red"> indústria</span> e 
            <span className="text-brand-blue"> agronegócio</span>
          </h1>
          <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
            Mais eficiência, segurança e competitividade para o seu negócio com soluções em GLP sob medida.
          </p>
          <Button 
            onClick={onCTAClick}
            size="xl"
            className="dashboard-button-primary font-bold px-10 py-6 text-lg"
          >
            Quero falar com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};