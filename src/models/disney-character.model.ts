import { Character } from './character.interface';

export class DisneyCharacter implements Character {
  constructor(
    public id: number,
    public name: string,
    public imageUrl: string,
    public films: string[],
    public tvShows: string[]
  ) {}
} 