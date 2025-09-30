# 🚀 GitHub Pages - Setup Rápido

## ⚡ Deploy em 5 Passos

### 1. **Criar Repositório GitHub**
- Acesse: https://github.com/new
- Nome: `nacional-gas`
- Público: ✅
- Criar repositório

### 2. **Configurar Git**
```bash
git init
git remote add origin https://github.com/andressabgomes/nacional-gas.git
```

### 3. **Deploy Automático**
```bash
# Executar script de deploy
./deploy.sh

# OU manualmente:
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 4. **Configurar GitHub Pages**
- Acesse: https://github.com/andressabgomes/nacional-gas/settings/pages
- Source: **GitHub Actions**
- Salvar

### 5. **Configurar Secrets** (Opcional)
- Settings → Secrets and variables → Actions
- Adicionar:
  - `VITE_EMAILJS_SERVICE_ID`: `service_d417gnn`
  - `VITE_EMAILJS_TEMPLATE_ID`: `template_4vb5y4c`
  - `VITE_EMAILJS_PUBLIC_KEY`: `Ks9L5IhgpTINqOOCY`
  - `VITE_TO_EMAIL`: `andressabgomes10@gmail.com`

## 🌐 Resultado Final

**URL**: `https://andressabgomes.github.io/nacional-gas`

## ✅ Vantagens

- ✅ **100% Gratuito**
- ✅ **HTTPS Automático**
- ✅ **Deploy Automático**
- ✅ **CDN Global**
- ✅ **Domínio Personalizado**

---

**🎉 Site online em minutos!**
