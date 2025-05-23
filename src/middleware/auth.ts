import { NextApiRequest, NextApiResponse } from 'next';

export interface AuthenticatedRequest extends NextApiRequest {
  apiKey?: string;
}

export function withAuth(handler: Function) {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      // Manejo del método OPTIONS
      if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-api-key');
        return res.status(200).end(); // Responde con estado 200 OK
      }

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