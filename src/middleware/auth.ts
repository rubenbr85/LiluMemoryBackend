import { NextApiRequest, NextApiResponse } from 'next';

export interface AuthenticatedRequest extends NextApiRequest {
  apiKey?: string;
}

export function withAuth(handler: Function) {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      const apiKey = req.headers['x-api-key'];

      if (!apiKey) {
        return res.status(401).json({ error: 'No se proporcionó API Key' });
      }

      // Verificar que la API Key coincida con la almacenada en las variables de entorno
      if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({ error: 'API Key inválida' });
      }

      // Añadir la API Key a la petición para uso posterior si es necesario
      req.apiKey = apiKey;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error: 'Error de autenticación' });
    }
  };
} 