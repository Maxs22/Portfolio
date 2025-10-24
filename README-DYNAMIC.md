# 🚀 Portfolio Dinámico con GitHub Sync

Tu portfolio ahora es completamente dinámico y se sincroniza automáticamente con GitHub. Todo lo que agregues a tus repositorios se mostrará automáticamente en tu portfolio.

## ✨ Características Dinámicas

### 🔄 Sincronización Automática
- **Proyectos**: Se muestran automáticamente desde tus repositorios de GitHub
- **Tech Stack**: Se genera dinámicamente basado en los lenguajes de tus repositorios
- **Estadísticas**: Número de repositorios, estrellas, forks, etc.
- **Actualización**: Cada 30 minutos automáticamente
- **Cache**: Datos guardados localmente para mejor rendimiento

### 📊 Datos que se Sincronizan
- ✅ Repositorios públicos
- ✅ Lenguajes de programación utilizados
- ✅ Número de estrellas y forks
- ✅ Fechas de creación y actualización
- ✅ Descripciones de proyectos
- ✅ Topics/tags de repositorios
- ✅ Enlaces a GitHub y páginas web
- ✅ Estadísticas del perfil

## 🛠️ Configuración

### 1. Instalación de Dependencias
```bash
npm install
```

### 2. Configuración de GitHub
El sistema usa la API pública de GitHub, no requiere tokens para repositorios públicos.

### 3. Personalización
Puedes modificar el usuario de GitHub en:
- `hooks/useGitHubSync.js` (línea 3)
- `components/DynamicGitHubProjects.js` (línea 4)
- `components/DynamicTechStack.js` (línea 3)

## 🎯 Cómo Funciona

### Proyectos Destacados
Los proyectos se muestran automáticamente basándose en:
- Repositorios con estrellas
- Repositorios que contengan palabras clave: "portfolio", "maximilian", "flutter", "app"
- Repositorios públicos y no archivados
- Ordenados por número de estrellas

### Tech Stack Dinámico
- Analiza todos los lenguajes de tus repositorios
- Cuenta la cantidad de código por lenguaje
- Muestra los 20 lenguajes más utilizados
- Colores automáticos basados en el lenguaje

### Sincronización Inteligente
- **Cache**: Los datos se guardan localmente
- **Auto-sync**: Se actualiza cada 30 minutos
- **Manual**: Botón de sincronización manual
- **Offline**: Funciona con datos en cache si no hay conexión

## 🎨 Personalización Avanzada

### Modificar Criterios de Proyectos Destacados
En `hooks/useGitHubSync.js`, función `getFeaturedProjects()`:

```javascript
const getFeaturedProjects = useCallback(() => {
  return repositories
    .filter(repo => !repo.private && !repo.archived)
    .filter(repo => 
      repo.stars > 0 || 
      repo.name.toLowerCase().includes('portfolio') || 
      repo.name.toLowerCase().includes('maximilian') ||
      repo.name.toLowerCase().includes('flutter') ||
      repo.name.toLowerCase().includes('app')
      // Agregar más criterios aquí
    )
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 6); // Cambiar número de proyectos mostrados
}, [repositories]);
```

### Agregar Nuevos Lenguajes al Tech Stack
En `components/DynamicTechStack.js`, función `getTechIcon()`:

```javascript
const icons = {
  'JavaScript': 'JS',
  'TypeScript': 'TS',
  'TuLenguaje': 'TL', // Agregar aquí
  // ...
};
```

### Modificar Colores de Lenguajes
En `components/DynamicTechStack.js`, función `getTechColor()`:

```javascript
const colors = {
  'JavaScript': '#f7df1e',
  'TuLenguaje': '#tu-color', // Agregar aquí
  // ...
};
```

## 🔧 Funciones Disponibles

### Hook `useGitHubSync`
```javascript
const {
  repositories,        // Todos los repositorios
  profile,            // Datos del perfil
  loading,            // Estado de carga
  error,              // Errores
  lastSync,           // Última sincronización
  syncNow,            // Función para sincronizar manualmente
  getFeaturedProjects, // Proyectos destacados
  getTechStack,       // Lenguajes más utilizados
  getRecentActivity,  // Actividad reciente
  isStale             // Si los datos están desactualizados
} = useGitHubSync('Maxs22');
```

## 📱 Responsive Design
- ✅ Móviles
- ✅ Tablets
- ✅ Desktop
- ✅ Animaciones suaves
- ✅ Efectos glassmorphism

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
npm run export
# Subir carpeta 'out' a Netlify
```

### GitHub Pages
```bash
npm run build
npm run export
# Subir carpeta 'out' a la rama gh-pages
```

## 🔍 Monitoreo

### Verificar Sincronización
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Application" > "Local Storage"
3. Busca la clave "github_data"
4. Verifica la fecha de "lastSync"

### Debug
```javascript
// En la consola del navegador
console.log(localStorage.getItem('github_data'));
```

## 🎉 Resultado

Tu portfolio ahora es:
- ✅ **Completamente dinámico**
- ✅ **Se actualiza automáticamente**
- ✅ **Muestra tus proyectos reales**
- ✅ **Tech stack basado en tu código**
- ✅ **Estadísticas en tiempo real**
- ✅ **Diseño futurista mantenido**

¡Cada vez que agregues un nuevo repositorio a GitHub, aparecerá automáticamente en tu portfolio!
