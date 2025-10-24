# Portfolio - Maximiliano Mendez

Un portfolio moderno y responsive construido con Next.js 15 y React 18, diseñado para mostrar proyectos y habilidades de desarrollo front-end.

## 🚀 Características

- **Next.js 15** - Framework React de última generación
- **React 18** - Biblioteca de UI con las últimas características
- **TypeScript** - Tipado estático para mejor desarrollo
- **Fuentes Modernas** - Inter, Manrope, Clash Display, Playfair Display
- **Diseño Responsive** - Optimizado para todos los dispositivos
- **ESLint & Prettier** - Código limpio y consistente
- **Animaciones** - Efectos visuales modernos

## 🛠️ Tecnologías

- **Frontend**: Next.js, React, TypeScript
- **Mobile**: Flutter, Dart
- **Estilos**: CSS Modules, CSS Custom Properties
- **Iconos**: FontAwesome 6
- **Fuentes**: Google Fonts (Inter, Manrope, Clash Display, Playfair Display)
- **Desarrollo**: ESLint, Prettier, Node.js

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Maxs22/Portfolio.git

# Navegar al directorio
cd Portfolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecuta el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run start        # Ejecuta la aplicación en producción
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Corrige errores de ESLint automáticamente
```

## 📁 Estructura del Proyecto

```
Portfolio/
├── components/          # Componentes reutilizables
│   ├── layout/         # Componentes de layout
│   └── linkIcon/       # Componentes de iconos
├── pages/              # Páginas de la aplicación
│   ├── about/          # Página sobre mí
│   ├── contact/        # Página de contacto
│   └── work/           # Página de proyectos
├── styles/             # Estilos CSS
│   ├── globals.css     # Estilos globales
│   └── utils.module.css # Utilidades CSS
├── public/             # Archivos estáticos
└── README.md          # Documentación
```

## 🎨 Diseño

El portfolio utiliza un diseño moderno con:
- **Paleta de colores**: Tonos oscuros con acentos de color
- **Tipografía**: Fuentes modernas y legibles
- **Layout**: Diseño responsive y centrado
- **Animaciones**: Efectos suaves y profesionales

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` para configuraciones locales:

```env
# Configuraciones específicas del entorno
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### ESLint

El proyecto incluye configuración de ESLint para Next.js con reglas personalizadas.

### Prettier

Configuración de Prettier para formateo automático del código.

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify

```bash
# Construir para producción
npm run build

# Desplegar la carpeta 'out'
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Maximiliano Mendez**
- **Desarrollador Full-Stack** especializado en React, Next.js y Flutter
- **GitHub**: [@Maxs22](https://github.com/Maxs22)
- **LinkedIn**: [Maximiliano Mendez](https://linkedin.com/in/maximiliano-mendez)
- **Tecnologías**: React, Next.js, Flutter, Dart, TypeScript, CSS

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

⭐ Si te gusta este proyecto, ¡dale una estrella!