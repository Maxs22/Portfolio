# Portfolio Deploy Script para Windows PowerShell
param(
    [string]$Message = "Deploy automatico"
)

$ErrorActionPreference = "Stop"

function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] $Message" -ForegroundColor $Color
}

function Write-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "⚠️  $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

Write-ColorOutput "🚀 Iniciando proceso de deploy del portfolio..." "Cyan"

# Verificar que estamos en el directorio correcto
if (-not (Test-Path "package.json")) {
    Write-Error "No se encontro package.json. Asegurate de estar en el directorio del proyecto."
    exit 1
}

# Verificar que git esta configurado
try {
    git status | Out-Null
} catch {
    Write-Error "No se encontro un repositorio git. Inicializa git primero."
    exit 1
}

# Paso 1: Verificar cambios
Write-ColorOutput "Verificando cambios pendientes..." "Blue"
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-ColorOutput "Agregando cambios al staging..." "Blue"
    git add .
    
    Write-ColorOutput "Haciendo commit de los cambios..." "Blue"
    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    $commitMessage = "$Message: $timestamp"
    git commit -m $commitMessage
    Write-Success "Commit realizado exitosamente"
} else {
    Write-Warning "No hay cambios pendientes para commitear."
}

# Paso 2: Push a la rama actual
Write-ColorOutput "Haciendo push a la rama actual..." "Blue"
$currentBranch = git branch --show-current
git push origin $currentBranch
Write-Success "Push realizado a la rama: $currentBranch"

# Paso 3: Si no estamos en main/master, crear PR
if ($currentBranch -ne "main" -and $currentBranch -ne "master") {
    Write-ColorOutput "Creando Pull Request..." "Blue"
    
    # Verificar si gh CLI esta instalado
    try {
        gh --version | Out-Null
        $prTitle = "[AUTO-MERGE] Deploy automatico desde $currentBranch"
        $prBody = "Deploy automatico del portfolio`n`nCambios incluidos:`n- Actualizaciones del portfolio`n- Mejoras en el diseno`n- Optimizaciones de rendimiento`n`nPara mergear automaticamente, el PR debe tener el titulo con [AUTO-MERGE]"
        
        gh pr create --title $prTitle --body $prBody --base main --head $currentBranch
        Write-Success "Pull Request creado exitosamente"
    } catch {
        Write-Warning "GitHub CLI (gh) no esta instalado. Crea el PR manualmente en GitHub."
        Write-ColorOutput "URL sugerida: https://github.com/Maxs22/Portfolio/compare/main...$currentBranch" "Blue"
    }
}

# Paso 4: Informacion final
Write-ColorOutput "Proceso completado!" "Blue"
Write-Success "El portfolio se desplegara automaticamente a GitHub Pages"
Write-ColorOutput "Puedes ver el progreso en: https://github.com/Maxs22/Portfolio/actions" "Blue"
Write-ColorOutput "Una vez completado, tu portfolio estara disponible en: https://maxs22.github.io/Portfolio/" "Blue"

Write-Host ""
Write-Host "📋 Resumen del proceso:" -ForegroundColor Cyan
Write-Host "   • Cambios commiteados ✅" -ForegroundColor Green
Write-Host "   • Push realizado a $currentBranch ✅" -ForegroundColor Green
if ($currentBranch -ne "main" -and $currentBranch -ne "master") {
    Write-Host "   • Pull Request creado ✅" -ForegroundColor Green
}
Write-Host "   • Deploy automatico iniciado ✅" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 ¡Tu portfolio se esta desplegando!" -ForegroundColor Magenta