import { Character } from './character.interface';

export class RickAndMortyCharacter implements Character {
  constructor(
    public id: number,
    public name: string,
    public imageUrl: string,
    public status: string,
    public species: string,
    public type: string,
    public gender: string
  ) {}
} 