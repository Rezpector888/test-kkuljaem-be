import { Request, Response } from "express";
import { BadRequestException } from "@common/exceptions";
import { PokemonService } from "@webapp/services";
import { plainToClass } from "class-transformer";
import { FilterPokemonDto } from "@webapp/dtos/pokemon.dto";
import { validate } from "class-validator";

const pokemonService = new PokemonService();
export const findAllPokemonsController = async (req: Request, res: Response) => {
    try {
        const query = plainToClass(FilterPokemonDto, req.query);
        
        const validation = await validate(query);
        if(validation.length > 0) {
            return res.status(400).json(validation);
        }
        const pokemons = await pokemonService.findAllPokemons(query);
        return res.json(pokemons);
    } catch (err) {
        if(err instanceof BadRequestException) {
            throw new BadRequestException(err?.message);
        }
        res.status(500).json({ message: "Internal Server Error"});
    }
}

export const findOnePokemonController = async (req: Request, res: Response) => {
    try {
        const pokemonId = parseInt(req.params.id, 10);
        if (isNaN(pokemonId)) {
            return res.status(400).json({ message: "Invalid Pokemon ID. It should be a number." });
        }
        const pokemon = await pokemonService.findOnePokemon(pokemonId);
        return res.json(pokemon)
    } catch (err) {
        if(err instanceof BadRequestException) {
            return res.status(err.statusCode).json(err);
        }
        res.status(500).json({ message: "Internal Server Error"});
    }
}

export const catchPokemonController = async (req: Request, res: Response) => {
    try {
        const pokemonId = parseInt(req.params.id, 10);
        if (isNaN(pokemonId)) {
            return res.status(400).json({ message: "Invalid Pokemon ID. It should be a number." });
        }
        const pokemon = await pokemonService.catchPokemon(pokemonId);
        return res.json(pokemon);
    } catch (err) {
        if(err instanceof BadRequestException) {
            return res.status(err.statusCode).json(err)
        }
        res.status(500).json({ message: "Internal Server Error"});
    }
}

export const releasePokemonController = async (req: Request, res: Response) => {
    try {
        const pokemonId = parseInt(req.params.id, 10);
        if (isNaN(pokemonId)) {
            return res.status(400).json({ message: "Invalid Pokemon ID. It should be a number." });
        }
        const pokemon = await pokemonService.releasePokemon(pokemonId);
        return res.json(pokemon);
    } catch (err) {
        if(err instanceof BadRequestException) {
            return res.status(err.statusCode).json(err)
        }
        res.status(500).json({ message: "Internal Server Error"});
    }
}

export const renamePokemonController = async (req: Request, res: Response) => {
    try {
        const pokemonId = parseInt(req.params.id, 10);
        if (isNaN(pokemonId)) {
            return res.status(400).json({ message: "Invalid Pokemon ID. It should be a number." });
        }
        const pokemon = await pokemonService.renamePokemon(pokemonId);
        return res.json(pokemon);
    } catch (err) {
        if(err instanceof BadRequestException) {
            return res.status(err.statusCode).json(err)
        }
        res.status(500).json({ message: "Internal Server Error"});
    }
}