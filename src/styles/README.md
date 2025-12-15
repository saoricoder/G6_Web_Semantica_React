# 📁 Estructura de Estilos - Organización CSS

## 🎯 Descripción General

Los estilos de la aplicación se han reorganizado en una estructura limpia y mantenible bajo la carpeta `src/styles/`:

```
src/styles/
├── componentes/          # Estilos de todos los componentes React
│   ├── App.css
│   ├── ApiTester.css
│   ├── DataViewer.css
│   ├── JsonLdViewer.css
│   ├── LoadingSpinner.css
│   ├── ErrorAlert.css
│   └── index.css         # Archivo central de importación
└── servicios/            # Estilos para servicios (futuro)
    └── index.css         # Archivo central de importación
```

---

## 📌 Estructura Detallada

### **1. Carpeta `componentes/`**

Contiene todos los estilos CSS relacionados con componentes React.

#### **App.css**
- Estilos globales de la aplicación
- Definición de colores, fuentes y variables globales
- Estructura general de la página (header, main, footer)
- Animaciones compartidas
- Scrollbars personalizados

#### **ApiTester.css**
- Estilos específicos del componente principal ApiTester
- Botones de endpoints
- Layout de secciones
- Estados activos/inactivos
- Responsive design

#### **DataViewer.css**
- Estilos para visualización genérica de datos JSON
- Formatos de código/pre
- Scrollbars específicos
- Colores y tipografía

#### **JsonLdViewer.css**
- Estilos especializados para JSON-LD
- Tablas de propiedades semánticas
- Visualización de código con sintaxis
- Gradientes y efectos visuales

#### **LoadingSpinner.css**
- Animaciones de carga
- Estilos de spinner
- Estados de espera

#### **ErrorAlert.css**
- Estilos para alertas de error
- Mensajes de ayuda
- Colores de advertencia
- Tipografía de error

#### **index.css**
- Archivo central que importa todos los estilos de componentes
- Facilita importación única en la aplicación principal

---

### **2. Carpeta `servicios/`**

Reservada para estilos relacionados con servicios (CSS-in-JS, temas globales, etc.).

#### **index.css**
- Archivo central para estilos de servicios
- Actualmente vacío, listo para expansión futura

---

## 🔗 Cómo Se Usan

### **En Componentes (Método Recomendado)**

```javascript
// ApiTester.js
import '../styles/componentes/ApiTester.css';

// DataViewer.js
import '../styles/componentes/DataViewer.css';

// ErrorAlert.js
import '../styles/componentes/ErrorAlert.css';
```

### **Alternativa: Importar Todo Centralizado**

Si quieres importar todos los estilos en un solo lugar:

```javascript
// En App.js o index.js
import './styles/componentes/index.css';
```

---

## ✅ Beneficios de Esta Organización

1. **Separación de Responsabilidades** - CSS separado de componentes
2. **Mantenibilidad** - Fácil localizar y editar estilos
3. **Escalabilidad** - Estructura preparada para crecimiento
4. **Claridad** - Estructura intuitiva y bien documentada
5. **Modularidad** - Cada componente con su propio CSS
6. **Performance** - Estilos optimizados por módulo

---

## 🚀 Métodos de Importación

### **Opción 1: Individual (Actual)**
```javascript
import '../styles/componentes/ApiTester.css';
```
✅ **Ventaja:** Claridad y código tree-shaking
❌ **Desventaja:** Múltiples imports

### **Opción 2: Centralizado**
```javascript
// En App.js
import './styles/componentes/index.css';
```
✅ **Ventaja:** Un solo import
❌ **Desventaja:** Todos los estilos siempre cargados

### **Opción 3: Con CSS Modules (Futuro)**
```javascript
import styles from '../styles/componentes/ApiTester.module.css';
```
✅ **Ventaja:** Evita conflictos de nombres
❌ **Desventaja:** Requiere cambios en BEM

---

## 📐 Metodología CSS

Todos los estilos siguen la metodología **BEM (Block Element Modifier)**:

```css
/* Block */
.api-tester { }

/* Element */
.api-tester__button { }

/* Modifier */
.api-tester__button--active { }
```

---

## 🎨 Paleta de Colores Global

Definida en `App.css`:

```css
--primary-color: #667eea;
--secondary-color: #764ba2;
--error-color: #ff6b6b;
--success-color: #51cf66;
--warning-color: #ffd43b;
--background-color: #fafafa;
--text-color: #333333;
```

---

## 📝 Ejemplo de Estructura Completa

### **Directorio Real**

```
frontend/src/
├── styles/
│   ├── componentes/
│   │   ├── App.css (110 líneas)
│   │   ├── ApiTester.css (100 líneas)
│   │   ├── DataViewer.css (50 líneas)
│   │   ├── JsonLdViewer.css (120 líneas)
│   │   ├── LoadingSpinner.css (30 líneas)
│   │   ├── ErrorAlert.css (80 líneas)
│   │   └── index.css (20 líneas)
│   └── servicios/
│       └── index.css (10 líneas)
├── components/
│   ├── ApiTester.js
│   ├── DataViewer.js
│   ├── JsonLdViewer.js
│   ├── LoadingSpinner.js
│   └── ErrorAlert.js
├── services/
│   └── ApiService.js
├── App.js
└── index.js
```

---

## 🔄 Migración Realizada

### **Antes**
```
frontend/src/
├── components/
│   ├── ApiTester.js
│   ├── ApiTester.css      ❌ Aquí
│   ├── DataViewer.js
│   ├── DataViewer.css     ❌ Aquí
│   └── ...
└── App.js
└── App.css               ❌ Aquí
```

### **Después**
```
frontend/src/
├── styles/
│   ├── componentes/
│   │   ├── ApiTester.css  ✅ Aquí
│   │   ├── DataViewer.css ✅ Aquí
│   │   └── ...
│   └── servicios/
├── components/
│   ├── ApiTester.js       (import actualizado)
│   ├── DataViewer.js      (import actualizado)
│   └── ...
└── App.js                 (import actualizado)
```

---

## 🛠️ Próximos Pasos Sugeridos

1. **CSS Variables** - Considerar extraer colores a variables CSS globales
2. **CSS Modules** - Migrar a módulos CSS para mayor seguridad
3. **Temas** - Crear carpeta `themes/` para temas personalizados
4. **Utilidades** - Carpeta `utils/` para estilos comunes reutilizables
5. **Documentación** - Mantener actualizado este README

---

## 📚 Referencias

- [BEM Methodology](http://getbem.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [CSS-in-JS](https://styled-components.com/)
- [Sassylation](https://sass-lang.com/)

---

**Última actualización:** 11 de diciembre de 2025  
**Estado:** ✅ Estructura completada y documentada
