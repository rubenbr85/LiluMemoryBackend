import { NextApiRequest, NextApiResponse } from 'next';
import { CharacterService } from '../../services/characters/CharacterService';
import { SourcesService } from '../../services/sources/sources.service';

export class CharactersController {
  public static async getCharacters(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { sourceId, limit = 10 } = req.query;
      
      if (!sourceId || typeof sourceId !== 'string') {
        return res.status(400).json({ error: 'Se requiere especificar el ID de la fuente' });
      }

      const sources = SourcesService.getSources();
      const source = sources.find(s => s.id === Number(sourceId));

      if (!source) {
        return res.status(404).json({ error: 'Fuente no encontrada' });
      }

      const characters = await CharacterService.fetchCharacters(source, Number(limit));
      
      return res.status(200).json(characters);
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      return res.status(500).json({ error: 'Error al obtener los personajes' });
    }
  }
} 