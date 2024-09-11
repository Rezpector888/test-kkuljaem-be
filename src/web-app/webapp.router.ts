import { Router } from "express";
import {
  catchPokemonController,
  findAllPokemonsController,
  findOnePokemonController,
  releasePokemonController,
  renamePokemonController,
} from "./controllers/pokemon.controller";

const WebAppRouter = Router();

// POKEMON
WebAppRouter.get("/pokemon", findAllPokemonsController);
WebAppRouter.get("/pokemon/:id", findOnePokemonController);
WebAppRouter.get("/pokemon/:id/catch", catchPokemonController);
WebAppRouter.get("/pokemon/:id/release", releasePokemonController);
WebAppRouter.get("/pokemon/:id/rename", renamePokemonController);

export default WebAppRouter;
