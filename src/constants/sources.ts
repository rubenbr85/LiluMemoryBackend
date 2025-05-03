import { CharacterSource } from '../models/character-source.interface';

export const SOURCE_POKEMON_ID = 1;
export const SOURCE_DISNEY_ID = 2;

export const SOURCES: CharacterSource[] = [
  {
    id: SOURCE_POKEMON_ID,
    orden: 1,
    nombre: 'Pokemon',
    imageMenu: '/images/sources/pokemon.svg'
  },
  {
    id: SOURCE_DISNEY_ID,
    orden: 2,
    nombre: 'Disney',
    imageMenu: '/images/sources/disney.svg'
  }
]; 