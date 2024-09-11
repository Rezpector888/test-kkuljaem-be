import axios from "axios"
import { BASE_URL_API_POKEMON } from "../../common/utils/constans";
import { BadRequestException } from "@common/exceptions";
import { PokemonServiceCommon } from "@common/services";
import { FilterPokemonDto } from "@mobile/dtos/pokemon.dto";

const pokemonServiceCommon = new PokemonServiceCommon();

export class PokemonService {
    async findAllPokemons(filter: FilterPokemonDto){
        try {
            const { page, perPage} = filter;
            
            let url = BASE_URL_API_POKEMON + `pokemon?limit=${perPage ? perPage : 10}&offset=${page ? page - 1 : 0}` ;
            
            const pokemons = await axios.get(url)
            return pokemons.data;
        } catch (error: any) {
            throw new BadRequestException(error?.message);
        }
    }
    
    async findOnePokemon(pokemonId: number){
        try {
            const url = BASE_URL_API_POKEMON + "pokemon/" + pokemonId;
            const pokemon = await axios.get(url);
            return pokemon.data;
        } catch (error: any) {
            throw new BadRequestException("ERROR");
        }
    }

    async catchPokemon(pokemonId: number) {
        try {
            const url = BASE_URL_API_POKEMON + "pokemon/" + pokemonId;
            const pokemon = await axios.get(url);
            const rate = pokemonServiceCommon.catchPokemon();
            if(pokemon?.data) {
                return {
                    name: pokemon.data.name,
                    ...rate
                }
            }
            throw new BadRequestException("pokemon not found");
        } catch (error: any) {
            throw new BadRequestException(error?.message);
        }
    }

    async releasePokemon(pokemonId: number) {
        try {
            const url = BASE_URL_API_POKEMON + "pokemon/" + pokemonId;
            const pokemon = await axios.get(url);
            const prime = pokemonServiceCommon.releasePokemon();
            if(pokemon?.data) {
                return {
                    name: pokemon.data.name,
                    ...prime
                }
            }
            throw new BadRequestException("pokemon not found");

        } catch (error: any) {
            throw new BadRequestException(error?.message);
        }
    }

    async renamePokemon(pokemonId: number) {
        try {
            const url = BASE_URL_API_POKEMON + "pokemon/" + pokemonId;
            const pokemon = await axios.get(url);
            if(pokemon?.data) {
                const rename = pokemonServiceCommon.renamePokemon(pokemon.data.name);
                return {
                    name: pokemon.data.name,
                    rename
                }
            }
            throw new BadRequestException("pokemon not found");

        } catch (error: any) {
            throw new BadRequestException(error?.message);
        }
    }
}

