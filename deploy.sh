#!/bin/bash
# CloakerPro Landing Page - Deploy Script

echo "🚀 Iniciando deploy da CloakerPro Landing Page..."

# Verificar se os arquivos necessários existem
if [ ! -f "index.html" ]; then
    echo "❌ Erro: index.html não encontrado"
    exit 1
fi

if [ ! -f "styles.css" ]; then
    echo "❌ Erro: styles.css não encontrado"
    exit 1
fi

if [ ! -f "script.js" ]; then
    echo "❌ Erro: script.js não encontrado"
    exit 1
fi

echo "✅ Todos os arquivos necessários foram encontrados"

# Definir porta
PORT=${PORT:-5000}
echo "📡 Usando porta: $PORT"

# Iniciar servidor
echo "🌐 Iniciando servidor Python..."
python start_server.py