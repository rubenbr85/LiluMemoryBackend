import { CharacterSource } from '../../models/character-source.interface';
import { SOURCES } from '../../constants/sources';

export class SourcesService {
  public static getSources(): CharacterSource[] {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    return SOURCES.map(source => ({
      ...source,
      imageMenu: `${baseUrl}${source.imageMenu}`
    })).sort((a, b) => a.orden - b.orden);
  }

  public static getSourceById(id: Number): CharacterSource | undefined {
    return this.getSources().find(source => source.id === id);
  }
} 