import axios from 'axios';
import { RickAndMortyCharacter } from '../../models/rick-and-morty-character.model';

export class RickAndMortyService {
  static async fetchRickAndMortyCharacters(): Promise<RickAndMortyCharacter[]> {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      const characters = response.data.results;

      return characters.map((character: any) => new RickAndMortyCharacter(
        character.id,
        character.name,
        character.image,
        character.status,
        character.species,
        character.type,
        character.gender
      ));
    } catch (error) {
      console.error('Error al obtener personajes de Rick and Morty:', error);
      return [];
    }
  }
} 