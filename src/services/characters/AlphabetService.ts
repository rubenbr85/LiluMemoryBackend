import { Character } from '../../models/character.interface';
import { ALPHABET_CHARACTERS } from '../../constants/alphabetCharacters';

export class AlphabetService {
  public static getCharacters(): Character[] {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    return ALPHABET_CHARACTERS.map(character => ({
      ...character,
      imageUrl: `${baseUrl}${character.imageUrl}`
    }));
  }

  public static getCharacterById(id: number): Character | undefined {
    return this.getCharacters().find(character => character.id === id);
  }
}
