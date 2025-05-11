import { NextApiRequest, NextApiResponse } from 'next';
import { DifficultyService } from '../../services/difficulty/difficulty.service';

export class DifficultyController {
  public static async getDifficultys(req: NextApiRequest, res: NextApiResponse) {
    try {
      const difficultys = DifficultyService.getDifficultys();
      return res.status(200).json(difficultys);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener las dificultades' });
    }
  }
} 