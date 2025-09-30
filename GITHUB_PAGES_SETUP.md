# 🚀 GitHub Pages - Nacional Gás

## 📋 Configuração GitHub Pages

### Passo 1: Preparar Repositório
```bash
# Inicializar git (se não existir)
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "Initial commit - Nacional Gás Landing Page"

# Conectar ao GitHub
git remote add origin https://github.com/andressabgomes/nacional-gas.git

# Push para GitHub
git push -u origin main
```

### Passo 2: Configurar GitHub Pages
1. **Acesse**: https://github.com/andressabgomes/nacional-gas
2. **Settings**: Aba Settings do repositório
3. **Pages**: Menu lateral → Pages
4. **Source**: GitHub Actions
5. **Salvar**: Configuração

### Passo 3: Configurar Secrets
1. **Settings**: Repositório → Settings
2. **Secrets**: Security → Secrets and variables → Actions
3. **New repository secret**: Adicionar cada uma:

```
VITE_EMAILJS_SERVICE_ID = service_d417gnn
VITE_EMAILJS_TEMPLATE_ID = template_4vb5y4c
VITE_EMAILJS_PUBLIC_KEY = Ks9L5IhgpTINqOOCY
VITE_TO_EMAIL = andressabgomes10@gmail.com
```

### Passo 4: Deploy Automático
1. **Push**: Faça push do código
2. **Actions**: GitHub Actions executará automaticamente
3. **Deploy**: Site será publicado em `https://andressabgomes.github.io/nacional-gas`

## 🔧 Configurações Adicionais

### Domínio Personalizado (Opcional)
1. **Criar arquivo**: `public/CNAME`
2. **Conteúdo**: `nacionalgas.tk`
3. **DNS**: Configurar no Freenom para apontar para GitHub Pages

### Configuração de Base Path
Se o repositório não for `username.github.io`:
```javascript
// vite.config.ts
export default defineConfig({
  base: '/nacional-gas/', // Nome do repositório
  // ... outras configurações
})
```

## 📱 URLs Finais

- **GitHub Pages**: `https://andressabgomes.github.io/nacional-gas`
- **Domínio personalizado**: `https://nacionalgas.tk` (se configurado)

## ✅ Vantagens GitHub Pages

- ✅ **100% Gratuito**
- ✅ **HTTPS Automático**
- ✅ **Deploy Automático**
- ✅ **CDN Global**
- ✅ **Domínio Personalizado**
- ✅ **Integração GitHub**

## 🚀 Próximos Passos

1. **Criar repositório** no GitHub
2. **Fazer push** do código
3. **Configurar Pages** nas configurações
4. **Adicionar Secrets** para variáveis de ambiente
5. **Aguardar deploy** automático

---

**🎉 Seu site estará online em minutos!**
