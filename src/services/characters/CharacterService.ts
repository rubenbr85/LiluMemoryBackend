import { Character } from '../../models/character.interface';
import { CharacterSource } from '../../models/character-source.interface';
import { SOURCE_POKEMON_ID, SOURCE_DISNEY_ID, SOURCE_PATRULLA_ID, SOURCE_ALPHABET_ID } from '../../constants/sources';
import { PokemonService } from './PokemonService';
import { DisneyService } from './DisneyService';
import { PatrullaService } from './PatrullaService';
import { AlphabetService } from './AlphabetService';
import { DifficultyService } from '../difficulty/difficulty.service';

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
        case SOURCE_PATRULLA_ID:
          characters = PatrullaService.getCharacters();
          break;
        case SOURCE_ALPHABET_ID:
          characters = AlphabetService.getCharacters();
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

  static async fetchCharactersByDifficultyId(source: CharacterSource, difficultyId: number): Promise<Character[]> {
    try {
      const difficulty = DifficultyService.getDifficultyById(difficultyId);
      if (!difficulty) {
        throw new Error(`Dificultad no encontrada para ID: ${difficultyId}`);
      }

      return await this.fetchCharacters(source, difficulty.numberCharacter);
    } catch (error) {
      console.error(`Error al obtener personajes por ID de dificultad ${difficultyId}:`, error);
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