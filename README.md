# Lilu Memory Backend

Este es un backend desarrollado con Next.js que proporciona una API REST con autenticación mediante API Key.

## Requisitos Previos

- Node.js (versión recomendada: 18.x o superior)
- npm o yarn

## Configuración del Entorno

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd LiluMemoryBackend
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
API_KEY=tu_api_key_secreta
```

## Estructura del Proyecto

```
src/
  ├── middleware/
  │   └── auth.ts      # Middleware de autenticación
  └── ...
```

## Autenticación

El backend utiliza autenticación mediante API Key. Para realizar peticiones a la API, debes incluir la API Key en el header `x-api-key` de tus peticiones HTTP.

Ejemplo de uso:
```bash
curl -H "x-api-key: tu_api_key" http://tu-dominio/api/endpoint
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

## Producción

Para construir la aplicación para producción:

```bash
npm run build
# o
yarn build
```

Para iniciar la aplicación en producción:

```bash
npm start
# o
yarn start
```

## Licencia

[Especificar la licencia del proyecto]

## Contacto

[Información de contacto del mantenedor del proyecto] 