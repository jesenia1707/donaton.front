# Frontend Donatón

## Descripción

Frontend desarrollado en React para la plataforma Donatón.

Permite a los usuarios registrarse, iniciar sesión, gestionar donaciones, consultar historial y realizar seguimiento de las entregas.

## Tecnologías Utilizadas

* React
* Vite
* JavaScript
* CSS
* React Router DOM

## Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

Instalar dependencias:

```bash
npm install
```

## Ejecución

Iniciar la aplicación:

```bash
npm run dev
```

## Puerto por defecto

```text
http://localhost:5173
```

## Funcionalidades

### Donantes

* Inicio de sesión
* Registro de donaciones
* Consulta de historial
* Seguimiento de donaciones

### Administradores

* Gestión de usuarios
* Gestión de donaciones
* Visualización de información del sistema

### Voluntarios

* Consulta de entregas asignadas
* Seguimiento de donaciones

## Estructura del Proyecto

```text
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── App.jsx
 └── main.jsx

public/
```

## Dependencias Principales

* react
* react-dom
* react-router-dom
* vite

## Comunicación con Backend

El frontend consume los siguientes servicios:

* BFF
* Usuarios
* Donaciones
* Logística

mediante API REST.

## Despliegue

La aplicación se encuentra containerizada mediante Docker y desplegada en Kubernetes.

## Proyecto

Donatón – Plataforma de Gestión y Coordinación de Ayuda Humanitaria.
