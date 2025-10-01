# 🏭 Landing Page Nacional Gás

Landing page profissional para a Nacional Gás com padrão visual do dashboard corporativo.

## 🎯 **Sobre o Projeto**

Landing page desenvolvida para a Nacional Gás, empresa líder em soluções de GLP para indústria e agronegócio. O projeto implementa o padrão visual oficial do dashboard corporativo com design limpo e profissional.

## 🎨 **Identidade Visual**

### **Cores Oficiais:**
- **Vermelho Nacional Gás**: `#DC2626` (primário)
- **Azul Nacional Gás**: `#2563EB` (secundário)
- **Neutros**: Escala completa de cinzas para textos e fundos

### **Design System:**
- **Cards**: Brancos com cantos arredondados (16px) e sombras suaves
- **Fundo**: Cinza claro suave (`#F5F5F5`)
- **Tipografia**: Inter (sistema)
- **Visual**: Limpo, profissional, sem glassmorphism

## 🚀 **Tecnologias**

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Radix UI** (componentes)
- **Lucide React** (ícones)
- **React Router** (navegação)
- **React Hook Form** (formulários)
- **EmailJS** (envio de emails)

## 📱 **Funcionalidades**

- ✅ **Hero Section** com CTA principal
- ✅ **Value Proposition** com benefícios e estatísticas
- ✅ **Seleção de Tipo de Negócio** (Industrial/Agronegócio)
- ✅ **Seleção de Produtos** específicos por segmento
- ✅ **Formulário de Lead** com validação
- ✅ **Página de Agradecimento**
- ✅ **Header** com contato e logo
- ✅ **Footer** com informações completas
- ✅ **Design Responsivo** (mobile-first)
- ✅ **Acessibilidade** (ARIA, alt texts)

## 🏢 **Informações da Empresa**

- **Nome**: Nacional Gás
- **CNPJ**: 06.980.064/0001-82
- **Fundação**: 1951
- **Contato**: 0800 702 1200
- **Endereço**: Praça da Imprensa Chanceler Edson Queiroz, 60, Dionísio Torres, Fortaleza-CE
- **CEP**: 135-690

## 🛠️ **Instalação e Execução**

### **Pré-requisitos:**
- Node.js 18+
- npm ou yarn

### **Instalação:**
```bash
# Clone o repositório
git clone https://github.com/andressabgomes/nacional-gas-landing.git

# Entre no diretório
cd nacional-gas-landing

# Instale as dependências
npm install
```

### **Execução:**
```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 **Estrutura do Projeto**

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes UI (Radix)
│   ├── Header.tsx      # Cabeçalho
│   ├── Footer.tsx      # Rodapé
│   ├── Hero.tsx        # Seção principal
│   ├── ValueProposition.tsx
│   ├── SelectionCard.tsx
│   └── NacionalGasLogo.tsx
├── pages/              # Páginas
├── lib/                # Utilitários
├── hooks/              # Custom hooks
└── assets/             # Imagens e recursos
```

## 🎨 **Componentes Principais**

### **NacionalGasLogo**
Componente unificado da logo com suporte a:
- `variant="original"` (imagem PNG oficial)
- `variant="svg"` (SVG para compatibilidade)

### **SelectionCard**
Card de seleção com estados:
- Normal: Borda cinza, fundo branco
- Selecionado: Borda vermelha, fundo vermelho claro
- Hover: Sombra suave

### **Button**
Botões com variantes:
- `default`: Vermelho Nacional Gás
- `secondary`: Azul Nacional Gás
- `outline`: Contorno vermelho

## 📊 **Performance**

- **Build**: ~422KB (gzipped)
- **CSS**: ~66KB (gzipped)
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)

## 🌐 **Deploy**

O projeto está configurado para deploy automático no GitHub Pages:

1. Push para branch `main`
2. GitHub Actions executa build
3. Deploy automático para GitHub Pages

## 👩‍💻 **Desenvolvido por**

**@andressabgomes** - Desenvolvedora Frontend

- GitHub: [@andressabgomes](https://github.com/andressabgomes)
- LinkedIn: [Andressa Gomes](https://linkedin.com/in/andressabgomes)

## 📄 **Licença**

Copyright © 1951-2025. Nacional Gás - CNPJ: 06.980.064/0001-82 - Todos os direitos reservados.

---

**Feito com ❤️ por [@andressabgomes](https://github.com/andressabgomes)**