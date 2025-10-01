# Nacional Gás - Landing Page

Landing page de captação de leads para a Nacional Gás, empresa distribuidora de GLP (Gás Liquefeito de Petróleo).

🌐 **Live Demo**: [https://andressabgomes.github.io/lpe](https://andressabgomes.github.io/lpe)

## Sobre o Projeto

Esta aplicação web foi desenvolvida para captar leads qualificados através de um funil de conversão em 5 etapas:

1. **Hero + Value Proposition** - Apresentação inicial da empresa
2. **Seleção de Tipo de Negócio** - Categorização do cliente (Indústria, Agronegócio, Comércio, etc.)
3. **Seleção de Produto** - Escolha do tipo de GLP (P20, P45, P190, Granel, Orientação)
4. **Formulário de Lead** - Captura de dados do cliente
5. **Página de Agradecimento** - Confirmação do envio

## Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Formulários**: React Hook Form + Zod (validação)
- **Roteamento**: React Router DOM
- **Estado**: React Query (TanStack Query)
- **Notificações**: Sonner + Radix Toast
- **Ícones**: Lucide React
- **Email**: EmailJS para envio de leads

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```sh
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Navegue para o diretório do projeto
cd nacional-gas-leap-main

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run lint` - Executa o linter
- `npm run preview` - Visualiza o build de produção

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   ├── Hero.tsx        # Seção hero
│   ├── ValueProposition.tsx
│   ├── BusinessTypeSelection.tsx
│   ├── ProductSelection.tsx
│   ├── LeadForm.tsx
│   └── ThankYou.tsx
├── pages/              # Páginas da aplicação
├── hooks/              # Hooks customizados
├── lib/                # Utilitários (leadService.ts)
└── assets/             # Imagens e recursos
```

## Funcionalidades

- **Captação de Leads**: Formulário completo com validação
- **Segmentação**: Por tipo de negócio e produto
- **UX Otimizada**: Navegação step-by-step com indicador de progresso
- **Responsivo**: Design mobile-first
- **Validação**: Formulários com validação em tempo real
- **Notificações**: Feedback visual para o usuário
- **Envio de Emails**: Integração com EmailJS para notificação de leads

## Deploy

Para fazer deploy do projeto, você pode usar qualquer plataforma de hospedagem estática como:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Execute `npm run build` para gerar os arquivos de produção na pasta `dist/`.

## Configuração de Email

O sistema está configurado para enviar leads por email via EmailJS. As credenciais estão configuradas no arquivo `.env.local`:

```bash
VITE_EMAILJS_SERVICE_ID=service_d417gnn
VITE_EMAILJS_TEMPLATE_ID=template_4vb5y4c
VITE_EMAILJS_PUBLIC_KEY=Ks9L5IhgpTINqOOCY
VITE_TO_EMAIL=andressabgomes10@gmail.com
```

Os leads são enviados automaticamente quando o formulário é submetido.
