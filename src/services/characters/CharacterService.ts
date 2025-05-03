import { Character } from '../../models/character.interface';
import { CharacterSource } from '../../models/character-source.interface';
import { SOURCE_POKEMON_ID, SOURCE_DISNEY_ID } from '../../constants/sources';
import { PokemonService } from './PokemonService';
import { DisneyService } from './DisneyService';

export class CharacterService {
  static async fetchCharacters(source: CharacterSource, limit: number): Promise<Character[]> {
    try {
      let characters: Character[] = [];

      switch (source.id) {
        case SOURCE_POKEMON_ID:
          characters = await PokemonService.fetchPokemonCharacters();
          break;
        case SOURCE_DISNEY_ID:
          characters = await DisneyService.fetchDisneyCharacters();
          break;
        default:
          throw new Error(`Fuente desconocida: ${source.nombre}`);
      }

      return this.getRandomCharacters(characters, limit);
    } catch (error) {
      console.error(`Error al obtener personajes de ${source.nombre}:`, error);
      return [];
    }
  }

  private static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  private static getRandomCharacters(characters: Character[], limit: number): Character[] {
    const shuffledCharacters = this.shuffleArray(characters);
    return shuffledCharacters.slice(0, limit);
  }
} 