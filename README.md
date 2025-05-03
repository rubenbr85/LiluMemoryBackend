# Lilu Memory Backend

Este es un backend desarrollado con Next.js que proporciona una API REST con autenticación mediante API Key. El proyecto está diseñado para gestionar recuerdos y memorias de manera segura y eficiente.

## Requisitos Previos

- Node.js (versión recomendada: 18.x o superior)
- npm o yarn
- MongoDB (versión 4.4 o superior)

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
MONGODB_URI=tu_uri_de_mongodb
```

## Estructura del Proyecto

```
src/
  ├── app/
  │   ├── api/         # Endpoints de la API
  │   │   ├── memories/    # Endpoints relacionados con memorias
  │   │   └── users/       # Endpoints relacionados con usuarios
  │   └── ...
  ├── lib/
  │   ├── db/         # Configuración y utilidades de base de datos
  │   └── utils/      # Utilidades generales
  ├── middleware/
  │   └── auth.ts     # Middleware de autenticación
  └── types/          # Definiciones de tipos TypeScript
```

## Endpoints Disponibles

### Memorias
- `GET /api/memories` - Obtener todas las memorias
- `GET /api/memories/:id` - Obtener una memoria específica
- `POST /api/memories` - Crear una nueva memoria
- `PUT /api/memories/:id` - Actualizar una memoria existente
- `DELETE /api/memories/:id` - Eliminar una memoria

### Usuarios
- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener un usuario específico
- `POST /api/users` - Crear un nuevo usuario
- `PUT /api/users/:id` - Actualizar un usuario existente
- `DELETE /api/users/:id` - Eliminar un usuario

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

El servidor se iniciará en `http://localhost:3000`

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

## Contribución

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto

[Información de contacto del mantenedor del proyecto] 