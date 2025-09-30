import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { BusinessTypeSelection } from "@/components/BusinessTypeSelection";
import { ProductSelection } from "@/components/ProductSelection";
import { LeadForm } from "@/components/LeadForm";
import { ThankYou } from "@/components/ThankYou";
import { toast } from "sonner";
import { processLead, type LeadData } from "@/lib/leadService";

type Step = "hero" | "business-type" | "product" | "form" | "thank-you";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("hero");
  const [businessType, setBusinessType] = useState<string>("");
  const [product, setProduct] = useState<string>("");

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const handleHeroCTA = () => {
    setCurrentStep("business-type");
  };

  const handleBusinessTypeSelect = (type: string) => {
    setBusinessType(type);
  };

  const handleBusinessTypeContinue = () => {
    if (!businessType) {
      toast.error("Por favor, selecione uma opção");
      return;
    }
    setCurrentStep("product");
  };

  const handleProductSelect = (selectedProduct: string) => {
    setProduct(selectedProduct);
  };

  const handleProductContinue = () => {
    if (!product) {
      toast.error("Por favor, selecione uma opção");
      return;
    }
    setCurrentStep("form");
  };

  const handleFormSubmit = async (data: any) => {
    const leadData: LeadData = {
      ...data,
      businessType,
      product,
      timestamp: new Date().toISOString(),
      source: 'nacional-gas-landing'
    };

    // Exibir dados detalhados no console
    console.group("🎯 NOVO LEAD CAPTURADO - Nacional Gás");
    console.log("📅 Data/Hora:", new Date().toLocaleString('pt-BR'));
    console.log("🏢 Tipo de Negócio:", businessType);
    console.log("📦 Produto Selecionado:", product);
    console.log("👤 Dados do Cliente:");
    console.table(data);
    console.log("📊 Dados Completos:", leadData);
    console.groupEnd();

    // Salvar dados localmente (para desenvolvimento)
    try {
      localStorage.setItem('lastLead', JSON.stringify(leadData));
      console.log("💾 Lead salvo no localStorage");
    } catch (error) {
      console.error("❌ Erro ao salvar no localStorage:", error);
    }

    // Processar lead (enviar por email/webhook)
    try {
      const success = await processLead(leadData);
      if (success) {
        toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");
      } else {
        toast.success("Dados capturados! Entraremos em contato em breve.");
      }
    } catch (error) {
      console.error("❌ Erro ao processar lead:", error);
      toast.success("Dados capturados! Entraremos em contato em breve.");
    }

    setCurrentStep("thank-you");
  };

  const handleBackToBusinessType = () => {
    setCurrentStep("business-type");
  };

  const handleBackToProduct = () => {
    setCurrentStep("product");
  };

  const handleBackToHero = () => {
    setCurrentStep("hero");
  };

  // Renderização condicional baseada na etapa
  if (currentStep === "thank-you") {
    return <ThankYou />;
  }

  if (currentStep === "form") {
    return (
      <LeadForm
        businessType={businessType}
        product={product}
        onSubmit={handleFormSubmit}
        onBack={handleBackToProduct}
      />
    );
  }

  if (currentStep === "product") {
    return (
      <ProductSelection
        onSelect={handleProductSelect}
        onContinue={handleProductContinue}
        onBack={handleBackToBusinessType}
        selectedProduct={product}
      />
    );
  }

  if (currentStep === "business-type") {
    return (
      <BusinessTypeSelection 
        onSelect={handleBusinessTypeSelect}
        onContinue={handleBusinessTypeContinue}
        onBack={handleBackToHero}
        selectedType={businessType}
      />
    );
  }

  // Hero + Value Proposition
  return (
    <div className="min-h-screen">
      <Hero onCTAClick={handleHeroCTA} />
      <ValueProposition />
    </div>
  );
};

export default Index;