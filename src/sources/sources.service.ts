import { CharacterSource } from '../models/character-source.interface';
import { SOURCES } from '../constants/sources';

export class SourcesService {
  public static getSources(): CharacterSource[] {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    return SOURCES.map(source => ({
      ...source,
      imageMenu: `${baseUrl}${source.imageMenu}`
    }));
  }
} 