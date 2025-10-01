# 🚀 Guia de Deploy - Nacional Gás

## 📋 Pré-requisitos

- ✅ Projeto buildado (`npm run build`)
- ✅ Arquivos na pasta `dist/` prontos
- ✅ Conta em um serviço de hospedagem

## 🌐 Opções de Domínio Gratuito

### 1. **Freenom** (Recomendado)
- **Domínios**: `.tk`, `.ml`, `.ga`, `.cf`, `.gq`
- **Custo**: 100% gratuito por 12 meses
- **Site**: https://www.freenom.com/
- **Exemplo**: `nacionalgas.tk`

### 2. **Dot TK**
- **Domínio**: `.tk`
- **Custo**: Gratuito
- **Site**: https://www.dot.tk/
- **Exemplo**: `nacionalgas.tk`

### 3. **InfinityFree**
- **Subdomínio**: `.infinityfreeapp.com`
- **Custo**: Gratuito
- **Site**: https://infinityfree.net/
- **Exemplo**: `nacionalgas.infinityfreeapp.com`

## 🏗️ Opções de Hospedagem Gratuita

### 1. **Netlify** (Recomendado)
- **Custo**: Gratuito
- **Domínio**: `nacionalgas.netlify.app`
- **Deploy**: Arrastar pasta `dist/`
- **Site**: https://netlify.com/

### 2. **Vercel**
- **Custo**: Gratuito
- **Domínio**: `nacionalgas.vercel.app`
- **Deploy**: Conectar GitHub
- **Site**: https://vercel.com/

### 3. **GitHub Pages**
- **Custo**: Gratuito
- **Domínio**: `username.github.io/nacionalgas`
- **Deploy**: Via GitHub Actions
- **Site**: https://pages.github.com/

### 4. **InfinityFree**
- **Custo**: Gratuito
- **Deploy**: Upload via FTP
- **Site**: https://infinityfree.net/

## 🚀 Deploy Rápido - Netlify

### Passo 1: Preparar Arquivos
```bash
# O build já foi criado
ls dist/
# Você verá: index.html, assets/, etc.
```

### Passo 2: Deploy no Netlify
1. **Acesse**: https://netlify.com/
2. **Crie conta**: Gratuita
3. **Arraste**: Pasta `dist/` para a área de deploy
4. **Aguarde**: Deploy automático
5. **URL**: `https://nacionalgas-xxxxx.netlify.app`

### Passo 3: Configurar Domínio Personalizado
1. **No Netlify**: Site Settings → Domain Management
2. **Add Custom Domain**: `nacionalgas.tk`
3. **Configure DNS**: No Freenom, aponte para Netlify

## 🔧 Configuração DNS (Freenom)

### No Freenom:
1. **Login**: https://www.freenom.com/
2. **Services**: My Domains
3. **Manage Domain**: Seu domínio
4. **Manage Freenom DNS**: Ativar
5. **Configure**:
   ```
   Type: A
   Name: @
   Target: 75.2.60.5 (IP do Netlify)
   TTL: 3600
   
   Type: CNAME
   Name: www
   Target: nacionalgas.netlify.app
   TTL: 3600
   ```

## 📱 Deploy Alternativo - Vercel

### Via GitHub:
1. **Push**: Código para GitHub
2. **Acesse**: https://vercel.com/
3. **Import**: Repositório GitHub
4. **Deploy**: Automático
5. **Domínio**: `nacionalgas.vercel.app`

### Via CLI:
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Seguir instruções
```

## 🎯 Deploy Manual - InfinityFree

### Passo 1: Criar Conta
1. **Acesse**: https://infinityfree.net/
2. **Sign Up**: Gratuito
3. **Escolha**: Subdomínio
4. **Exemplo**: `nacionalgas.infinityfreeapp.com`

### Passo 2: Upload Arquivos
1. **FTP**: Use FileZilla ou similar
2. **Host**: `ftpupload.net`
3. **Upload**: Pasta `dist/` → `public_html/`
4. **Acesse**: `https://nacionalgas.infinityfreeapp.com`

## 🔒 Configurações Importantes

### 1. **HTTPS**
- ✅ Netlify: Automático
- ✅ Vercel: Automático
- ⚠️ InfinityFree: Manual (certificado SSL)

### 2. **Variáveis de Ambiente**
```bash
# Para produção, configure:
VITE_EMAILJS_SERVICE_ID=service_d417gnn
VITE_EMAILJS_TEMPLATE_ID=template_4vb5y4c
VITE_EMAILJS_PUBLIC_KEY=Ks9L5IhgpTINqOOCY
VITE_TO_EMAIL=andressabgomes10@gmail.com
```

### 3. **Performance**
- ✅ Build otimizado (já feito)
- ✅ Imagens comprimidas
- ✅ CSS/JS minificados

## 🎉 Resultado Final

Após o deploy, você terá:
- ✅ **Site online**: `https://nacionalgas.tk`
- ✅ **HTTPS**: Certificado SSL
- ✅ **Responsivo**: Mobile-first
- ✅ **Emails funcionando**: Via EmailJS
- ✅ **Performance**: Otimizada

## 🆘 Suporte

Se precisar de ajuda:
1. **Netlify**: https://docs.netlify.com/
2. **Vercel**: https://vercel.com/docs
3. **Freenom**: https://www.freenom.com/help.html

---

**🚀 Seu site estará online em minutos!**
