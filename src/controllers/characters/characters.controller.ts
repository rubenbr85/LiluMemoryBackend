import { NextApiRequest, NextApiResponse } from 'next';
import { CharacterService } from '../../services/characters/CharacterService';
import { SourcesService } from '../../services/sources/sources.service';

export class CharactersController {
  public static async getCharacters(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { sourceId, limit, difficultyId } = req.query;
      
      if (!sourceId || typeof sourceId !== 'string') {
        return res.status(400).json({ error: 'Se requiere especificar el ID de la fuente' });
      }

      const source = SourcesService.getSourceById(Number(sourceId));

      if (!source) {
        return res.status(404).json({ error: 'Fuente no encontrada' });
      }

      let characters;
      if (difficultyId) {
        characters = await CharacterService.fetchCharactersByDifficultyId(source, Number(difficultyId));
      } else {
        characters = await CharacterService.fetchCharacters(source, Number(limit));
      }
      
      return res.status(200).json(characters);
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      return res.status(500).json({ error: 'Error al obtener los personajes' });
    }
  }
} 