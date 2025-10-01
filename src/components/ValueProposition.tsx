import { TrendingDown, Truck, HeadphonesIcon } from "lucide-react";

export const ValueProposition = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduza custos operacionais",
      description: "com energia eficiente",
      color: "bg-brand-red"
    },
    {
      icon: Truck,
      title: "Garanta fornecimento contínuo",
      description: "com a maior distribuidora do Brasil",
      color: "bg-brand-blue"
    },
    {
      icon: HeadphonesIcon,
      title: "Tenha suporte especializado",
      description: "para demandas do seu segmento",
      color: "bg-brand-red"
    }
  ];

  const stats = [
    { value: "+70 anos", label: "de experiência", color: "text-brand-red" },
    { value: "Todo Brasil", label: "Presença nacional", color: "text-brand-blue" },
    { value: "Milhares", label: "de clientes satisfeitos", color: "text-brand-red" }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Por que escolher a 
            <span className="text-brand-red"> Nacional Gás</span> para sua operação?
          </h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-3xl mx-auto">
            Soluções completas em GLP para impulsionar seu negócio com máxima eficiência
          </p>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="dashboard-card p-8 hover:shadow-lg transition-all">
              <div className={`w-16 h-16 ${benefit.color} rounded-lg flex items-center justify-center mb-6 shadow-soft`}>
                <benefit.icon className="w-8 h-8 text-neutral-0" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-700 text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="dashboard-card p-12">
          <h3 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Números que comprovam nossa excelência
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl font-bold ${stat.color} mb-3`}>{stat.value}</div>
                <div className="text-neutral-700 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};