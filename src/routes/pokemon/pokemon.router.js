import express from "express";
import { httpGetPokemon } from "./pokemon.controller.js";

const pokemonRouter = express.Router();

pokemonRouter.get('/:pokemonName', httpGetPokemon)

export {
    pokemonRouter,
}