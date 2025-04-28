import { NextApiResponse } from 'next';
import { withAuth, AuthenticatedRequest } from '../../../middleware/auth';

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  // Aquí puedes acceder a req.apiKey si necesitas la API Key
  return res.status(200).json({
    message: 'Endpoint protegido accedido correctamente',
    apiKey: req.apiKey
  });
}

export default withAuth(handler); 