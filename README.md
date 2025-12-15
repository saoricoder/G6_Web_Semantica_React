<div align="center">
    
## UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE  

</div>

<p align="center">
  <a href="https://www.espe.edu.ec" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_ESPE.png" width="200" alt="Logo ESPE">
  </a>
</p>

## Proyecto:
- Resolución de Ejercicios.
   
– Aplicación de Web Semántica (JSON-LD) en una API REST con Laravel.


## Arquitectura de software - Grupo 6  
## Integrantes:

- Victor Villamarín
- Betty Rodríguez

## 📚 Repositorio

**Frontend (React):** [G6_Web_Semantica_React](https://github.com/saoricoder/G6_Web_Semantica_React.git)

# 🌐 Web Semántica con React y Laravel

Aplicación React profesional que consume una API REST Laravel con soporte para JSON-LD y Web Semántica. Diseño responsivo, estilos modularizados con BEM, y componentes reutilizables.

**Versión:** 1.0.0  
**Estado:** ✅ Listo para Producción  
**Última Actualización:** 15 de diciembre de 2025

---

## 📖 GUÍA RÁPIDA - Despliegue Local

### **Requisitos Previos**

Verifica que tengas instalado:
- Node.js 14+
- npm 6+
- Git 2+
- **Backend Laravel en ejecución en `http://127.0.0.1:8000`**

### **Pasos de Despliegue**

#### **1️⃣ Clonar el repositorio**

```powershell
# Clonar desde GitHub
git clone https://github.com/saoricoder/G6_Web_Semantica_React.git frontend

# Ir a la carpeta
cd frontend
```

#### **2️⃣ Instalar dependencias**

```powershell
npm install
```

#### **3️⃣ Configurar variables de entorno (opcional)**

Crea un archivo `.env` en la raíz del proyecto:

```env
REACT_APP_API_URL=http://127.0.0.1:8000/api
```

Este valor ya está configurado por defecto en `ApiService.js`, pero puedes sobreescribirlo aquí.

#### **4️⃣ Iniciar el servidor de desarrollo**

```powershell
npm start
```

**Resultado esperado:**
```
Compiled successfully!
You can now view frontend in the browser.
  Local:   http://localhost:3000
```

Se abrirá automáticamente en tu navegador en `http://localhost:3000` ✅

---

### **Verificación de que Todo Funciona**

1. ✅ El navegador abre en `http://localhost:3000`
2. ✅ Se ven los botones (👨‍⚕️ Médicos, 🏥 Pacientes, 📋 Especialidades, 📅 Citas)
3. ✅ Al hacer clic en los botones, se carga data desde la API
4. ✅ Aparece el JSON completo en la sección "📊 Respuesta JSON"
5. ✅ Se visualiza el JSON-LD extraído en la sección "📋 JSON-LD Extraído"
6. ✅ No hay errores en la consola (F12 → Console)

---

### **URLs Principales**

| Recurso | URL | Descripción |
|---------|-----|-------------|
| **Frontend** | `http://localhost:3000` | Aplicación React |
| **Backend** | `http://127.0.0.1:8000` | Servidor Laravel |
| **API Médicos** | `http://127.0.0.1:8000/api/doctors` | Endpoint médicos |
| **API Pacientes** | `http://127.0.0.1:8000/api/patients` | Endpoint pacientes |
| **API Especialidades** | `http://127.0.0.1:8000/api/specialties` | Endpoint especialidades |
| **API Citas** | `http://127.0.0.1:8000/api/appointments` | Endpoint citas |

---
