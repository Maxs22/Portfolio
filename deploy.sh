#!/bin/bash

# 🚀 Portfolio Deploy Script
# Este script automatiza el proceso de deploy del portfolio

set -e

echo "🚀 Iniciando proceso de deploy del portfolio..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar mensajes
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    error "No se encontró package.json. Asegúrate de estar en el directorio del proyecto."
    exit 1
fi

# Verificar que git está configurado
if ! git status &> /dev/null; then
    error "No se encontró un repositorio git. Inicializa git primero."
    exit 1
fi

# Paso 1: Verificar cambios
log "Verificando cambios pendientes..."
if git diff --quiet && git diff --cached --quiet; then
    warning "No hay cambios pendientes para commitear."
else
    log "Agregando cambios al staging..."
    git add .
    
    log "Haciendo commit de los cambios..."
    git commit -m "🚀 Deploy automático: $(date +'%Y-%m-%d %H:%M:%S')"
    success "Commit realizado exitosamente"
fi

# Paso 2: Push a la rama actual
log "Haciendo push a la rama actual..."
CURRENT_BRANCH=$(git branch --show-current)
git push origin $CURRENT_BRANCH
success "Push realizado a la rama: $CURRENT_BRANCH"

# Paso 3: Si no estamos en main/master, crear PR
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    log "Creando Pull Request..."
    
    # Verificar si gh CLI está instalado
    if command -v gh &> /dev/null; then
        gh pr create --title "[AUTO-MERGE] Deploy automático desde $CURRENT_BRANCH" \
                     --body "🚀 Deploy automático del portfolio

**Cambios incluidos:**
- Actualizaciones del portfolio
- Mejoras en el diseño
- Optimizaciones de rendimiento

**Para mergear automáticamente, el PR debe tener el título con [AUTO-MERGE]**" \
                     --base main \
                     --head $CURRENT_BRANCH
        success "Pull Request creado exitosamente"
    else
        warning "GitHub CLI (gh) no está instalado. Crea el PR manualmente en GitHub."
        log "URL sugerida: https://github.com/Maxs22/Portfolio/compare/main...$CURRENT_BRANCH"
    fi
fi

# Paso 4: Información final
log "Proceso completado!"
success "El portfolio se desplegará automáticamente a GitHub Pages"
log "Puedes ver el progreso en: https://github.com/Maxs22/Portfolio/actions"
log "Una vez completado, tu portfolio estará disponible en: https://maxs22.github.io/Portfolio/"

echo ""
echo "📋 Resumen del proceso:"
echo "   • Cambios commiteados ✅"
echo "   • Push realizado a $CURRENT_BRANCH ✅"
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    echo "   • Pull Request creado ✅"
fi
echo "   • Deploy automático iniciado ✅"
echo ""
echo "🎉 ¡Tu portfolio se está desplegando!"
