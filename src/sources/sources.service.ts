import { CharacterSource } from '../models/character-source.interface';
import { SOURCES } from '../constants/sources';

export class SourcesService {
  public static getSources(): CharacterSource[] {
    return SOURCES;
  }
} 