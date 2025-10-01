# Nacional Gás - Landing Page

Landing page profissional para a Nacional Gás com identidade visual completa e API de validação de CEP.

## 🎨 Identidade Visual

### Logo Original
- **Logo Principal**: Componente SVG com as cores oficiais da Nacional Gás
- **Cores**: Vermelho (#DC2626), Azul (#2563EB), Branco
- **Favicon**: Versão simplificada do logo para navegadores
- **Responsivo**: Adapta-se a diferentes tamanhos de tela

### Componentes de Interface
- **Header**: Logo, informações de contato e CTA principal
- **Footer**: Informações completas da empresa, contato e serviços
- **Navegação**: Header fixo com scroll suave entre seções

## 🚀 Funcionalidades

### Landing Page
- ✅ **Hero Section**: Apresentação principal com CTA
- ✅ **Seleção de Tipo de Negócio**: Indústria ou Agronegócio
- ✅ **Seleção de Produtos**: GLP Industrial ou Agronegócio
- ✅ **Formulário de Lead**: Captura de dados do cliente
- ✅ **Página de Agradecimento**: Confirmação de envio
- ✅ **Design Responsivo**: Mobile-first approach

### API de Validação de CEP
- ✅ **Validação de CEP**: Busca por CEP específico
- ✅ **Validação de Endereço**: Cidade e estado
- ✅ **Listagem de Estados**: Todos os estados brasileiros
- ✅ **Listagem de Cidades**: Por estado
- ✅ **Integração Frontend**: Serviço TypeScript para consumo

## 🛠️ Tecnologias

### Frontend
- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **Radix UI** + shadcn/ui para componentes
- **React Hook Form** + Zod para formulários
- **React Router** para navegação
- **Lucide React** para ícones

### Backend
- **Node.js** + Express
- **CORS** habilitado
- **Base de dados simulada** com principais cidades brasileiras

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                 # Componentes base (shadcn/ui)
│   ├── NacionalGasLogo.tsx # Logo oficial da empresa
│   ├── Header.tsx         # Cabeçalho com logo e contato
│   ├── Footer.tsx         # Rodapé com informações da empresa
│   ├── Hero.tsx           # Seção principal
│   ├── ValueProposition.tsx
│   ├── BusinessTypeSelection.tsx
│   ├── ProductSelection.tsx
│   ├── LeadForm.tsx
│   ├── ThankYou.tsx
│   └── CEPValidator.tsx   # Componente de validação de CEP
├── lib/
│   ├── cepService.ts      # Serviço para API de CEP
│   ├── leadService.ts     # Serviço para processamento de leads
│   └── utils.ts           # Utilitários gerais
├── pages/
│   └── Index.tsx          # Página principal com navegação
└── assets/
    └── hero-industrial.jpg
```

## 🚀 Como Executar

### Frontend (React)
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Backend (API CEP)
```bash
# Instalar dependências da API
npm install express cors

# Executar API
node api-cep.js
```

A API estará disponível em: `http://localhost:3001`
O frontend estará disponível em: `http://localhost:8081`

## 📡 Endpoints da API

### Validação de CEP
- `GET /api/cep/:cep` - Validar CEP específico
- `GET /api/cep?cidade=:cidade&estado=:estado` - Buscar CEPs por cidade/estado
- `GET /api/cidades/:estado` - Listar cidades de um estado
- `GET /api/estados` - Listar todos os estados
- `POST /api/validar-endereco` - Validar cidade e estado
- `GET /api/test` - Teste de conectividade

## 🎯 Exemplos de Uso

### Integração com API de CEP
```typescript
import { cepService } from './lib/cepService';

// Validar CEP
const dados = await cepService.validarCEP('01000-000');

// Validar endereço
const validacao = await cepService.validarEndereco('São Paulo', 'SP');
```

### Uso do Logo
```tsx
import { NacionalGasLogo } from './components/NacionalGasLogo';

// Logo padrão
<NacionalGasLogo />

// Logo customizado
<NacionalGasLogo width={300} height={80} className="my-custom-class" />
```

## 🎨 Personalização

### Cores da Marca
As cores estão definidas no `tailwind.config.ts` e `src/index.css`:
- **Primary**: #DC2626 (Vermelho Nacional Gás)
- **Accent**: #FCD34D (Amarelo energia)
- **Secondary**: Tons de cinza

### Logo
O logo é um componente SVG totalmente customizável:
- Tamanho responsivo
- Cores oficiais da marca
- Ícone octagonal característico

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Grid System**: Flexbox e CSS Grid
- **Typography**: Escalas responsivas

## 🔧 Desenvolvimento

### Estrutura de Componentes
- Componentes funcionais com TypeScript
- Props tipadas com interfaces
- Hooks personalizados quando necessário
- Estado gerenciado com useState/useEffect

### Estilização
- Tailwind CSS para estilos utilitários
- CSS customizado para variáveis de design system
- Componentes shadcn/ui para consistência
- Dark mode preparado (não implementado)

## 📊 Performance

- **Vite**: Build rápido e HMR
- **Code Splitting**: Carregamento otimizado
- **Tree Shaking**: Bundle otimizado
- **Lazy Loading**: Componentes carregados sob demanda

## 🚀 Deploy

### Frontend
```bash
npm run build
# Upload da pasta dist/ para seu servidor
```

### Backend
```bash
# Deploy da API para Vercel, Netlify Functions, ou servidor Node.js
```

## 📝 Licença

Projeto desenvolvido para Nacional Gás. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para Nacional Gás**
