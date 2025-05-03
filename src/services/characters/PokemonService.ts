import axios from 'axios';
import { POKEMON_API_URL } from '../../constants/api';
import { PokemonCharacter } from '../../models/pokemon-character.model';

export class PokemonService {
  static async fetchPokemonCharacters(): Promise<PokemonCharacter[]> {
    try {
      const response = await axios.get(POKEMON_API_URL);
      const pokemonList = response.data.results;

      const pokemonDetails = await Promise.all(
        pokemonList.map(async (pokemon: { url: string }) => {
          const detailResponse = await axios.get(pokemon.url);
          return new PokemonCharacter(
            detailResponse.data.id,
            detailResponse.data.name,
            detailResponse.data.sprites.front_default,
            detailResponse.data.types.map((type: any) => type.type.name),
            detailResponse.data.abilities.map((ability: any) => ability.ability.name)
          );
        })
      );

      return pokemonDetails;
    } catch (error) {
      console.error('Error al obtener personajes de Pokémon:', error);
      return [];
    }
  }
} 