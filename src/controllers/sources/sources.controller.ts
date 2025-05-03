import { NextApiRequest, NextApiResponse } from 'next';
import { SourcesService } from '../../sources/sources.service';

export class SourcesController {
  public static async getSources(req: NextApiRequest, res: NextApiResponse) {
    try {
      const sources = SourcesService.getSources();
      return res.status(200).json(sources);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener las fuentes' });
    }
  }
} 