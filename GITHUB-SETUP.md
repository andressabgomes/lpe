# 🚀 Como Conectar ao GitHub

## 📋 **Passos para Salvar no GitHub:**

### **1. Criar Repositório no GitHub**
1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"**
3. Nome: `nacional-gas-landing` (ou o nome que preferir)
4. Descrição: `Landing page Nacional Gás com padrão visual dashboard`
5. Marque como **Público**
6. **NÃO** marque "Add a README file" (já temos um)
7. Clique em **"Create repository"**

### **2. Conectar Repositório Local**
```bash
# Adicionar remote origin (substitua SEU_USUARIO pelo seu username)
git remote add origin https://github.com/SEU_USUARIO/nacional-gas-landing.git

# Renomear branch para main (padrão atual)
git branch -M main

# Fazer push inicial
git push -u origin main
```

### **3. Comandos Completos**
```bash
# Se você ainda não fez os commits anteriores:
git add .
git commit -m "feat: Landing page Nacional Gás completa"

# Conectar ao GitHub:
git remote add origin https://github.com/SEU_USUARIO/nacional-gas-landing.git
git branch -M main
git push -u origin main
```

### **4. Para Futuras Atualizações**
```bash
# Adicionar mudanças
git add .

# Fazer commit
git commit -m "descrição da mudança"

# Enviar para GitHub
git push
```

## ✅ **Status Atual do Projeto:**

- ✅ **Git inicializado** no diretório local
- ✅ **Arquivos commitados** (114 arquivos, 15.877 linhas)
- ✅ **README.md** completo e profissional
- ✅ **.gitignore** configurado
- ✅ **Pronto para conectar** ao GitHub

## 🎯 **Próximos Passos:**

1. **Criar repositório** no GitHub
2. **Executar comandos** de conexão
3. **Fazer push** do código
4. **Configurar GitHub Pages** (opcional)

## 📱 **GitHub Pages (Deploy Automático):**

O projeto já está configurado para deploy automático:
- ✅ **GitHub Actions** configurado (`.github/workflows/deploy.yml`)
- ✅ **Deploy automático** ao fazer push
- ✅ **URL**: `https://SEU_USUARIO.github.io/nacional-gas-landing`

## 🎉 **Resultado Final:**

Após conectar ao GitHub, você terá:
- ✅ **Repositório público** com todo o código
- ✅ **README profissional** com documentação completa
- ✅ **Deploy automático** funcionando
- ✅ **Landing page** acessível online
- ✅ **Portfolio** atualizado com o projeto

---

**Desenvolvido por [@andressabgomes](https://github.com/andressabgomes)**
