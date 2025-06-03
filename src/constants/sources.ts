import { CharacterSource } from '../models/character-source.interface';

export const SOURCE_POKEMON_ID = 1;
export const SOURCE_DISNEY_ID = 2;
export const SOURCE_PATRULLA_ID = 3;
export const SOURCE_ALPHABET_ID = 4;
export const SOURCE_NUMBERS_ID = 5;
export const SOURCE_RICK_AND_MORTY_ID = 6;

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
  },
  {
    id: SOURCE_PATRULLA_ID,
    orden: 3,
    nombre: 'Patrulla',
    imageMenu: '/images/sources/patrulla.svg'
  },
  {
    id: SOURCE_ALPHABET_ID,
    orden: 4,
    nombre: 'Alphabet',
    imageMenu: '/images/sources/alphabet.svg'
  },
  {
    id: SOURCE_NUMBERS_ID,
    nombre: 'Números',
    imageMenu: '/images/menu/numbers_menu.svg',
    orden: 5
  },
  {
    id: SOURCE_RICK_AND_MORTY_ID,
    nombre: 'Rick and Morty',
    imageMenu: '/images/sources/rickandmorty.svg',
    orden: 6
  }
];