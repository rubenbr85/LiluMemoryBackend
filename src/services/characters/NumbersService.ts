import { Character } from '../../models/character.interface';
import { NUMBER_CHARACTERS } from '../../constants/numberCharacters';

export class NumbersService {
  public static getCharacters(): Character[] {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    return NUMBER_CHARACTERS.map(character => ({
      ...character,
      imageUrl: `${baseUrl}${character.imageUrl}`
    }));
  }

  public static getCharacterById(id: number): Character | undefined {
    return this.getCharacters().find(character => character.id === id);
  }
} 