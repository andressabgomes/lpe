import { TrendingDown, Truck, HeadphonesIcon } from "lucide-react";

export const ValueProposition = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduza custos operacionais",
      description: "com energia eficiente"
    },
    {
      icon: Truck,
      title: "Garanta fornecimento contínuo",
      description: "com a maior distribuidora do Brasil"
    },
    {
      icon: HeadphonesIcon,
      title: "Tenha suporte especializado",
      description: "para demandas do seu segmento"
    }
  ];

  const stats = [
    { value: "+70 anos", label: "de experiência" },
    { value: "Todo Brasil", label: "Presença nacional" },
    { value: "Milhares", label: "de clientes satisfeitos" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Por que escolher a Nacional Gás para sua operação?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Soluções completas em GLP para impulsionar seu negócio com máxima eficiência
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-red-light rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};