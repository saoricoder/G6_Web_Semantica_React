# 🌐 Web Semántica con React y Laravel

Aplicación React profesional que consume una API REST Laravel con soporte para JSON-LD y Web Semántica. Diseño responsivo, estilos modularizados con BEM, y componentes reutilizables.

**Versión:** 1.0.0  
**Estado:** ✅ Listo para Producción  
**Última Actualización:** 11 de diciembre de 2025


## Proyecto:
-Resolución de Ejercicios – Aplicación de Web Semántica (JSON-LD) en una API REST con Laravel

## Grupo #: 6
## Integrantes:

- [Victor Villamarín](#integrantes)
- [Betty Rodríguez](#integrantes)

## 📋 Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Despliegue Local](#despliegue-local)
- [Construcción para Producción](#construcción-para-producción)
- [Despliegue en Producción](#despliegue-en-producción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Configuración](#configuración)
- [Solución de Problemas](#solución-de-problemas)

---

## ✨ Características

✅ **Consumo de API REST** - Integración con Laravel backend  
✅ **JSON-LD & Web Semántica** - Datos estructurados con Schema.org  
✅ **Componentes Reutilizables** - 6 componentes especializados  
✅ **Estilos Modularizados** - BEM methodology en 510+ líneas CSS  
✅ **Manejo Robusto de Errores** - Alertas útiles para el usuario  
✅ **Responsive Design** - Funciona perfectamente en móviles  
✅ **Animaciones CSS Puras** - Sin dependencias adicionales  
✅ **Documentación Completa** - Guías para desarrolladores  

---

## 🔧 Requisitos

Antes de comenzar, asegúrate de tener instalados:

| Requisito | Versión Mínima | Verificar |
|-----------|-----------------|-----------|
| **Node.js** | 14.0.0+ | `node --version` |
| **npm** | 6.0.0+ | `npm --version` |
| **Git** | 2.0.0+ | `git --version` |
| **Laravel** | 11.0+ | Backend en ejecución |

### Verificar instalación:
```bash
node --version          # v18.0.0 o superior
npm --version           # 9.0.0 o superior
```

---

## 📦 Instalación

### 1. Clonar o descargar el proyecto

```bash
# Si tienes acceso a Git
git clone <repository-url>
cd pry_web_semantica/frontend

# O simplemente navega a la carpeta frontend
cd "c:\ARQUITECTURA SOFTWARE\pry_web_semantica\frontend"
```

### 2. Instalar dependencias

```bash
# Instalar todas las dependencias de npm
npm install

# O con yarn si lo prefieres
yarn install
```

### 3. Configurar variables de entorno

Crear archivo `.env` en la raíz del proyecto frontend:

```bash
# .env
REACT_APP_API_URL=http://127.0.0.1:8000/api
REACT_APP_ENVIRONMENT=development
```

> ⚠️ **Importante:** Cambiar `REACT_APP_API_URL` según tu configuración de Laravel

---

## 🚀 Despliegue Local

### Opción 1: Desarrollo (Recomendado)

```bash
# Iniciar servidor de desarrollo
npm start
```

**Acceso:** http://localhost:3000

**Características:**
- ✅ Hot reload automático
- ✅ Error overlay en navegador
- ✅ DevTools de React habilitado
- ✅ Logs detallados en consola

### Opción 2: Producción Local

```bash
# Construir para producción
npm run build

# Servir la compilación localmente
npx serve -s build
```

**Acceso:** http://localhost:3000

---

## 🏗️ Construcción para Producción

### Paso 1: Crear build optimizado

```bash
npm run build
```

**Resultado:**
- Carpeta `build/` creada
- Archivos minificados
- Optimización de imágenes
- CSS bundleado

### Paso 2: Verificar el build

```bash
# Ver tamaño del build
npm run build

# Instalar y servir localmente para probar
npm install -g serve
serve -s build
```

### Archivos generados:

```
build/
├── index.html           (Entrada principal)
├── favicon.ico          (Icono)
├── manifest.json        (PWA)
├── robots.txt           (SEO)
└── static/
    ├── css/             (Estilos compilados)
    ├── js/              (JavaScript bundleado)
    └── media/           (Imágenes y recursos)
```

---

## 🌐 Despliegue en Producción

### Opción A: Vercel (Recomendado)

#### 1. Preparar el proyecto

```bash
npm run build
git add .
git commit -m "Preparado para despliegue en Vercel"
git push origin main
```

#### 2. Conectar con Vercel

```bash
# Instalar CLI de Vercel
npm install -g vercel

# Desplegar
vercel
```

#### 3. Configurar variables de entorno

En panel de Vercel:
```
REACT_APP_API_URL = https://tu-laravel-api.com/api
```

**Ventajas:**
- Despliegue automático con Git
- CDN global
- HTTPS gratis
- Build automático

---

### Opción B: Netlify

#### 1. Preparar el proyecto

```bash
npm run build
```

#### 2. Opción Manual (UI)

- Visita [netlify.com](https://netlify.com)
- Conecta tu repositorio Git
- Configura:
  - **Build command:** `npm run build`
  - **Publish directory:** `build`
  - **Node version:** 18.x

#### 3. Opción CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Ventajas:**
- Interfaz intuitiva
- Redirecciones automáticas
- Funciones serverless incluidas

---

### Opción C: Servidor Propio (Apache/Nginx)

#### Con Apache:

```bash
npm run build
```

1. Copiar contenido de `build/` a `/var/www/html/`
2. Crear `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Con Nginx:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /var/www/html;
    
    location / {
        try_files $uri /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

### Opción D: Docker

#### 1. Crear Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
```

#### 2. Crear docker-compose.yml

```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://backend:8000/api
    depends_on:
      - backend
  
  backend:
    image: laravel:latest
    ports:
      - "8000:8000"
```

#### 3. Desplegar

```bash
docker-compose up -d
```

---

## 📂 Estructura del Proyecto

```
frontend/
├── public/                      # Archivos estáticos
│   ├── index.html              (Punto de entrada HTML)
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
│
├── src/                         # Código fuente
│   ├── styles/                 (Estilos organizados)
│   │   ├── componentes/        (CSS de componentes)
│   │   │   ├── App.css
│   │   │   ├── ApiTester.css
│   │   │   ├── DataViewer.css
│   │   │   ├── JsonLdViewer.css
│   │   │   ├── LoadingSpinner.css
│   │   │   ├── ErrorAlert.css
│   │   │   └── index.css
│   │   ├── servicios/          (CSS de servicios)
│   │   └── README.md
│   │
│   ├── components/             (Componentes React)
│   │   ├── ApiTester.js        (Orquestador principal)
│   │   ├── DataViewer.js       (Mostrador de datos)
│   │   ├── JsonLdViewer.js     (Visualizador JSON-LD)
│   │   ├── LoadingSpinner.js   (Spinner)
│   │   └── ErrorAlert.js       (Alertas)
│   │
│   ├── services/               (Servicios/APIs)
│   │   └── ApiService.js       (Cliente HTTP)
│   │
│   ├── App.js                  (Componente raíz)
│   ├── index.js                (Punto de entrada JS)
│   └── index.css               (Estilos globales)
│
├── build/                       (Generado por `npm run build`)
│   ├── index.html
│   ├── static/
│   └── ...
│
├── node_modules/               (Dependencias)
├── package.json                (Configuración npm)
├── package-lock.json           (Lock de versiones)
├── .env                        (Variables de entorno)
├── .env.local                  (Opcional - local)
└── README.md                   (Este archivo)
```

---

## 📜 Scripts Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start

# Ejecutar tests
npm test

# Ver cobertura de tests
npm test -- --coverage
```

### Construcción

```bash
# Crear build para producción
npm run build

# Analizar tamaño del bundle
npm run build -- --stats
```

### Herramientas

```bash
# Verificar dependencias obsoletas
npm outdated

# Actualizar dependencias
npm update

# Auditar seguridad
npm audit

# Reparar vulnerabilidades automáticamente
npm audit fix
```

---

## ⚙️ Configuración

### Variables de Entorno

Crear `.env` en la raíz:

```env
# API Configuration
REACT_APP_API_URL=http://127.0.0.1:8000/api
REACT_APP_API_TIMEOUT=30000

# Environment
REACT_APP_ENVIRONMENT=development
REACT_APP_DEBUG=true

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=false
REACT_APP_ENABLE_CACHE=true
```

### Para Producción (`.env.production`)

```env
REACT_APP_API_URL=https://api.tudominio.com
REACT_APP_ENVIRONMENT=production
REACT_APP_DEBUG=false
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_ENABLE_CACHE=true
```

---

## 🔗 Integración con Laravel

### 1. Backend debe estar ejecutándose

```bash
# En la carpeta Backend
cd ../Backend
php artisan serve
```

### 2. Configurar CORS en Laravel

Archivo: `Backend/config/cors.php`

```php
'allowed_origins' => [
    'http://localhost:3000',
    'https://tudominio.com',
],
```

### 3. Verificar endpoints disponibles

```bash
# En Laravel
php artisan route:list | grep api
```

Endpoints esperados:
- `GET /api/doctors`
- `GET /api/patients`
- `GET /api/specialties`
- `GET /api/appointments`

---

## 🐛 Solución de Problemas

### Error: CORS (Cross-Origin)

**Síntoma:** `Access to XMLHttpRequest blocked by CORS policy`

**Solución:**
```bash
# 1. Verificar que Laravel está ejecutándose
php artisan serve

# 2. Verificar CORS en config/cors.php
# 3. Agregar en .env de React:
REACT_APP_API_URL=http://127.0.0.1:8000/api

# 4. Reiniciar servidor React
npm start
```

---

### Error: API no responde

**Síntoma:** `Network Error` en consola

**Solución:**
```bash
# 1. Verificar que Laravel está corriendo
# 2. Verificar URL en src/services/ApiService.js
# 3. Revisar logs de Laravel:
tail -f storage/logs/laravel.log
```

---

### Error: Puerto 3000 en uso

**Síntoma:** `Port 3000 is already in use`

**Solución:**
```bash
# Opción 1: Usar otro puerto
PORT=3001 npm start

# Opción 2: Matar proceso en puerto 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

## 📚 Documentación Adicional

Consulta estos archivos para más información:

| Archivo | Descripción |
|---------|-------------|
| [ESTRUCTURA_MEJORADA.md](./ESTRUCTURA_MEJORADA.md) | Arquitectura completa |
| [CAMBIOS_ESTRUCTURA_ESTILOS.md](./CAMBIOS_ESTRUCTURA_ESTILOS.md) | Reorganización CSS |
| [src/styles/README.md](./src/styles/README.md) | Estructura de estilos |

---

## ✅ Checklist Pre-Despliegue

- [ ] Instalar dependencias: `npm install`
- [ ] Crear archivo `.env` con variables correctas
- [ ] Verificar que Laravel está ejecutándose
- [ ] Probar localmente: `npm start`
- [ ] Construir para producción: `npm run build`
- [ ] Probar build localmente: `serve -s build`
- [ ] Actualizar URL de API para producción
- [ ] Desplegar a servidor/plataforma elegida
- [ ] Verificar en producción

---

**Última Actualización:** 11 de diciembre de 2025  
**Versión:** 1.0.0  
**Estado:** ✅ Listo para Producción
