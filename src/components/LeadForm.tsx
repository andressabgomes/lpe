import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { StepIndicator } from "./StepIndicator";
import { ChevronDown, ChevronUp } from "lucide-react";

const formSchema = z.object({
  nome: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(10, "Telefone inválido").max(20),
  cnpj: z.string().trim().min(14, "CNPJ inválido").max(18),
  cidade: z.string().trim().min(2, "Cidade é obrigatória").max(100),
  estado: z.string().trim().min(2, "Estado é obrigatório").max(2),
  razaoSocial: z.string().trim().max(200).optional(),
  cargo: z.string().trim().max(100).optional(),
  segmento: z.string().trim().max(100).optional(),
  porte: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormProps {
  businessType: string;
  product: string;
  onSubmit: (data: FormData) => void;
  onBack: () => void;
}

export const LeadForm = ({ businessType, product, onSubmit, onBack }: LeadFormProps) => {
  const [showOptional, setShowOptional] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <section className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <StepIndicator currentStep={4} totalSteps={5} />
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Converse com quem entende do seu negócio
          </h2>
          <p className="text-muted-foreground">
            Preencha seus dados e em breve um de nossos especialistas entrará em contato
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-2xl shadow-sm">
          <div>
            <Label htmlFor="nome">Nome completo *</Label>
            <Input id="nome" {...register("nome")} className="mt-1" />
            {errors.nome && <p className="text-sm text-destructive mt-1">{errors.nome.message}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input id="email" type="email" {...register("email")} className="mt-1" />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="telefone">Telefone *</Label>
              <Input id="telefone" {...register("telefone")} placeholder="(00) 00000-0000" className="mt-1" />
              {errors.telefone && <p className="text-sm text-destructive mt-1">{errors.telefone.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="cnpj">CNPJ *</Label>
            <Input id="cnpj" {...register("cnpj")} placeholder="00.000.000/0000-00" className="mt-1" />
            {errors.cnpj && <p className="text-sm text-destructive mt-1">{errors.cnpj.message}</p>}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Label htmlFor="cidade">Cidade *</Label>
              <Input id="cidade" {...register("cidade")} className="mt-1" />
              {errors.cidade && <p className="text-sm text-destructive mt-1">{errors.cidade.message}</p>}
            </div>

            <div>
              <Label htmlFor="estado">Estado *</Label>
              <Input id="estado" {...register("estado")} placeholder="SP" maxLength={2} className="mt-1" />
              {errors.estado && <p className="text-sm text-destructive mt-1">{errors.estado.message}</p>}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowOptional(!showOptional)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {showOptional ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {showOptional ? "Ocultar" : "Mostrar"} campos opcionais
          </button>

          {showOptional && (
            <div className="space-y-6 pt-4 border-t">
              <div>
                <Label htmlFor="razaoSocial">Razão Social</Label>
                <Input id="razaoSocial" {...register("razaoSocial")} className="mt-1" />
              </div>

              <div>
                <Label htmlFor="cargo">Cargo/Função</Label>
                <Input id="cargo" {...register("cargo")} className="mt-1" />
              </div>

              <div>
                <Label htmlFor="segmento">Segmento</Label>
                <Input id="segmento" {...register("segmento")} className="mt-1" />
              </div>

              <div>
                <Label htmlFor="porte">Porte da Empresa</Label>
                <select 
                  id="porte" 
                  {...register("porte")} 
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                >
                  <option value="">Selecione</option>
                  <option value="micro">Microempresa</option>
                  <option value="pequena">Pequena</option>
                  <option value="media">Média</option>
                  <option value="grande">Grande</option>
                </select>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6">
            <Button 
              type="button"
              onClick={onBack}
              variant="outline"
              className="flex-1"
            >
              Voltar
            </Button>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              {isSubmitting ? "Enviando..." : "Receber contato do especialista"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};