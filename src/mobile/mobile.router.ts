import { Router } from "express";
import {
  catchPokemonController,
  findAllPokemonsController,
  findOnePokemonController,
  releasePokemonController,
  renamePokemonController,
} from "./controllers/pokemon.controller";

const MobileRouter = Router();

// POKEMON
MobileRouter.get("/pokemon", findAllPokemonsController);
MobileRouter.get("/pokemon/:id", findOnePokemonController);
MobileRouter.get("/pokemon/:id/catch", catchPokemonController);
MobileRouter.get("/pokemon/:id/release", releasePokemonController);
MobileRouter.get("/pokemon/:id/rename", renamePokemonController);

export default MobileRouter;
