#!/bin/bash

# 🚀 Script de Deploy - Nacional Gás
# GitHub Pages Deployment Script

echo "🚀 INICIANDO DEPLOY PARA GITHUB PAGES"
echo "======================================"

# Verificar se git está inicializado
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositório Git..."
    git init
fi

# Adicionar todos os arquivos
echo "📦 Adicionando arquivos ao Git..."
git add .

# Commit com timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
echo "💾 Fazendo commit ($TIMESTAMP)..."
git commit -m "Deploy: $TIMESTAMP - Nacional Gás Landing Page"

# Verificar se remote existe
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Configurando remote origin..."
    echo "⚠️  IMPORTANTE: Configure o remote origin com seu repositório GitHub:"
    echo "   git remote add origin https://github.com/andressabgomes/nacional-gas.git"
    echo ""
    echo "📋 Próximos passos:"
    echo "1. Crie um repositório no GitHub chamado 'nacional-gas'"
    echo "2. Execute: git remote add origin https://github.com/andressabgomes/nacional-gas.git"
    echo "3. Execute: git push -u origin main"
    echo "4. Configure GitHub Pages nas configurações do repositório"
    echo "5. Adicione as secrets necessárias"
    exit 1
fi

# Push para GitHub
echo "🚀 Enviando para GitHub..."
git push origin main

echo ""
echo "✅ DEPLOY CONCLUÍDO!"
echo "===================="
echo "🌐 Seu site estará disponível em:"
echo "   https://andressabgomes.github.io/nacional-gas"
echo ""
echo "📋 Próximos passos:"
echo "1. Acesse: https://github.com/andressabgomes/nacional-gas/settings/pages"
echo "2. Source: GitHub Actions"
echo "3. Aguarde o deploy automático"
echo "4. Configure secrets se necessário"
echo ""
echo "🎉 Site online em alguns minutos!"
