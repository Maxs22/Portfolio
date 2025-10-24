# 🚀 Portfolio - Deploy Automatizado

Este portfolio está configurado para deploy automático a GitHub Pages usando GitHub Actions.

## 🎯 Flujo de Deploy Automatizado

### 1. **Deploy Automático con GitHub Actions**
- Cada push a `main`, `master` o `feature/seo-automation` activa el deploy
- El workflow construye el proyecto y lo despliega a GitHub Pages
- URL del portfolio: `https://maxs22.github.io/Portfolio/`

### 2. **Scripts de Deploy Local**

#### 🪟 Windows (PowerShell)
```bash
# Deploy básico
npm run deploy

# Deploy con mensaje personalizado
npm run deploy:auto

# O ejecutar directamente
powershell -ExecutionPolicy Bypass -File ./deploy.ps1
```

#### 🐧 Linux/Mac (Bash)
```bash
# Ejecutar script de deploy
chmod +x deploy.sh
./deploy.sh
```

### 3. **Proceso Automatizado**

El script de deploy realiza automáticamente:

1. ✅ **Verifica cambios** pendientes
2. ✅ **Agrega archivos** al staging
3. ✅ **Hace commit** con timestamp
4. ✅ **Push** a la rama actual
5. ✅ **Crea Pull Request** (si no estás en main)
6. ✅ **Activa deploy** automático

### 4. **Auto-merge de Pull Requests**

Para mergear automáticamente un PR:
- El título debe contener `[AUTO-MERGE]`
- Solo funciona para el usuario `Maxs22`
- El PR debe estar limpio y sin conflictos

### 5. **Configuración de GitHub Pages**

El proyecto está configurado con:
- **Base Path**: `/Portfolio`
- **Asset Prefix**: `/Portfolio`
- **Output**: `export` (estático)
- **Trailing Slash**: `true`

### 6. **Workflows de GitHub Actions**

#### 🚀 Deploy Workflow (`.github/workflows/deploy.yml`)
- Se ejecuta en push a ramas principales
- Construye el proyecto con Next.js
- Despliega a GitHub Pages
- Incluye linting automático

#### 🔄 Auto-merge Workflow (`.github/workflows/auto-merge.yml`)
- Mergea automáticamente PRs con `[AUTO-MERGE]`
- Solo para el usuario autorizado
- Verifica que el PR esté limpio

### 7. **Comandos Útiles**

```bash
# Desarrollo local
npm run dev

# Build local
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Deploy completo
npm run deploy
```

### 8. **URLs Importantes**

- **Portfolio**: https://maxs22.github.io/Portfolio/
- **GitHub Actions**: https://github.com/Maxs22/Portfolio/actions
- **Repositorio**: https://github.com/Maxs22/Portfolio

### 9. **Troubleshooting**

#### ❌ Error de permisos en PowerShell
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### ❌ GitHub CLI no instalado
```bash
# Windows (Chocolatey)
choco install gh

# Windows (Scoop)
scoop install gh

# Linux/Mac
brew install gh
```

#### ❌ Build falla por linting
```bash
npm run lint -- --fix
```

### 10. **Estructura del Proyecto**

```
Portfolio/
├── .github/workflows/     # GitHub Actions
├── public/               # Archivos estáticos
├── pages/               # Páginas de Next.js
├── components/          # Componentes React
├── deploy.ps1          # Script de deploy Windows
├── deploy.sh           # Script de deploy Linux/Mac
└── next.config.js      # Configuración Next.js
```

---

## 🎉 ¡Listo para Deploy!

Con esta configuración, cada vez que hagas cambios y ejecutes `npm run deploy`, tu portfolio se actualizará automáticamente en GitHub Pages.

**Flujo recomendado:**
1. Hacer cambios en el código
2. Ejecutar `npm run deploy`
3. Esperar a que GitHub Actions complete el deploy
4. ¡Tu portfolio estará actualizado! 🚀
