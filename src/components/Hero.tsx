import { Button } from "./ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.4) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Energia que impulsiona sua indústria e agronegócio
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Mais eficiência, segurança e competitividade para o seu negócio com soluções em GLP sob medida.
          </p>
          <Button 
            onClick={onCTAClick}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Quero falar com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};