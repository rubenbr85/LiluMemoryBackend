import { Difficulty } from '../models/difficulty.interface';

export const SOURCE_POKEMON_ID = 1;
export const SOURCE_DISNEY_ID = 2;

export const DIFFICULTYS: Difficulty[] = [
  {
    id: 1,
    difficulty: 'Facil',
    numberCharacter: 4
  },
  {
    id: 2,
    difficulty: 'Medio',
    numberCharacter: 8
  },{
    id: 3,
    difficulty: 'Dificil',
    numberCharacter: 12
  }
]; 