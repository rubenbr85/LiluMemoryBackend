import { NextApiResponse } from 'next';
import { withAuth, AuthenticatedRequest } from '../../../middleware/auth';
import { CharactersController } from '../../../controllers/characters/characters.controller';

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  return CharactersController.getCharacters(req, res);
}

export default withAuth(handler); 