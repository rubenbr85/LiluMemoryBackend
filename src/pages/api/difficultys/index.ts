import { NextApiResponse } from 'next';
import { withAuth, AuthenticatedRequest } from '../../../middleware/auth';
import { DifficultyController } from '../../../controllers/difficulty/difficulty.controller';

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  return DifficultyController.getDifficultys(req, res);
}

export default withAuth(handler); 