import { Character } from '../../models/character.interface';
import { PATRULLA_CHARACTERS } from '../../constants/patrullaCharacters';

export class PatrullaService {
  public static getCharacters(): Character[] {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    return PATRULLA_CHARACTERS.map(character => ({
      ...character,
      imageUrl: `${baseUrl}${character.imageUrl}`
    }));
  }

  public static getCharacterById(id: number): Character | undefined {
    return this.getCharacters().find(character => character.id === id);
  }
}
