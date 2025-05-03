import axios from 'axios';
import { DISNEY_API_URL } from '../../constants/api';
import { DisneyCharacter } from '../../models/disney-character.model';

export class DisneyService {
  static async fetchDisneyCharacters(): Promise<DisneyCharacter[]> {
    try {
      const response = await axios.get(DISNEY_API_URL);
      return response.data.data.map((character: any) => new DisneyCharacter(
        parseInt(character._id),
        character.name,
        character.imageUrl || 'https://via.placeholder.com/150?text=Disney',
        character.films || [],
        character.tvShows || []
      ));
    } catch (error) {
      console.error('Error al obtener personajes de Disney:', error);
      return [];
    }
  }
} 